import React from 'react';
import Async from 'react-promise';
import { url } from '../../config';
import { getData } from '../../helpers';

const Event = () => (
  <Async
    promise={new Promise(async (resolve) => {
      const data = await getData(url, 'data/events/new-event.json');
      const eventData = data.pageData;

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
      <div>
        <header>
          <h1>{title}</h1>
          <img src={url + image.slice(1)} />
        </header>
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
