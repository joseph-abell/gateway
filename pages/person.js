import React from 'react';
import Async from 'react-promise';
import styled from 'styled-components';
import { withRouter } from 'next/router';
import Head from 'next/head';
import Header from '../templates/Header';
import HeaderContainer from '../components/HeaderContainer';
import { getData, changeColourToHex, getMenuColour } from '../helpers';

const Container = styled.div`
  padding: 20px;
  background-color: ${props => props.colour};
  color: #fff;
`;

const H1 = styled.h1`
  font-size: 40px;
  line-height: 52px;
`;

const H2 = styled.h2`
  font-size: 30px;
  line-height: 1.3em;
  margin-bottom: 20px;
`;

const Person = withRouter(({ router }) => (
  <Async
    promise={
      new Promise(async resolve => {
        const { query } = router;
        const pathname = query.id
          .split(' ')
          .join('-')
          .toLowerCase();
        const data = await getData(`data/people/${pathname}.json`);
        const colour = getMenuColour(data);
        const colourHex = changeColourToHex(colour);
        const colourHexLight = changeColourToHex(colour, true);
        const {
          title,
          image,
          deck,
          email,
          phoneNumber,
          titleRole,
          filters
        } = data;

        resolve({
          title,
          image,
          deck,
          email,
          phoneNumber,
          titleRole,
          filters,
          colour,
          colourHex,
          colourHexLight
        });
      })
    }
    then={({
      title,
      image,
      deck,
      email,
      phoneNumber,
      titleRole,
      filter,
      colour,
      colourHex,
      colourHexLight
    }) => (
      <React.Fragment>
        <Head>
          <title key="title">{title} - Gateway Church, York</title>
        </Head>
        <Header
          colour={colour}
          colourHex={colourHex}
          Header={HeaderContainer}
        />
        <Container colour={colourHexLight}>
          <H1>{title}</H1>
          <H2>{titleRole}</H2>
          <p>{deck}</p>
        </Container>
      </React.Fragment>
    )}
  />
));

export default Person;
