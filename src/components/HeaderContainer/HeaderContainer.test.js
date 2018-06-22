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

  it('should match snapshot with no data', () => {
    expect(component).toMatchSnapshot();
  });

  it('should match snapshot with data', () => {
    component = shallow(<HeaderContainer text='This is Text' image='fake-image.jpg' />);
    expect(component).toMatchSnapshot();
  });
})