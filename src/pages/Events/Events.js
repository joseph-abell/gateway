import React from 'react';
import Async from 'react-promise';
import { url } from '../../config';
import { getData } from '../../helpers';

const Events = () => (
  <Async
    promise={new Promise(async (resolve) => {
      const data = await getData(url, 'data/events/index.json');
      const eventsData = data.pageData;

      resolve(
        eventsData
      );
    })}

    then={(eventsData) => (
      <div></div>
    )}
  />
);
export default Events;
