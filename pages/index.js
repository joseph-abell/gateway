import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import Footer from '../templates/Footer';
import Header from '../templates/Header';
import Container from '../components/Container';
import HeaderContainer from '../components/HeaderContainer';
import Image from '../components/Image';
import ImageWrapper from '../components/ImageWrapper';
import CallToActions from '../components/CallToActions';
import Quotes from '../components/Quotes';
import HomeDeck from '../components/HomeDeck';
import SimpleEvents from '../components/SimpleEvents';
import Clearfix from '../components/Clearfix';
import {
  getData,
  getFullUrl,
  changeColourToHex,
  getMenuColour,
  getAllColours
} from '../helpers';

const Padding = styled.div`
  padding: 20px;
`;

const StyledImageWrapper = styled(ImageWrapper)`
  @media screen and (min-width: 991px) {
    width: calc(60% - 20px);
    float: left;
    margin-right: 20px;
  }
`;

const twitter = () => ({__html: 'twitter'});

const TwitterWrapper = styled.div`
  background-color: ${props => props.colour};
  color: white;
  padding: 20px;
  height: 400px;
  margin-bottom: ${props => props.mobileMarginBottom || '20px'};

  @media screen and (min-width: 991px) {
    width: calc(40% - 20px);
    margin-right: 20px;
    float: left;
    height: 460px;
  }

  a {
    color: white;
  }
`;

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [deckImage, setDeckImage] = useState('');
  const [deckColour, setDeckColour] = useState('');
  const [deckText, setDeckText] = useState('');
  const [colour, setColour] = useState('');
  const [colourHex, setColourHex] = useState('');
  const [colourHexLight, setColourHexLight] = useState('');
  const [cta, setCta] = useState([]);
  const [eventsImage, setEventsImage] = useState('');
  const [twitterImage, setTwitterImage] = useState('');
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    getData('data/homepage.json').then(data => {
      setTitle(data.header.title);
      setImage(data.header.image);
      setDeckImage(getFullUrl(data.deck.image));
      setDeckColour(changeColourToHex(data.deck.colour));
      setDeckText(data.deck.text);
      const [colour, colourHex, colourHexLight] = getAllColours(
        getMenuColour(data)
      );
      setColour(colour);
      setColourHex(colourHex);
      setColourHexLight(colourHexLight);
      setEventsImage(getFullUrl(data.eventsImage));
      setTwitterImage(getFullUrl(data.twitterImage));
      setQuotes(data.quotes);

      setCta(
        data.cta.map(item => {
          item.image = getFullUrl(item.image);
          item.colour = changeColourToHex(item.colour);

          return item;
        })
      );
      setLoading(false);
    });
  }, []);

  if (loading) return <div />;

  const {TwitterTimelineEmbed} = require('react-twitter-embed');

  return (
    <React.Fragment>
      <Head>
        <title key="title">Gateway Church, York</title>
      </Head>
      <Header
        colour={colour}
        colourHex={colourHex}
        colourHexLight={colourHexLight}
        title={title}
        image={image}
        Header={HeaderContainer}
      />
      <main>
        <CallToActions cta={cta} />
        <Padding>
          <Quotes quotes={quotes} />
          <HomeDeck colour={deckColour} text={deckText} image={deckImage} />
          <Container>
            <StyledImageWrapper mobileHeight="400px" mobileMarginBottom="0">
              <Image url={eventsImage} />
            </StyledImageWrapper>
            <SimpleEvents colour={colourHex} colourLight={colourHexLight} />
            <Clearfix />
          </Container>
          <Container>
            <TwitterWrapper colour={colourHex}>
              <a
                className="twitter-timeline"
                data-height="400"
                href="https://twitter.com/gatewayyork?ref_src=twsrc%5Etfw"
              >
                Tweets by gatewayyork
              </a>

              <script
                dangerouslySetInnerHTML={twitter()}
                async
                src="https://platform.twitter.com/widgets.js"
                charSet="utf-8"
              />
            </TwitterWrapper>
            <ImageWrapper mobileHeight="400px">
              <Image url={twitterImage} />
            </ImageWrapper>
          </Container>
        </Padding>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
