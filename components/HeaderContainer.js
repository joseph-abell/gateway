import React from 'react';
import Header from './Header';
import H1 from './H1';

const HeaderContainer = ({ text, image, colour }) => (
  <Header image={image} colour={colour}>
    <H1>{text}</H1>
  </Header>
);

export default HeaderContainer;
