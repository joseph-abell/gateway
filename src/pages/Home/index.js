import React from 'react';
import Header from '../../components/HeaderContainer';
import Footer from '../../components/FooterContainer';
import Menu from '../../components/Menu';
import homepageData from '../../data/homepage.json';
import menuData from '../../data/menu.json';

import './style.css';

const {
  deck = {},
  title,
  headerImage,
  menuColour,
  cta,
  quotes
} = homepageData;
const { colour, text } = deck;
const deckImage = deck.image;

const CtaMap = ({ link, title, deck, image }, index) => (
  <li key={index}>
    <a href={link}>
      <h2>{title}</h2>
      <p>{deck}</p>
      <img src={image} alt='' />
    </a>
  </li>
);

const QuotesMap = ({quote, author}, index) => (
  <div key={index}>
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

const Home = () => (
  <div>
    <Header text={title} image={headerImage} />
    <Menu menu={menuData.menu} menuColour={menuColour} />
    <ul className='call-to-actions'>
      { cta.map(CtaMap) }
    </ul>
    { quotes.map(QuotesMap) }
    <Description
      colour={colour}
      text={text}
      image={deckImage}
    />
    <Footer />
  </div>
);

export default Home;
