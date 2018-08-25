import React from 'react';
import Async from 'react-promise';
import Footer from '../../components/templates/Footer';
import Header from '../../components/templates/Header';
import HeaderContainer from '../../components/HeaderContainer';
import CallToActions from '../../components/CallToActions';
import Quotes from '../../components/Quotes';
import { getData, getFullUrl, parseColour, getMenuColour } from '../../helpers';

import './style.css';

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
      const { quotes, deck, header } = data;
      let { cta } = data;
      
      cta = cta.map((item) => {
        item.image = getFullUrl(item.image);
        
        return item;
      });

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
        <Header
          colour={colour}
          colourHex={colourHex}
          title={header.title}
          image={getFullUrl(header.image)}
          Header={HeaderContainer}
        />
        <main>
          <CallToActions cta={cta} />
          <Quotes quotes={quotes} />
          <Description
            colour={deck.colour}
            text={deck.text}
            image={deck.image}
          />
        </main>
        <Footer />
      </React.Fragment>
    )}
  />
);

export default Home;
