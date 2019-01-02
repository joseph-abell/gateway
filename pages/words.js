import React from 'react';
import Async from 'react-promise';
import styled from 'styled-components';
import { format, compareAsc } from 'date-fns';
import Head from 'next/head';
import { withRouter } from 'next/router';

import { Link } from '../router';
import Header from '../templates/Header';
import Footer from '../templates/Footer';
import HeaderContainer from '../components/HeaderContainer';
import PageSummary from '../components/PageSummary';
import Image from '../components/Image';
import ImageWrapper from '../components/ImageWrapper';
import HideOnMobile from '../components/HideOnMobile';
import Container from '../components/Container';
import Clearfix from '../components/Clearfix';
import {
  getData,
  getFullUrl,
  changeColourToHex,
  getMenuColour
} from '../helpers';

const StyledLink = styled.a`
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

  @media screen and (min-width: 991px) {
    position: absolute;
    bottom: 0;
    width: 50%;
  }
`;

const StyledTextContainer = styled.div`
  @media screen and (min-width: 991px) {
    float: left;
    width: 50%;
  }
`;

const StyledHideOnMobile = styled(HideOnMobile)`
  float: right;
  width: 50%;
`;

const StyledImageWrapper = styled(ImageWrapper)`
  min-height: 274px;
  margin-bottom: 0;
`;

const Word = styled.li`
  @media screen and (min-width: 991px) {
    position: relative;
    height: 500px;
    margin-bottom: 20px;
  }
`;

const StyledNotLink = styled.div`
  display: inline-block;
  margin-right: 20px;
`;

const StyledPaginationLink = styled.a`
  display: inline-block;
  margin-right: 20px;
  color: #fff;
  border-bottom: 2px solid #fff;
`;

const Pagination = ({ maxCount, currentPage = 1 }) => {
  console.log(currentPage);
  let links = [];

  for (let i = 1; i < maxCount + 1; i++) {
    links.push(i);
  }

  return links.map(link => {
    if (link === parseInt(currentPage)) {
      return <StyledNotLink key={link}>{link}</StyledNotLink>;
    }

    if (link === 1) {
      return (
        <Link href="words" key={link} passHref>
          <StyledPaginationLink>{link}</StyledPaginationLink>
        </Link>
      );
    }

    return (
      <Link href={`words?page=${link}`} key={link} passHref>
        <StyledPaginationLink>{link}</StyledPaginationLink>
      </Link>
    );
  });
};

const StyledPagination = styled.div`
  background: ${({ color }) => color};
  padding: 10px 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #fff;
`;

const Words = ({ router = { query: { page: 1 } } }) => (
  <Async
    promise={
      new Promise(async resolve => {
        const currentPage = router.query.page || 1;
        const data = await getData('data/words/index.json');
        const wordsPageData = await getData('data/pages/words.json');
        const colour = getMenuColour(wordsPageData);
        const colourHex = changeColourToHex(colour);
        const lightColourHex = changeColourToHex(colour, true);
        const { header = {}, subtitle, title } = wordsPageData;
        const image = getFullUrl(header && header.image);

        let words = Object.values(data)
          .map(word => word.data)
          .filter(word => !!word.date)
          .sort((a, b) => {
            return compareAsc(new Date(b.date), new Date(a.date));
          });

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
      })
    }
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
    }) => (
      <React.Fragment>
        <Head>
          <title key="title">Words - Gateway Church, York</title>
        </Head>
        <Header
          colour={colour}
          colourHex={colourHex}
          colourHexLight={lightColourHex}
          title={title}
          image={image}
          Header={HeaderContainer}
        />
        {subtitle &&
          subtitle.subtitle && (
            <PageSummary color={colourHex}>{subtitle.subtitle}</PageSummary>
          )}

        <Container>
          {maxPageCount > 1 && (
            <StyledPagination color={colourHex}>
              <Pagination maxCount={maxPageCount} currentPage={currentPage} />
            </StyledPagination>
          )}
          <ul>
            {words.map(word => (
              <Word key={word.title}>
                <Link href={`/words/${word.title}`} passHref>
                  <StyledLink colour={changeColourToHex(word.colour, true)}>
                    <StyledTextContainer>
                      <StyledText>
                        <StyledDate colour={changeColourToHex(word.colour)}>
                          {format(word.date, 'EEEE do LLLL yyyy')}
                        </StyledDate>
                        <Title>{word.title}</Title>
                      </StyledText>
                      <ReadMore colour={changeColourToHex(word.colour)}>
                        Read More +
                      </ReadMore>
                    </StyledTextContainer>
                    <StyledHideOnMobile>
                      <StyledImageWrapper
                        colour={changeColourToHex(word.colour)}
                        marginBottom={0}
                      >
                        <Image url={getFullUrl(word.image)} />
                      </StyledImageWrapper>
                    </StyledHideOnMobile>
                    <Clearfix />
                  </StyledLink>
                </Link>
              </Word>
            ))}
          </ul>
        </Container>
        <Footer />
      </React.Fragment>
    )}
  />
);

export default withRouter(Words);
