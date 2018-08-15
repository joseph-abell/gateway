import React from 'react';
import Async from 'react-promise';
import Footer from '../../components/FooterContainer';
import HeaderTemplate from '../../components/templates/Header';
import Header from '../../components/HeaderContainer';
import { getData, getFullUrl, parseColour, getMenuColour } from '../../helpers';

import './style.css';

const CtaMap = ({ link, title, deck, image }, index) => (
  <li key={index}>
    <a href={link}>
      <h2>{title}</h2>
      <p>{deck}</p>
      <img src={ getFullUrl(image) } alt='' />
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
        backgroundImage: 'url(' + getFullUrl(image) +  ')',
        height: '500px'
      }}
    />
  </div>
);

const Home = () => (
  <Async
    promise={new Promise(async (resolve) => {
      const data = await getData('data/homepage.json');
      const colour = getMenuColour(data);
      const colourHex = parseColour(colour);
      const { cta, quotes, deck, header } = data;

      resolve({
        header,
        colour,
        colourHex,
        cta,
        quotes,
        deck
      });
    })}

    then={({header, colour, colourHex, cta, quotes, deck}) => (
      <React.Fragment>
        <HeaderTemplate
          colour={colour}
          colourHex={colourHex}
          title={header.title}
          image={getFullUrl(header.image)}
          Header={Header}
          title={header.title}
          image={header.image}
        />
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
      </React.Fragment>
    )}
  />
);

export default Home;
