import React from 'react';
import Async from 'react-promise';
import styled from 'styled-components';
import {withRouter} from 'next/router';
import Head from 'next/head';
import {
  getData,
  getMenuColour,
  changeColourToHex,
  getFullUrl
} from '../helpers';
import {Link} from '../router';
import HeaderContainer from '../components/HeaderContainer';
import Header from '../templates/Header';
import Deck from '../components/Deck';
import Footer from '../templates/Footer';
import Image from '../components/Image';
import Container from '../components/Container';
import Clearfix from '../components/Clearfix';

const StyledLink = styled.a`
  padding: 0 30px;
  color: white;
  background-color: ${props => props.colour};
  display: block;
  height: 300px;
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

  @media screen and (min-width: 991px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

const PersonBlock = styled.div`
  width: 50%;
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

const Filter = styled.li`
  @media screen and (min-width: 991px) {
    width: calc(50% - 10px);
    margin-bottom: 20px;

    &:nth-child(odd) {
      float: left;
    }

    &:nth-child(even) {
      float: right;
    }
  }
`;

const Person = styled.li`
  @media screen and (min-width: 991px) {
    width: calc(50% - 10px);
    margin-bottom: 20px;

    &:nth-child(odd) {
      float: left;
    }

    &:nth-child(even) {
      float: right;
    }
  }
`;

const PersonTitle = styled.h2`
  @media screen and (min-width: 991px) {
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 10px;
  }
`;

const PersonRole = styled.p`
  @media screen and (min-width: 991px) {
    font-size: 24px;
    line-height: 30px;
  }
`;

const H1 = styled.h1`
  text-transform: capitalize;
  color: ${props => props.colour};
  font-size: 30px;
  line-height: 36px;
  margin: 40px 20px 20px;
`;

const P = styled.p`
  margin: 0 20px 20px;
`;

const People = withRouter(({router = {}}) => (
  <Async
    promise={
      new Promise(async resolve => {
        const {query} = router || {};
        const {filter} = query;

        let acceptedFilters = await getData('data/peopleFilters/index.json');

        acceptedFilters = Object.values(acceptedFilters)
          .map(f => f.data || f)
          .map(f => ({
            name: f.name,
            title: f.title,
            deck: f.deck,
            colour: changeColourToHex(f.colour, true)
          }));

        let people = (await getData('data/people/index.json')) || [];

        people = Object.values(people);

        people = people.filter(person => {
          const {
            data: {filters: personFilters}
          } = person;

          const keys = Object.keys(personFilters || {}).filter(
            key => key === filter
          );

          return keys
            .map(key => personFilters[key])
            .some(personFilter => personFilter === 'true');
        });

        const data = await getData('/data/pages/people.json');
        const colour = getMenuColour(data);
        const {deck, header} = data;

        deck.image = deck && deck.image && getFullUrl(deck.image);
        deck.colour = changeColourToHex(deck && deck.colour);

        resolve({
          ...data,
          image: getFullUrl(header.image),
          colour,
          colourHex: changeColourToHex(colour),
          colourHexLight: changeColourToHex(colour, true),
          deck,
          people,
          filter,
          acceptedFilters
        });
      })
    }
    then={({
      title,
      image,
      colour,
      colourHex,
      colourHexLight,
      deck,
      people,
      filter,
      acceptedFilters
    }) => {
      if (people.length) {
        return (
          <React.Fragment>
            <Head>
              <title key="title">People - Gateway Church, York</title>
            </Head>
            <Header
              colour={colour}
              colourHex={colourHex}
              title={title}
              Header={HeaderContainer}
            />
            <main>
              <Container>
                <H1 colour={colourHex}>People: {filter}</H1>
                <ul>
                  {people.map(person => (
                    <Person key={person.data.title}>
                      <Link href={`/people/${person.data.title}`} passHref>
                        <a>
                          <PersonBlock
                            colour={changeColourToHex(
                              person.data.menuColour,
                              true
                            )}
                          >
                            <Image url={getFullUrl(person.data.image)} />
                          </PersonBlock>
                          <PersonBlock
                            colour={changeColourToHex(
                              person.data.menuColour,
                              true
                            )}
                          >
                            <Padding>
                              <PersonTitle>
                                {person.data.title
                                  .split('-')
                                  .map(
                                    word =>
                                      word[0].toUpperCase() + word.substr(1)
                                  )
                                  .join(' ')}
                              </PersonTitle>
                              <PersonRole>{person.data.titleRole}</PersonRole>
                              <Email>{person.data.email}</Email>
                            </Padding>
                          </PersonBlock>
                        </a>
                      </Link>
                    </Person>
                  ))}
                </ul>
              </Container>
            </main>
          </React.Fragment>
        );
      }

      if (filter && !people.length) {
        return (
          <React.Fragment>
            <Header
              colour={colour}
              colourHex={colourHex}
              colourHexLight={colourHexLight}
              title={title}
              image={image}
              Header={HeaderContainer}
            />
            <main>
              <H1 colour={colourHex}>No People found</H1>

              <P>No people matching the filter {filter} found.</P>
            </main>
          </React.Fragment>
        );
      }

      return (
        <React.Fragment>
          <Header
            colour={colour}
            colourHex={colourHex}
            colourHexLight={colourHexLight}
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
            <Container>
              <FilterTitle colour={colourHexLight}>Filter By</FilterTitle>
              <ul>
                {acceptedFilters.map(filter => (
                  <Filter key={filter.name}>
                    <Link href={`people?filter=${filter.name}`} passHref>
                      <StyledLink colour={filter.colour}>
                        <FilterItemTitle>
                          {filter.title
                            .split('-')
                            .map(word => word[0].toUpperCase() + word.substr(1))
                            .join(' ')}
                        </FilterItemTitle>
                        <FilterItemDeck>{filter.deck}</FilterItemDeck>
                      </StyledLink>
                    </Link>
                  </Filter>
                ))}
              </ul>
              <Clearfix />
            </Container>
          </main>
          <Footer />
        </React.Fragment>
      );
    }}
  />
));

export default People;
