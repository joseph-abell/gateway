import React from 'react';
import Async from 'react-promise';
import styled from 'styled-components';
import { getData, getMenuColour, changeColourToHex } from '../../../helpers';
import Header from '../../../components/templates/Header';
import HeaderContainer from '../../../components/HeaderContainer';
import Footer from '../../../components/templates/Footer';

const Deck = styled.div`
  background-color: ${props => props.colour};
  color: white;
  padding: 35px;
  line-height: 30px;
`;

const A = styled.a`
  color: ${props => props.colour};
  border-radius: 10px;
  border: 5px solid ${props => props.colour};
  padding: 10px 20px;
  display: inline-block;
  margin-top: 20px;
`;

const ContactUs = () => (
  <Async
    promise={new Promise(async (resolve) => {
      const data = await getData('data/contact-us.json');
      const colour = getMenuColour(data);
      const colourHex = changeColourToHex(colour);
      const colourHexLight = changeColourToHex(colour, true);
      const { title, image, contentImage, deck } = data;

      resolve({
        title,
        colour,
        colourHex,
        colourHexLight,
        contentImage,
        image,
        deck
      });
    })}

    then={({title, colour, colourHex, colourHexLight, contentImage, image, deck}) => (
      <React.Fragment>
        <Header
          colour={colour}
          colourHex={colourHex}
          title={title}
          image={image}
          Header={HeaderContainer}
        />
        <Deck colour={colourHex}>
          <p>{deck}</p>
          <p>
            <A colour={colourHexLight} href='mailto:office@gatewaychurch.co.uk'>Email</A>
          </p>
        </Deck>
        <Footer/>
      </React.Fragment>
    )}
  />
);



export default ContactUs;