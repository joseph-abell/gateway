import React from 'react';
import Async from 'react-promise';
import styled from 'styled-components';
import { Redirect } from 'react-router';
import { url } from '../../../helpers/config';
import Header from '../../../components/templates/Header';
import HeaderContainer from '../../../components/HeaderContainer';
import Image from '../../../components/Image';
import { getData, getFullUrl, changeColourToHex } from '../../../helpers';

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
<<<<<<< HEAD
    { contents && contents.map(({content}) => (
      <Content content={content} />
=======
    { contents.map(({content}) => (
      <Content key={content.left.deck + content.right.deck} content={content} />
>>>>>>> 08bb98d986cffe1e5962d8b43ac96e12b598eba8
    )) }
  </ul>
);

const Page = ({ location }) => {
  const { pathname } = location;
  return (
    <Async
      promise={new Promise(async (resolve, reject) => {
        let data;

        try {
          data = await getData(`data/pages${pathname}.json`);

          if (data instanceof Error) {
            throw data;
          }
        } catch (e) {
          reject(e);
        }

        const { title, header = {}, subtitle = {}, deck, contents } = data;
        const { image, menuColour } = header;
        const colourHex = changeColourToHex(menuColour);
<<<<<<< HEAD
        const subtitleText = subtitle.subtitle;
        const subtitleImage = subtitle && subtitle.image && url + subtitle.image.slice(1);
        const deckTitle = deck.title;
        const deckParagraph = deck.paragraph;
        const deckColour = deck.colour;
=======
        const subtitleText = subtitle && subtitle.subtitle;
        const subtitleImage = subtitle && subtitle.image && getFullUrl(subtitle.image);
        const deckTitle = deck && deck.title;
        const deckParagraph = deck && deck.paragraph;
        const deckColour = deck && deck.colour;
>>>>>>> 08bb98d986cffe1e5962d8b43ac96e12b598eba8

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
        <Redirect to='/404' />
      )}
    />
  );
};

export default Page;
