import React from 'react';
import Async from 'react-promise';
import styled from 'styled-components';
import moment from 'moment';
import { withRouter } from 'next/router';
import Head from 'next/head';

import { Link } from '../router';

import Header from '../templates/Header';
import Footer from '../templates/Footer';
import HeaderContainer from '../components/HeaderContainer';
import Image from '../components/Image';

import { getMenuColour, changeColourToHex, getFullUrl, getData } from '../helpers';

const Subtitle = styled.div`
  height: 200px;
  position: relative;
  background-color: ${props => props.colour};
  color: white;
  text-decoration: none;
`;

const Title = styled.div`
  font-size: 30px;
  line-height: 1.5em;
  color: #fff;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
`;

const Content = styled.div`
  padding: 20px;
  background-color: ${props => props.colour};
  color: white;
  line-height: 1.3em;
  margin-bottom: 60px;
`;

const StyledLink = styled.a`
  color: ${props => props.colour};
  display: inline-block;
  border: 3px solid ${props => props.colour};
  padding: 10px;
  bordre-radius: 5px;
  margin-top: 10px;
`;

const Event = withRouter((props) => (
  <Async
    promise={new Promise(async (resolve) => {
      const data = await getData('data/events/new-event.json');
      const colour = getMenuColour(data);
      const colourHex = changeColourToHex(colour);
      const colourHexLight = changeColourToHex(colour, true);
      const { title, image, date, time, deck } = data;

      resolve({
        title,
        image,
        date,
        time,
        deck,
        colour,
        colourHex,
        colourHexLight
      });
    })}

    then={({title, image, date, time, deck, colour, colourHex, colourHexLight}) => (
      <React.Fragment>
        <Head>
          <title key='title'>{title} - Gateway Church, York</title>
        </Head>
        <Header
          colour={colour}
          colourHex={colourHex}
          Header={HeaderContainer}
        />
        <main>
          <Subtitle colour={colourHex}>
            <Image url={getFullUrl(image)} />
            <Title>{title}</Title>
          </Subtitle>
          <Content colour={colourHexLight}>
            <div>{moment(date).format('dddd DD MMM YYYY')}</div>
            <div>{moment(time).format('HH:mm')}</div>
          </Content>
          <Content colour={colourHex}>
            <p>{deck}</p>
            <Link href='/events'>
              <StyledLink colour={colourHexLight}>View a list of all events</StyledLink>
            </Link>
          </Content>
        </main>
        <Footer />
      </React.Fragment>
    )}
  />
));

export default Event;
