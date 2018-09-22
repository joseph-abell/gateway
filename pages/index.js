import React from 'react';
import Async from 'react-promise';
import styled from 'styled-components';
import Footer from '../templates/Footer';
import Header from '../templates/Header';
import HeaderContainer from '../components/HeaderContainer';
import Image from '../components/Image';
import CallToActions from '../components/CallToActions';
import Quotes from '../components/Quotes';
import Deck from '../components/HomeDeck';
import SimpleEvents from '../components/SimpleEvents';

import { getData, getFullUrl, changeColourToHex, getMenuColour } from '../helpers';

const Padding = styled.div`
  padding: 20px;
`;

const ImageWrapper = styled.div`
  position: relative;
  height: 200px;

  @media screen and (min-width: 768px) {
    height: 400px;
  }
`;

const Home = () => (
  <Async
    promise={new Promise(async (resolve) => {
      const data = await getData('data/homepage.json');
      const colour = getMenuColour(data);
      const colourHex = changeColourToHex(colour);
      const colourHexLight = changeColourToHex(colour, true);
      const { quotes, deck, header, eventsImage } = data;
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
        colourHexLight,
        cta,
        quotes,
        deck,
        eventsImage: getFullUrl(eventsImage)
      });
    })}

    then={({header, colour, colourHex, colourHexLight, cta, quotes, deck, eventsImage}) => {
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
            <Padding>
              <Quotes quotes={quotes} />
              <Deck
                colour={deck.colour}
                text={deck.text}
                image={deck.image}
              />
              <ImageWrapper>
                <Image url={eventsImage} />
              </ImageWrapper>
              <SimpleEvents
                colour={colourHex}
                colourLight={colourHexLight}
              />
            </Padding>
          </main>
          <Footer />
        </React.Fragment>
      );
    }}
  />
);

export default Home;
