import React from 'react';
import { shallow } from 'enzyme';
import Footer from './index';

let component;

describe('Footer', () => {
  beforeEach(() => {
    component = shallow(<Footer />);
  });

  it('should render without crashing', () => {
    expect(component).toBeDefined();
  });

  it('should match snapshot with no data', () => {
    expect(component).toMatchSnapshot();
  });
})