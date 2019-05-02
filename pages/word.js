import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {withRouter} from 'next/router';
import Head from 'next/head';
import {format} from 'date-fns';
import {markdown} from 'markdown';

import {url} from '../helpers/config';
import {
  getData,
  getMenuColour,
  changeColourToHex,
  getFullUrl
} from '../helpers';
import Header from '../templates/Header';
import HeaderContainer from '../components/HeaderContainer';
import Footer from '../templates/Footer';
import ImageWrapper from '../components/ImageWrapper';
import Image from '../components/Image';
import Container from '../components/Container';
import Audio from '../components/Audio';
import H1 from '../components/H1Word';
import H2 from '../components/H2Word';
import P from '../components/PWord';
import Deck from '../components/DeckWord';
import StyledDate from '../components/DateWord';
import Link from '../components/LinkWord';

const Word = ({router}) => {
  const [loading, setLoading] = useState(true);
  const [word, setWord] = useState({});

  const fetchData = async () => {
    let {
      query: {id}
    } = router;

    id = id
      .split(' ')
      .join('-')
      .split(':')
      .join('')
      .toLowerCase();

    const data = await getData(`data/words/${id}.json`);
    const colour = getMenuColour(data);

    let {audioFile} = data;
    if (!audioFile || !audioFile.includes('.mp3')) {
      audioFile = '';
    } else {
      audioFile = getFullUrl(audioFile);
    }

    setWord({
      ...data,
      audioFile,
      colour,
      colourHex: changeColourToHex(colour),
      colourHexLight: changeColourToHex(colour, true)
    });

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [router]);

  const {
    title,
    colour,
    colourHex,
    colourHexLight,
    date,
    subtitle,
    url,
    image,
    audioFile,
    deck,
    youtubeLink,
    file,
    authors
  } = word;

  if (loading) {
    return <div />;
  }

  return (
    <React.Fragment>
      <Head>
        <title key="title">{title} - Gateway Church, York</title>
      </Head>
      <Header
        colour={colour}
        colourHex={colourHex}
        colourHexLight={colourHexLight}
        Header={HeaderContainer}
      />
      <Deck colour={colourHexLight}>
        <Container>
          <StyledDate colour={colourHex}>
            {date && format(date, 'EEEE do LLLL yyyy')}{' '}
            {authors &&
              authors.map(({author}) => (
                <>
                  {' - '}
                  <Link
                    colour={colourHex}
                    href={
                      '/people/' +
                      author
                        .toLowerCase()
                        .split(' ')
                        .join('-')
                    }
                  >
                    {author
                      .split('-')
                      .map(word => word[0].toUpperCase() + word.substr(1))
                      .join(' ')}
                  </Link>
                </>
              ))}
          </StyledDate>
          <H1>
            {title &&
              title
                .split('-')
                .map(word => word[0].toUpperCase() + word.substr(1))
                .join(' ')}
          </H1>
          <H2>{subtitle}</H2>
        </Container>
      </Deck>
      <Container>
        {image && (
          <ImageWrapper>
            <Image url={getFullUrl() + image.slice(1)} />
          </ImageWrapper>
        )}

        {audioFile && (
          <P>
            <Audio
              url={audioFile}
              colour={colourHex}
              lightColour={colourHexLight}
            />
          </P>
        )}

        {file && file.endsWith('mp3') && (
          <P>
            <Audio
              url={getFullUrl(file)}
              colour={colourHex}
              lightColour={colourHexLight}
            />
          </P>
        )}

        {deck && deck.startsWith('<') && (
          <P dangerouslySetInnerHTML={{__html: deck}} />
        )}

        {deck && !deck.startsWith('<') && (
          <P dangerouslySetInnerHTML={{__html: markdown.toHTML(deck)}} />
        )}

        {youtubeLink && (
          <P>
            <Link colour={colourHex} href={youtubeLink}>
              {youtubeLink}
            </Link>
          </P>
        )}

        {file && !file.includes('mp3') && (
          <P>
            <Link colour={colourHex} href={getFullUrl(file)}>
              {file.replace('/uploads/', '')}
            </Link>
          </P>
        )}
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default withRouter(Word);
