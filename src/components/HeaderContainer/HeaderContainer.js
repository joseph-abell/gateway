import React from 'react';
// import Header from '../Header';
// import H1 from '../H1';

const HeaderContainer = ({ text, image }) => (
  <header>
    <h1>{text}</h1>
    <img src={image} alt='' />
  </header>
);

export default HeaderContainer;
