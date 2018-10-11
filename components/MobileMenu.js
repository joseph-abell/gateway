import React from 'react';
import styled from 'styled-components';
import { slide as SlideMenu } from 'react-burger-menu';

const MenuLink = styled.a`
  color: ${props => props.menuColour};
  padding: 20px 25px;
  display: inline-block;
  text-decoration: none;
`;

const MenuItem = ({ menuItem, menuColour }) => (
  <div key={menuItem.title}>
    <MenuLink href={menuItem.link} menuColour={menuColour}>
      {menuItem.title}
    </MenuLink>
  </div>
);

const MobileMenu = ({
  menuItems = [],
  menuColour,
  iconUrl,
  isOpen,
  handleStateChange
}) => {
  const styles = {
    bmBurgerButton: {
      display: 'none'
    },
    bmBurgerBars: {
      background: menuColour,
      height: '3px'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: menuColour
    },
    bmMenu: {
      background: 'white',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: menuColour,
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
    <SlideMenu
      styles={styles}
      isOpen={isOpen}
      onStateChange={state => handleStateChange(state)}
    >
      {menuItems.map((menuItem, id) => (
        <MenuItem menuItem={menuItem} menuColour={menuColour} key={id} />
      ))}
    </SlideMenu>
  );
};

export default MobileMenu;
