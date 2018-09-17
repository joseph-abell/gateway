import React from 'react';
import Async from 'react-promise';
import styled from 'styled-components';
import { url } from '../../../helpers/config';
import Header from '../../../components/templates/Header';
import HeaderContainer from '../../../components/HeaderContainer';
import { getData, getFullUrl, changeColourToHex, getMenuColour } from '../../../helpers';

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

const Person = ({ location }) => (
  <Async
    promise={new Promise(async (resolve) => {
      let { pathname } = location;
      pathname = pathname.split(' ').join('-').toLowerCase();

      const data = await getData(`data${pathname}.json`);
      const colour = getMenuColour(data);
      const colourHex = changeColourToHex(colour);
      const colourHexLight = changeColourToHex(colour, true);
      const { title, image, deck, email, phoneNumber, titleRole, filters } = data;

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
    })}

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
)

export default Person;
