import React from 'react';
import Async from 'react-promise';
import MobileMenu from '../../MobileMenu';
import Search from '../../Search';
import Menu from '../../Menu';
import Clearfix from '../../Clearfix';

import { getMenu, getFullUrl, getLogo } from '../../../helpers';

class MenuTemplate extends React.Component {
  state = {
    menuOpen: false,
    searchOpen: false
  }

  handleMenuStateChange ({ isOpen }) {
    this.setState({ menuOpen: isOpen });
  }

  handleSearchStateChange ({ isOpen }) {
    this.setState({ searchOpen: isOpen });
  }

  render () {
    const { menuItems, menuColour, logoUrl, children } = this.props;
    return (
      <React.Fragment>
        <MobileMenu
          menuItems={menuItems}
          menuColour={menuColour}
          isOpen={this.state.menuOpen}
          handleStateChange={(state) => {
            this.handleMenuStateChange(state);
          }}
        />
        <Search
          colour={menuColour}
          isOpen={this.state.searchOpen}
          handleStateChange={(state) => {
            this.handleSearchStateChange(state);
          }}
        />
        {children}
        <Menu
          menuItem={menuItems}
          colour={menuColour}
          logoUrl={logoUrl}
          onMenuClick={() => {
            this.handleMenuStateChange({ isOpen: true });
          }}
          onSearchClick={() => {
            this.handleSearchStateChange({ isOpen: true });
          }}
        />
        <Clearfix />
      </React.Fragment>
    );
  };
};

const HeaderTemplate = ({ colour, colourHex, Header, title, image}) => (
  <Async
    promise={new Promise(async (resolve) => {
      const { menu } = await getMenu();
      const logoUrl = await getLogo(colour);

      resolve({
        menu,
        logoUrl
      });
    })}

    then={({ menu, logoUrl }) => (
      <MenuTemplate menuItems={menu} menuColour={colourHex} logoUrl={logoUrl}>
        <Header text={title} image={getFullUrl(image)} />
      </MenuTemplate>
    )}
  />
);

export default HeaderTemplate;

