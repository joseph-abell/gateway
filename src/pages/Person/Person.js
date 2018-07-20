import React from 'react';
import Async from 'react-promise';
import { url } from '../../config.js';

const Person = () => (
  <Async
    promise={new Promise(async (resolve) => {
      const response = await fetch(url + 'data/people/joe-abell.json');
      const personData = await response.json();
      
      resolve({
        title: personData.title,
        image: personData.image,
        deck: personData.deck,
        header: personData.header,
        email: personData.email,
        phoneNumber: personData.phoneNumber,
        titleRole: personData.titleRole,
        filters: personData.filters
      });
    })}

    then={({
      title,
      image,
      deck,
      header,
      email,
      phoneNumber,
      titleRole,
      filter
    }) => (
      <div>
        <div>
          <img src={url + image.slice(1)} />
        </div>
        <div>
          <h1>{title}</h1>
          <h2>{titleRole}</h2>
          <p>{deck}</p>
        </div>
      </div>
    )}
  />   
)

export default Person;
