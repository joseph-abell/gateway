import fetch from 'isomorphic-fetch';
import {url as urlStart, colours} from './config';

export const getAllColours = (colour = '') => {
  const c = colours.find(c => c.name === colour);
  return c ? [c.name, c.hex, c.hexLight] : [];
};

export const changeColourToHex = (colour, lightVariant) => {
  const c = getAllColours(colour);

  return lightVariant ? c.hexLight : c.hex;
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
  if (!url) {
    return;
  }

  const pageWidth = window.innerWidth;

  if (pageWidth < 768) {
    return url.split('uploads/').join('uploads/mobile/');
  } else if (pageWidth < 991) {
    return url.split('uploads/').join('uploads/tablet/');
  }

  return url.split('uploads/').join('uploads/desktop/');
};
