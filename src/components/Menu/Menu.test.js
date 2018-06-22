import React from 'react';
import { shallow } from 'enzyme';
import Menu from './index';

let component;

describe('Menu', () => {
  beforeEach(() => {
    component = shallow(<Menu />);
  });

  it('should render without crashing', () => {
    expect(component).toBeDefined();
  });

  it('should match snapshot with no data', () => {
    expect(component).toMatchSnapshot();
  });
})