import React from 'react';
import { shallow } from 'enzyme';
import H3 from './index';

it('renders without crashing', () => {
  shallow(<H3 />);
});