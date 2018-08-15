import React from 'react';
import Async from 'react-promise';
import { url } from '../../config';
import { getData } from '../../helpers';
import Header from '../../components/templates/Header';
import { getMenuColour, parseColour, getFullUrl } from '../../helpers';
import HeaderContainer from '../../components/HeaderContainer';

const Event = () => (
  <Async
    promise={new Promise(async (resolve) => {
      const data = await getData('data/events/new-event.json');
      const colour = getMenuColour(data);
      const colourHex = parseColour(colour);
      const { title, image, header, date, time, deck } = data;

      resolve({
        title,
        image,
        header,
        date,
        time,
        deck, 
        colour,
        colourHex
      });
    })}

    then={({title, image, header, date, time, deck, colour, colourHex}) => (
      <div>
        <Header
          colour={colour}
          colourHex={colourHex}
          title={title}
          image={getFullUrl(image)}
          Header={HeaderContainer}
        />
        <div>
          <div>{date}</div>
          <div>{time}</div>
        </div>
        <div>{deck}</div>
      </div>
    )}
  />
);

export default Event;
