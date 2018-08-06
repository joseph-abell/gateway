import React from 'react';
import styled from 'styled-components';
const Logo = ({iconUrl}) => (
  <img src={iconUrl} alt='logo' />
);

const MenuItem = ({ menuItem }) => (
  <div key={menuItem.title}>
    <a href={menuItem.link}>{menuItem.title}</a>
  </div>
);

const Search = () => (
  <img src='' alt='search' />
);

const StyledMenu = styled.div`
  float: right;
`;

const StyledLogo = styled.div`
  padding: 15px 20px 1px;
  float: left;
`;

const StyledSearch = styled.div`
  float: right;
`;
const MenuContainer = styled.div`
  height: 60px;
`; 


const Menu = ({ menuItems = [], menuColour, iconUrl }) => (
  <MenuContainer classname="menu">
    <StyledLogo>
      <Logo iconUrl={iconUrl} />
    </StyledLogo>
    <StyledSearch>
      <Search />
    </StyledSearch>
    <StyledMenu>
      { menuItems.map((menuItem, id) => (
        <MenuItem menuItem={menuItem} key={id} />
      )) }
    </StyledMenu>
    <div className="clearfix" />
  </MenuContainer>
);

export default Menu;
