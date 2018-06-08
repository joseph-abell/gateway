import React from 'react';
import { shallow } from 'enzyme';

import Home from './index';

let component;

describe('Homepage', () => {
  beforeEach(() => {
    component = shallow(<Home />);
  });

  it('renders without crashing', () => {
    expect(component).toBeDefined();
  });

  it('contains a header', () => {
    expect(component.find('HeaderContainer')).toExist();
  });

  it('contains a menu', () => {
    expect(component.find('Menu')).toExist();
  });

  it('contains a description', () => {
    expect(component.find('Description')).toExist();
  });

  describe('contains a list of call to actions', () => {
    let ctas;

    beforeEach(() => {
      ctas = component.find('ul.call-to-actions');
    });

    it('should have an unorderedList', () => {
      expect(ctas).toExist();
    });

    it('should not have any items when there is no data', () => {
      console.log(ctas.debug());
      expect(ctas.find('li')).not.toExist();
    });
  });

  it('contains a footer', () => {
    expect(component.find('FooterContainer')).toExist();
  });
});
