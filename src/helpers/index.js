export const getData = async (urlStart, pageName) => {
  const pageUrl = urlStart + pageName;
  const response = await fetch(pageUrl);
  const pageData = await response.json();
  let menuColour = 'red';

  if (pageData.header) {
    if (pageData.header.menuColour) {
      menuColour = pageData.header.menuColour;
    }
  }

  const iconLocation = `${urlStart}data/logos/${menuColour}.json`;
  const iconResponse = await fetch(iconLocation);
  const iconData = await iconResponse.json();
  const iconUrl = urlStart + iconData.image.slice(1);

  const menuResponse = await fetch(urlStart + 'data/menu.json');
  const menuData = await menuResponse.json();

  const result = {
    pageData,
    iconUrl,
    menuData
  };

  return result;
};
