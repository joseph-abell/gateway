import React from 'react';
import HeaderContainer from '../../components/HeaderContainer'
import data from '../../data/pages/homepage.json'

const Home = () => (
  <HeaderContainer text={data.title} image={data.headerImage} />
);

export default Home;
