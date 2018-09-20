import React from 'react';
import Async from 'react-promise';
import moment from 'moment';
import styled from 'styled-components';
import { Redirect, Link } from 'react-router-dom';
import Header from '../../../components/templates/Header';
import Footer from '../../../components/templates/Footer';
import HeaderContainer from '../../../components/HeaderContainer';
import PageSummary from '../../../components/PageSummary';
import Image from '../../../components/Image';
import ImageWrapper from '../../../components/ImageWrapper';
import HideOnMobile from '../../../components/HideOnMobile';
import Clearfix from '../../../components/Clearfix';
import { getData, getFullUrl, changeColourToHex, getMenuColour } from '../../../helpers';

const StyledLink = styled(Link)`
  background-color: ${props => props.colour};
  display: block;
  color: white;
`;

const StyledText = styled.div`
  padding: 40px;
`;

const StyledDate = styled.div`
  color: ${props => props.colour};
  margin-bottom: 40px;
`;

const Title = styled.h2`
  font-size: 30px;
  line-height: 42px;
  max-height: 84px;
`;

const ReadMore = styled.div`
  padding: 40px;
  background-color: ${props => props.colour};
  color: white;
`;

const StyledTextContainer = styled.div`
  float: left;
  width: 50vw;
`;

const StyledHideOnMobile = styled(HideOnMobile)`
  float: right;
  width: 50vw;
`;

const StyledImageWrapper = styled(ImageWrapper)`
  min-height: 274px;
`;

const Words = ({ location = {} }) => (
  <Async
    promise={new Promise(async (resolve) => {
      let currentPage = location.search;

      if (!currentPage) {
        currentPage = '?page=1';
      }

      currentPage = parseInt(currentPage.split('page=')[1], 10);

      const data = await getData('data/words/index.json');
      const wordsPageData = await getData('data/pages/words.json');
      const colour = getMenuColour(wordsPageData);
      const colourHex = changeColourToHex(colour);
      const lightColourHex = changeColourToHex(colour, true);
      const { header = {}, subtitle, title } = wordsPageData;
      const image = getFullUrl(header && header.image);

      let words = Object
        .values(data)
        .map(word => word.data)
        .sort((a, b) => moment(a.dateTime).isBefore(b.dateTime) ? 1 : -1);

      const wordsCount = words.length;

      words = words.slice(currentPage * 10 - 10, currentPage * 10);

      const maxPageCount = Math.ceil(wordsCount / 10);

      resolve({
        colour,
        colourHex,
        lightColourHex,
        header,
        image,
        subtitle,
        title,
        maxPageCount,
        words,
        currentPage
      });
    })}

    then={({
      colour,
      colourHex,
      lightColourHex,
      header,
      title,
      image,
      subtitle,
      maxPageCount,
      words,
      currentPage
    }) => {
      if (!words.length) {
        return (
          <Redirect to='words' />
        );
      }

      return (
        <React.Fragment>
          <Header
            colour={colour}
            colourHex={colourHex}
            title={title}
            image={image}
            Header={HeaderContainer}
          />
          { subtitle && subtitle.subtitle && (
            <PageSummary color={colourHex}>{subtitle.subtitle}</PageSummary>
          ) }

          <ul>
            { words.map((word) => console.log(word) || (
              <li key={word.title}>
                <StyledLink to={`/words/${word.title}`} colour={changeColourToHex(word.colour, true)}>
                  <StyledTextContainer>
                    <StyledText>
                      <StyledDate colour={changeColourToHex(word.colour)}>
                        {moment(word.date).format('DD.MM.YY')}
                      </StyledDate>
                      <Title>
                        {word.title}
                      </Title>
                    </StyledText>
                    <ReadMore colour={changeColourToHex(word.colour)}>
                      Read More +
                    </ReadMore>
                  </StyledTextContainer>
                  <StyledHideOnMobile>
                    <StyledImageWrapper colour={changeColourToHex(word.colour)}>
                      <Image url={getFullUrl(word.image)} />
                    </StyledImageWrapper>
                  </StyledHideOnMobile>
                  <Clearfix />
                </StyledLink>
              </li>
            )) }
          </ul>
          <Footer />
        </React.Fragment>
      );
    }}
  />
);

export default Words;