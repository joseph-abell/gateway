import styled from 'styled-components';
import { getResizedImageUrl } from '../helpers';

const Image = styled.div`
  background-image: url('${props => getResizedImageUrl(props.url)}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: opacity 0.3s;
`;

export default Image;
