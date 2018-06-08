import React from 'react';

const Logo = () => (
    <img src='' alt='logo' />
);

const MenuItem = ({ menuItem }) => (
    <div key={menuItem.title}>
        <a href={menuItem.link}>{menuItem.title}</a>
    </div>
);

const Search = () => (
    <img src='' alt='search' />
);

const Menu = ({ menu, menuColour }) => (
    <div className="menu">
        <Logo />
        { menu.map((menuItem, id) => (
            <MenuItem menuItem={menuItem} key={id} />
        )) }
        <Search />
    </div>
);

export default Menu;
