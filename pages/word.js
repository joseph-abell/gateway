import React from 'react';
import Async from 'react-promise';
import styled from 'styled-components';
import { withRouter } from 'next/router';
import { url } from '../helpers/config';
import { getData, getMenuColour, changeColourToHex, getFullUrl } from '../helpers';
import Header from '../templates/Header';
import HeaderContainer from '../components/HeaderContainer';
import ImageWrapper from '../components/ImageWrapper';
import Image from '../components/Image';
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

const Word = withRouter(({ router }) => (
  <Async
    promise={new Promise(async (resolve) => {
      const { query } = router;
      const { id } = query
      const data = await getData(`data/words/${id}.json`);
      const colour = getMenuColour(data);
      const colourHex = changeColourToHex(colour);
      const colourHexLight = changeColourToHex(colour, true);
      const { title, image, deck, date, subtitle, audioFile, file, youtubeLink } = data;

      resolve({
        title,
        image,
        deck,
        date,
        subtitle,
        audioFile: getFullUrl(audioFile),
        file,
        youtubeLink,
        colour,
        colourHex,
        colourHexLight
      });
    })}

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
        <Header
          colour={colour}
          colourHex={colourHex}
          Header={HeaderContainer}
        />
        <Deck colour={colourHexLight}>
          <Date colour={colourHex}>{date}</Date>
          <H1>{title}</H1>
          <H2>{subtitle}</H2>
        </Deck>

        <ImageWrapper>
          <Image url={url + image.slice(1)} />
        </ImageWrapper>

        <div>
          <Audio url={audioFile} />
        </div>
      </React.Fragment>
    )}
  />
));

export default Word;