import React from 'react';
import Header from '../../components/HeaderContainer';
import Menu from '../../components/Menu';
import homepageData from '../../data/homepage.json';
import menuData from '../../data/menu.json';

import './style.css';

const ctaMap = ({ link, title, deck, image }) => (
  <a href={link}>
    <h2>{title}</h2>
    <p>{deck}</p>
    <img src={image} alt='' />
  </a>
);

const quotesMap = ({quote, author}) => (
  <div>
    <blockquote>
      <p>{quote}</p>
    </blockquote>
    <p>{author}</p>
  </div>
);

const Description = ({colour, text, image}) => (
  <div>
    <p className={colour}>
      {text}
    </p>
    <div
      className={colour}
      style={{
        backgroundImage: 'url(' + image + ')',
        height: '500px'
      }}
    />
  </div>
);

const Home = () => {
  const {
    deck,
    title,
    headerImage,
    menuColour,
    cta,
    quotes
  } = homepageData;
  const {colour, text, image} = deck;

  return (
    <div>
      <Header text={title} image={headerImage} />
      <Menu menu={menuData.menu} menuColour={menuColour} />
      { cta.map(ctaMap) }
      { quotes.map(quotesMap) }
      <Description
        colour={colour}
        text={text}
        image={image}
      />
    </div>
  );
};

export default Home;
