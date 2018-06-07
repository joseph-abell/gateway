import React from 'react';
import { mount } from 'enzyme';

import Home from './index';

let component;

describe('Homepage', () => {
  beforeEach(() => {
    component = mount(<Home />);
  });

  it('renders without crashing', () => {
    expect(component).toBeDefined();
  });

  it('contains a header', () => {
    expect(component.find('HeaderContainer')).toExist();
  });
});
