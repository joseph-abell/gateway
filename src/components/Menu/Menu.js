import React from 'react';
import styled from 'styled-components';
import { FaBars, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Logo = ({ logoUrl }) => (
  <img src={logoUrl} alt='logo' />
);

const StyledLogo = styled.div`
  padding: 0 20px 1px;
  text-align: center;
`;

const StyledLink = styled(Link)`
  padding-top: 15px;
  display: inline-block;
`;

const MenuContainer = styled.div`
  height: 60px;
  position: ${props => props.stickyMenu ? 'sticky' : 'static'};
  top: 0;
  z-index: 2;
  background: #fff;
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

class Menu extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      stickyMenu: props.sticky || false,
      alwaysSticky: props.sticky || false
    }  
  }
  

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

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
  }

  render () {
    const { logoUrl, onMenuClick, onSearchClick, colour } = this.props;
    
    const { stickyMenu } = this.state;

    return (
      <MenuContainer classname="menu" stickyMenu={stickyMenu}>
        <MenuButton onClick={onMenuClick} colour={colour}>
          <FaBars />
        </MenuButton>
        <SearchButton onClick={onSearchClick} colour={colour}>
          <FaSearch />
        </SearchButton>
        <StyledLogo>
          <StyledLink to='/'>
            <Logo logoUrl={logoUrl} />
          </StyledLink>
        </StyledLogo>
      </MenuContainer>
    );
  };
};

export default Menu;
