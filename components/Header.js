import styled from 'styled-components';

const Header = styled.header`
  background-color: ${props => props.colour};
  background-image: url("${props => props.image}");
  height: 200px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  h1 {
    line-height: 200px;
    text-align: center;
    font-size: 40px;
  }

  @media screen and (min-width: 991px) {
    height: 400px;

    h1 {
      line-height: 400px;
        font-size: 145px;
    }
  }

  @media screen and (min-width: 1241px) {
    height: 600px;

    h1 {
      line-height: 600px;
    }
  }
`;

export default Header;
