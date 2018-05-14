import React from 'react';
import { shallow } from 'enzyme';
import Home from './index';

it('renders without crashing', () => {
  shallow(<Home />);
});

it('contains HeaderComponent', () => {
  const result = shallow(<Home />);
  expect(result.find('div')).to.have.length(1);
});