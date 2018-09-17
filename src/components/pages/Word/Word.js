import React from 'react';
import Async from 'react-promise';
import { url } from '../../../helpers/config';
import { getData, getMenuColour, changeColourToHex, getFullUrl } from '../../../helpers';
import Header from '../../../components/templates/Header';
import HeaderContainer from '../../../components/HeaderContainer';

const Word = () => (
  <Async
    promise={new Promise(async (resolve) => {
      const data = await getData(url, 'data/words/bhggfhuj.json');
      const colour = getMenuColour(data);
      const colourHex = changeColourToHex(colour);
      const { title, image, deck, date, subtitle, audioFile, file, youtubeLink } = data;

      resolve({
        title,
        image,
        deck,
        date,
        subtitle,
        audioFile,
        file,
        youtubeLink,
        colour,
        colourHex
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
      colourHex
    }) => (
      <React.Fragment>
        <Header
          colour={colour}
          colourHex={colourHex}
          title={title}
          image={getFullUrl(image)}
          Header={HeaderContainer}
        />

        <div>
          {date}
        </div>
        <div>
          author (to do)
        </div>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <img src={url + image.slice(1)} alt='' />
        <div>
          {audioFile}
        </div>
      </React.Fragment>
    )}
  />
);

export default Word;