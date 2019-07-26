import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import moment from 'moment';
import Head from 'next/head';
import {Link} from '../router';
import Header from '../templates/Header';
import Footer from '../templates/Footer';
import Container from '../components/Container';
import HeaderContainer from '../components/HeaderContainer';
import Image from '../components/Image';
import ImageWrapper from '../components/ImageWrapper';
import PageSummary from '../components/PageSummary';
import Clearfix from '../components/Clearfix';
import {HideAt, ShowAt} from 'react-with-breakpoints';

import {getData, getFullUrl, getMenuColour, getAllColours} from '../helpers';

const PageDeck = styled.div`
  padding: 40px;
  background-color: ${props => props.colour};
  color: white;
  margin-bottom: 20px;
`;

const StyledNotLink = styled.div`
  display: inline-block;
  margin-right: 20px;
`;

const StyledLink = styled.a`
  display: inline-block;
  margin-right: 20px;
  color: #fff;
  border-bottom: 2px solid #fff;
`;

const Pagination = ({maxCount, currentPage = 1}) => {
  let links = [];

  for (let i = 1; i < maxCount + 1; i++) {
    links.push(i);
  }

  return links.map(link => {
    if (link === currentPage) {
      return <StyledNotLink key={link}>{link}</StyledNotLink>;
    }

    if (link === 1) {
      return (
        <Link href="events" key={link} passHref>
          <StyledLink>{link}</StyledLink>
        </Link>
      );
    }

    return (
      <Link href={`events?page=${link}`} key={link} passHref>
        <StyledLink>{link}</StyledLink>
      </Link>
    );
  });
};

const StyledPagination = styled.div`
  background: ${({color}) => color};
  padding: 10px 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #fff;
`;

const StyledEvent = styled.a`
  padding: 35px;
  background: ${props => props.color};
  color: #fff;
  line-height: 30px;
  margin: 20px 0 20px;
  display: block;
`;

const P = styled.p`
  padding: 100px 20px;
  text-align: center;
  font-size: 24px;
  line-height: 1.3em;
  color: #fff;

  @media screen and (min-width: 991px) {
    font-size: 30px;
    line-height: 36px;
    padding: 100px 20%;
  }
`;

const EventLeft = styled.div`
  @media screen and (min-width: 991px) {
    float: left;
    width: 60%;
    font-size: 24px;
    line-height: 30px;
  }
`;

const EventRight = styled.div`
  float: right;
  width: 40%;
`;

const EventImageWrapper = styled(ImageWrapper)`
  margin-top: -35px;
  margin-bottom: -35px;
  margin-right: -35px;
`;

const EventDeck = styled.div`
  @media screen and (min-width: 991px) {
    margin-top: 50px;
    margin-bottom: 20px;
  }
`;

const H1 = styled.h1`
  margin: 20px 0;
  font-size: 30px;
  line-height: 36px;
`;

const NoEvents = styled.p`
  margin-bottom: 20px;
`;

const EventList = ({events, color}) => {
  return events.map(event => {
    const date = moment(event.dateTime).format('dddd, DD MMM YYYY');
    const time = moment(event.dateTime).format('HH:mm');
    const image = getFullUrl(event.image);
    const listImage = event.listImage && getFullUrl(event.listImage);
    const title = event.title
      .split('-')
      .map(word => word[0].toUpperCase() + word.slice(1))
      .join(' ');
    const id = event.title.split('?').join('');
    return (
      <Link
        key={event.title + date + time}
        route="event"
        params={{id}}
        passHref
      >
        <StyledEvent color={color}>
          <EventLeft>
            <h2>{title}</h2>
            <div>{date}</div>
            <div>{time}</div>

            <EventDeck>{event.deck}</EventDeck>
            <div>Read More +</div>
          </EventLeft>
          <HideAt breakpoint="mediumAndBelow">
            <EventRight>
              <EventImageWrapper>
                <Image url={listImage || image} />
              </EventImageWrapper>
            </EventRight>
          </HideAt>
          <Clearfix />
        </StyledEvent>
      </Link>
    );
  });
};

const Events = ({location = {}}) => {
  const [loading, setLoading] = useState('');
  const [title, setTitle] = useState('');
  const [colour, setColour] = useState('');
  const [colourHex, setColourHex] = useState('');
  const [colourHexLight, setColourHexLight] = useState('');
  const [image, setImage] = useState('');
  const [subtitleImage, setSubtitleImage] = useState('');
  const [subtitleText, setSubtitleText] = useState('');
  const [events, setEvents] = useState([]);
  const [eventCount, setEventCount] = useState(0);
  const [maxPageCount, setMaxPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [deckTitle, setDeckTitle] = useState('');
  const [deckParagraph, setDeckParagraph] = useState('');

  useEffect(() => {
    let workingCurrentPage = location.search;

    if (!workingCurrentPage) {
      workingCurrentPage = '?page=1';
    }

    setCurrentPage(parseInt(workingCurrentPage.split('page=')[1], 10));

    Promise.all([
      getData('data/events/index.json'),
      getData('data/pages/events.json')
    ]).then(([data, eventsPageData]) => {
      const [colour, colourHex, colourHexLight] = getAllColours(
        getMenuColour(data)
      );
      setColour(colour);
      setColourHex(colourHex);
      setColourHexLight(colourHexLight);
      setImage(getFullUrl(eventsPageData.header.image));
      setTitle(eventsPageData.title);
      setSubtitleImage(getFullUrl(eventsPageData.subtitle.image));
      setSubtitleText(eventsPageData.subtitle.subtitle);
      setDeckTitle(eventsPageData.deck.title);
      setDeckParagraph(eventsPageData.deck.paragraph);

      const allEvents = Object.values(data)
        .map(event => event.data)
        .filter(
          event =>
            event &&
            event.dateTime &&
            !event.draft &&
            moment().isBefore(event.dateTime)
        )
        .sort((a, b) => (moment(a.dateTime).isBefore(b.dateTime) ? -1 : 1));

      const workingEventCount = allEvents.length;

      setEventCount(workingEventCount);
      setEvents(allEvents.slice(currentPage * 10 - 10, currentPage * 10));
      setMaxPageCount(Math.ceil(workingEventCount / 10));
      setLoading(false);
    });
  }, []);

  if (loading) return <div />;

  return (
    <React.Fragment>
      <Head>
        <title key="title">Events - Gateway Church, York</title>
      </Head>
      <Header
        colour={colour}
        colourHex={colourHex}
        colourHexLight={colourHexLight}
        title={title}
        image={image}
        Header={HeaderContainer}
      />

      {eventCount === 0 && (
        <Container>
          <H1>No events in the Calendar...</H1>
          <NoEvents>
            It looks like we forgot to keep our events updated, sorry about
            that!
          </NoEvents>
        </Container>
      )}

      {eventCount > 0 && (
        <>
          <Container>
            {subtitleImage && (
              <ImageWrapper>
                <Image url={subtitleImage} />
                <Container>
                  <PageSummary color={colourHex}>{subtitleText}</PageSummary>
                </Container>
              </ImageWrapper>
            )}
          </Container>

          <PageDeck colour={colourHex}>
            <Container>
              {deckTitle && <H2>{deckTitle}</H2>}
              {deckParagraph && <P>{deckParagraph}</P>}
            </Container>
          </PageDeck>

          {maxPageCount > 1 && (
            <StyledPagination color={colourHex}>
              <Pagination maxCount={maxPageCount} currentPage={currentPage} />
            </StyledPagination>
          )}

          <Container>
            <EventList events={events} color={colourHexLight} />
          </Container>
        </>
      )}
      <Footer />
    </React.Fragment>
  );
};

export default Events;
