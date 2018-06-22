import React from 'react';
import { shallow } from 'enzyme';
import HeaderContainer from './index';

let component;

describe('HeaderContainer', () => {
  beforeEach(() => {
    component = shallow(<HeaderContainer />);
  });

  it('should render without crashing', () => {
    expect(component).toBeDefined();
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
})