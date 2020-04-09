import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
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
import {
  getData,
  getMenuColour,
  getFullUrl,
  changeColourToHex,
  getAllColours
} from '../helpers';

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

  a {
    color: #fff;
    text-decoration: underline;
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

  if (typeof deck === 'undefined') return <div />;

  return (
    <>
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

const setWidth = (left = {}, right = {}) => {
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
  const {left = {}, right = {}} = content;
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

const Contents = ({contents = []}) => (
  <ul>
    {contents.map(({content}) => {
      if (!content) return null;
      const left = content.left || {};
      const leftDeck = left.deck || '';
      const right = content.right || {};
      const rightDeck = right.deck || '';

      return (
        content && <Content content={content} key={leftDeck + rightDeck} />
      );
    })}
  </ul>
);

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [colour, setColour] = useState('');
  const [colourHex, setColourHex] = useState('');
  const [colourHexLight, setColourHexLight] = useState('');
  const [subtitleImage, setSubtitleImage] = useState('');
  const [subtitleText, setSubtitleText] = useState('');
  const [deckTitle, setDeckTitle] = useState('');
  const [deckParagraph, setDeckParagraph] = useState('');
  const [iframe, setIframe] = useState('');
  const [contents, setContents] = useState([]);
  const router = useRouter();

  const {asPath} = router;

  useEffect(() => {
    getData(
      `data/pages${asPath
        .split(' ')
        .join('-')
        .split('%20')
        .join('-')
        .toLowerCase()}.json`
    )
      .then(data => {
        setTitle(data.title);
        setImage(data.header.image);
        const [colour, colourHex, colourHexLight] = getAllColours(
          getMenuColour(data)
        );
        setColour(colour);
        setColourHex(colourHex);
        setColourHexLight(colourHexLight);
        setSubtitleText(data.subtitle.subtitle);
        setSubtitleImage(
          data.subtitle &&
            data.subtitle.image &&
            url + data.subtitle.image.slice(1)
        );
        setDeckTitle(data.deck && data.deck.title);
        setDeckParagraph(data.deck && data.deck.paragraph);
        setContents(data.contents);
        setIframe(data.iframe || '');

        setLoading(false);
      })
      .catch(e => {
        console.log(e);
        setError(true);
        setLoading(false);
      });
  }, []);
  if (loading) return <div />;

  if (error)
    return <React.Fragment>{Router.replaceRoute('/404')}</React.Fragment>;

  return (
    <div>
      <Head>
        <title key="title">{title} - Gateway Church, York</title>
      </Head>
      <Header
        colour={colour}
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
        {iframe && iframe.length > 0 && (
          <div dangerouslySetInnerHTML={iframe} />
        )}
      </Container>

      <Footer />
    </div>
  );
};

export default Page;
