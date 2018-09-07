import React from 'react';
import Async from 'react-promise';
import { url } from '../../config';
import Header from '../../components/templates/Header';
import HeaderContainer from '../../components/HeaderContainer';
import { getData, getFullUrl, changeColourToHex, getMenuColour } from '../../helpers';

const Person = () => (
  <Async
    promise={new Promise(async (resolve) => {
      const data = await getData(url, 'data/people/joe-abell.json');
      const colour = getMenuColour(data);
      const colourHex = changeColourToHex(colour);
      const { header, title, image, deck, email, phoneNumber, titleRole, filters } = data;

      resolve({
        title,
        image,
        deck,
        header,
        email,
        phoneNumber,
        titleRole,
        filters,
        colour,
        colourHex
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
      filter,
      colour,
      colourHex
    }) => (

      <React.Fragment>
        <Header
          colour={colour}
          colourHex={colourHex}
          title={header.title}
          image={getFullUrl(header.image)}
        />
           
        <div>
          <h1>{title}</h1>
          <h2>{titleRole}</h2>
          <p>{deck}</p>
        </div>
      </React.Fragment>
    )}
  />   
)

export default Person;
