import * as React from 'react';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

const settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true
};

const Blockquote = styled.blockquote`
  font-size: 24px;
  line-height: 30px;
  color: #333;
  padding: 20px 40px 0;
  text-align: center;
`;

const Author = styled.div`
  font-size: 24px;
  line-height: 30px;
  color: gray;
  text-align: center;
`;

const StyledSlider = styled(Slider)`
  margin-bottom: 40px;
`;

const Quote = ({ quote, author }) => (
	<div key={quote}>
		<Blockquote>{quote}</Blockquote>
    <Author>{author}</Author>
	</div>
);

const Quotes = ({ quotes }) => (
	<StyledSlider {...settings}>
		{quotes.map(Quote)}
	</StyledSlider>
);

export default Quotes;
