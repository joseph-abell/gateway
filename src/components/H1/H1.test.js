import React from 'react';
import { shallow } from 'enzyme';
import H1 from './index';

let component;

describe('H1', () => {
  beforeEach(() => {
    component = shallow(<H1 />);
  });

  it('should render without crashing', () => {
    expect(component).toBeDefined();
  });

  it('should match snapshot with no data', () => {
    expect(component).toMatchSnapshot();
  });
})