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

/* 
  <div>
    <blockquote>
      <p>I Love Gateway!</p>
    </blockquote>
    <p>Janet</p>
  </div>
*/

const Home = () => {
  return (
    <div>
      <HeaderContainer text={homepageData.title} image={homepageData.headerImage} />
      <Menu menu={menuData.menu} menuColour={homepageData.menuColour} />
      { homepageData.cta.map(ctaMap) }
      { homepageData.quotes.map(quotesMap) }
    </div>
  );
};

export default Home;
