import React from 'react';
import Async from 'react-promise';
import styled from 'styled-components';
import Head from 'next/head';

import Footer from '../templates/Footer';
import Header from '../templates/Header';
import HeaderContainer from '../components/HeaderContainer';
import Image from '../components/Image';
import ImageWrapper from '../components/ImageWrapper';
import CallToActions from '../components/CallToActions';
import Quotes from '../components/Quotes';
import HomeDeck from '../components/HomeDeck';
import SimpleEvents from '../components/SimpleEvents';

import {
  getData,
  getFullUrl,
  changeColourToHex,
  getMenuColour
} from '../helpers';

const Padding = styled.div`
  padding: 20px;
`;

const TwitterWrapper = styled.div`
  background-color: ${props => props.colour};
  padding: 20px;
  height: 400px;
  margin-bottom: ${props => props.mobileMarginBottom || '20px'};
`;

const Home = () => (
  <Async
    promise={
      new Promise(async resolve => {
        const data = await getData('data/homepage.json');
        const colour = getMenuColour(data);
        const colourHex = changeColourToHex(colour);
        const colourHexLight = changeColourToHex(colour, true);
        const { quotes, deck, header, eventsImage, twitterImage } = data;
        let { cta } = data;

        header.image = getFullUrl(header.image);

        cta = cta.map(item => {
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
          eventsImage: getFullUrl(eventsImage),
          twitterImage: getFullUrl(twitterImage)
        });
      })
    }
    then={({
      header,
      colour,
      colourHex,
      colourHexLight,
      cta,
      quotes,
      deck,
      eventsImage,
      twitterImage
    }) => {
      const { title, image } = header;
      const { TwitterTimelineEmbed } = require('react-twitter-embed');

      return (
        <React.Fragment>
          <Head>
            <title key="title">Gateway Church, York</title>
          </Head>
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
              <HomeDeck
                colour={deck.colour}
                text={deck.text}
                image={deck.image}
              />
              <ImageWrapper mobileHeight="400px" mobileMarginBottom="0">
                <Image url={eventsImage} />
              </ImageWrapper>
              <SimpleEvents colour={colourHex} colourLight={colourHexLight} />
              <TwitterWrapper colour={colourHex}>
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="gatewayyork"
                  options={{
                    height: 400
                  }}
                />
              </TwitterWrapper>
              <ImageWrapper mobileHeight="400px">
                <Image url={twitterImage} />
              </ImageWrapper>
            </Padding>
          </main>
          <Footer />
        </React.Fragment>
      );
    }}
  />
);

export default Home;
