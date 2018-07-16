import React from 'react';
import Async from 'react-promise';

const Event = () => (
  <Async
    promise={new Promise(async (resolve) => {
      resolve();
    })}
    then={() => (
      <div/>
    )} />
);

export default Event;
