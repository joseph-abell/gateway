import styled from 'styled-components';

const HideOnDesktop = styled.div`
  display: block;

  @media screen and (min-width: 991px) {
    display: none;
  }
`;

export default HideOnDesktop;
