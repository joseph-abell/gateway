import React from 'react';
import Async from 'react-promise';
import moment from 'moment';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { getData } from '../../helpers';

const H3 = styled.h3`
  padding: 20px 35px;
  color: ${props => props.colour};
`;

const UL = styled.ul`
  padding: 35px;
  background-color: ${props => props.colour};
  color: white;
  line-height: 1.3em;
`;

const LI = styled.li`
  border-bottom: 2px solid white;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

const P = styled.p`
  color: ${props => props.colour};
`;

const StyledLink = styled(Link)`
  color: white;
`;

const MoreEvents = styled.div`
  background-color: ${props => props.colour};
  color: white;
  padding: 0 35px 35px;
`;

const SimpleEvents = ({ colour, colourLight }) => (
  <Async
    promise={new Promise(async (resolve) => {
      const data = await getData('data/events/index.json');
      let events = Object
        .values(data)
        .map(event => event.data);

      events = events
        .filter(event => event.dateTime)
        .sort((a, b) => moment(a.dateTime).isAfter(b.dateTime) ? 1 : -1)
        .filter(event => moment().isBefore(event.dateTime))
        .slice(0, 3);
      resolve({ events });
    })}

    then={({ events }) => (
      <div>
        <H3 colour={colour}>Events</H3>
        <UL colour={colourLight}>
          {events.map(event => (
            <LI key={event.title}>
              <StyledLink to={`/events/${event.title}`}>
                <P colour={colour}>{moment(event.dateTime).format('dddd MMM Do YYYY')}</P>
                <p>{event.title}</p>
                <p>{moment(event.dateTime).format('kk:mm')}</p>
              </StyledLink>
            </LI>
          ))}
        </UL>
        <MoreEvents colour={colourLight}>
          <StyledLink to='/events'>More Events</StyledLink>
        </MoreEvents>
      </div>
    )}
  />
);

export default SimpleEvents;
