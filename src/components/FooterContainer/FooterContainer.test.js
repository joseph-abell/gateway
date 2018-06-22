import React from 'react';
import { shallow } from 'enzyme';
import FooterContainer from './index';

let component;

describe('FooterContainer', () => {
  beforeEach(() => {
    component = shallow(<FooterContainer />);
  });

  it('should render without crashing', () => {
    expect(component).toBeDefined();
  });

  it('should match snapshot with no data', () => {
    expect(component).toMatchSnapshot();
  });
})