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

  it('should render a header', () => {
    expect(component.find('header')).toExist();
  });

  it('should render a h1', () => {
    expect(component.find('h1')).toExist();
  });

  it('should render an image', () => {
    expect(component.find('img')).toExist();
  });
})