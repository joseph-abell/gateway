import styled from 'styled-components';

const HideOnMobile = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export default HideOnMobile;
