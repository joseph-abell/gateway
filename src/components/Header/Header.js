import styled from 'styled-components';

const Header = styled.header`
  background-color: ${props => props.colour};
  background-image: url("
  ${ props => props.image }
  ");
  height: 200px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  h1 {
    line-height: 200px;
    text-align: center;
  }
`;

export default Header;