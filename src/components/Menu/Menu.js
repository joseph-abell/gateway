import React from 'react';
import styled from 'styled-components';

const Logo = ({ logoUrl }) => (
  <img src={logoUrl} alt='logo' />
);

const MenuItem = ({ menuItem }) => (
  <div key={menuItem.title}>
    <a href={menuItem.link}>{menuItem.title}</a>
  </div>
);

const Search = () => (
  <img src='' alt='search' />
);


const StyledLogo = styled.div`
  padding: 15px 20px 1px;
  text-align: center;
`;

const StyledSearch = styled.div`
  float: right;
`;

const MenuContainer = styled.div`
  height: 60px;
`;

const Menu = ({ logoUrl }) => (
  <MenuContainer classname="menu">
    <StyledLogo>
      <Logo logoUrl={logoUrl} />
    </StyledLogo>
    <StyledSearch>
      <Search />
    </StyledSearch>
    <div className="clearfix" />
  </MenuContainer>
);

export default Menu;
