import React from 'react';
import Async from 'react-promise';
import { getData, getMenuColour, changeColourToHex, getFullUrl } from '../../../helpers';
import { Link } from 'react-router-dom';
import HeaderContainer from '../../../components/HeaderContainer';
import Header from '../../../components/templates/Header';
import Deck from '../Home/Deck';
import Footer from '../../../components/templates/Footer';

const People = ({ location = {} }) => (
  <Async
    promise={new Promise(async (resolve) => {
      const { search } = location;

      // Get filter from the url, and get the bit we care about
      let filter = search.split('=')[1];

      // make a list of filters that we want
      const acceptedFilters = [
        'all',
        'elders',
        'lifegroupLeaders',
        'ministryLeaders',
        'staff',
        'trustees'
      ];

      // make an empty people list
      let people = [];

      // if the filter is in the list of accepted filters, go ahead
      if (acceptedFilters.includes(filter)) {

        // we get our data
        people = await getData('data/people/index.json');

        // we turn the data into what we care about, a list of people information
        people = Object.values(people);

        // filter the list into only people that match the filter
        people = people.filter((person) => {

	      // get data from person
	      const { data } = person || {};

	      // get filters from data
	      const { filters } = data || {};

	      // get the part of the filters we care about, the keys
	      const keys = Object.keys(filters);

	      // check whether the filter is in the list of keys
  	      return keys.includes(filter);
        });
      }

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
        deck,
        people
      });
    })}

    then={({header, colour, colourHex, deck, people}) => {
      const { title, image } = header;

      if (people) {
  	    return (
          <React.Fragment>
            <Header
              colour={colour}
              colourHex={colourHex}
              title={title}
              Header={HeaderContainer}
		    />
            <main>
              <ul>
                { people.map((person) => (
                  <li key={person.data.title}>{person.data.title}</li>
                )) }
              </ul>      
            </main>
          </React.Fragment>
        );
      }

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
            <ul>
              <li>
                <Link to="people?filter=all">All</Link>
              </li>
              <li>
                <Link to="people?filter=elders">Elders</Link>
              </li>
              <li>
                <Link to="people?filter=lifegroup-leaders">Lifegroup Leaders</Link>
              </li>
              <li>
            	<Link to="people?filter=ministry-leaders">Ministry Leaders</Link>
              </li>
              <li>
                <Link to="people?filter=staff">Staff</Link>
              </li>
              <li>
                <Link to="people?filter=trustees">Trustees</Link>
              </li>
            </ul>
          </main>
          <Footer />
        </React.Fragment>
      );
    }}
  />
);

export default People;
