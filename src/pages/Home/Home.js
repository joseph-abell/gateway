import React from 'react';
import Async from 'react-promise';
import Header from '../../components/HeaderContainer';
import Footer from '../../components/FooterContainer';
import MobileMenu from '../../components/MobileMenu';
import Menu from '../../components/Menu';
import { url } from '../../config';
import { getData } from '../../helpers';

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
      const data = await getData(url, 'data/homepage.json');

      let colour = '';

      if (data.pageData.header.menuColour === 'red') {
        colour = '#f05a64';
      }

      resolve({
        header: data.pageData.header,
        menuColour: colour,
        menu: {
          menuItems: data.menuData.menu,
          iconUrl: data.iconUrl
        },
        cta: data.pageData.cta,
        quotes: data.pageData.quotes,
        deck: data.pageData.deck
      });
    })}

    then={({header, menuColour, menu, cta, quotes, deck}) => (
      <div>
        <MobileMenu
          menuItems={menu.menuItems}
          menuColour={menuColour}
          iconUrl={menu.iconUrl}
        />
        <Header
          text={header.title}
          image={url + header.image}
          colour={menuColour}
        />
        <Menu
          menuItems={menu.menuItems}
          menuColour={menuColour}
          iconUrl={menu.iconUrl}
        />
        <div className="clearfix" />
        <ul className="call-to-actions">
          { cta.map(CtaMap) }
        </ul>
        <ul className="quotes">
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
