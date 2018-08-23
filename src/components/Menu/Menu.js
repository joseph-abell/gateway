import React from 'react';
import styled from 'styled-components';

const Logo = ({ logoUrl }) => (
  <img src={logoUrl} alt='logo' />
);

const StyledLogo = styled.div`
  padding: 15px 20px 1px;
  text-align: center;
`;

const MenuContainer = styled.div`
  height: 60px;
`;

const MenuButton = styled.div`
  height: 60px;
  width: 60px;
  background-color: red;
  float: left;
`;

const SearchButton = styled.div`
  height: 60px;
  width: 60px;
  background-color: red;
  float: right;
`;

const Menu = ({ logoUrl, onMenuClick, onSearchClick }) => (
  <MenuContainer classname="menu">
    <MenuButton onClick={onMenuClick} />
    <SearchButton onClick={onSearchClick} />
    <StyledLogo>
      <Logo logoUrl={logoUrl} />
    </StyledLogo>
  </MenuContainer>
);

export default Menu;
