import React from 'react';
import Async from 'react-promise';
import { url } from '../../config';

import Header from '../../components/HeaderContainer';
const WhoWeAre = () => (
  <Async
    promise={new Promise(async (resolve) => {
      const whoWeAreResponse = await fetch(url + 'data/pages/who-we-are.json');
      const { title, header } = await whoWeAreResponse.json();
      const { image, menuColour } = header;
  
      resolve({
        header: {
          title,
          image,
          menuColour
        }
      });  
    })}

    then={({title, image}) => (
      <Header
        text={title}
        image={url + image}
      />
    )}
  />
);

export default WhoWeAre;
