import React from 'react';
import Async from 'react-promise';
import MobileMenu from '../../MobileMenu';
import Search from '../../Search';
import Menu from '../../Menu';
import Clearfix from '../../Clearfix';

import { getMenu, getFullUrl, getLogo } from '../../../helpers';

const HeaderTemplate = ({ colour, colourHex, Header, title, image }) => (
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
      <React.Fragment>
        <MobileMenu
          menuItems={menu}
          menuColour={colourHex}
        />
        <Search
          colour={colourHex}
        />
        <Header text={title} image={getFullUrl(image)} />
        <Menu
          menuItems={menu}
          menuColour={colourHex}
          logoUrl={logoUrl}
        />
        <Clearfix />
      </React.Fragment>
    )}
  />
);

export default HeaderTemplate;

