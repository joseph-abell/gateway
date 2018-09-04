import React from 'react';
import Async from 'react-promise';
import styled from 'styled-components';
import moment from 'moment';
import Header from '../../components/templates/Header';
import HeaderContainer from '../../components/HeaderContainer';
import Image from '../../components/Image';
import { getData, getFullUrl, parseColour, getMenuColour } from '../../helpers';

const ImageWrapper = styled.div`
  position: relative;
  height: 200px;
  background: ${props => props.color};
  overflow: hidden;
`;

const PageSummary = styled.div`
  padding: 100px 20px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 30px;
  line-height: 36px;
  color: #fff;
  background-color: ${props => props.color};
`;

const Pagination = ({ maxCount }) => {
  let links = [];

  for (let i = 1; i < maxCount + 1; i++) {
    links.push(i);
  }

  return links.map(link => (
    <div key={link}>{link}</div>
  ));
};

const StyledPagination = styled.div`
  background: ${({color}) => color};
`;

const StyledEvent = styled.div`
  padding: 35px;
  background: ${props => props.color};
  color: #fff;
  line-height: 30px;
  margin-bottom: 10px;
`;

const EventList = ({events, color}) => {
  return events.map(({data}) => {
    const date = moment(data.date).format('dddd, DD MMM YYYY');
    const time = moment(data.time).format('kk:ss');
    const image = getFullUrl(data.image);

    return (
      <StyledEvent key={data.title + date + time} color={color}>
        <h2>{data.title}</h2>
        <div>{date}</div>
        <div>{time}</div>

        <div>{data.deck}</div>
        <div>Read More +</div>
      </StyledEvent>
    );
  });
};

const Events = () => (
  <Async
    promise={new Promise(async (resolve) => {
      const data = await getData('data/events/index.json');
      const eventsPageData = await getData('data/pages/events.json');
      const colour = getMenuColour(eventsPageData);
      const colourHex = parseColour(colour);
      const lightColourHex = parseColour(colour, true);
      const { header, subtitle } = eventsPageData;
      const image = getFullUrl(header.image);
      const subtitleImage = getFullUrl(subtitle.image);
      const subtitleText = subtitle.subtitle;

      const eventCount = Object.keys(data).length;
      const events = Object.values(data);
      const maxPageCount = Math.ceil(eventCount / 10);
      console.log(events);
      resolve({
        colour,
        colourHex,
        lightColourHex,
        header,
        image,
        subtitleImage,
        subtitleText,
        maxPageCount,
        events
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
      events
    }) => (
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
          <Pagination maxCount={maxPageCount} />
        </StyledPagination>
        <EventList events={events} color={lightColourHex} />
      </React.Fragment>
    )}
  />
);

export default Events;

