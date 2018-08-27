import React from 'react';
import styled from 'styled-components';
import { slide as SlideMenu } from 'react-burger-menu';
import Async from 'react-promise';
import Downshift from 'downshift';
import flat from 'flat';
import { getData } from '../../helpers';

const SearchLink = styled.a`
  color: white;
  padding: 20px 25px;
  display: inline-block;
  text-decoration: none;
`;

const SearchItem = ({ searchItem, value }) => {
  return (
    <li key={searchItem.data.text}>
      <SearchLink href={searchItem.link}>{searchItem.data.title}</SearchLink>
    </li>
  );
};

const SearchInput = (props) => (
  <input {...props} type='text' />  
);

class Search extends React.Component {
  state = {
    value: '',
    searchData: []
  };
  
  handleSearch = (event) => {
    this.setState({ value: event.target.value });
  };
  
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
      <SlideMenu styles={styles} right isOpen={isOpen} onStateChange={(state) => handleStateChange(state)}>
        <Downshift
          onChange={this.handleSearch}
          itemToString={item => {
            console.log(item);
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
                      before={() => {
                        if (!this.state.value) {
                          return null;
                        }
                        
                        return (
                          <div>Loading</div>
                        );
                      }}
          
                      promise={this.promise}
          
                      then={(data) => (
                        <ul {...getMenuProps()}>
                          { data
                            .filter(item =>
                              item.flat
                                .some(flatItem =>
                                  flatItem[1] &&
                                  !Array.isArray(flatItem[1]) &&
                                  flatItem[1]
                                    .toLowerCase()
                                    .includes(inputValue.toLowerCase())
                                  
                                )
                            )
                            .map(item => (
                              <li
                                {...getItemProps({
                                  key: item.data.title,
                                  item: item
                                })}
                              >
                                {item.data.title}
                              </li>
                            ))
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

