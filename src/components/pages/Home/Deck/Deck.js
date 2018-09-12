import * as React from 'react';
import styled from 'styled-components';

const Text = styled.div`
	background-color: ${props => props.colour};
	color: white;
	padding: 35px;
	line-height: 30px;
`;

const Image = styled.div`
  background-image: url('${props => props.src}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const ImageWrapper = styled.div`
	position: relative;
	min-height: 200px;
`;

const Deck = ({colour, text, image}) => (
  <div>
    <Text colour={colour}>
      {text}
    </Text>
    <ImageWrapper>
    	<Image src={image} />
    </ImageWrapper>
  </div>
);

export default Deck;
