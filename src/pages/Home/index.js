import React from 'react';
import HeaderContainer from '../../components/HeaderContainer'
import data from '../../data/homepage.json'

console.log(data);

const Home = () => (
  <HeaderContainer text={data.title} image='' />
);

export default Home;
