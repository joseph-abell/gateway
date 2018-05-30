import React from 'react';
import HeaderContainer from '../../components/HeaderContainer';
import Menu from '../../components/Menu';
import homepageData from '../../data/homepage.json';
import menuData from '../../data/menu.json';

const Home = () => (
  <div>
    <HeaderContainer text={homepageData.title} image={homepageData.headerImage} />
    <Menu menu={menuData.menu} menuColour={homepageData.menuColour} />
  </div>
);

export default Home;
