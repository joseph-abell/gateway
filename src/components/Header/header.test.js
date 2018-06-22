import React from 'react';
import { shallow } from 'enzyme';
import Header from './index';

let component;

describe('Header', () => {
  beforeEach(() => {
    component = shallow(<Header />);
  });

  it('renders without crashing', () => {
    expect(component).toExist();
  });

  it('should match snapshot', () => {
    expect(shallow(<Header />)).toMatchSnapshot();
  });
});
