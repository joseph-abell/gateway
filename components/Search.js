import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {slide as SlideMenu} from 'react-burger-menu';
import Async from 'react-promise';
import Downshift from 'downshift';
import flat from 'flat';
import {Link} from '../router';
import {getData} from '../helpers';

const StyledLink = styled.a`
  color: white;
  padding: 20px 25px;
  display: inline-block;
  text-decoration: none;
`;

const StyledSearchInput = styled.input`
  background: ${props => props.colour};
  color: white;
  border: 0;
  font-size: 20px;
  border-bottom: 3px solid ${props => props.borderColour};
  font-family: 'Ginger', sans-serif;
`;

const SearchInput = props => <StyledSearchInput {...props} type="text" />;

const SearchListItem = ({item, getItemProps}) => (
  <li
    {...getItemProps({
      key: item.data.title,
      item: item
    })}
  >
    <Link href={`/${item.pageUrl}`}>
      <StyledLink>
        <div>
          {item.data.title
            .split('-')
            .map(word => word && word[0].toUpperCase() + word.substr(1))
            .join(' ')}
        </div>
        <div>
          {item.breadcrumb
            .split(' - ')
            .join('___')
            .split('-')
            .map(word => word && word[0].toUpperCase() + word.substr(1))
            .join(' ')
            .split('___')
            .map(word => word && word[0].toUpperCase() + word.substr(1))
            .join(' - ')}
        </div>
      </StyledLink>
    </Link>
  </li>
);

const blackList = [
  'audioFile',
  'colour',
  'date',
  'email',
  'file',
  'filters',
  'time',
  'titleRole',
  'image',
  'menuColour',
  'optionalContent',
  'phoneNumber',
  'youtubeLink'
];

const setStyles = colour => ({
  bmBurgerButton: {
    display: 'none'
  },
  bmBurgerBars: {
    background: colour,
    height: '3px'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: 'white'
  },
  bmMenu: {
    background: colour,
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: 'white',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.2)'
  }
});

const Search = ({colour, isOpen, handleStateChange, borderColour}) => {
  const [loading, setLoading] = useState(true);
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    getData('data/search/index.json').then(data => {
      data.forEach((item, index) => {
        const flattened = Object.entries(flat(item.data));
        const filtered = flattened.reduce((acc, item) => {
          const inBlackList = blackList.some(blackListItem =>
            item[0].includes(blackListItem)
          );

          return inBlackList ? acc : [...acc, item];
        }, []);

        data[index].flat = filtered;

        let pageUrl = data[index].url.slice(0, -5).split('data/')[1];

        data[index].pageUrl = pageUrl;

        const breadcrumb = pageUrl.split('/').join(' - ');

        data[index].breadcrumb = breadcrumb;

        setSearchData(data);
        setLoading(false);
      });
    });
  }, []);

  const styles = setStyles(colour);

  const onSearch = (data, inputValue) =>
    data.filter(item =>
      item.flat.some(
        flatItem =>
          flatItem &&
          flatItem[1] &&
          typeof flatItem[1] !== 'object' &&
          !Array.isArray(flatItem[1]) &&
          typeof flatItem[1] !== 'boolean' &&
          typeof flatItem[1] !== 'number' &&
          flatItem[1].toLowerCase().includes(inputValue.toLowerCase())
      )
    );

  if (loading) return <div />;

  return (
    <SlideMenu
      styles={styles}
      right
      isOpen={isOpen}
      onStateChange={handleStateChange}
    >
      <Downshift
        itemToString={item => {
          return '';
        }}
      >
        {props => {
          const {getInputProps, getMenuProps, getItemProps, inputValue} = props;

          return (
            <div>
              <SearchInput
                {...getInputProps()}
                colour={colour}
                borderColour={borderColour}
              />
              {isOpen && !!inputValue.length && (
                <ul {...getMenuProps()}>
                  {onSearch(searchData, inputValue)
                    .filter(item => {
                      if (item.type !== 'people') return true;
                      if (!item.data.filters.all) return false;
                      if (item.data.filters.all === 'false') return false;
                      return true;
                    })
                    .map(item => (
                      <SearchListItem item={item} getItemProps={getItemProps} />
                    ))}
                </ul>
              )}
            </div>
          );
        }}
      </Downshift>
    </SlideMenu>
  );
};

export default Search;
