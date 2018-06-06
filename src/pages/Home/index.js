import React from 'react';
import HeaderContainer from '../../components/HeaderContainer';
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

const Home = () => {
  return (
    <div>
      <HeaderContainer text={homepageData.title} image={homepageData.headerImage} />
      <Menu menu={menuData.menu} menuColour={homepageData.menuColour} />
      { homepageData.cta.map(ctaMap) }
      { homepageData.quotes.map(quotesMap) }
      <div>
        <p className={homepageData.deck.colour}>
          {homepageData.deck.text}
        </p>
        <div
          className={homepageData.deck.colour}
          style={{
            backgroundImage: 'url(' + homepageData.deck.image + ')',
            height: '500px'
          }}
        />
      </div>
    </div>
  );
};

export default Home;
