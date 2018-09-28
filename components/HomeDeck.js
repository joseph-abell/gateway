import * as React from 'react';
import styled from 'styled-components';

import HideOnMobile from './HideOnMobile';
import Clearfix from './Clearfix';
import Container from './Container';

const Text = styled.div`
	background-color: ${props => props.colour};
	color: white;
	padding: 35px;
	line-height: 30px;
	font-size: 20px;
	margin-bottom: 20px;

	@media screen and (min-width: 991px) {
	  width: calc(40% - 70px);
	  float: left;
	}
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

const StyledHideOnMobile = styled(HideOnMobile)`
  @media screen and (min-width: 991px) {
    width: calc(60% - 20px);
    float: right;
  }
`;

const HomeDeck = ({colour, text, image}) => (
  <Container>
    <Text colour={colour}>
      {text}
    </Text>
    <StyledHideOnMobile>
      <ImageWrapper>
    	  <Image src={image} />
      </ImageWrapper>
    </StyledHideOnMobile>

    <Clearfix />
  </Container>
);

export default HomeDeck;
