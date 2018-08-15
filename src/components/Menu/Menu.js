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

const Menu = ({ logoUrl }) => (
  <MenuContainer classname="menu">
    <StyledLogo>
      <Logo logoUrl={logoUrl} />
    </StyledLogo>
  </MenuContainer>
);

export default Menu;
