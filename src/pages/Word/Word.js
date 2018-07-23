import React from 'react';
import Async from 'react-promise';
import { url } from '../../config';

const Word = () => (
  <Async
    promise={new Promise(async (resolve) => {
      const response = await fetch(url+ 'data/words/bhggfhuj.json');
      const wordData = await response.json();

      resolve({
        title: wordData.title,
        image: wordData.image,
        deck: wordData.deck,
        date: wordData.date,
        subtitle: wordData.subtitle,
        audioFile: wordData.audioFile,
        file: wordData.file,
        youtubeLink: wordData.youtubeLink
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
      youtubeLink
    }) => (
      <div>
        <div>
          <div>
            {date}
          </div>
          <div>
            author (to do)
          </div>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
        <img src={url + image.slice(1)} />
        <div>
          {audioFile}
        </div>
      </div>
    )}
  />
)

export default Word;