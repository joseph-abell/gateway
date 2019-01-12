import React from 'react';
import Async from 'react-promise';
import styled from 'styled-components';
import { withRouter } from 'next/router';
import Head from 'next/head';
import { format } from 'date-fns';
import { markdown } from 'markdown';

import { url } from '../helpers/config';
import {
  getData,
  getMenuColour,
  changeColourToHex,
  getFullUrl
} from '../helpers';
import Header from '../templates/Header';
import HeaderContainer from '../components/HeaderContainer';
import Footer from '../templates/Footer';
import ImageWrapper from '../components/ImageWrapper';
import Image from '../components/Image';
import Container from '../components/Container';
import Audio from '../components/Audio';

const Deck = styled.div`
  padding: 40px;
  background: ${props => props.colour};
`;

const Date = styled.div`
  color: ${props => props.colour};
`;

const H1 = styled.h1`
  font-size: 57px;
  line-height: 76px;
  color: #fff;
`;

const H2 = styled.h2`
  font-size: 30px;
  line-height: 40px;
  color: #fff;
`;

const P = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 1240px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

const Link = styled.a`
  color: ${props => props.colour};
`;

const Word = withRouter(({ router }) => (
  <Async
    promise={
      new Promise(async resolve => {
        const { query } = router;
        let { id } = query;
        id = id
          .split(' ')
          .join('-')
          .toLowerCase();
        const data = await getData(`data/words/${id}.json`);
        const colour = getMenuColour(data);
        const { audioFile } = data;

        resolve({
          ...data,
          audioFile: getFullUrl(audioFile),
          colour,
          colourHex: changeColourToHex(colour),
          colourHexLight: changeColourToHex(colour, true)
        });
      })
    }
    then={({
      title,
      image,
      deck,
      date,
      subtitle,
      audioFile,
      file,
      youtubeLink,
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
          colourHexLight={colourHexLight}
          Header={HeaderContainer}
        />
        <Deck colour={colourHexLight}>
          <Container>
            <Date colour={colourHex}>{format(date, 'EEEE do LLLL yyyy')}</Date>
            <H1>{title}</H1>
            <H2>{subtitle}</H2>
          </Container>
        </Deck>
        <Container>
          {image && (
            <ImageWrapper>
              <Image url={url + image.slice(1)} />
            </ImageWrapper>
          )}

          {audioFile && (
            <P>
              <Audio
                url={audioFile}
                colour={colourHex}
                lightColour={colourHexLight}
              />
            </P>
          )}

          {deck && (
            <P dangerouslySetInnerHTML={{ __html: markdown.toHTML(deck) }} />
          )}

          {youtubeLink && (
            <P>
              <Link colour={colourHex} href={youtubeLink}>
                {youtubeLink}
              </Link>
            </P>
          )}

          {file && (
            <P>
              <Link colour={colourHex} href={getFullUrl(file)}>
                {file.replace('/uploads/', '')}
              </Link>
            </P>
          )}
        </Container>

        <Footer />
      </React.Fragment>
    )}
  />
));

export default Word;
