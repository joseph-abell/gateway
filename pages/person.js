import React from 'react';
import Async from 'react-promise';
import styled from 'styled-components';
import { withRouter } from 'next/router';
import Head from 'next/head';
import { HideAt, ShowAt } from 'react-with-breakpoints';
import Header from '../templates/Header';
import HeaderContainer from '../components/HeaderContainer';
import ImageWrapper from '../components/ImageWrapper';
import Image from '../components/Image';
import Container from '../components/Container';
import {
  getData,
  changeColourToHex,
  getMenuColour,
  getFullUrl
} from '../helpers';

const Wrapper = styled.div`
  padding: 20px;
  background-color: ${props => props.colour};
  color: #fff;

  @media screen and (min-width: 991px) {
    float: right;
    width: calc(60% - 40px);
  }
`;

const H1 = styled.h1`
  font-size: 40px;
  line-height: 52px;

  @media screen and (min-width: 991px) {
    font-size: 57pt;
    line-height: 1.3em;
  }
`;

const H2 = styled.h2`
  font-size: 30px;
  line-height: 1.3em;
  margin-bottom: 20px;

  @media screen and (min-width: 991px) {
    margin-bottom: 80px;
  }
`;

const ImageAndEmailContainer = styled.div`
  width: calc(40% - 20px);
  margin-right: 20px;
  float: left;
`;

const ImageContainer = styled.div`
  width: calc(40% - 20px);
  float: left;
  margin-right: 20px;
`;

const EmailContainer = styled.div`
  width: calc(40% - 20px);
  float: left;
  margin-right: 20px;
`;

const Contact = styled.div`
  @media screen and (min-width: 991px) {
    background: ${props => props.colour}};
    margin-top: -20px;
    padding: 20px;
    color: white;
    font-size: 24px;
    line-height: 30px;
  }
`;

const P = styled.p`
  font-size: 24px;
  line-height: 30px;
`;

const ContactHeader = styled.p`
  font-size: 40px;
  line-height: 52px;
`;

const PersonImageWrapper = ({ image, email, colour }) => {
  if (email && image) {
    return (
      <HideAt breakpoint="mediumAndBelow">
        <ImageAndEmailContainer>
          <ImageWrapper>
            <Image url={getFullUrl(image)} />
          </ImageWrapper>
          <Contact colour={colour}>
            <ContactHeader>Contact</ContactHeader>
            <p>Email: {email}</p>
          </Contact>
        </ImageAndEmailContainer>
      </HideAt>
    );
  } else if (image) {
    return (
      <HideAt breakpoint="mediumAndBelow">
        <ImageContainer>Image</ImageContainer>
      </HideAt>
    );
  } else if (email) {
    return (
      <HideAt breakpoint="mediumAndBelow">
        <EmailContainer>Email</EmailContainer>
      </HideAt>
    );
  }

  return '';
};

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

        <Container>
          <PersonImageWrapper email={email} image={image} colour={colourHex} />
          <Wrapper colour={colourHexLight}>
            <H1>{title}</H1>
            <H2>{titleRole}</H2>
            <P>{deck}</P>
          </Wrapper>
        </Container>
      </React.Fragment>
    )}
  />
));

export default Person;
