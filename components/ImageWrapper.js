import styled from 'styled-components';

const ImageWrapper = styled.div`
  position: relative;
  height: ${props => props.mobileHeight || '200px'};
  background: ${props => props.color};
  overflow: hidden;
  margin-bottom: ${props => props.mobileMarginBottom || '20px'};

  @media screen and (min-width: 768px) {
    height: 500px;
  }
`;

export default ImageWrapper;
