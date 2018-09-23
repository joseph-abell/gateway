import React from 'react';
import Async from 'react-promise';
import styled from 'styled-components';
import { withRouter } from 'next/router';
import { getData, getMenuColour, changeColourToHex, getFullUrl } from '../helpers';
import { Link } from '../router';
import HeaderContainer from '../components/HeaderContainer';
import Header from '../templates/Header';
import Deck from '../components/Deck';
import Footer from '../templates/Footer';
import Image from '../components/Image';

const StyledLink = styled.a`
  padding: 0 30px;
  color: white;
  background-color: ${props => props.colour};
  display: block;
`;

const FilterTitle = styled.h1`
  font-size: 30px;
  line-height: 76px;
  padding: 0 30px;
  background-color: ${props => props.colour};
  color: white;
  margin-bottom: 20px;
`;

const FilterItemTitle = styled.h2`
  font-size: 30px;
  line-height: 76px;
`;

const FilterItemDeck = styled.p`
  line-height: 30px;
  padding-bottom: 20px;
  color: white;
`;

const PersonBlock = styled.div`
  width: 50vw;
  float: left;
  position: relative;
  margin-bottom: 10px;
  height: 200px;
  color: white;
  background-color: ${props => props.colour};
`;

const Padding = styled.div`
  padding: 20px;
  line-height: 30px;
`;

const Email = styled.p`
  position: absolute;
  bottom: 20px;
`;

const People = withRouter(({ router = {} }) => (
  <Async
    promise={new Promise(async (resolve) => {
      const { query } = router || {};
      const { filter } = query;

      // make a list of filters that we want
      let acceptedFilters = await getData('data/peopleFilters/index.json');

      acceptedFilters = Object
        .values(acceptedFilters)
        .map(f => f.data)
        .map(f => ({
          name: f.name,
          title: f.title,
          deck: f.deck,
          colour: changeColourToHex(f.colour, true)
        }));

      // make an empty people list
      let people = [];

      // if the filter is in the list of accepted filters, go ahead
      if (filter && acceptedFilters.map(f => f.name).includes(filter)) {
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
      const colourHexLight = changeColourToHex(colour, true);
      const { deck, header, title } = data;
      const image = getFullUrl(header.image);

      deck.image = deck && deck.image && getFullUrl(deck.image);
      deck.colour = changeColourToHex(deck && deck.colour);

      resolve({
        title,
        image,
        colour,
        colourHex,
        colourHexLight,
        deck,
        people,
        acceptedFilters
      });
    })}

    then={({title, image, colour, colourHex, colourHexLight, deck, people, acceptedFilters}) => {
      if (people.length) {
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
                  <li key={person.data.title}>
                    <Link href={`/people/${person.data.title}`}>
                      <a>
                        <PersonBlock colour={changeColourToHex(person.data.menuColour, true)}>
                          <Image url={getFullUrl(person.data.image)} />
                        </PersonBlock>
                        <PersonBlock colour={changeColourToHex(person.data.menuColour, true)}>
                          <Padding>
                            <h2>{person.data.title}</h2>
                            <p>{person.data.titleRole}</p>
                            <Email>{person.data.email}</Email>
                          </Padding>
                        </PersonBlock>
                      </a>
                    </Link>
                  </li>
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
              text={deck.paragraph}
              image={deck.image}
            />
            <FilterTitle colour={colourHexLight}>Filter By</FilterTitle>
            <ul>
              {acceptedFilters.map(filter => (
                <li key={filter.name}>
                  <Link href={`people?filter=${filter.name}`}>
                    <StyledLink colour={filter.colour} >
                      <FilterItemTitle>{filter.title}</FilterItemTitle>
                      <FilterItemDeck>{filter.deck}</FilterItemDeck>
                    </StyledLink>
                  </Link>
                </li>
              ))}
            </ul>
          </main>
          <Footer />
        </React.Fragment>
      );
    }}
  />
));

export default People;