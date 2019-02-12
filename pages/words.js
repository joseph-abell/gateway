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
import Container from '../components/Container';
import Clearfix from '../components/Clearfix';
import StyledLink from '../components/LinkWords';
import StyledText from '../components/TextWords';
import StyledDate from '../components/DateWords';
import Title from '../components/H2Words';
import ReadMore from '../components/ReadMoreWords';
import StyledTextContainer from '../components/TextContainerWords';
import StyledHideOnMobile from '../components/HideOnMobileWords';
import Word from '../components/WordWords';
import Pagination from '../components/Pagination';
import StyledPagination from '../components/PaginationWords';
import Subtitle from '../components/Subtitle';
import StyledImageWrapper from '../components/ImageWrapperWords';

import {
  getData,
  getFullUrl,
  changeColourToHex,
  getMenuColour
} from '../helpers';

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
                        <Subtitle>{word.subtitle}</Subtitle>
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
