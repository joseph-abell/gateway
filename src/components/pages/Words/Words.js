import React from 'react';
import Async from 'react-promise';
import styled from 'styled-components';
import moment from 'moment';
import { Link, Redirect } from 'react-router-dom';
import Header from '../../../components/templates/Header';
import Footer from '../../../components/templates/Footer';
import HeaderContainer from '../../../components/HeaderContainer';
import Image from '../../../components/Image';
import { getData, getFullUrl, changeColourToHex, getMenuColour } from '../../../helpers';


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
      const { header, subtitle } = wordsPageData;
      const image = getFullUrl(header && header.image);

      let words = Object
        .values(data)
        .map(word => word.data)
        .sort((a, b) => moment(a.dateTime).isBefore(b.dateTime) ? 1 : -1);

      resolve();
    })}

    then={() => (
      <div>Words</div>
    )}
  />
);

export default Words;