import React from 'react';
import { shallow } from 'enzyme';
import P from './index';

it('renders without crashing', () => {
  shallow(<P />);
});