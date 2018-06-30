import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import fetchMock from 'fetch-mock';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});