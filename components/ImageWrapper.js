import styled from 'styled-components';

const ImageWrapper = styled.div`
  position: relative;
  height: ${props => props.height || '200px'};
  background: ${props => props.color};
  overflow: hidden;
`;

export default ImageWrapper;