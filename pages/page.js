import React from 'react';
import Async from 'react-promise';
import styled from 'styled-components';
import { withRouter } from 'next/router';
import { Router } from '../router';
import { url } from '../helpers/config';
import Header from '../templates/Header';
import HeaderContainer from '../components/HeaderContainer';
import Image from '../components/Image';
import { getData, getFullUrl, changeColourToHex } from '../helpers';

const ImageWrapper = styled.div`
  position: relative;
  height: 200px;
  background: ${props => props.color};
  overflow: hidden;
`;

const Deck = styled.div`
  position: relative;
  z-index: 1;
  padding: 35px;
  line-height: 30px;
  color: #fff;
`;

const PageSummary = styled.div`
  padding: 100px 20px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 30px;
  line-height: 36px;
  color: #fff;
  background-color: ${props => props.color};
`;

const ContentPiece = ({ direction, deck, image, colour }) => {
  if (image) {
    return (
      <ImageWrapper className={direction} color={colour}>
        <Image url={getFullUrl(image)} />
        <Deck>{deck}</Deck>
      </ImageWrapper>
    );
  }

  return (
    <ImageWrapper className={direction} color={colour}>
      <Deck>{deck}</Deck>
    </ImageWrapper>
  );
};

const Content = ({ content }) => {
  const { left, right } = content;

  if (right.deck && !left.deck) {
    return (
      <li>
        <ContentPiece direction='right' deck={right.deck} image={right.image} colour={right.colour} />
        <ContentPiece direction='left' deck={left.deck} image={left.image} colour={left.colour} />
      </li>
    );
  }

  return (
    <li>
      <ContentPiece direction='left' deck={left.deck} image={left.image} colour={left.colour} />
      <ContentPiece direction='right' deck={right.deck} image={right.image} colour={right.colour} />
    </li>
  );
};

const Contents = ({ contents }) => (
  <ul>
    { contents && contents.map(({content}) => (
      <Content content={content} key={content.left.deck + content.right.deck} />
    )) }
  </ul>
);

const Page = withRouter(({ router }) => {
  const { query } = router;
  const { id, childId } = query;

  const pathname = childId ? childId : id;

  return (
    <Async
      promise={new Promise(async (resolve, reject) => {
        let data;

        try {
          data = await getData(`data/pages/${pathname}.json`);

          if (data instanceof Error) {
            throw data;
          }
        } catch (e) {
          reject(e);
        }

        const { title, header = {}, subtitle = {}, deck, contents } = data;
        const { image, menuColour } = header;
        const colourHex = changeColourToHex(menuColour);
        const subtitleText = subtitle.subtitle;
        const subtitleImage = subtitle && subtitle.image && url + subtitle.image.slice(1);
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
          colourHex
        });
      })}

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
        colourHex
      }) => (
        <div>
          <Header
            colour={menuColour}
            colourHex={colourHex}
            title={title}
            image={image}
            Header={HeaderContainer}
          />
          {subtitleImage && (
            <ImageWrapper>
              <Image url={subtitleImage} />
            </ImageWrapper>
          )}
          <PageSummary color={colourHex}>{subtitleText}</PageSummary>
          <Contents contents={contents} />
        </div>
      )}

      catch={() => (
        <React.Fragment>
          { Router.replaceRoute('/404') }
        </React.Fragment>
      )}
    />
  );
});

export default Page;
