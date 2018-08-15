import { url as urlStart } from '../config';

export const parseColour = (colour, lightVariant) => {
  if (lightVariant) {
    switch(colour) {
      case 'red':
        return '#f05a64';
      default:
        return '#f05a64';
    }
  }

  switch(colour) {
    case 'red':
      return '#f05a64';
    default:
      return '#f05a64';
  }
}

export const getMenuColour = pageData => pageData.header.menuColour || 'red';

export const getMenu = async () => {
  const menuUrl = urlStart + 'data/menu.json';
  const menuResponse = await fetch(menuUrl);
  const menuData = await menuResponse.json();

  return menuData;
};

export const getLogo = async (menuColour) => {
  const logoLocation = `${urlStart}data/logos/${menuColour}.json`;
  const logoResponse = await fetch(logoLocation);
  const logoData = await logoResponse.json();
  const logoUrl = getFullUrl(logoData.image);

  return logoUrl;
}

export const getData = async (pageName) => {
  const pageUrl = urlStart + pageName;
  const response = await fetch(pageUrl);
  const pageData = await response.json();

  return pageData;
};

export const getFullUrl = (urlEnd) => {
  if (urlEnd.includes('http')) {
    return urlEnd;
  }

  if (urlEnd[0] === '/') {
    urlEnd = urlEnd.replace('/', '');
  }

  return urlStart + urlEnd;
};

