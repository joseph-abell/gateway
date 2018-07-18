import React from 'react';
import Async from 'react-promise';
import { url } from '../../config.js';

const Event = () => (
  <Async
    promise={new Promise(async (resolve) => {
      const response = await fetch(url + 'data/events/new-event.json');
      const eventData = await response.json();
      resolve({
        title: eventData.title,
        image: eventData.image,
        header: eventData.header,
        date: eventData.date,
        time: eventData.time,
        deck: eventData.deck
      });
    })}
    then={({title, image, header, date, time, deck}) => (
      <div/>
    )} />
);

export default Event;
