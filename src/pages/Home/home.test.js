import React from 'react';
import { shallow } from 'enzyme';

import Home from './index';

let component;

describe('Homepage', () => {
  beforeEach(() => {
    component = shallow(<Home />);
  });

  it('renders without crashing', () => {
    expect(component).toBeDefined();
  });

  it('contains a header', () => {
    expect(component.find('HeaderContainer')).toExist();
  });

  it('contains a menu', () => {
    expect(component.find('Menu')).toExist();
  });

  it('contains a description', () => {
    expect(component.find('Description')).toExist();
  });

  it('contains a footer', () => {
    expect(component.find('FooterContainer')).toExist();
  });
});
