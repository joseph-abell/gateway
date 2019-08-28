import React, {useState, useEffect} from 'react';
import {format, compareAsc} from 'date-fns';
import Head from 'next/head';
import {withRouter} from 'next/router';

import {Link} from '../router';
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
  getMenuColour,
  getAllColours
} from '../helpers';

const Words = ({router}) => {
  const [loading, setLoading] = useState(true);
  const [colour, setColour] = useState('');
  const [colourHex, setColourHex] = useState('');
  const [colourHexLight, setColourHexLight] = useState('');
  const [header, setHeader] = useState('');
  const [image, setImage] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [title, setTitle] = useState('');
  const [maxPageCount, setMaxPageCount] = useState(0);
  const [words, setWords] = useState('');
  const [wordsCount, setWordsCount] = useState(0);
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    Promise.all([
      getData('data/words/index.json'),
      getData('data/pages/words.json')
    ]).then(([data, wordsPageData]) => {
      const currentPage = (router && router.query && router.query.page) || 1;
      setCurrentPage(currentPage);
      const [colour, colourHex, colourHexLight] = getAllColours(
        getMenuColour(data)
      );
      setColour(colour);
      setColourHex(colourHex);
      setColourHexLight(colourHexLight);
      setHeader(wordsPageData.header);
      setImage(getFullUrl(wordsPageData.header.image));
      setSubtitle(wordsPageData.subtitle);
      setTitle(wordsPageData.title);

      let words = Object.values(data)
        .map(word => word.data)
        .filter(word => !!word.date)
        .sort((a, b) => {
          return compareAsc(new Date(b.date), new Date(a.date));
        });

      setWordsCount(words.length);

      setWords(words.slice(currentPage * 10 - 10, currentPage * 10));

      setMaxPageCount(Math.ceil(wordsCount / 10));
      setLoading(false);
    });
  }, [router]);

  if (loading) return <div />;
  if (!words || words.length === 0) {
    return <div />;
  }

  return (
    <React.Fragment>
      <Head>
        <title key="title">Words - Gateway Church, York</title>
      </Head>
      <Header
        colour={colour}
        colourHex={colourHex}
        colourHexLight={colourHexLight}
        title={title}
        image={image}
        Header={HeaderContainer}
      />
      {subtitle && subtitle.subtitle && (
        <PageSummary color={colourHex}>{subtitle.subtitle}</PageSummary>
      )}

      <Container>
        {maxPageCount > 1 && (
          <StyledPagination color={colourHex}>
            <Pagination maxCount={maxPageCount} currentPage={currentPage} />
          </StyledPagination>
        )}
        <ul>
          {words.map(word => {
            const authors =
              word.authors &&
              word.authors
                .map(({author}) => author.trim())
                .filter(author => author);

            return (
              <Word key={word.title}>
                <Link href={`/words/${word.slug}`} passHref>
                  <StyledLink colour={changeColourToHex(word.colour, true)}>
                    <StyledTextContainer>
                      <StyledText>
                        <StyledDate colour={changeColourToHex(word.colour)}>
                          {format(word.date, 'EEEE do LLLL yyyy')}
                          {authors && authors.length > 0 && (
                            <>
                              {authors.map(author => (
                                <React.Fragment key={author}>
                                  {' - '}
                                  {author
                                    .split('-')
                                    .map(
                                      word =>
                                        word[0].toUpperCase() + word.substr(1)
                                    )
                                    .join(' ')}
                                </React.Fragment>
                              ))}
                            </>
                          )}
                        </StyledDate>
                        <Title>
                          {word.title
                            .split('-')
                            .map(word => word[0].toUpperCase() + word.substr(1))
                            .join(' ')}
                        </Title>
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
            );
          })}
        </ul>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default withRouter(Words);
