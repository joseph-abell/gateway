import React from 'react';
import styled from 'styled-components';
import { slide as SlideMenu } from 'react-burger-menu';
import Async from 'react-promise';
import Downshift from 'downshift';
import flat from 'flat';
import { Link } from 'react-router-dom';
import { getData } from '../../helpers';

const StyledLink = styled(Link)`
  color: white;
  padding: 20px 25px;
  display: inline-block;
  text-decoration: none;
`;

const SearchInput = (props) => (
  <input {...props} type='text' />
);

const SearchListItem = ({item, getItemProps}) => (
  <li
    {...getItemProps({
      key: item.data.title,
      item: item
    })}
  >
    <StyledLink to={item.pageUrl}>
      <div>{item.data.title}</div>
      <div>{item.breadcrumb}</div>
    </StyledLink>
  </li>
);

class Search extends React.Component {
  state = {
    value: '',
    searchData: []
  };

  handleSearch = (event) => {
    this.setState({ value: event.target.value });
  };
  
  search = (data, inputValue) => (
    data.filter(item =>
      item.flat.some(flatItem =>
        flatItem[1] &&
        !Array.isArray(flatItem[1]) &&
        flatItem[1]
          .toLowerCase()
          .includes(inputValue.toLowerCase())
      )
    )
  );

  promise = new Promise(async (resolve) => {
    if (this.state.searchData.length) {
      return resolve(this.state.searchData);
    }

    const data = await getData('data/search/index.json');

    const blackList = [
      'audioFile', 'colour', 'date', 'email', 'file',
      'filters', 'time', 'titleRole', 'image', 'menuColour',
      'optionalContent', 'phoneNumber', 'youtubeLink'
    ];

    data.forEach((item, index) => {
      const flattened = Object.entries(flat(data[index].data));
      const filtered = flattened
        .reduce((acc, item) => {
          const inBlackList = blackList.some(blackListItem =>
            item[0].includes(blackListItem)
          );

          return inBlackList ? acc : [...acc, item];
        }, []);

      data[index].flat = filtered;

      let pageUrl = data[index].url
        .slice(0, -5)
        .split('data/')[1];

      data[index].pageUrl = pageUrl;

      const breadcrumb = pageUrl.split('/').join(' - ');

      data[index].breadcrumb = breadcrumb;

      this.setState({
        searchData: data
      });
    });

    return resolve(data);
  })

  render = () => {
    const { colour, isOpen, handleStateChange } = this.props;

    const styles = {
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
    };

    return (
      <SlideMenu
        styles={styles}
        right
        isOpen={isOpen}
        onStateChange={handleStateChange}
      >
        <Downshift
          onChange={this.handleSearch}
          itemToString={item => {
            return '';
          }}
        >
          {(props) => {
            const { getInputProps, getMenuProps, getItemProps, inputValue } = props;

            return (
              <div>
                <SearchInput {...getInputProps()} />
                {(isOpen && !!inputValue.length) && (
                  <Async
                    promise={this.promise}

                    then={data => (
                      <ul {...getMenuProps()}>
                        {
                          this.search(data, inputValue).map(item =>
                            <SearchListItem
                              item={item}
                              getItemProps={getItemProps}
                            />
                          )
                        }
                      </ul>
                    )}
                  />
                )}
              </div>
            );
          }}
        </Downshift>
      </SlideMenu>
    );
  };
};

export default Search;

