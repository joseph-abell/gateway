import React from 'react';
import Async from 'react-promise';
import { url } from '../../config';
import Header from '../../components/templates/Header';
import HeaderContainer from '../../components/HeaderContainer';
import { getData, getFullUrl, parseColour, getMenuColour } from '../../helpers';

const Events = () => (
  <Async
    promise={new Promise(async (resolve) => {
      const data = await getData(url, 'data/events/index.json');
      const colour = getMenuColour(data);
      const colourHex = parseColour(colour);
      const { header } = data;

      resolve(
        colour,
        colourHex,
        header
      );
    })}

    then={(colour, colourHex, header = {}) => (
      <React.Fragment>
        <Header
          colour={colour}
          colourHex={colourHex}
          title={header.title}
          image={getFullUrl(header.image)}
          Header={HeaderContainer}
        />
      </React.Fragment>
    )}
  />
);
export default Events;
