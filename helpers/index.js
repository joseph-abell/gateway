/* global fetch */
import { url as urlStart } from './config';

const changeLightColourToHex = colour => {
  switch (colour) {
    case 'red':
      return '#f7a994';
    case 'orange':
      return '#ffd782';
    case 'green':
      return '#55c2b8';
    default:
      return '#c1a2cd';
  }
};

const changeDarkColourToHex = colour => {
  switch (colour) {
    case 'red':
      return '#f05a64';
    case 'orange':
      return 'rgb(252, 180, 46)';
    case 'green':
      return '#067f8e';
    default:
      return '#9666a8';
  }
};

export const changeColourToHex = (colour, lightVariant) => {
  if (lightVariant) {
    return changeLightColourToHex(colour);
  }

  return changeDarkColourToHex(colour);
};

export const getMenuColour = pageData =>
  (pageData.header && pageData.header.menuColour) ||
  pageData.menuColour ||
  'red';

export const getMenu = async () => {
  const menuUrl = urlStart + 'data/menu.json';
  const menuResponse = await fetch(menuUrl).catch(e => {
    return e;
  });
  const menuData = await menuResponse.json();

  return menuData;
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

export const getLogo = async menuColour => {
  const logoLocation = getFullUrl(`data/logos/${menuColour}.json`);
  const logoResponse = await fetch(logoLocation).catch(e => {
    return e;
  });
  const logoData = await logoResponse.json();
  const logoUrl = getFullUrl(logoData.image);

  return logoUrl;
};

export const getData = async pageName => {
  const pageUrl = urlStart + pageName;
  const response = await fetch(pageUrl);

  if (!response.ok) {
    return new Error('something messed up');
  }

  const pageData = await response.json();

  return pageData;
};

export const getResizedImageUrl = url => {
  if (!url) return;
  const pageWidth = window.innerWidth;

  if (pageWidth < 768) {
    return url.split('uploads/').join('uploads/mobile/');
  } else if (pageWidth < 991) {
    return url.split('uploads/').join('uploads/tablet/');
  }

  return url.split('uploads/').join('uploads/desktop/');
};
