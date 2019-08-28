import React, {useState, useEffect} from 'react';
import MobileMenu from '../components/MobileMenu';
import Search from '../components/Search';
import Menu from '../components/Menu';
import {HideAt} from 'react-with-breakpoints';
import Clearfix from '../components/Clearfix';

import {getMenu, getFullUrl, getLogo, getResizedImageUrl} from '../helpers';

class MenuTemplate extends React.Component {
  state = {
    menuOpen: false,
    searchOpen: false
  };

  handleMenuStateChange({isOpen}) {
    this.setState({menuOpen: isOpen});
  }

  handleSearchStateChange({isOpen}) {
    this.setState({searchOpen: isOpen});
  }

  render() {
    const {
      menuItems,
      menuColour,
      borderColour,
      logoUrl,
      sticky,
      children
    } = this.props;

    const mobileMenuItems = menuItems.reduce(
      (acc, item) =>
        item.childMenu ? [...acc, ...item.childMenu] : [...acc, item],
      []
    );

    return (
      <React.Fragment>
        <HideAt breakpoint="large">
          <MobileMenu
            menuItems={mobileMenuItems}
            menuColour={menuColour}
            isOpen={this.state.menuOpen}
            handleStateChange={state => {
              this.handleMenuStateChange(state);
            }}
          />
        </HideAt>
        <Search
          colour={menuColour}
          borderColour={borderColour}
          isOpen={this.state.searchOpen}
          handleStateChange={state => {
            this.handleSearchStateChange(state);
          }}
        />
        {children}
        <Menu
          menuItems={menuItems}
          colour={menuColour}
          logoUrl={logoUrl}
          sticky={sticky}
          onMenuClick={() => {
            this.handleMenuStateChange({isOpen: true});
          }}
          onSearchClick={() => {
            this.handleSearchStateChange({isOpen: true});
          }}
        />
        <Clearfix />
      </React.Fragment>
    );
  }
}

const HeaderTemplate = ({
  colour,
  colourHex,
  colourHexLight,
  Header,
  title,
  image
}) => {
  const [loading, setLoading] = useState(true);
  const [menu, setMenu] = useState([]);
  const [logoUrl, setLogoUrl] = useState('');

  useEffect(() => {
    Promise.all([getMenu(), getLogo(colour)]).then(([{menu}, logoUrl]) => {
      setMenu(menu);
      setLogoUrl(logoUrl);
      setLoading(false);
    });
  }, []);

  if (loading) return <div />;

  if (!title || !image) {
    return (
      <MenuTemplate
        menuItems={menu}
        menuColour={colourHex}
        borderColour={colourHexLight}
        logoUrl={logoUrl}
        sticky={true}
      />
    );
  }

  return (
    <MenuTemplate
      menuItems={menu}
      menuColour={colourHex}
      borderColour={colourHexLight}
      logoUrl={logoUrl}
    >
      <Header
        text={title}
        image={getResizedImageUrl(getFullUrl(image))}
        colour={colourHex}
      />
    </MenuTemplate>
  );
};

export default HeaderTemplate;
