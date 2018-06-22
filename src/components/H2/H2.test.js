import React from 'react';
import { shallow } from 'enzyme';
import H2 from './index';

let component;

describe('H2', () => {
  beforeEach(() => {
    component = shallow(<H2 />);
  });

  it('should render without crashing', () => {
    expect(component).toBeDefined();
  });

  it('should match snapshot with no data', () => {
    expect(component).toMatchSnapshot();
  });
})