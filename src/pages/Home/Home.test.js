import React from 'react';
import { shallow } from 'enzyme';
import Home from './index';
import fetchMock from 'fetch-mock';

let component;

const updateComponentWithData = (callback) => {
  process.nextTick(() => {
    component.update();
    callback();
  });
}

const mockUrl = (url, data) => {
  fetchMock.get(url, data, { overwriteRoutes: true });
}

describe('Homepage', () => {
  beforeEach(() => {
    mockUrl('https://gateway-cms.netlify.com/data/homepage.json', {
      header: {
        menuColour: 'red'
      },
      cta: [],
      quotes: [],
      deck: {}
    });
    mockUrl("https://gateway-cms.netlify.com/data/logos/red.json", {
      image: "/uploads/gateway_logo_pink.png"
    });
    mockUrl("https://gateway-cms.netlify.com/data/menu.json", {});

    component = shallow(<Home />);
  });

  it('renders without crashing', () => {
    expect(component).toBeDefined();
  });

  describe('before data has loaded', () => {
    it('contains loading', () => {
      expect(component.find('Loading')).toExist();
    });

    it('should match snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });

  describe('after data has loaded', () => {
    beforeEach((done) => {
      updateComponentWithData(done);
    });

    it('contains a header', () => {
      expect(component.find('HeaderContainer')).toExist();
    });

    it('contains a menu', () => {
        expect(component.find('Menu')).toExist();
    });

    describe('contains a list of call to actions', () => {
      it('should have an unordered list', () => {
        expect(component.find('ul.call-to-actions')).toExist();
      });
    });

    describe('contains a list of quotes', () => {
      it('should have an unordered list', () => {
        expect(component.find('ul.quotes')).toExist();
      });
    });

    it('contains a description', () => {
      expect(component.find('Description')).toExist();
    });

    it('contains a Footer', () => {
        expect(component.find('FooterContainer')).toExist();
    });

    it('should match snapshot', () => {
      expect(component).toMatchSnapshot();
    })
  });
});
