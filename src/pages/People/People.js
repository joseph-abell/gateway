import React from 'react';
import Async from 'react-promise';
import { getData, getMenuColour, changeColourToHex, getFullUrl } from '../../helpers';
import HeaderContainer from '../../components/HeaderContainer';
import Header from '../../components/templates/Header';
import Deck from '../Home/Deck';
import Footer from '../../components/templates/Footer';
const People = () => (
	<Async
		promise={new Promise(async (resolve) => {
			const data = await getData('/data/pages/people.json');
			const colour = getMenuColour(data);
			const colourHex = changeColourToHex(colour);
			const { deck, header } = data;
			
			header.image = getFullUrl(header.image);
			
			deck.image = getFullUrl(deck.image);
			deck.colour = changeColourToHex(deck.colour);
			
			resolve({
				header,
				colour,
				colourHex,
				deck
			});
		})}
		
		then={({header, colour, colourHex, deck}) => {
		  const { title, image } = header;
		  
		  return (
		    <React.Fragment>
		      <Header
		        colour={colour}
		        colourHex={colourHex}
		        title={title}
		        image={image}
		        Header={HeaderContainer}
		      />
		      <main>
		        <Deck
		          colour={deck.colour}
		          text={deck.text}
		          image={deck.image}
		        />
		      </main>
		      <Footer />
		    </React.Fragment>
		  );
	  }}
	/>
);

export default People;
