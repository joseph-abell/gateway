import React from 'react';
import { shallow } from 'enzyme';
import Home from './index';
import fetchMock from 'fetch-mock';

let component;

describe('Homepage', () => {
  beforeEach(() => {
    fetchMock.get('https://gateway-cms.netlify.com/data/homepage.json', {
      header: {
        menuColour: 'red'
      },
      cta: [],
      quotes: [],
      deck: {}
    }, {
      overwriteRoutes: true
    });
    fetchMock.get("https://gateway-cms.netlify.com/data/logos/red.json", {
      image: "/uploads/gateway_logo_pink.png"
    }, {
      overwriteRoutes: true
    });
    fetchMock.get("https://gateway-cms.netlify.com/data/menu.json", {}, {
      overwriteRoutes: true
    });

    component = shallow(<Home />);
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
    const updateComponentWithData = (cb) => {
      process.nextTick(() => {
        component.update();
        cb();
      });
    }

    it('contains a header', () => {
      updateComponentWithData(() => {
        expect(component.find('HeaderContainer')).toExist();
      });
    });

    it('contains a menu', () => {
      updateComponentWithData(() => {
        expect(component.find('Menu')).toExist();
      });
    });

    it('contains a description', () => {
      updateComponentWithData(() => {
        expect(component.find('Description')).toExist();
      })
    });

    describe('contains a list of call to actions', () => {
      it('should have an unorderedList', () => {
        updateComponentWithData(() => {
          expect(component.find('ul.call-to-actions')).toExist();
        });
      });
    });

    it('contains a footer', () => {
      updateComponentWithData(() => {
        expect(component.find('FooterContainer')).toExist();
      })
    });
  });
});
