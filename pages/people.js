import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import Head from 'next/head';
import {
  getData,
  getMenuColour,
  changeColourToHex,
  getFullUrl,
  getAllColours
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

const NoPeopleFound = ({colourHex, filter}) => (
  <main>
    <Container>
      <H1 colour={colourHex}>No People found</H1>
      <P>No people matching the filter {filter} found.</P>
    </Container>
  </main>
);

const PeopleFilters = ({
  colourHexLight,
  deckColour,
  deckParagraph,
  deckImage,
  acceptedFilters
}) => (
  <main>
    <Deck colour={deckColour} text={deckParagraph} image={deckImage} />
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
);

const PeopleList = ({colourHex, people, filter}) => (
  <main>
    <Container>
      <H1 colour={colourHex}>People: {filter}</H1>
      <ul>
        {people.map(person => (
          <Person key={person.data.title}>
            <Link href={`/people/${person.data.title}`} passHref>
              <a>
                <PersonBlock
                  colour={changeColourToHex(person.data.menuColour, true)}
                >
                  <Image url={getFullUrl(person.data.image)} />
                </PersonBlock>
                <PersonBlock
                  colour={changeColourToHex(person.data.menuColour, true)}
                >
                  <Padding>
                    <PersonTitle>
                      {person.data.title
                        .split('-')
                        .map(word => word[0].toUpperCase() + word.substr(1))
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
);

const People = () => {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [colour, setColour] = useState('');
  const [colourHex, setColourHex] = useState('');
  const [colourHexLight, setColourHexLight] = useState('');
  const [deckColour, setDeckColour] = useState('');
  const [deckImage, setDeckImage] = useState('');
  const [deckParagraph, setDeckParagraph] = useState('');
  const [people, setPeople] = useState([]);
  const [filter, setFilter] = useState('');
  const [acceptedFilters, setAcceptedFilters] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const {query} = router || {};
    const {filter} = query;
    setFilter(filter);

    Promise.all([
      getData('data/peopleFilters/index.json'),
      getData('data/people/index.json'),
      getData('data/pages/people.json')
    ]).then(([acceptedFilters, workingPeople, data]) => {
      setTitle(data.title);
      setImage(data.header.image);
      const [colour, colourHex, colourHexLight] = getAllColours(
        getMenuColour(data)
      );
      setColour(colour);
      setColourHex(colourHex);
      setColourHexLight(colourHexLight);
      setDeckImage(data.deck.image && getFullUrl(data.deck.image));
      setDeckParagraph(data.deck.paragraph);

      setDeckColour(changeColourToHex(data.deck.colour));

      setAcceptedFilters(
        Object.values(acceptedFilters)
          .map(f => f.data || f)
          .map(f => ({
            name: f.name,
            title: f.title,
            deck: f.deck,
            colour: changeColourToHex(f.colour, true)
          }))
      );

      let people = Object.values(workingPeople) || [];

      setPeople(
        people.filter(person => {
          const {
            data: {filters: personFilters}
          } = person;

          const keys = Object.keys(personFilters || {}).filter(
            key => key === filter
          );

          return keys
            .map(key => personFilters[key])
            .some(personFilter => personFilter === 'true');
        })
      );

      setLoading(false);
    });
  }, [router]);

  if (loading) return <div />;

  return (
    <>
      <Head>
        <title key="title">People - Gateway Church, York</title>
      </Head>
      <Header
        colour={colour}
        colourHex={colourHex}
        title={title}
        image={image}
        Header={HeaderContainer}
      />
      {people.length > 0 && filter && (
        <PeopleList colourHex={colourHex} people={people} filter={filter} />
      )}
      {filter && people.length === 0 && (
        <NoPeopleFound colourHex={colourHex} filter={filter} />
      )}
      {!filter && (
        <PeopleFilters
          colourHexLight={colourHexLight}
          deckColour={deckColour}
          deckParagraph={deckParagraph}
          deckImage={deckImage}
          acceptedFilters={acceptedFilters}
        />
      )}
      <Clearfix />
      <Footer />
    </>
  );
};

export default People;
