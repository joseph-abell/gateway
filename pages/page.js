import React from 'react';
import Async from 'react-promise';
import styled from 'styled-components';
import {withRouter} from 'next/router';
import Head from 'next/head';
import {markdown} from 'markdown';
import {Router} from '../router';
import {url} from '../helpers/config';
import Header from '../templates/Header';
import Footer from '../templates/Footer';
import HeaderContainer from '../components/HeaderContainer';
import Image from '../components/Image';
import ImageWrapper from '../components/ImageWrapper';
import Container from '../components/Container';
import Clearfix from '../components/Clearfix';
import {getData, getFullUrl, changeColourToHex} from '../helpers';

const Deck = styled.div`
  position: relative;
  z-index: 1;
  padding: 35px;
  line-height: 30px;
  color: #fff;
`;

const PageSummary = styled.div`
  position: absolute;
  z-index: 1;
  text-align: center;
  font-size: 30px;
  line-height: 36px;
  color: #fff;
  height: 200px;
  width: 100%;
  padding: 40px 0;
  text-align: center;

  @media screen and (min-width: 991px) {
    height: 500px;
    padding: 175px 0 0;
  }

  @media screen and (min-width: 1021px) {
    font-size: 90px;
    line-height: 1.5em;
  }
`;

const PageDeck = styled.div`
  padding: 40px;
  background-color: ${props => props.colour};
  color: white;
  margin-bottom: 20px;
`;

const H2 = styled.h2`
  font-size: 30px;
  line-height: 36px;
  margin-bottom: 20px;

  @media screen and (min-width: 991px) {
    width: 850px;
    margin: 0 auto 20px;
    text-align: center;
  }
`;

const P = styled.p`
  @media screen and (min-width: 991px) {
    font-size: 24px;
    line-height: 30px;
    width: 850px;
    margin: 0 auto;
    text-align: center;
  }
`;

const HeaderDeck = styled.h3`
  position: absolute;
  z-index: 1;
  text-align: center;
  color: white;
  line-height: 200px;
  height: 200px;
  text-align: center;
  font-size: 50px;
  display: block;
  width: 100%;

  @media screen and (min-width: 991px) {
    height: 500px;
    line-height: 500px;
  }
`;

const ContentPieceContainer = styled.div`
  float: ${props => props.direction};
  background-color: ${props => props.colour};
  width: ${props => (props.width ? '100%' : 0)};
  min-height: 200px;

  @media screen and (min-width: 991px) {
    width: calc(${props => props.width}% - 10px);
    border-right: ${props =>
      props.direction === 'left' && props.width ? '10px solid #fff' : 0};
    border-left: ${props =>
      props.direction === 'right' && props.width ? '10px solid #fff' : 0};
    border-bottom: ${props => (props.width ? '20px solid white' : 0)};
    height: 500px;
  }

  h2 {
    font-size: 2em;
    line-height: 3em;
  }

  p {
    margin-bottom: 1em;
  }
`;

const ContentPiece = ({direction, deck, image, colour, width}) => {
  let adjustedDirection = direction;

  if (image) {
    return (
      <ContentPieceContainer
        direction={adjustedDirection}
        colour={colour}
        width={width}
      >
        <ImageWrapper color={colour} mobileMarginBottom="0">
          <Image url={getFullUrl(image)} />
          {deck && <HeaderDeck>{deck}</HeaderDeck>}
        </ImageWrapper>
      </ContentPieceContainer>
    );
  }

  return (
    <>
      {typeof deck === 'undefined' && <div />}
      {deck && (
        <ContentPieceContainer
          direction={adjustedDirection}
          colour={colour}
          width={width}
        >
          <Deck dangerouslySetInnerHTML={{__html: markdown.toHTML(deck)}} />
        </ContentPieceContainer>
      )}
    </>
  );
};

const ContentContainer = styled.li`
  display: block;
  width: 100%;
`;

const setWidth = (left, right) => {
  let leftWidth = 0;
  let rightWidth = 0;

  if (left.deck && right.deck) {
    leftWidth = 50;
    rightWidth = 50;
  } else if (left.image && right.image) {
    leftWidth = 50;
    rightWidth = 50;
  } else if (left.image && right.deck) {
    leftWidth = 60;
    rightWidth = 40;
  } else if (left.deck && right.image) {
    leftWidth = 40;
    rightWidth = 60;
  } else if (!left.deck && !left.image && (right.image || right.deck)) {
    leftWidth = 0;
    rightWidth = 100;
  } else if (!right.deck && !right.image && (left.image || left.deck)) {
    leftWidth = 100;
    rightWidth = 0;
  }

  return [leftWidth, rightWidth];
};
const Content = ({content}) => {
  const {left, right} = content;
  const [leftWidth, rightWidth] = setWidth(left, right);

  if (right.deck && right.image) {
    return (
      <ContentContainer>
        <ContentPiece
          direction="right"
          deck={right.deck}
          image={right.image}
          colour={changeColourToHex(right.colour)}
          width={rightWidth}
        />
        <ContentPiece
          direction="left"
          deck={left.deck}
          image={left.image}
          colour={changeColourToHex(left.colour)}
          width={leftWidth}
        />
        <Clearfix />
      </ContentContainer>
    );
  }

  return (
    <ContentContainer>
      <ContentPiece
        direction="left"
        deck={left.deck}
        image={left.image}
        colour={changeColourToHex(left.colour)}
        width={leftWidth}
      />
      <ContentPiece
        direction="right"
        deck={right.deck}
        image={right.image}
        colour={changeColourToHex(right.colour)}
        width={rightWidth}
      />
      <Clearfix />
    </ContentContainer>
  );
};

const Contents = ({contents}) => (
  <ul>
    {contents &&
      contents.map(({content}) => (
        <Content
          content={content}
          key={content.left.deck + content.right.deck}
        />
      ))}
  </ul>
);

const Page = withRouter(({router}) => {
  const {query} = router;
  const {id, childId} = query;

  const pathname = childId ? childId : id;

  return (
    <Async
      promise={
        new Promise(async (resolve, reject) => {
          let data;

          try {
            data = await getData(`data/pages/${pathname}.json`);

            if (data instanceof Error) {
              throw data;
            }
          } catch (e) {
            reject(e);
          }

          const {title, header = {}, subtitle = {}, deck, contents} = data;
          const {image, menuColour} = header;
          const colourHex = changeColourToHex(menuColour);
          const colourHexLight = changeColourToHex(menuColour, true);
          const subtitleText = subtitle.subtitle;
          const subtitleImage =
            subtitle && subtitle.image && url + subtitle.image.slice(1);
          const deckTitle = deck && deck.title;
          const deckParagraph = deck && deck.paragraph;
          const deckColour = deck && deck.colour;

          resolve({
            title,
            image: image && url + image.slice(1),
            subtitleImage,
            subtitleText,
            deckTitle,
            deckParagraph,
            deckColour,
            contents,
            menuColour,
            colourHex,
            colourHexLight
          });
        })
      }
      then={({
        title,
        image,
        subtitleImage,
        subtitleText,
        deckTitle,
        deckParagraph,
        deckColour,
        contents,
        menuColour,
        colourHex,
        colourHexLight
      }) => (
        <div>
          <Head>
            <title key="title">{title} - Gateway Church, York</title>
          </Head>
          <Header
            colour={menuColour}
            colourHex={colourHex}
            colourHexLight={colourHexLight}
            title={title}
            image={image}
            Header={HeaderContainer}
          />
          <Container>
            {subtitleImage && (
              <ImageWrapper>
                <Image url={subtitleImage} />
                <Container>
                  <PageSummary color={colourHex}>{subtitleText}</PageSummary>
                </Container>
              </ImageWrapper>
            )}
          </Container>

          <PageDeck colour={colourHex}>
            <Container>
              {deckTitle && <H2>{deckTitle}</H2>}
              {deckParagraph && <P>{deckParagraph}</P>}
            </Container>
          </PageDeck>

          <Container>
            <Contents contents={contents} />
          </Container>

          <Footer />
        </div>
      )}
      catch={() => (
        <React.Fragment>{Router.replaceRoute('/404')}</React.Fragment>
      )}
    />
  );
});

export default Page;
