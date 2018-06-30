import React from 'react';
import { shallow } from 'enzyme';
import WhoWeAre from './index';
import { updateComponentWithData, mockUrl } from '../../helpers/testHelpers';

let component;

describe('Who We Are page', () => {
  beforeEach(() => {
    mockUrl('https://gateway-cms.netlify.com/data/pages/who-we-are.json', {
      header: {
        menuColour: 'red'
      },
      cta: [],
      quotes: [],
      deck: {}
    });
    component = shallow(<WhoWeAre />);
  });

  it('renders without crashing', () => {
    expect(component).toBeDefined();
  });

  describe('before data has loaded', () => {
    it('contains loading', () => {
      expect(component.find('Loading')).toExist();
    });
  });
    
  describe('after data has loaded', () => {
    beforeEach((done) => {
      updateComponentWithData(component, done);
    });
    
    it('contains a header', () => {
      expect(component.find('HeaderContainer')).toExist();
    });
  });
});
