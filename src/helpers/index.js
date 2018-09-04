/* global fetch */
import { url as urlStart } from '../config';

export const parseColour = (colour, lightVariant) => {
  if (lightVariant) {
    switch(colour) {
      case 'red':
        return '#f7a994';
      case 'orange':
        return '#ffd782';
      case 'green':
        return '#55c2b8';
      default:
        return '#c1a2cd';
    }
  }

  switch(colour) {
    case 'red':
      return '#f05a64';
    case 'orange':
      return 'rgb(252, 180, 46)';
    case 'green':
      return '#067f8e';
    default:
      return '#9666a8';
  }
}

export const getMenuColour = pageData =>
  (
    pageData.header &&
    pageData.header.menuColour
  ) ||
  pageData.menuColour ||
  'red';

export const getMenu = async () => {
  const menuUrl = urlStart + 'data/menu.json';
  const menuResponse = await fetch(menuUrl).catch((e) => {
    console.log(e);
    return e;
  });
  const menuData = await menuResponse.json();

  return menuData;
};

export const getLogo = async (menuColour) => {
  const logoLocation = getFullUrl(`data/logos/${menuColour}.json`);
  const logoResponse = await fetch(logoLocation).catch((e) => {
    console.log(e);
    return e;
  });
  const logoData = await logoResponse.json();
  const logoUrl = getFullUrl(logoData.image);

  return logoUrl;
}

export const getData = async (pageName) => {
  const pageUrl = urlStart + pageName;
  const response = await fetch(pageUrl);

  if (!response.ok) {
    return new Error('something messed up');
  }

  const pageData = await response.json();

  return pageData;
};

export const getFullUrl = (urlEnd = '') => {
  if (urlEnd.includes('http')) {
    return urlEnd;
  }

  if (urlEnd[0] === '/') {
    urlEnd = urlEnd.replace('/', '');
  }

  return urlStart + urlEnd;
};
