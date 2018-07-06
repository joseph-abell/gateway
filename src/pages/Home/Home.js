import React from 'react';
import Async from 'react-promise';
import Header from '../../components/HeaderContainer';
import Footer from '../../components/FooterContainer';
import Menu from '../../components/Menu';
import { url } from '../../config.js';

import './style.css';

const CtaMap = ({ link, title, deck, image }, index) => (
  <li key={index}>
    <a href={link}>
      <h2>{title}</h2>
      <p>{deck}</p>
      <img src={url + image} alt='' />
    </a>
  </li>
);

const QuoteMap = ({quote, author}, index) => (
  <li key={index}>
    <blockquote>
      <p>{quote}</p>
    </blockquote>
    <p>{author}</p>
  </li>
);

const Description = ({colour, text, image}) => (
  <div>
    <p className={colour}>
      {text}
    </p>
    <div
      className={colour}
      style={{
        backgroundImage: 'url(' + url + image + ')',
        height: '500px'
      }}
    />
  </div>
);

const Home = () => (
  <Async
    promise={new Promise(async (resolve) => {
      const homepageResponse = await fetch(url + 'data/homepage.json');
      const homepageData = await homepageResponse.json();

      const iconResponse = await fetch(url + 'data/logos/' + homepageData.header.menuColour + '.json');
      const iconData = await iconResponse.json();
      const iconUrl = url + iconData.image.slice(1);

      const menuResponse = await fetch(url + 'data/menu.json');
      const menuData = await menuResponse.json();

      resolve({
        header: homepageData.header,
        menu: {
          menuItems: menuData.menu,
          iconUrl
        },
        cta: homepageData.cta,
        quotes: homepageData.quotes,
        deck: homepageData.deck
      });
    })}

    then={({header, menu, cta, quotes, deck}) => (
      <div>
        <Header text={header.title} image={url + header.image} />
        <Menu
          menuItems={menu.menuItems}
          menuColour={header.menuColour}
          iconUrl={menu.iconUrl}
        />
        <ul className='call-to-actions'>
          { cta.map(CtaMap) }
        </ul>
        <ul className='quotes'>
          { quotes.map(QuoteMap) }
        </ul>
        <Description
          colour={deck.colour}
          text={deck.text}
          image={deck.image}
        />
        <Footer />
      </div>
    )}
  />
);

export default Home;
