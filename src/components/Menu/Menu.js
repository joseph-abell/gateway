import React from 'react';
import styled from 'styled-components';

const Logo = ({ logoUrl }) => (
  <img src={logoUrl} alt='logo' />
);

const StyledLogo = styled.div`
  padding: 0 20px 1px;
  text-align: center;
`;

const A = styled.a`
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
  background-color: red;
  float: left;
  cursor: pointer;
`;

const SearchButton = styled.div`
  height: 60px;
  width: 60px;
  background-color: red;
  float: right;
  cursor: pointer;
`;

class Menu extends React.Component {
  state = {
    stickyMenu: false
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }
  
  handleScroll = () => {
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
    const { logoUrl, onMenuClick, onSearchClick } = this.props;
    const { stickyMenu } = this.state;

    return (
      <MenuContainer classname="menu" stickyMenu={stickyMenu}>
        <MenuButton onClick={onMenuClick} />
        <SearchButton onClick={onSearchClick} />
        <StyledLogo>
          <A href='/'>
            <Logo logoUrl={logoUrl} />
          </A>
        </StyledLogo>
      </MenuContainer>
    );
  };
};

export default Menu;
