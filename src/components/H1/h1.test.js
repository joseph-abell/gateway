import React from 'react';
import { shallow } from 'enzyme';
import H1 from './index';

it('renders without crashing', () => {
  shallow(<H1 />);
});