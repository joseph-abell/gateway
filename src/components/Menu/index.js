import React from 'react';

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

const Menu = ({ menuItems, menuColour, iconUrl }) => (
  <div className="menu">
    <Logo iconUrl={iconUrl} />
    { menuItems.map((menuItem, id) => (
      <MenuItem menuItem={menuItem} key={id} />
    )) }
    <Search />
  </div>
);

export default Menu;
