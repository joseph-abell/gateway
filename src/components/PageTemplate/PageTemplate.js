import React from 'react';
import Async from 'react-promise';
import { url } from '../../config';
import Header from '../../components/HeaderContainer';

const Content = ({ content }) => (
  <li>
    <div className='left'>
      <div>{content.left.deck}</div>
      <div>{content.left.image}</div>
      <div>{content.left.colour}</div>
    </div>
    <div className='right'>
      <div>{content.right.deck}</div>
      <div>{content.right.image}</div>
      <div>{content.right.colour}</div>
    </div>
  </li>
);

const Contents = ({ contents }) => (
  <ul>
    { contents.map(({content}) => (
      <Content content={content} />
    )) }
  </ul>
);

const PageTemplate = () => (
  <Async
    promise={new Promise(async (resolve) => {
      const whoWeAreResponse = await fetch(url + 'data/pages/who-we-are.json');
      const { title, header, subtitle, deck, contents } = await whoWeAreResponse.json();
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
        {deckTitle}
        <Contents contents={contents} />
      </div>
    )}
  />
);

export default PageTemplate;
