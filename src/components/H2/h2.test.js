import React from 'react';
import { shallow } from 'enzyme';
import H2 from './index';

it('renders without crashing', () => {
  shallow(<H2 />);
});