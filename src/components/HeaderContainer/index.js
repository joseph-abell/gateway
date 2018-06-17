import React from 'react';
import Header from '../Header';
import H1 from '../H1';

const HeaderContainer = ({ text, image }) => (
  <Header>
    <H1>{text}</H1>
    <img src={image} alt='' />
  </Header>
);

export default HeaderContainer;
