import * as React from 'react';
import styled from 'styled-components';
import { getFullUrl } from '../../helpers';

const A = styled.a`
	background-image: url('${props => props.image}');
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	display: block;
	height: 200px;
`;

const CallToAction = ({ link, title, deck, image }, index) => (
  <li key={index}>
    <A href={link} image={ getFullUrl(image) }>
      <h2>{title}</h2>
      <p>{deck}</p>
    </A>
  </li>
);

const CallToActions = ({cta}) => (
	<ul className="call-to-actions">
    { cta.map(CallToAction) }
  </ul>	
);

export default CallToActions;
