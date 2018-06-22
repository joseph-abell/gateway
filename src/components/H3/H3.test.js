import React from 'react';
import { shallow } from 'enzyme';
import H3 from './index';

let component;

describe('H3', () => {
  beforeEach(() => {
    component = shallow(<H3 />);
  });

  it('should render without crashing', () => {
    expect(component).toBeDefined();
  });

  it('should match snapshot with no data', () => {
    expect(component).toMatchSnapshot();
  });
})