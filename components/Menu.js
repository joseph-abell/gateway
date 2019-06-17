import React from 'react';
import styled from 'styled-components';
import {FaBars, FaSearch} from 'react-icons/fa';
import {Link} from '../router';
import {HideAt, ShowAt} from 'react-with-breakpoints';

const Logo = ({logoUrl}) => <img src={logoUrl} alt="logo" />;

const StyledLogo = styled.div`
  padding: 0 20px 1px;
  text-align: center;

  @media screen and (min-width: 991px) {
    float: left;
  }
`;

const StyledLink = styled.a`
  padding-top: 15px;
  display: inline-block;
`;

const MenuContainer = styled.div`
  height: 60px;
  position: ${props => (props.stickyMenu ? 'sticky' : 'static')};
  top: 0;
  z-index: 2;
  background: #fff;
`;

const MenuInnerContainer = styled.div`
  @media screen and (min-width: 1241px) {
    width: 1200px;
    margin: 0 auto;
  }
`;

const MenuButton = styled.div`
  height: 60px;
  width: 60px;
  float: left;
  cursor: pointer;
  line-height: 60px;
  margin: 0 auto;
  font-size: 30px;
  color: ${props => props.colour};

  svg {
    display: block;
    padding-top: 15px;
    padding-left: 15px;
  }
`;

const SearchButton = styled.div`
  height: 60px;
  width: 60px;
  float: right;
  cursor: pointer;
  line-height: 60px;
  margin: 0 auto;
  font-size: 30px;
  color: ${props => props.colour};

  svg {
    display: block;
    padding-top: 15px;
    padding-left: 15px;
  }
`;

const MainMenu = styled.ul`
  display: flex;
  padding-left: 50px;
`;

const MenuItem = styled.li`
  flex: 1 1 auto;
  text-align: center;
  line-height: 60px;
  color: ${props => props.colour};

  &:hover ul {
    display: block;
  }
`;

const StyledMenuLink = styled.a`
  color: ${props => props.colour};

  &:hover {
    border-bottom: 5px solid ${props => props.colour};
  }
`;

const ChildMenu = styled.ul`
  display: none;
  background: white;
  text-align: left;
  position: absolute;
  z-index: 2;
  padding-bottom: 10px;
`;

const ChildLink = styled.a`
  display: block;
  padding: 0 20px;
  line-height: 30px;
  color: ${props => props.colour};

  &:hover {
    span {
      border-bottom-color: ${props => props.colour};
    }
  }
`;

const ChildUnderline = styled.span`
  display: inline-block;
  border-bottom: 5px solid white;
`;

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stickyMenu: props.sticky || false,
      alwaysSticky: props.sticky || false
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = () => {
    if (this.state.alwaysSticky) {
      return;
    }

    if (window.scrollY >= 200 && !this.state.stickyMenu) {
      this.setState({
        stickyMenu: true
      });
    } else if (window.scrollY < 200 && this.state.stickyMenu) {
      this.setState({
        stickyMenu: false
      });
    }
  };

  render() {
    const {logoUrl, onMenuClick, onSearchClick, colour, menuItems} = this.props;

    const {stickyMenu} = this.state;

    return (
      <MenuContainer classname="menu" stickyMenu={stickyMenu}>
        <MenuInnerContainer>
          <ShowAt breakpoint="mediumAndBelow">
            <MenuButton onClick={onMenuClick} colour={colour}>
              <FaBars />
            </MenuButton>
          </ShowAt>
          <SearchButton onClick={onSearchClick} colour={colour}>
            <FaSearch />
          </SearchButton>
          <StyledLogo>
            <Link href="/" prefetch>
              <StyledLink>
                <Logo logoUrl={logoUrl} />
              </StyledLink>
            </Link>
          </StyledLogo>
          <HideAt breakpoint="mediumAndBelow">
            <nav>
              <MainMenu>
                {menuItems.map(item => (
                  <MenuItem colour={colour} key={item.link}>
                    <Link href={item.link}>
                      <StyledMenuLink colour={colour} href={item.link}>
                        {item.title}
                      </StyledMenuLink>
                    </Link>
                    {item.childMenu && item.childMenu.length && (
                      <ChildMenu>
                        {item.childMenu.map(childItem => (
                          <li key={childItem.link}>
                            <Link href={childItem.link} prefetch>
                              <ChildLink colour={colour} href={childItem.link}>
                                <ChildUnderline>
                                  {childItem.title}
                                </ChildUnderline>
                              </ChildLink>
                            </Link>
                          </li>
                        ))}
                      </ChildMenu>
                    )}
                  </MenuItem>
                ))}
              </MainMenu>
            </nav>
          </HideAt>
        </MenuInnerContainer>
      </MenuContainer>
    );
  }
}

export default Menu;
