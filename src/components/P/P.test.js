import React from 'react';
import { shallow } from 'enzyme';
import P from './index';

let component;

describe('P', () => {
  beforeEach(() => {
    component = shallow(<P />);
  });

  it('should render without crashing', () => {
    expect(component).toBeDefined();
  });

  it('should match snapshot with no data', () => {
    expect(component).toMatchSnapshot();
  });
})