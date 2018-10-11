import React from 'react';
import Async from 'react-promise';
import styled from 'styled-components';
import moment from 'moment';
import Head from 'next/head';
import { Link } from '../router';
import Header from '../templates/Header';
import Footer from '../templates/Footer';
import HeaderContainer from '../components/HeaderContainer';
import Image from '../components/Image';
import ImageWrapper from '../components/ImageWrapper';
import PageSummary from '../components/PageSummary';
import {
  getData,
  getFullUrl,
  changeColourToHex,
  getMenuColour
} from '../helpers';

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

const Pagination = ({ maxCount, currentPage = 1 }) => {
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
        <Link href="events" key={link}>
          <StyledLink>{link}</StyledLink>
        </Link>
      );
    }

    return (
      <Link href={`events?page=${link}`} key={link}>
        <StyledLink>{link}</StyledLink>
      </Link>
    );
  });
};

const StyledPagination = styled.div`
  background: ${({ color }) => color};
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
  margin: 20px 0 0;
  display: block;
`;

const EventList = ({ events, color }) => {
  return events.map(event => {
    const date = moment(event.dateTime).format('dddd, DD MMM YYYY');
    const time = moment(event.dateTime).format('kk:ss');

    return (
      <Link
        key={event.title + date + time}
        route="event"
        params={{ id: event.title }}
      >
        <StyledEvent color={color}>
          <h2>{event.title}</h2>
          <div>{date}</div>
          <div>{time}</div>

          <div>{event.deck}</div>
          <div>Read More +</div>
        </StyledEvent>
      </Link>
    );
  });
};

const Events = ({ location = {} }) => (
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
        const colourHex = changeColourToHex(colour);
        const lightColourHex = changeColourToHex(colour, true);
        const { header, subtitle } = eventsPageData;
        const image = getFullUrl(header.image);
        const subtitleImage = getFullUrl(subtitle.image);
        const subtitleText = subtitle.subtitle;

        let events = Object.values(data)
          .map(event => event.data)
          .filter(
            event =>
              event && event.dateTime && moment().isBefore(event.dateTime)
          )
          .sort((a, b) => (moment(a.dateTime).isBefore(b.dateTime) ? -1 : 1));

        const eventCount = events.length;
        events = events.slice(currentPage * 10 - 10, currentPage * 10);

        const maxPageCount = Math.ceil(eventCount / 10);

        resolve({
          colour,
          colourHex,
          lightColourHex,
          header,
          image,
          subtitleImage,
          subtitleText,
          maxPageCount,
          events,
          currentPage
        });
      })
    }
    then={({
      colour,
      colourHex,
      lightColourHex,
      header = {},
      image,
      subtitleImage,
      subtitleText,
      maxPageCount,
      events,
      currentPage
    }) => {
      if (!events.length) {
        return <Redirect to="events" />;
      }

      return (
        <React.Fragment>
          <Head>
            <title key="title">Events - Gateway Church, York</title>
          </Head>
          <Header
            colour={colour}
            colourHex={colourHex}
            title={header.title}
            image={image}
            Header={HeaderContainer}
          />
          <ImageWrapper>
            <Image url={subtitleImage} />
          </ImageWrapper>
          <PageSummary color={colourHex}>{subtitleText}</PageSummary>
          <StyledPagination color={colourHex}>
            <Pagination maxCount={maxPageCount} currentPage={currentPage} />
          </StyledPagination>
          <EventList events={events} color={lightColourHex} />
          <Footer />
        </React.Fragment>
      );
    }}
  />
);

export default Events;
