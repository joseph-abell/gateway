import React from 'react';
import styled from 'styled-components';
import { slide as SlideMenu } from 'react-burger-menu';

const SearchLink = styled.a`
  color: white;
  padding: 20px 25px;
  display: inline-block;
  text-decoration: none;
`;

const SearchItem = ({ searchItem, colour }) => (
  <div key={searchItem.text}>
    <SearchLink href={searchItem.link}>{searchItem.title}</SearchLink>
  </div>
);

const Search = ({ colour, searchItems }) => {
  const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '26px',
      height: '20px',
      right: '20px',
      top: '221px'
    },
    bmBurgerBars: {
      background: colour,
      height: '3px'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: 'white'
    },
    bmMenu: {
      background: colour,
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: 'white',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.2)'
    }
  };

  return (
    <SlideMenu styles={styles} right>
      { searchItems && searchItems.map((searchItem, id) => (
        <SearchItem searchItem={searchItem} colour={colour} key={id} />
      )) }
    </SlideMenu>
  );
};

export default Search;

