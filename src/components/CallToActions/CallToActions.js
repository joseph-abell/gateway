import * as React from 'react';
import styled from 'styled-components';
import { getFullUrl } from '../../helpers';

const Image = styled.div`
  background-image: url('${props => props.url}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: opacity 0.3s;
`;

const H2 = styled.h2`
  height: 200px;
  line-height: 200px;
  text-align: center;
  font-size: 30px;
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: line-height: 0.3s padding: 0.3s;
`;

const P = styled.p`
  position: absolute;
  top: 70%;
  bottom: 0;
  left: 50px;
  right: 50px;
  transition: opacity 0.3s;
  opacity: 0;
  font-size: 24px;
  line-height: 30px;
  text-align: center;
  transition: opacity 0.3s, top: 0.3s;
`;

const A = styled.a`
  display: block;
  height: 200px;
  position: relative;
  background-color: ${props => props.colour};
  color: white;
  text-decoration: none;

  &:hover {
    ${Image} {
      opacity: 0;
    }
    
    ${H2} {
      line-height: 36px;
      padding-top: 20px;
    }
    
    ${P} {
      opacity: 1;
      top: 70px;
    }
  }
`;

const CallToAction = ({ link, title, deck, image, colour }, index) => (
  <li key={index}>
    <A href={link} colour={colour}>
      <Image url={ getFullUrl(image) } />
      <H2>{title}</H2>
      <P>{deck}</P>
    </A>
  </li>
);

const CallToActions = ({cta}) => (
	<ul className="call-to-actions">
    { cta.map(CallToAction) }
  </ul>	
);

export default CallToActions;
