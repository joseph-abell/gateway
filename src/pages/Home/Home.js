import React from 'react';
import Async from 'react-promise';
import Footer from '../../components/templates/Footer';
import Header from '../../components/templates/Header';
import HeaderContainer from '../../components/HeaderContainer';
import CallToActions from '../../components/CallToActions';
import Quotes from '../../components/Quotes';
import Deck from './Deck';
import { getData, getFullUrl, changeColourToHex, getMenuColour } from '../../helpers';

import './style.css';

const Home = () => (
  <Async
    promise={new Promise(async (resolve) => {
      const data = await getData('data/homepage.json');
      const colour = getMenuColour(data);
      const colourHex = changeColourToHex(colour);
      const { quotes, deck, header } = data;
      let { cta } = data;
      
      header.image = getFullUrl(header.image);
      
      cta = cta.map((item) => {
        item.image = getFullUrl(item.image);
        item.colour = changeColourToHex(item.colour);
        
        return item;
      });
      
      deck.image = getFullUrl(deck.image);
      deck.colour = changeColourToHex(deck.colour);

      resolve({
        header,
        colour,
        colourHex,
        cta,
        quotes,
        deck
      });
    })}

    then={({header, colour, colourHex, cta, quotes, deck}) => {
      const { title, image } = header;
      
      return (
        <React.Fragment>
          <Header
            colour={colour}
            colourHex={colourHex}
            title={title}
            image={image}
            Header={HeaderContainer}
          />
          <main>
            <CallToActions cta={cta} />
            <Quotes quotes={quotes} />
            <Deck
              colour={deck.colour}
              text={deck.text}
              image={deck.image}
            />
          </main>
          <Footer />
        </React.Fragment>
      );
    }}
  />
);

export default Home;
