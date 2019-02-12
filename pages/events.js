import React from 'react';
import Async from 'react-promise';
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

import {
  getData,
  getFullUrl,
  changeColourToHex,
  getMenuColour
} from '../helpers';

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
    const time = moment(event.dateTime).format('kk:ss');
    const image = getFullUrl(event.image);
    const listImage = event.listImage && getFullUrl(event.listImage);

    return (
      <Link
        key={event.title + date + time}
        route="event"
        params={{id: event.title}}
        passHref
      >
        <StyledEvent color={color}>
          <EventLeft>
            <h2>{event.title}</h2>
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

const Events = ({location = {}}) => (
  <Async
    promise={
      new Promise(async resolve => {
        let currentPage = location.search;

        if (!currentPage) {
          currentPage = '?page=1';
        }

        currentPage = parseInt(currentPage.split('page=')[1], 10);

        const data = await getData('data/events/index.json');
        const eventsPageData = await getData('data/pages/events.json');
        const colour = getMenuColour(eventsPageData);
        const {header, subtitle, deck} = eventsPageData;
        const image = getFullUrl(header.image);
        const subtitleImage = getFullUrl(subtitle.image);
        const subtitleText = subtitle.subtitle;

        let events = Object.values(data)
          .map(event => event.data)
          .filter(
            event =>
              event && event.dateTime && moment().isBefore(event.dateTime)
          )
          .filter(event => !event.draft)
          .sort((a, b) => (moment(a.dateTime).isBefore(b.dateTime) ? -1 : 1));

        const eventCount = events.length;
        events = events.slice(currentPage * 10 - 10, currentPage * 10);

        const maxPageCount = Math.ceil(eventCount / 10);

        resolve({
          ...eventsPageData,
          colour,
          colourHex: changeColourToHex(colour),
          lightColourHex: changeColourToHex(colour, true),
          image,
          subtitleImage,
          subtitleText,
          maxPageCount,
          events,
          currentPage,
          deckTitle: deck.title,
          deckParagraph: deck.paragraph
        });
      })
    }
    then={({
      colour,
      colourHex,
      lightColourHex,
      header = {},
      image,
      title,
      subtitleImage,
      subtitleText,
      maxPageCount,
      events,
      currentPage,
      deckTitle,
      deckParagraph
    }) => {
      if (!events.length) {
        return (
          <React.Fragment>
            <Head>
              <title key="title">Events - Gateway Church, York</title>
            </Head>
            <Header
              colour={colour}
              colourHex={colourHex}
              colourHexLight={lightColourHex}
              title={title}
              image={header.image}
              Header={HeaderContainer}
            />
            <Container>
              <H1>No events in the Calendar...</H1>
              <NoEvents>
                It looks like we forgot to keep our events updated, sorry about
                that!
              </NoEvents>
            </Container>
            <Footer />
          </React.Fragment>
        );
      }

      return (
        <React.Fragment>
          <Head>
            <title key="title">Events - Gateway Church, York</title>
          </Head>
          <Header
            colour={colour}
            colourHex={colourHex}
            colourHexLight={lightColourHex}
            title={title}
            image={header.image}
            Header={HeaderContainer}
          />

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
            <EventList events={events} color={lightColourHex} />
          </Container>
          <Footer />
        </React.Fragment>
      );
    }}
  />
);

export default Events;
