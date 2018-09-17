import React from 'react';
import Async from 'react-promise';
import styled from 'styled-components';
import moment from 'moment';
import { Link, Redirect } from 'react-router-dom';
import Header from '../../../components/templates/Header';
import Footer from '../../../components/templates/Footer';
import HeaderContainer from '../../../components/HeaderContainer';
import Image from '../../../components/Image';
import ImageWrapper from '../../../components/ImageWrapper';
import PageSummary from '../../../components/PageSummary';
import { getData, getFullUrl, changeColourToHex, getMenuColour } from '../../../helpers';

const StyledNotLink = styled.div`
  display: inline-block;
  margin-right: 20px;
`;

const StyledLink = styled(Link)`
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
      return (
        <StyledNotLink key={link}>{link}</StyledNotLink>
      );
    }

    if (link === 1) {
      return (
        <StyledLink key={link} to='events'>{link}</StyledLink>
      );
    }

    return (
      <StyledLink key={link} to={`events?page=${link}`}>{link}</StyledLink>
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

const StyledEvent = styled(Link)`
  padding: 35px;
  background: ${props => props.color};
  color: #fff;
  line-height: 30px;
  margin: 20px 0 0;
  display: block;
`;

const EventList = ({events, color}) => {
  return events.map((event) => {
    const date = moment(event.dateTime).format('dddd, DD MMM YYYY');
    const time = moment(event.dateTime).format('kk:ss');

    return (
      <StyledEvent
        key={event.title + date + time}
        color={color}
        to={`events/${event.title}`}
      >
        <h2>{event.title}</h2>
        <div>{date}</div>
        <div>{time}</div>

        <div>{event.deck}</div>
        <div>Read More +</div>
      </StyledEvent>
    );
  });
};

const Events = ({ location = {} }) => (
  <Async
    promise={new Promise(async (resolve) => {
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


      let events = Object
        .values(data)
        .map(event => event.data)
        .filter(event => event && event.dateTime && moment().isBefore(event.dateTime))
        .sort((a, b) => moment(a.dateTime).isBefore(b.dateTime) ? -1 : 1);

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
    })}

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
        return (
          <Redirect to='events' />
        );
      }

      return (
        <React.Fragment>
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
