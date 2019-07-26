import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {withRouter} from 'next/router';
import Head from 'next/head';
import {format} from 'date-fns';
import {markdown} from 'markdown';

import {getData, getMenuColour, getAllColours, getFullUrl} from '../helpers';
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

const WordText = styled.div`
  line-height: 1.5em;

  p {
    margin-bottom: 20px;
  }

  a {
    color: ${props => props.colour};
  }
`;

const Word = ({router}) => {
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [colour, setColour] = useState('');
  const [colourHex, setColourHex] = useState('');
  const [colourHexLight, setColourHexLight] = useState('');
  const [date, setDate] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [image, setImage] = useState('');
  const [audioFile, setAudioFile] = useState('');
  const [deck, setDeck] = useState('');
  const [youtubeLink, setYoutubeLink] = useState('');
  const [file, setFile] = useState('');
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    let {
      query: {id}
    } = router;

    id = id
      .split(' ')
      .join('-')
      .split(':')
      .join('')
      .toLowerCase();

    getData(`data/words/${id}.json`).then(data => {
      let {audioFile} = data;
      if (!audioFile || !audioFile.includes('.mp3')) {
        audioFile = '';
      } else {
        audioFile = getFullUrl(audioFile);
      }
      setTitle(data.title);
      const [colour, colourHex, colourHexLight] = getAllColours(
        getMenuColour(data)
      );
      setColour(colour);
      setColourHex(colourHex);
      setColourHexLight(colourHexLight);
      setDate(data.date);
      setSubtitle(data.subtitle);
      setImage(data.image);
      setAudioFile(audioFile);
      setDeck(data.deck);
      setYoutubeLink(data.youtubeLink);
      setFile(data.file);
      setAuthors(data.authors);

      setLoading(false);
    });
  }, [router]);

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
          <WordText
            dangerouslySetInnerHTML={{__html: deck}}
            colour={colourHex}
          />
        )}

        {deck && !deck.startsWith('<') && (
          <WordText
            dangerouslySetInnerHTML={{__html: markdown.toHTML(deck)}}
            colour={colourHex}
          />
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
