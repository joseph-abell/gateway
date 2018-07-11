import React from 'react';
import Async from 'react-promise';
import { Redirect } from 'react-router';
import { url } from '../../config';
import Header from '../../components/HeaderContainer';

const ContentPiece = ({ direction, deck, image, colour }) => (
  <div className={direction}>
    <div>{deck}</div>
    <div>{image}</div>
    <div>{colour}</div>
  </div>
);

const Content = ({ content }) => {
  const { left, right } = content;
  return (
    <li>
      <ContentPiece direction='left' deck={left.deck} image={left.image} colour={left.colour} />
      <ContentPiece direction='right' deck={right.deck} image={right.image} colour={right.colour} />
    </li>
  );
};

const Contents = ({ contents }) => (
  <ul>
    { contents.map(({content}) => (
      <Content content={content} />
    )) }
  </ul>
);

const PageTemplate = ({ location }) => {
  const { pathname } = location;
  return (
    <Async
      promise={new Promise(async (resolve, reject) => {
        const fullUrl = `${url}data/pages${pathname}.json`;
        const response = await fetch(fullUrl);

        if (response.ok) {
          const { title, header, subtitle, deck, contents } = await response.json();
          const { image, menuColour } = header;
          const subtitleText = subtitle.subtitle;
          const subtitleImage = url + subtitle.image.slice(1);
          const deckTitle = deck.title;
          const deckParagraph = deck.paragraph;
          const deckColour = deck.colour;

          resolve({
            title,
            image: url + image.slice(1),
            subtitleImage,
            subtitleText,
            deckTitle,
            deckParagraph,
            deckColour,
            contents
          });
        } else {
          reject();
        }
      })}

      then={({
        title,
        image,
        subtitleImage,
        subtitleText,
        deckTitle,
        deckParagraph,
        deckColour,
        contents
      }) => (
        <div>
          <Header
            text={title}
            image={image}
          />
          <img src={subtitleImage} alt='' />
          <div>{subtitleText}</div>
          {deckTitle}
          <Contents contents={contents} />
        </div>
      )}

      catch={() => (
        <Redirect to='/404' />
      )}
    />
  );
};

export default PageTemplate;
