import styled from 'styled-components';

const ReadMore = styled.div`
  padding: 40px;
  background-color: ${props => props.colour};
  color: white;

  @media screen and (min-width: 991px) {
    position: absolute;
    bottom: 0;
    width: 50%;
  }
`;

export default ReadMore;
