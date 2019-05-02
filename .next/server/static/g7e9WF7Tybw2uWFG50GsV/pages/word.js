module.exports = /******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = require('../../../ssr-module-cache.js'); // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ var threw = true;
    /******/ try {
      /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      );
      /******/ threw = false;
      /******/
    } finally {
      /******/ if (threw) delete installedModules[moduleId];
      /******/
    } // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/
  }; // define __esModule on exports
  /******/
  /******/ /******/ __webpack_require__.r = function(exports) {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', {value: true});
    /******/
  }; // create a fake namespace object // mode & 1: value is a module id, require it // mode & 2: merge all properties of value into the ns // mode & 4: return value when already ns object // mode & 8|1: behave like require
  /******/
  /******/ /******/ /******/ /******/ /******/ /******/ __webpack_require__.t = function(
    value,
    mode
  ) {
    /******/ if (mode & 1) value = __webpack_require__(value);
    /******/ if (mode & 8) return value;
    /******/ if (
      mode & 4 &&
      typeof value === 'object' &&
      value &&
      value.__esModule
    )
      return value;
    /******/ var ns = Object.create(null);
    /******/ __webpack_require__.r(ns);
    /******/ Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/ if (mode & 2 && typeof value != 'string')
      for (var key in value)
        __webpack_require__.d(
          ns,
          key,
          function(key) {
            return value[key];
          }.bind(null, key)
        );
    /******/ return ns;
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module['default'];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, 'a', getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ''; // Load entry module and return exports
  /******/
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 51));
  /******/
})(
  /************************************************************************/
  /******/ [
    /* 0 */
    /***/ function(module, exports) {
      module.exports = require('react');

      /***/
    },
    /* 1 */
    /***/ function(module, exports) {
      module.exports = require('styled-components');

      /***/
    },
    /* 2 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'a',
        function() {
          return changeColourToHex;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'f',
        function() {
          return getMenuColour;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'e',
        function() {
          return getMenu;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'c',
        function() {
          return getFullUrl;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'd',
        function() {
          return getLogo;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'b',
        function() {
          return getData;
        }
      );
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'g',
        function() {
          return getResizedImageUrl;
        }
      );
      /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        3
      );
      /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        12
      );
      /* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        10
      );

      function asyncGeneratorStep(
        gen,
        resolve,
        reject,
        _next,
        _throw,
        key,
        arg
      ) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function _asyncToGenerator(fn) {
        return function() {
          var self = this,
            args = arguments;
          return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                'next',
                value
              );
            }
            function _throw(err) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                'throw',
                err
              );
            }
            _next(undefined);
          });
        };
      }

      var changeLightColourToHex = function changeLightColourToHex(colour) {
        switch (colour) {
          case 'red':
            return '#f7a994';

          case 'orange':
            return '#ffd782';

          case 'green':
            return '#55c2b8';

          default:
            return '#c1a2cd';
        }
      };

      var changeDarkColourToHex = function changeDarkColourToHex(colour) {
        switch (colour) {
          case 'red':
            return '#f05a64';

          case 'orange':
            return 'rgb(252, 180, 46)';

          case 'green':
            return '#067f8e';

          default:
            return '#9666a8';
        }
      };

      var changeColourToHex = function changeColourToHex(colour, lightVariant) {
        if (lightVariant) {
          return changeLightColourToHex(colour);
        }

        return changeDarkColourToHex(colour);
      };
      var getMenuColour = function getMenuColour(pageData) {
        return (
          (pageData.header && pageData.header.menuColour) ||
          pageData.menuColour ||
          'red'
        );
      };
      var getMenu =
        /*#__PURE__*/
        (function() {
          var _ref = _asyncToGenerator(
            /*#__PURE__*/
            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
              function _callee() {
                var menuUrl, menuResponse, menuData;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                  function _callee$(_context) {
                    while (1) {
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          menuUrl =
                            _config__WEBPACK_IMPORTED_MODULE_2__[
                              /* url */ 'a'
                            ] + 'data/menu.json';
                          _context.next = 3;
                          return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(
                            menuUrl
                          ).catch(function(e) {
                            return e;
                          });

                        case 3:
                          menuResponse = _context.sent;
                          _context.next = 6;
                          return menuResponse.json();

                        case 6:
                          menuData = _context.sent;
                          return _context.abrupt('return', menuData);

                        case 8:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  },
                  _callee,
                  this
                );
              }
            )
          );

          return function getMenu() {
            return _ref.apply(this, arguments);
          };
        })();
      var getFullUrl = function getFullUrl() {
        var urlEnd =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : '';

        if (urlEnd.includes('http')) {
          return urlEnd;
        }

        if (urlEnd[0] === '/') {
          urlEnd = urlEnd.replace('/', '');
        }

        return _config__WEBPACK_IMPORTED_MODULE_2__[/* url */ 'a'] + urlEnd;
      };
      var getLogo =
        /*#__PURE__*/
        (function() {
          var _ref2 = _asyncToGenerator(
            /*#__PURE__*/
            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
              function _callee2(menuColour) {
                var logoLocation, logoResponse, logoData, logoUrl;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                  function _callee2$(_context2) {
                    while (1) {
                      switch ((_context2.prev = _context2.next)) {
                        case 0:
                          logoLocation = getFullUrl(
                            'data/logos/'.concat(menuColour, '.json')
                          );
                          _context2.next = 3;
                          return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(
                            logoLocation
                          ).catch(function(e) {
                            return e;
                          });

                        case 3:
                          logoResponse = _context2.sent;
                          _context2.next = 6;
                          return logoResponse.json();

                        case 6:
                          logoData = _context2.sent;
                          logoUrl = getFullUrl(logoData.image);
                          return _context2.abrupt('return', logoUrl);

                        case 9:
                        case 'end':
                          return _context2.stop();
                      }
                    }
                  },
                  _callee2,
                  this
                );
              }
            )
          );

          return function getLogo(_x) {
            return _ref2.apply(this, arguments);
          };
        })();
      var getData =
        /*#__PURE__*/
        (function() {
          var _ref3 = _asyncToGenerator(
            /*#__PURE__*/
            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
              function _callee3(pageName) {
                var pageUrl, response, pageData;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                  function _callee3$(_context3) {
                    while (1) {
                      switch ((_context3.prev = _context3.next)) {
                        case 0:
                          pageUrl =
                            _config__WEBPACK_IMPORTED_MODULE_2__[
                              /* url */ 'a'
                            ] + pageName;
                          _context3.next = 3;
                          return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(
                            pageUrl
                          );

                        case 3:
                          response = _context3.sent;

                          if (response.ok) {
                            _context3.next = 6;
                            break;
                          }

                          return _context3.abrupt(
                            'return',
                            new Error('something messed up')
                          );

                        case 6:
                          _context3.next = 8;
                          return response.json();

                        case 8:
                          pageData = _context3.sent;
                          return _context3.abrupt('return', pageData);

                        case 10:
                        case 'end':
                          return _context3.stop();
                      }
                    }
                  },
                  _callee3,
                  this
                );
              }
            )
          );

          return function getData(_x2) {
            return _ref3.apply(this, arguments);
          };
        })();
      var getResizedImageUrl = function getResizedImageUrl(url) {
        if (!url) {
          return;
        }

        var pageWidth = window.innerWidth;

        if (pageWidth < 768) {
          return url.split('uploads/').join('uploads/mobile/');
        } else if (pageWidth < 991) {
          return url.split('uploads/').join('uploads/tablet/');
        }

        return url.split('uploads/').join('uploads/desktop/');
      };

      /***/
    },
    /* 3 */
    /***/ function(module, exports) {
      module.exports = require('@babel/runtime/regenerator');

      /***/
    },
    /* 4 */
    /***/ function(module, exports, __webpack_require__) {
      var routes = (module.exports = __webpack_require__(22)());

      module.exports = routes
        .add('index', '/')
        .add('events', '/events')
        .add('event', '/events/:id')
        .add('people', '/people')
        .add('person', '/people/:id')
        .add('words', '/words')
        .add('word', '/words/:id')
        .add('contact-us', '/contact-us')
        .add('error-404', '/404')
        .add('page', '/:id');

      /***/
    },
    /* 5 */
    /***/ function(module, exports) {
      module.exports = require('react-promise');

      /***/
    },
    /* 6 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        1
      );
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        styled_components__WEBPACK_IMPORTED_MODULE_0__
      );
      function _templateObject() {
        var data = _taggedTemplateLiteral([
          '\n  @media screen and (min-width: 1241px) {\n    width: 1200px;\n    margin: 0 auto;\n  }\n'
        ]);

        _templateObject = function _templateObject() {
          return data;
        };

        return data;
      }

      function _taggedTemplateLiteral(strings, raw) {
        if (!raw) {
          raw = strings.slice(0);
        }
        return Object.freeze(
          Object.defineProperties(strings, {raw: {value: Object.freeze(raw)}})
        );
      }

      var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(
        _templateObject()
      );
      /* harmony default export */ __webpack_exports__['a'] = Container;

      /***/
    },
    /* 7 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        1
      );
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        styled_components__WEBPACK_IMPORTED_MODULE_0__
      );
      function _templateObject() {
        var data = _taggedTemplateLiteral(['\n  clear: both;\n']);

        _templateObject = function _templateObject() {
          return data;
        };

        return data;
      }

      function _taggedTemplateLiteral(strings, raw) {
        if (!raw) {
          raw = strings.slice(0);
        }
        return Object.freeze(
          Object.defineProperties(strings, {raw: {value: Object.freeze(raw)}})
        );
      }

      var Clearfix = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(
        _templateObject()
      );
      /* harmony default export */ __webpack_exports__['a'] = Clearfix;

      /***/
    },
    /* 8 */
    /***/ function(module, exports) {
      module.exports = require('react-with-breakpoints');

      /***/
    },
    /* 9 */
    /***/ function(module, exports) {
      module.exports = require('react-google-maps');

      /***/
    },
    /* 10 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony export (binding) */ __webpack_require__.d(
        __webpack_exports__,
        'a',
        function() {
          return url;
        }
      );
      var url = 'https://gateway-cms.netlify.com/';

      /***/
    },
    /* 11 */
    /***/ function(module, exports) {
      module.exports = require('react-burger-menu');

      /***/
    },
    /* 12 */
    /***/ function(module, exports) {
      module.exports = require('isomorphic-fetch');

      /***/
    },
    /* 13 */
    /***/ function(module, exports) {
      module.exports = require('react-icons/fa');

      /***/
    },
    /* 14 */
    /***/ function(module, exports) {
      module.exports = require('next/head');

      /***/
    },
    /* 15 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        1
      );
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        styled_components__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        2
      );
      function _templateObject() {
        var data = _taggedTemplateLiteral([
          "\n  background-image: url('",
          "');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  transition: opacity 0.3s;\n"
        ]);

        _templateObject = function _templateObject() {
          return data;
        };

        return data;
      }

      function _taggedTemplateLiteral(strings, raw) {
        if (!raw) {
          raw = strings.slice(0);
        }
        return Object.freeze(
          Object.defineProperties(strings, {raw: {value: Object.freeze(raw)}})
        );
      }

      var Image = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(
        _templateObject(),
        function(props) {
          return Object(
            _helpers__WEBPACK_IMPORTED_MODULE_1__[/* getResizedImageUrl */ 'g']
          )(props.url);
        }
      );
      /* harmony default export */ __webpack_exports__['a'] = Image;

      /***/
    },
    /* 16 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';

      // EXTERNAL MODULE: external "@babel/runtime/regenerator"
      var regenerator_ = __webpack_require__(3);
      var regenerator_default = /*#__PURE__*/ __webpack_require__.n(
        regenerator_
      );

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__(0);
      var external_react_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_
      );

      // EXTERNAL MODULE: external "react-promise"
      var external_react_promise_ = __webpack_require__(5);
      var external_react_promise_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_promise_
      );

      // EXTERNAL MODULE: external "styled-components"
      var external_styled_components_ = __webpack_require__(1);
      var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(
        external_styled_components_
      );

      // EXTERNAL MODULE: external "react-burger-menu"
      var external_react_burger_menu_ = __webpack_require__(11);

      // CONCATENATED MODULE: ./components/MobileMenu.js
      function _templateObject() {
        var data = _taggedTemplateLiteral([
          '\n  color: ',
          ';\n  padding: 20px 25px;\n  display: inline-block;\n  text-decoration: none;\n'
        ]);

        _templateObject = function _templateObject() {
          return data;
        };

        return data;
      }

      function _taggedTemplateLiteral(strings, raw) {
        if (!raw) {
          raw = strings.slice(0);
        }
        return Object.freeze(
          Object.defineProperties(strings, {raw: {value: Object.freeze(raw)}})
        );
      }

      var MenuLink = external_styled_components_default.a.a(
        _templateObject(),
        function(props) {
          return props.menuColour;
        }
      );

      var MobileMenu_MenuItem = function MenuItem(_ref) {
        var menuItem = _ref.menuItem,
          menuColour = _ref.menuColour;
        return external_react_default.a.createElement(
          'div',
          {
            key: menuItem.title
          },
          external_react_default.a.createElement(
            MenuLink,
            {
              href: menuItem.link,
              menuColour: menuColour
            },
            menuItem.title
          )
        );
      };

      var MobileMenu_MobileMenu = function MobileMenu(_ref2) {
        var _ref2$menuItems = _ref2.menuItems,
          menuItems = _ref2$menuItems === void 0 ? [] : _ref2$menuItems,
          menuColour = _ref2.menuColour,
          iconUrl = _ref2.iconUrl,
          isOpen = _ref2.isOpen,
          handleStateChange = _ref2.handleStateChange;
        var styles = {
          bmBurgerButton: {
            display: 'none'
          },
          bmBurgerBars: {
            background: menuColour,
            height: '3px'
          },
          bmCrossButton: {
            height: '24px',
            width: '24px'
          },
          bmCross: {
            background: menuColour
          },
          bmMenu: {
            background: 'white',
            padding: '2.5em 1.5em 0',
            fontSize: '1.15em'
          },
          bmMorphShape: {
            fill: '#373a47'
          },
          bmItemList: {
            color: menuColour,
            padding: '0.8em'
          },
          bmItem: {
            display: 'inline-block'
          },
          bmOverlay: {
            background: 'rgba(0, 0, 0, 0.2)'
          }
        };
        return external_react_default.a.createElement(
          external_react_burger_menu_['slide'],
          {
            styles: styles,
            isOpen: isOpen,
            onStateChange: function onStateChange(state) {
              return handleStateChange(state);
            }
          },
          menuItems.map(function(menuItem, id) {
            return external_react_default.a.createElement(MobileMenu_MenuItem, {
              menuItem: menuItem,
              menuColour: menuColour,
              key: id
            });
          })
        );
      };

      /* harmony default export */ var components_MobileMenu = MobileMenu_MobileMenu;
      // EXTERNAL MODULE: external "downshift"
      var external_downshift_ = __webpack_require__(19);
      var external_downshift_default = /*#__PURE__*/ __webpack_require__.n(
        external_downshift_
      );

      // EXTERNAL MODULE: external "flat"
      var external_flat_ = __webpack_require__(20);
      var external_flat_default = /*#__PURE__*/ __webpack_require__.n(
        external_flat_
      );

      // EXTERNAL MODULE: ./router.js
      var router = __webpack_require__(4);

      // EXTERNAL MODULE: ./helpers/index.js
      var helpers = __webpack_require__(2);

      // CONCATENATED MODULE: ./components/Search.js

      function _typeof(obj) {
        if (
          typeof Symbol === 'function' &&
          typeof Symbol.iterator === 'symbol'
        ) {
          _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj &&
              typeof Symbol === 'function' &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          };
        }
        return _typeof(obj);
      }

      function _toConsumableArray(arr) {
        return (
          _arrayWithoutHoles(arr) ||
          _iterableToArray(arr) ||
          _nonIterableSpread()
        );
      }

      function _nonIterableSpread() {
        throw new TypeError('Invalid attempt to spread non-iterable instance');
      }

      function _iterableToArray(iter) {
        if (
          Symbol.iterator in Object(iter) ||
          Object.prototype.toString.call(iter) === '[object Arguments]'
        )
          return Array.from(iter);
      }

      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
          for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
      }

      function asyncGeneratorStep(
        gen,
        resolve,
        reject,
        _next,
        _throw,
        key,
        arg
      ) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function _asyncToGenerator(fn) {
        return function() {
          var self = this,
            args = arguments;
          return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                'next',
                value
              );
            }
            function _throw(err) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                'throw',
                err
              );
            }
            _next(undefined);
          });
        };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError('Cannot call a class as a function');
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (
          call &&
          (_typeof(call) === 'object' || typeof call === 'function')
        ) {
          return call;
        }
        return _assertThisInitialized(self);
      }

      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            };
        return _getPrototypeOf(o);
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== 'function' && superClass !== null) {
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {value: subClass, writable: true, configurable: true}
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };
        return _setPrototypeOf(o, p);
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        return self;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      function _extends() {
        _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
        return _extends.apply(this, arguments);
      }

      function _templateObject2() {
        var data = Search_taggedTemplateLiteral([
          '\n  background: ',
          ';\n  color: white;\n  border: 0;\n  font-size: 20px;\n  border-bottom: 3px solid ',
          ";\n  font-family: 'Ginger', sans-serif;\n"
        ]);

        _templateObject2 = function _templateObject2() {
          return data;
        };

        return data;
      }

      function Search_templateObject() {
        var data = Search_taggedTemplateLiteral([
          '\n  color: white;\n  padding: 20px 25px;\n  display: inline-block;\n  text-decoration: none;\n'
        ]);

        Search_templateObject = function _templateObject() {
          return data;
        };

        return data;
      }

      function Search_taggedTemplateLiteral(strings, raw) {
        if (!raw) {
          raw = strings.slice(0);
        }
        return Object.freeze(
          Object.defineProperties(strings, {raw: {value: Object.freeze(raw)}})
        );
      }

      var StyledLink = external_styled_components_default.a.a(
        Search_templateObject()
      );
      var StyledSearchInput = external_styled_components_default.a.input(
        _templateObject2(),
        function(props) {
          return props.colour;
        },
        function(props) {
          return props.borderColour;
        }
      );

      var Search_SearchInput = function SearchInput(props) {
        return external_react_default.a.createElement(
          StyledSearchInput,
          _extends({}, props, {
            type: 'text'
          })
        );
      };

      var Search_SearchListItem = function SearchListItem(_ref) {
        var item = _ref.item,
          getItemProps = _ref.getItemProps;
        return external_react_default.a.createElement(
          'li',
          getItemProps({
            key: item.data.title,
            item: item
          }),
          external_react_default.a.createElement(
            router['Link'],
            {
              href: '/'.concat(item.pageUrl)
            },
            external_react_default.a.createElement(
              StyledLink,
              null,
              external_react_default.a.createElement(
                'div',
                null,
                item.data.title
                  .split('-')
                  .map(function(word) {
                    return word && word[0].toUpperCase() + word.substr(1);
                  })
                  .join(' ')
              ),
              external_react_default.a.createElement(
                'div',
                null,
                item.breadcrumb
                  .split(' - ')
                  .join('___')
                  .split('-')
                  .map(function(word) {
                    return word && word[0].toUpperCase() + word.substr(1);
                  })
                  .join(' ')
                  .split('___')
                  .map(function(word) {
                    return word && word[0].toUpperCase() + word.substr(1);
                  })
                  .join(' - ')
              )
            )
          )
        );
      };

      var Search_Search =
        /*#__PURE__*/
        (function(_React$Component) {
          _inherits(Search, _React$Component);

          function Search() {
            var _getPrototypeOf2;

            var _this;

            _classCallCheck(this, Search);

            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }

            _this = _possibleConstructorReturn(
              this,
              (_getPrototypeOf2 = _getPrototypeOf(Search)).call.apply(
                _getPrototypeOf2,
                [this].concat(args)
              )
            );

            _defineProperty(
              _assertThisInitialized(_assertThisInitialized(_this)),
              'state',
              {
                searchData: []
              }
            );

            _defineProperty(
              _assertThisInitialized(_assertThisInitialized(_this)),
              'search',
              function(data, inputValue) {
                return data.filter(function(item) {
                  return item.flat.some(function(flatItem) {
                    return (
                      flatItem &&
                      flatItem[1] &&
                      !Array.isArray(flatItem[1]) &&
                      typeof flatItem[1] !== 'boolean' &&
                      typeof flatItem[1] !== 'number' &&
                      flatItem[1]
                        .toLowerCase()
                        .includes(inputValue.toLowerCase())
                    );
                  });
                });
              }
            );

            _defineProperty(
              _assertThisInitialized(_assertThisInitialized(_this)),
              'promise',
              new Promise(
                /*#__PURE__*/
                (function() {
                  var _ref2 = _asyncToGenerator(
                    /*#__PURE__*/
                    regenerator_default.a.mark(function _callee(resolve) {
                      var data, blackList;
                      return regenerator_default.a.wrap(
                        function _callee$(_context) {
                          while (1) {
                            switch ((_context.prev = _context.next)) {
                              case 0:
                                if (!_this.state.searchData.length) {
                                  _context.next = 2;
                                  break;
                                }

                                return _context.abrupt(
                                  'return',
                                  resolve(_this.state.searchData)
                                );

                              case 2:
                                _context.next = 4;
                                return Object(helpers['b' /* getData */])(
                                  'data/search/index.json'
                                );

                              case 4:
                                data = _context.sent;
                                blackList = [
                                  'audioFile',
                                  'colour',
                                  'date',
                                  'email',
                                  'file',
                                  'filters',
                                  'time',
                                  'titleRole',
                                  'image',
                                  'menuColour',
                                  'optionalContent',
                                  'phoneNumber',
                                  'youtubeLink'
                                ];
                                data.forEach(function(item, index) {
                                  var flattened = Object.entries(
                                    external_flat_default()(data[index].data)
                                  );
                                  var filtered = flattened.reduce(function(
                                    acc,
                                    item
                                  ) {
                                    var inBlackList = blackList.some(function(
                                      blackListItem
                                    ) {
                                      return item[0].includes(blackListItem);
                                    });
                                    return inBlackList
                                      ? acc
                                      : _toConsumableArray(acc).concat([item]);
                                  },
                                  []);
                                  data[index].flat = filtered;
                                  var pageUrl = data[index].url
                                    .slice(0, -5)
                                    .split('data/')[1];
                                  data[index].pageUrl = pageUrl;
                                  var breadcrumb = pageUrl
                                    .split('/')
                                    .join(' - ');
                                  data[index].breadcrumb = breadcrumb;

                                  _this.setState({
                                    searchData: data
                                  });
                                });
                                return _context.abrupt('return', resolve(data));

                              case 8:
                              case 'end':
                                return _context.stop();
                            }
                          }
                        },
                        _callee,
                        this
                      );
                    })
                  );

                  return function(_x) {
                    return _ref2.apply(this, arguments);
                  };
                })()
              )
            );

            _defineProperty(
              _assertThisInitialized(_assertThisInitialized(_this)),
              'render',
              function() {
                var _this$props = _this.props,
                  colour = _this$props.colour,
                  isOpen = _this$props.isOpen,
                  handleStateChange = _this$props.handleStateChange,
                  borderColour = _this$props.borderColour;
                var styles = {
                  bmBurgerButton: {
                    display: 'none'
                  },
                  bmBurgerBars: {
                    background: colour,
                    height: '3px'
                  },
                  bmCrossButton: {
                    height: '24px',
                    width: '24px'
                  },
                  bmCross: {
                    background: 'white'
                  },
                  bmMenu: {
                    background: colour,
                    padding: '2.5em 1.5em 0',
                    fontSize: '1.15em'
                  },
                  bmMorphShape: {
                    fill: '#373a47'
                  },
                  bmItemList: {
                    color: 'white',
                    padding: '0.8em'
                  },
                  bmItem: {
                    display: 'inline-block'
                  },
                  bmOverlay: {
                    background: 'rgba(0, 0, 0, 0.2)'
                  }
                };
                return external_react_default.a.createElement(
                  external_react_burger_menu_['slide'],
                  {
                    styles: styles,
                    right: true,
                    isOpen: isOpen,
                    onStateChange: handleStateChange
                  },
                  external_react_default.a.createElement(
                    external_downshift_default.a,
                    {
                      itemToString: function itemToString(item) {
                        return '';
                      }
                    },
                    function(props) {
                      var getInputProps = props.getInputProps,
                        getMenuProps = props.getMenuProps,
                        getItemProps = props.getItemProps,
                        inputValue = props.inputValue;
                      return external_react_default.a.createElement(
                        'div',
                        null,
                        external_react_default.a.createElement(
                          Search_SearchInput,
                          _extends({}, getInputProps(), {
                            colour: colour,
                            borderColour: borderColour
                          })
                        ),
                        isOpen &&
                          !!inputValue.length &&
                          external_react_default.a.createElement(
                            external_react_promise_default.a,
                            {
                              promise: _this.promise,
                              then: function then(data) {
                                return external_react_default.a.createElement(
                                  'ul',
                                  getMenuProps(),
                                  _this
                                    .search(data, inputValue)
                                    .filter(function(item) {
                                      if (item.type !== 'people') return true;
                                      if (!item.data.filters.all) return false;
                                      if (item.data.filters.all === 'false')
                                        return false;
                                      return true;
                                    })
                                    .map(function(item) {
                                      return external_react_default.a.createElement(
                                        Search_SearchListItem,
                                        {
                                          item: item,
                                          getItemProps: getItemProps
                                        }
                                      );
                                    })
                                );
                              }
                            }
                          )
                      );
                    }
                  )
                );
              }
            );

            return _this;
          }

          return Search;
        })(external_react_default.a.Component);

      /* harmony default export */ var components_Search = Search_Search;
      // EXTERNAL MODULE: external "react-icons/fa"
      var fa_ = __webpack_require__(13);

      // EXTERNAL MODULE: external "react-with-breakpoints"
      var external_react_with_breakpoints_ = __webpack_require__(8);

      // CONCATENATED MODULE: ./components/Menu.js
      function Menu_typeof(obj) {
        if (
          typeof Symbol === 'function' &&
          typeof Symbol.iterator === 'symbol'
        ) {
          Menu_typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          Menu_typeof = function _typeof(obj) {
            return obj &&
              typeof Symbol === 'function' &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          };
        }
        return Menu_typeof(obj);
      }

      function Menu_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError('Cannot call a class as a function');
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ('value' in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      function Menu_possibleConstructorReturn(self, call) {
        if (
          call &&
          (Menu_typeof(call) === 'object' || typeof call === 'function')
        ) {
          return call;
        }
        return Menu_assertThisInitialized(self);
      }

      function Menu_getPrototypeOf(o) {
        Menu_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            };
        return Menu_getPrototypeOf(o);
      }

      function Menu_inherits(subClass, superClass) {
        if (typeof superClass !== 'function' && superClass !== null) {
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {value: subClass, writable: true, configurable: true}
        });
        if (superClass) Menu_setPrototypeOf(subClass, superClass);
      }

      function Menu_setPrototypeOf(o, p) {
        Menu_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };
        return Menu_setPrototypeOf(o, p);
      }

      function Menu_assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        return self;
      }

      function Menu_defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      function _templateObject12() {
        var data = Menu_taggedTemplateLiteral([
          '\n  display: inline-block;\n  border-bottom: 5px solid white;\n'
        ]);

        _templateObject12 = function _templateObject12() {
          return data;
        };

        return data;
      }

      function _templateObject11() {
        var data = Menu_taggedTemplateLiteral([
          '\n  display: block;\n  padding: 0 20px;\n  line-height: 30px;\n  color: ',
          ';\n\n  &:hover {\n    span {\n      border-bottom-color: ',
          ';\n    }\n  }\n'
        ]);

        _templateObject11 = function _templateObject11() {
          return data;
        };

        return data;
      }

      function _templateObject10() {
        var data = Menu_taggedTemplateLiteral([
          '\n  display: none;\n  background: white;\n  text-align: left;\n  position: absolute;\n  z-index: 2;\n  padding-bottom: 10px;\n'
        ]);

        _templateObject10 = function _templateObject10() {
          return data;
        };

        return data;
      }

      function _templateObject9() {
        var data = Menu_taggedTemplateLiteral([
          '\n  color: ',
          ';\n\n  &:hover {\n    border-bottom: 5px solid ',
          ';\n  }\n'
        ]);

        _templateObject9 = function _templateObject9() {
          return data;
        };

        return data;
      }

      function _templateObject8() {
        var data = Menu_taggedTemplateLiteral([
          '\n  flex: 1 1 auto;\n  text-align: center;\n  line-height: 60px;\n  color: ',
          ';\n\n  &:hover ul {\n    display: block;\n  }\n'
        ]);

        _templateObject8 = function _templateObject8() {
          return data;
        };

        return data;
      }

      function _templateObject7() {
        var data = Menu_taggedTemplateLiteral([
          '\n  display: flex;\n  padding-left: 50px;\n'
        ]);

        _templateObject7 = function _templateObject7() {
          return data;
        };

        return data;
      }

      function _templateObject6() {
        var data = Menu_taggedTemplateLiteral([
          '\n  height: 60px;\n  width: 60px;\n  float: right;\n  cursor: pointer;\n  line-height: 60px;\n  margin: 0 auto;\n  font-size: 30px;\n  color: ',
          ';\n\n  svg {\n    display: block;\n    padding-top: 15px;\n    padding-left: 15px;\n  }\n'
        ]);

        _templateObject6 = function _templateObject6() {
          return data;
        };

        return data;
      }

      function _templateObject5() {
        var data = Menu_taggedTemplateLiteral([
          '\n  height: 60px;\n  width: 60px;\n  float: left;\n  cursor: pointer;\n  line-height: 60px;\n  margin: 0 auto;\n  font-size: 30px;\n  color: ',
          ';\n\n  svg {\n    display: block;\n    padding-top: 15px;\n    padding-left: 15px;\n  }\n'
        ]);

        _templateObject5 = function _templateObject5() {
          return data;
        };

        return data;
      }

      function _templateObject4() {
        var data = Menu_taggedTemplateLiteral([
          '\n  @media screen and (min-width: 1241px) {\n    width: 1200px;\n    margin: 0 auto;\n  }\n'
        ]);

        _templateObject4 = function _templateObject4() {
          return data;
        };

        return data;
      }

      function _templateObject3() {
        var data = Menu_taggedTemplateLiteral([
          '\n  height: 60px;\n  position: ',
          ';\n  top: 0;\n  z-index: 2;\n  background: #fff;\n'
        ]);

        _templateObject3 = function _templateObject3() {
          return data;
        };

        return data;
      }

      function Menu_templateObject2() {
        var data = Menu_taggedTemplateLiteral([
          '\n  padding-top: 15px;\n  display: inline-block;\n'
        ]);

        Menu_templateObject2 = function _templateObject2() {
          return data;
        };

        return data;
      }

      function Menu_templateObject() {
        var data = Menu_taggedTemplateLiteral([
          '\n  padding: 0 20px 1px;\n  text-align: center;\n\n  @media screen and (min-width: 991px) {\n    float: left;\n  }\n'
        ]);

        Menu_templateObject = function _templateObject() {
          return data;
        };

        return data;
      }

      function Menu_taggedTemplateLiteral(strings, raw) {
        if (!raw) {
          raw = strings.slice(0);
        }
        return Object.freeze(
          Object.defineProperties(strings, {raw: {value: Object.freeze(raw)}})
        );
      }

      var Menu_Logo = function Logo(_ref) {
        var logoUrl = _ref.logoUrl;
        return external_react_default.a.createElement('img', {
          src: logoUrl,
          alt: 'logo'
        });
      };

      var StyledLogo = external_styled_components_default.a.div(
        Menu_templateObject()
      );
      var Menu_StyledLink = external_styled_components_default.a.a(
        Menu_templateObject2()
      );
      var MenuContainer = external_styled_components_default.a.div(
        _templateObject3(),
        function(props) {
          return props.stickyMenu ? 'sticky' : 'static';
        }
      );
      var MenuInnerContainer = external_styled_components_default.a.div(
        _templateObject4()
      );
      var MenuButton = external_styled_components_default.a.div(
        _templateObject5(),
        function(props) {
          return props.colour;
        }
      );
      var SearchButton = external_styled_components_default.a.div(
        _templateObject6(),
        function(props) {
          return props.colour;
        }
      );
      var MainMenu = external_styled_components_default.a.ul(
        _templateObject7()
      );
      var Menu_MenuItem = external_styled_components_default.a.li(
        _templateObject8(),
        function(props) {
          return props.colour;
        }
      );
      var StyledMenuLink = external_styled_components_default.a.a(
        _templateObject9(),
        function(props) {
          return props.colour;
        },
        function(props) {
          return props.colour;
        }
      );
      var ChildMenu = external_styled_components_default.a.ul(
        _templateObject10()
      );
      var ChildLink = external_styled_components_default.a.a(
        _templateObject11(),
        function(props) {
          return props.colour;
        },
        function(props) {
          return props.colour;
        }
      );
      var ChildUnderline = external_styled_components_default.a.span(
        _templateObject12()
      );

      var Menu_Menu =
        /*#__PURE__*/
        (function(_React$Component) {
          Menu_inherits(Menu, _React$Component);

          function Menu(props) {
            var _this;

            Menu_classCallCheck(this, Menu);

            _this = Menu_possibleConstructorReturn(
              this,
              Menu_getPrototypeOf(Menu).call(this, props)
            );

            Menu_defineProperty(
              Menu_assertThisInitialized(Menu_assertThisInitialized(_this)),
              'componentDidMount',
              function() {
                window.addEventListener('scroll', _this.handleScroll);
              }
            );

            Menu_defineProperty(
              Menu_assertThisInitialized(Menu_assertThisInitialized(_this)),
              'componentWillUnmount',
              function() {
                window.removeEventListener('scroll', _this.handleScroll);
              }
            );

            Menu_defineProperty(
              Menu_assertThisInitialized(Menu_assertThisInitialized(_this)),
              'handleScroll',
              function() {
                if (_this.state.alwaysSticky) {
                  return;
                }

                if (window.scrollY >= 200 && !_this.state.stickyMenu) {
                  _this.setState({
                    stickyMenu: true
                  });
                } else if (window.scrollY < 200 && _this.state.stickyMenu) {
                  _this.setState({
                    stickyMenu: false
                  });
                }
              }
            );

            _this.state = {
              stickyMenu: props.sticky || false,
              alwaysSticky: props.sticky || false
            };
            return _this;
          }

          _createClass(Menu, [
            {
              key: 'render',
              value: function render() {
                var _this$props = this.props,
                  logoUrl = _this$props.logoUrl,
                  onMenuClick = _this$props.onMenuClick,
                  onSearchClick = _this$props.onSearchClick,
                  colour = _this$props.colour,
                  menuItems = _this$props.menuItems;
                var stickyMenu = this.state.stickyMenu;
                return external_react_default.a.createElement(
                  MenuContainer,
                  {
                    classname: 'menu',
                    stickyMenu: stickyMenu
                  },
                  external_react_default.a.createElement(
                    MenuInnerContainer,
                    null,
                    external_react_default.a.createElement(
                      external_react_with_breakpoints_['ShowAt'],
                      {
                        breakpoint: 'mediumAndBelow'
                      },
                      external_react_default.a.createElement(
                        MenuButton,
                        {
                          onClick: onMenuClick,
                          colour: colour
                        },
                        external_react_default.a.createElement(
                          fa_['FaBars'],
                          null
                        )
                      )
                    ),
                    external_react_default.a.createElement(
                      SearchButton,
                      {
                        onClick: onSearchClick,
                        colour: colour
                      },
                      external_react_default.a.createElement(
                        fa_['FaSearch'],
                        null
                      )
                    ),
                    external_react_default.a.createElement(
                      StyledLogo,
                      null,
                      external_react_default.a.createElement(
                        router['Link'],
                        {
                          href: '/',
                          prefetch: true
                        },
                        external_react_default.a.createElement(
                          Menu_StyledLink,
                          null,
                          external_react_default.a.createElement(Menu_Logo, {
                            logoUrl: logoUrl
                          })
                        )
                      )
                    ),
                    external_react_default.a.createElement(
                      external_react_with_breakpoints_['HideAt'],
                      {
                        breakpoint: 'mediumAndBelow'
                      },
                      external_react_default.a.createElement(
                        'nav',
                        null,
                        external_react_default.a.createElement(
                          MainMenu,
                          null,
                          menuItems.map(function(item) {
                            return external_react_default.a.createElement(
                              Menu_MenuItem,
                              {
                                colour: colour,
                                key: item.link
                              },
                              external_react_default.a.createElement(
                                router['Link'],
                                {
                                  href: item.link
                                },
                                external_react_default.a.createElement(
                                  StyledMenuLink,
                                  {
                                    colour: colour
                                  },
                                  item.title
                                )
                              ),
                              item.childMenu &&
                                item.childMenu.length &&
                                external_react_default.a.createElement(
                                  ChildMenu,
                                  null,
                                  item.childMenu.map(function(childItem) {
                                    return external_react_default.a.createElement(
                                      'li',
                                      {
                                        key: childItem.link
                                      },
                                      external_react_default.a.createElement(
                                        router['Link'],
                                        {
                                          href: childItem.link,
                                          prefetch: true
                                        },
                                        external_react_default.a.createElement(
                                          ChildLink,
                                          {
                                            colour: colour
                                          },
                                          external_react_default.a.createElement(
                                            ChildUnderline,
                                            null,
                                            childItem.title
                                          )
                                        )
                                      )
                                    );
                                  })
                                )
                            );
                          })
                        )
                      )
                    )
                  )
                );
              }
            }
          ]);

          return Menu;
        })(external_react_default.a.Component);

      /* harmony default export */ var components_Menu = Menu_Menu;
      // CONCATENATED MODULE: ./components/HideOnDesktop.js
      function HideOnDesktop_templateObject() {
        var data = HideOnDesktop_taggedTemplateLiteral([
          '\n  display: block;\n\n  @media screen and (min-width: 991px) {\n    display: none;\n  }\n'
        ]);

        HideOnDesktop_templateObject = function _templateObject() {
          return data;
        };

        return data;
      }

      function HideOnDesktop_taggedTemplateLiteral(strings, raw) {
        if (!raw) {
          raw = strings.slice(0);
        }
        return Object.freeze(
          Object.defineProperties(strings, {raw: {value: Object.freeze(raw)}})
        );
      }

      var HideOnDesktop = external_styled_components_default.a.div(
        HideOnDesktop_templateObject()
      );
      /* harmony default export */ var components_HideOnDesktop = HideOnDesktop;
      // EXTERNAL MODULE: ./components/Clearfix.js
      var Clearfix = __webpack_require__(7);

      // CONCATENATED MODULE: ./templates/Header.js

      function Header_asyncGeneratorStep(
        gen,
        resolve,
        reject,
        _next,
        _throw,
        key,
        arg
      ) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function Header_asyncToGenerator(fn) {
        return function() {
          var self = this,
            args = arguments;
          return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              Header_asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                'next',
                value
              );
            }
            function _throw(err) {
              Header_asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                'throw',
                err
              );
            }
            _next(undefined);
          });
        };
      }

      function Header_typeof(obj) {
        if (
          typeof Symbol === 'function' &&
          typeof Symbol.iterator === 'symbol'
        ) {
          Header_typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          Header_typeof = function _typeof(obj) {
            return obj &&
              typeof Symbol === 'function' &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          };
        }
        return Header_typeof(obj);
      }

      function Header_classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError('Cannot call a class as a function');
        }
      }

      function Header_defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ('value' in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function Header_createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          Header_defineProperties(Constructor.prototype, protoProps);
        if (staticProps) Header_defineProperties(Constructor, staticProps);
        return Constructor;
      }

      function Header_possibleConstructorReturn(self, call) {
        if (
          call &&
          (Header_typeof(call) === 'object' || typeof call === 'function')
        ) {
          return call;
        }
        return Header_assertThisInitialized(self);
      }

      function Header_getPrototypeOf(o) {
        Header_getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            };
        return Header_getPrototypeOf(o);
      }

      function Header_inherits(subClass, superClass) {
        if (typeof superClass !== 'function' && superClass !== null) {
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {value: subClass, writable: true, configurable: true}
        });
        if (superClass) Header_setPrototypeOf(subClass, superClass);
      }

      function Header_setPrototypeOf(o, p) {
        Header_setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };
        return Header_setPrototypeOf(o, p);
      }

      function Header_assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        return self;
      }

      function Header_defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      var Header_MenuTemplate =
        /*#__PURE__*/
        (function(_React$Component) {
          Header_inherits(MenuTemplate, _React$Component);

          function MenuTemplate() {
            var _getPrototypeOf2;

            var _this;

            Header_classCallCheck(this, MenuTemplate);

            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }

            _this = Header_possibleConstructorReturn(
              this,
              (_getPrototypeOf2 = Header_getPrototypeOf(
                MenuTemplate
              )).call.apply(_getPrototypeOf2, [this].concat(args))
            );

            Header_defineProperty(
              Header_assertThisInitialized(Header_assertThisInitialized(_this)),
              'state',
              {
                menuOpen: false,
                searchOpen: false
              }
            );

            return _this;
          }

          Header_createClass(MenuTemplate, [
            {
              key: 'handleMenuStateChange',
              value: function handleMenuStateChange(_ref) {
                var isOpen = _ref.isOpen;
                this.setState({
                  menuOpen: isOpen
                });
              }
            },
            {
              key: 'handleSearchStateChange',
              value: function handleSearchStateChange(_ref2) {
                var isOpen = _ref2.isOpen;
                this.setState({
                  searchOpen: isOpen
                });
              }
            },
            {
              key: 'render',
              value: function render() {
                var _this2 = this;

                var _this$props = this.props,
                  menuItems = _this$props.menuItems,
                  menuColour = _this$props.menuColour,
                  borderColour = _this$props.borderColour,
                  logoUrl = _this$props.logoUrl,
                  sticky = _this$props.sticky,
                  children = _this$props.children;
                return external_react_default.a.createElement(
                  external_react_default.a.Fragment,
                  null,
                  external_react_default.a.createElement(
                    external_react_with_breakpoints_['HideAt'],
                    {
                      breakpoint: 'large'
                    },
                    external_react_default.a.createElement(
                      components_MobileMenu,
                      {
                        menuItems: menuItems,
                        menuColour: menuColour,
                        isOpen: this.state.menuOpen,
                        handleStateChange: function handleStateChange(state) {
                          _this2.handleMenuStateChange(state);
                        }
                      }
                    )
                  ),
                  external_react_default.a.createElement(components_Search, {
                    colour: menuColour,
                    borderColour: borderColour,
                    isOpen: this.state.searchOpen,
                    handleStateChange: function handleStateChange(state) {
                      _this2.handleSearchStateChange(state);
                    }
                  }),
                  children,
                  external_react_default.a.createElement(components_Menu, {
                    menuItems: menuItems,
                    colour: menuColour,
                    logoUrl: logoUrl,
                    sticky: sticky,
                    onMenuClick: function onMenuClick() {
                      _this2.handleMenuStateChange({
                        isOpen: true
                      });
                    },
                    onSearchClick: function onSearchClick() {
                      _this2.handleSearchStateChange({
                        isOpen: true
                      });
                    }
                  }),
                  external_react_default.a.createElement(
                    Clearfix['a' /* default */],
                    null
                  )
                );
              }
            }
          ]);

          return MenuTemplate;
        })(external_react_default.a.Component);

      var Header_HeaderTemplate = function HeaderTemplate(_ref3) {
        var colour = _ref3.colour,
          colourHex = _ref3.colourHex,
          colourHexLight = _ref3.colourHexLight,
          Header = _ref3.Header,
          title = _ref3.title,
          image = _ref3.image;
        return external_react_default.a.createElement(
          external_react_promise_default.a,
          {
            promise: new Promise(
              /*#__PURE__*/
              (function() {
                var _ref4 = Header_asyncToGenerator(
                  /*#__PURE__*/
                  regenerator_default.a.mark(function _callee(resolve) {
                    var _ref5, menu, logoUrl;

                    return regenerator_default.a.wrap(
                      function _callee$(_context) {
                        while (1) {
                          switch ((_context.prev = _context.next)) {
                            case 0:
                              _context.next = 2;
                              return Object(helpers['e' /* getMenu */])();

                            case 2:
                              _ref5 = _context.sent;
                              menu = _ref5.menu;
                              _context.next = 6;
                              return Object(helpers['d' /* getLogo */])(colour);

                            case 6:
                              logoUrl = _context.sent;
                              resolve({
                                menu: menu,
                                logoUrl: logoUrl
                              });

                            case 8:
                            case 'end':
                              return _context.stop();
                          }
                        }
                      },
                      _callee,
                      this
                    );
                  })
                );

                return function(_x) {
                  return _ref4.apply(this, arguments);
                };
              })()
            ),
            then: function then(_ref6) {
              var menu = _ref6.menu,
                logoUrl = _ref6.logoUrl;

              if (!title || !image) {
                return external_react_default.a.createElement(
                  Header_MenuTemplate,
                  {
                    menuItems: menu,
                    menuColour: colourHex,
                    borderColour: colourHexLight,
                    logoUrl: logoUrl,
                    sticky: true
                  }
                );
              }

              return external_react_default.a.createElement(
                Header_MenuTemplate,
                {
                  menuItems: menu,
                  menuColour: colourHex,
                  borderColour: colourHexLight,
                  logoUrl: logoUrl
                },
                external_react_default.a.createElement(Header, {
                  text: title,
                  image: Object(helpers['g' /* getResizedImageUrl */])(
                    Object(helpers['c' /* getFullUrl */])(image)
                  ),
                  colour: colourHex
                })
              );
            }
          }
        );
      };

      /* harmony default export */ var templates_Header = (__webpack_exports__[
        'a'
      ] = Header_HeaderTemplate);

      /***/
    },
    /* 17 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__(0);
      var external_react_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_
      );

      // EXTERNAL MODULE: external "styled-components"
      var external_styled_components_ = __webpack_require__(1);
      var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(
        external_styled_components_
      );

      // CONCATENATED MODULE: ./components/Header.js
      function _templateObject() {
        var data = _taggedTemplateLiteral([
          '\n  background-color: ',
          ';\n  background-image: url("',
          '");\n  height: 200px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n\n  h1 {\n    line-height: 200px;\n    text-align: center;\n    font-size: 40px;\n  }\n\n  @media screen and (min-width: 991px) {\n    height: 400px;\n\n    h1 {\n      line-height: 400px;\n        font-size: 145px;\n    }\n  }\n\n  @media screen and (min-width: 1241px) {\n    height: 600px;\n\n    h1 {\n      line-height: 600px;\n    }\n  }\n'
        ]);

        _templateObject = function _templateObject() {
          return data;
        };

        return data;
      }

      function _taggedTemplateLiteral(strings, raw) {
        if (!raw) {
          raw = strings.slice(0);
        }
        return Object.freeze(
          Object.defineProperties(strings, {raw: {value: Object.freeze(raw)}})
        );
      }

      var Header = external_styled_components_default.a.header(
        _templateObject(),
        function(props) {
          return props.colour;
        },
        function(props) {
          return props.image;
        }
      );
      /* harmony default export */ var components_Header = Header;
      // CONCATENATED MODULE: ./components/H1.js
      function H1_templateObject() {
        var data = H1_taggedTemplateLiteral([
          '\n  color: #fff;\n  font-size: 40px;\n'
        ]);

        H1_templateObject = function _templateObject() {
          return data;
        };

        return data;
      }

      function H1_taggedTemplateLiteral(strings, raw) {
        if (!raw) {
          raw = strings.slice(0);
        }
        return Object.freeze(
          Object.defineProperties(strings, {raw: {value: Object.freeze(raw)}})
        );
      }

      var H1 = external_styled_components_default.a.h1(H1_templateObject());
      /* harmony default export */ var components_H1 = H1;
      // CONCATENATED MODULE: ./components/HeaderContainer.js

      var HeaderContainer_HeaderContainer = function HeaderContainer(_ref) {
        var text = _ref.text,
          image = _ref.image,
          colour = _ref.colour;
        return external_react_default.a.createElement(
          components_Header,
          {
            image: image,
            colour: colour
          },
          external_react_default.a.createElement(components_H1, null, text)
        );
      };

      /* harmony default export */ var components_HeaderContainer = (__webpack_exports__[
        'a'
      ] = HeaderContainer_HeaderContainer);

      /***/
    },
    /* 18 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        3
      );
      /* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        0
      );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
        react__WEBPACK_IMPORTED_MODULE_1__
      );
      /* harmony import */ var react_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        5
      );
      /* harmony import */ var react_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
        react_promise__WEBPACK_IMPORTED_MODULE_2__
      );
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        1
      );
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
        styled_components__WEBPACK_IMPORTED_MODULE_3__
      );
      /* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
        4
      );
      /* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(
        _router__WEBPACK_IMPORTED_MODULE_4__
      );
      /* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
        6
      );
      /* harmony import */ var _components_Clearfix__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
        7
      );
      /* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
        2
      );
      /* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
        9
      );
      /* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/ __webpack_require__.n(
        react_google_maps__WEBPACK_IMPORTED_MODULE_8__
      );

      function asyncGeneratorStep(
        gen,
        resolve,
        reject,
        _next,
        _throw,
        key,
        arg
      ) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function _asyncToGenerator(fn) {
        return function() {
          var self = this,
            args = arguments;
          return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                'next',
                value
              );
            }
            function _throw(err) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                'throw',
                err
              );
            }
            _next(undefined);
          });
        };
      }

      function _templateObject7() {
        var data = _taggedTemplateLiteral([
          '\n  display: inline-block;\n  margin-right: 50px;\n\n  & a {\n    display: block;\n  }\n'
        ]);

        _templateObject7 = function _templateObject7() {
          return data;
        };

        return data;
      }

      function _templateObject6() {
        var data = _taggedTemplateLiteral([
          '\n  margin-top: 20px;\n  line-height: 18px;\n  color: white;\n'
        ]);

        _templateObject6 = function _templateObject6() {
          return data;
        };

        return data;
      }

      function _templateObject5() {
        var data = _taggedTemplateLiteral(['\n  padding-bottom: 5px;\n']);

        _templateObject5 = function _templateObject5() {
          return data;
        };

        return data;
      }

      function _templateObject4() {
        var data = _taggedTemplateLiteral([
          '\n  color: #fff;\n  margin-bottom: 20px;\n  margin-left: 20px;\n\n  a {\n    color: #fff;\n  }\n'
        ]);

        _templateObject4 = function _templateObject4() {
          return data;
        };

        return data;
      }

      function _templateObject3() {
        var data = _taggedTemplateLiteral([
          '\n  padding: 20px;\n\n  @media screen and (min-width: 991px) {\n    width: calc(30% - 20px);\n    float: left;\n    margin-right: 20px;\n  }\n'
        ]);

        _templateObject3 = function _templateObject3() {
          return data;
        };

        return data;
      }

      function _templateObject2() {
        var data = _taggedTemplateLiteral([
          '\n  background: rgb(180, 180, 180);\n  font-size: 14px;\n'
        ]);

        _templateObject2 = function _templateObject2() {
          return data;
        };

        return data;
      }

      function _templateObject() {
        var data = _taggedTemplateLiteral(['\n  color: #666;\n']);

        _templateObject = function _templateObject() {
          return data;
        };

        return data;
      }

      function _taggedTemplateLiteral(strings, raw) {
        if (!raw) {
          raw = strings.slice(0);
        }
        return Object.freeze(
          Object.defineProperties(strings, {raw: {value: Object.freeze(raw)}})
        );
      }

      var H3 = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h3(
        _templateObject()
      );
      var Footer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.footer(
        _templateObject2()
      );
      var Section = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.section(
        _templateObject3()
      );
      var Credits = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.ul(
        _templateObject4()
      );
      var Credit = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.li(
        _templateObject5()
      );
      var Main = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(
        _templateObject6()
      );
      var SocialMediaItem = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.li(
        _templateObject7()
      );
      var Map = Object(
        react_google_maps__WEBPACK_IMPORTED_MODULE_8__['withScriptjs']
      )(
        Object(react_google_maps__WEBPACK_IMPORTED_MODULE_8__['withGoogleMap'])(
          function() {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
              react_google_maps__WEBPACK_IMPORTED_MODULE_8__['GoogleMap'],
              {
                defaultZoom: 15,
                defaultCenter: {
                  lat: 53.954981,
                  lng: -1.124655
                },
                key: 'AIzaSyAM-NvLRlF1XXUKnPCoRKWfuuodqKuvBso'
              },
              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                react_google_maps__WEBPACK_IMPORTED_MODULE_8__['Marker'],
                {
                  position: {
                    lat: 53.954981,
                    lng: -1.124655
                  }
                }
              )
            );
          }
        )
      );

      var FooterTemplate = function FooterTemplate() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
          react_promise__WEBPACK_IMPORTED_MODULE_2___default.a,
          {
            promise: new Promise(
              /*#__PURE__*/
              (function() {
                var _ref = _asyncToGenerator(
                  /*#__PURE__*/
                  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(
                    function _callee(resolve) {
                      var data, address, contact, credits, socialMedia;
                      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(
                        function _callee$(_context) {
                          while (1) {
                            switch ((_context.prev = _context.next)) {
                              case 0:
                                _context.next = 2;
                                return Object(
                                  _helpers__WEBPACK_IMPORTED_MODULE_7__[
                                    /* getData */ 'b'
                                  ]
                                )('data/footer.json');

                              case 2:
                                data = _context.sent;
                                (address = data.address),
                                  (contact = data.contact),
                                  (credits = data.credits),
                                  (socialMedia = data.socialMedia);
                                resolve({
                                  address: address,
                                  contact: contact,
                                  credits: credits,
                                  socialMedia: socialMedia
                                });

                              case 5:
                              case 'end':
                                return _context.stop();
                            }
                          }
                        },
                        _callee,
                        this
                      );
                    }
                  )
                );

                return function(_x) {
                  return _ref.apply(this, arguments);
                };
              })()
            ),
            then: function then(_ref2) {
              var address = _ref2.address,
                contact = _ref2.contact,
                credits = _ref2.credits,
                socialMedia = _ref2.socialMedia;
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                Footer,
                null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  _components_Container__WEBPACK_IMPORTED_MODULE_5__[
                    /* default */ 'a'
                  ],
                  null,
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    Section,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                      H3,
                      null,
                      address.name
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                      Main,
                      null,
                      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        'address',
                        null,
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                          'p',
                          null,
                          address.addressLine1
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                          'p',
                          null,
                          address.addressLine2,
                          ', ',
                          address.city
                        ),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                          'p',
                          null,
                          address.postcode
                        )
                      )
                    )
                  ),
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    Section,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                      H3,
                      null,
                      contact.title
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                      Main,
                      null,
                      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        'p',
                        null,
                        contact.contactNumber
                      ),
                      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        'p',
                        null,
                        contact.email
                      )
                    )
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  _components_Container__WEBPACK_IMPORTED_MODULE_5__[
                    /* default */ 'a'
                  ],
                  null,
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    Section,
                    null,
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                      H3,
                      null,
                      socialMedia.title
                    ),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                      Main,
                      null,
                      react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        'ul',
                        null,
                        socialMedia.list.map(function(item) {
                          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            SocialMediaItem,
                            {
                              key: item.link
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                              'a',
                              {
                                href: item.link
                              },
                              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                'img',
                                {
                                  src: Object(
                                    _helpers__WEBPACK_IMPORTED_MODULE_7__[
                                      /* getFullUrl */ 'c'
                                    ]
                                  )(item.image)
                                }
                              )
                            )
                          );
                        })
                      )
                    )
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  _components_Clearfix__WEBPACK_IMPORTED_MODULE_6__[
                    /* default */ 'a'
                  ],
                  null
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  _components_Container__WEBPACK_IMPORTED_MODULE_5__[
                    /* default */ 'a'
                  ],
                  null,
                  react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                    Credits,
                    null,
                    credits.map(function(credit) {
                      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                        Credit,
                        {
                          key: JSON.stringify(credit)
                        },
                        credit.role,
                        ' by',
                        ' ',
                        credit.links.map(function(link, index) {
                          var l = link.link;

                          if (!l.includes('http')) {
                            l = 'http://'.concat(l);
                          }

                          if (index + 1 === credit.links.length) {
                            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                              _router__WEBPACK_IMPORTED_MODULE_4__['Link'],
                              {
                                href: l,
                                key: l
                              },
                              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                'a',
                                null,
                                link.name
                              )
                            );
                          }

                          if (index + 1 === credit.links.length - 1) {
                            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                              'span',
                              {
                                key: l
                              },
                              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                _router__WEBPACK_IMPORTED_MODULE_4__['Link'],
                                {
                                  href: l
                                },
                                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                  'a',
                                  null,
                                  link.name
                                )
                              ),
                              ' and '
                            );
                          }

                          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                            'span',
                            {
                              key: l
                            },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                              _router__WEBPACK_IMPORTED_MODULE_4__['Link'],
                              {
                                href: l
                              },
                              react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                                'a',
                                null,
                                link.name
                              )
                            ),
                            ', '
                          );
                        })
                      );
                    })
                  )
                ),
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                  Map,
                  {
                    googleMapURL:
                      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAM-NvLRlF1XXUKnPCoRKWfuuodqKuvBso&v=3.exp&libraries=geometry,drawing,places',
                    loadingElement: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                      'div',
                      null
                    ),
                    containerElement: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                      'div',
                      {
                        style: {
                          height: '150px'
                        }
                      }
                    ),
                    mapElement: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(
                      'div',
                      {
                        style: {
                          height: '100%'
                        }
                      }
                    )
                  }
                )
              );
            }
          }
        );
      };

      /* harmony default export */ __webpack_exports__['a'] = FooterTemplate;

      /***/
    },
    /* 19 */
    /***/ function(module, exports) {
      module.exports = require('downshift');

      /***/
    },
    /* 20 */
    /***/ function(module, exports) {
      module.exports = require('flat');

      /***/
    },
    /* 21 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        1
      );
      /* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
        styled_components__WEBPACK_IMPORTED_MODULE_0__
      );
      function _templateObject() {
        var data = _taggedTemplateLiteral([
          '\n  position: relative;\n  height: ',
          ';\n  background: ',
          ';\n  overflow: hidden;\n  margin-bottom: ',
          ';\n\n  @media screen and (min-width: 991px) {\n    height: 500px;\n  }\n'
        ]);

        _templateObject = function _templateObject() {
          return data;
        };

        return data;
      }

      function _taggedTemplateLiteral(strings, raw) {
        if (!raw) {
          raw = strings.slice(0);
        }
        return Object.freeze(
          Object.defineProperties(strings, {raw: {value: Object.freeze(raw)}})
        );
      }

      var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(
        _templateObject(),
        function(props) {
          return props.mobileHeight || '200px';
        },
        function(props) {
          return props.color;
        },
        function(props) {
          return props.mobileMarginBottom || '20px';
        }
      );
      /* harmony default export */ __webpack_exports__['a'] = ImageWrapper;

      /***/
    },
    /* 22 */
    /***/ function(module, exports) {
      module.exports = require('next-routes');

      /***/
    },
    /* 23 */
    /***/ function(module, exports) {
      module.exports = require('next/router');

      /***/
    },
    ,
    /* 24 */ /* 25 */
    /***/ function(module, exports) {
      module.exports = require('date-fns');

      /***/
    },
    /* 26 */
    /***/ function(module, exports) {
      module.exports = require('markdown');

      /***/
    },
    ,
    ,
    ,
    /* 27 */ /* 28 */ /* 29 */ /* 30 */
    /***/ function(module, exports) {
      module.exports = require('react-sound');

      /***/
    },
    /* 31 */
    /***/ function(module, exports) {
      module.exports = require('rc-slider/lib/Slider');

      /***/
    },
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    /* 32 */ /* 33 */ /* 34 */ /* 35 */ /* 36 */ /* 37 */ /* 38 */ /* 39 */ /* 40 */ /* 41 */ /* 42 */ /* 43 */ /* 44 */ /* 45 */ /* 46 */ /* 47 */ /* 48 */ /* 49 */ /* 50 */ /* 51 */
    /***/ function(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(57);

      /***/
    },
    ,
    ,
    ,
    ,
    ,
    /* 52 */ /* 53 */ /* 54 */ /* 55 */ /* 56 */ /* 57 */
    /***/ function(module, __webpack_exports__, __webpack_require__) {
      'use strict';
      __webpack_require__.r(__webpack_exports__);

      // EXTERNAL MODULE: external "@babel/runtime/regenerator"
      var regenerator_ = __webpack_require__(3);
      var regenerator_default = /*#__PURE__*/ __webpack_require__.n(
        regenerator_
      );

      // EXTERNAL MODULE: external "react"
      var external_react_ = __webpack_require__(0);
      var external_react_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_
      );

      // EXTERNAL MODULE: external "styled-components"
      var external_styled_components_ = __webpack_require__(1);
      var external_styled_components_default = /*#__PURE__*/ __webpack_require__.n(
        external_styled_components_
      );

      // EXTERNAL MODULE: external "next/router"
      var router_ = __webpack_require__(23);

      // EXTERNAL MODULE: external "next/head"
      var head_ = __webpack_require__(14);
      var head_default = /*#__PURE__*/ __webpack_require__.n(head_);

      // EXTERNAL MODULE: external "date-fns"
      var external_date_fns_ = __webpack_require__(25);

      // EXTERNAL MODULE: external "markdown"
      var external_markdown_ = __webpack_require__(26);

      // EXTERNAL MODULE: ./helpers/config.js
      var config = __webpack_require__(10);

      // EXTERNAL MODULE: ./helpers/index.js
      var helpers = __webpack_require__(2);

      // EXTERNAL MODULE: ./templates/Header.js + 4 modules
      var Header = __webpack_require__(16);

      // EXTERNAL MODULE: ./components/HeaderContainer.js + 2 modules
      var HeaderContainer = __webpack_require__(17);

      // EXTERNAL MODULE: ./templates/Footer.js
      var Footer = __webpack_require__(18);

      // EXTERNAL MODULE: ./components/ImageWrapper.js
      var ImageWrapper = __webpack_require__(21);

      // EXTERNAL MODULE: ./components/Image.js
      var Image = __webpack_require__(15);

      // EXTERNAL MODULE: ./components/Container.js
      var Container = __webpack_require__(6);

      // EXTERNAL MODULE: external "react-sound"
      var external_react_sound_ = __webpack_require__(30);
      var external_react_sound_default = /*#__PURE__*/ __webpack_require__.n(
        external_react_sound_
      );

      // EXTERNAL MODULE: external "rc-slider/lib/Slider"
      var Slider_ = __webpack_require__(31);
      var Slider_default = /*#__PURE__*/ __webpack_require__.n(Slider_);

      // EXTERNAL MODULE: ./components/Clearfix.js
      var Clearfix = __webpack_require__(7);

      // CONCATENATED MODULE: ./components/Audio.js
      function _typeof(obj) {
        if (
          typeof Symbol === 'function' &&
          typeof Symbol.iterator === 'symbol'
        ) {
          _typeof = function _typeof(obj) {
            return typeof obj;
          };
        } else {
          _typeof = function _typeof(obj) {
            return obj &&
              typeof Symbol === 'function' &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? 'symbol'
              : typeof obj;
          };
        }
        return _typeof(obj);
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError('Cannot call a class as a function');
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (
          call &&
          (_typeof(call) === 'object' || typeof call === 'function')
        ) {
          return call;
        }
        return _assertThisInitialized(self);
      }

      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function _getPrototypeOf(o) {
              return o.__proto__ || Object.getPrototypeOf(o);
            };
        return _getPrototypeOf(o);
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== 'function' && superClass !== null) {
          throw new TypeError(
            'Super expression must either be null or a function'
          );
        }
        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {value: subClass, writable: true, configurable: true}
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf =
          Object.setPrototypeOf ||
          function _setPrototypeOf(o, p) {
            o.__proto__ = p;
            return o;
          };
        return _setPrototypeOf(o, p);
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        }
        return self;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      function _templateObject5() {
        var data = _taggedTemplateLiteral(['\n  color: ', ';\n']);

        _templateObject5 = function _templateObject5() {
          return data;
        };

        return data;
      }

      function _templateObject4() {
        var data = _taggedTemplateLiteral([
          '\n  width: 150px;\n  float: right;\n  padding: 20px 0;\n\n  .rc-slider-rail {\n    background: white;\n  }\n\n  .rc-slider-track {\n    background: ',
          ';\n  }\n\n  .rc-slider-handle {\n    border-color: ',
          ';\n  }\n'
        ]);

        _templateObject4 = function _templateObject4() {
          return data;
        };

        return data;
      }

      function _templateObject3() {
        var data = _taggedTemplateLiteral([
          '\n  width: 225px;\n  margin-top: 20px;\n\n  @media screen and (min-width: 600px) {\n    margin-top: 0;\n    float: right;\n  }\n'
        ]);

        _templateObject3 = function _templateObject3() {
          return data;
        };

        return data;
      }

      function _templateObject2() {
        var data = _taggedTemplateLiteral([
          '\n  background: transparent;\n  border: 0;\n  cursor: pointer;\n  margin-right: 20px;\n'
        ]);

        _templateObject2 = function _templateObject2() {
          return data;
        };

        return data;
      }

      function _templateObject() {
        var data = _taggedTemplateLiteral([
          '\n  background: ',
          ';\n  margin: 100px 0;\n  padding: 20px 40px;\n'
        ]);

        _templateObject = function _templateObject() {
          return data;
        };

        return data;
      }

      function _taggedTemplateLiteral(strings, raw) {
        if (!raw) {
          raw = strings.slice(0);
        }
        return Object.freeze(
          Object.defineProperties(strings, {raw: {value: Object.freeze(raw)}})
        );
      }

      var AudioPlayer = external_styled_components_default.a.div(
        _templateObject(),
        function(props) {
          return props.colour;
        }
      );
      var Button = external_styled_components_default.a.button(
        _templateObject2()
      );
      var SliderContainer = external_styled_components_default.a.div(
        _templateObject3()
      );
      var StyledSlider = external_styled_components_default()(Slider_default.a)(
        _templateObject4(),
        function(props) {
          return props.colour;
        },
        function(props) {
          return props.colour;
        }
      );
      var Download = external_styled_components_default.a.a(
        _templateObject5(),
        function(props) {
          return props.colour;
        }
      );

      var Audio_Audio =
        /*#__PURE__*/
        (function(_React$Component) {
          _inherits(Audio, _React$Component);

          function Audio() {
            var _getPrototypeOf2;

            var _this;

            _classCallCheck(this, Audio);

            for (
              var _len = arguments.length, args = new Array(_len), _key = 0;
              _key < _len;
              _key++
            ) {
              args[_key] = arguments[_key];
            }

            _this = _possibleConstructorReturn(
              this,
              (_getPrototypeOf2 = _getPrototypeOf(Audio)).call.apply(
                _getPrototypeOf2,
                [this].concat(args)
              )
            );

            _defineProperty(
              _assertThisInitialized(_assertThisInitialized(_this)),
              'state',
              {
                playStatus: 'STOPPED',
                position: 0,
                duration: 0,
                volume: 100
              }
            );

            _defineProperty(
              _assertThisInitialized(_assertThisInitialized(_this)),
              'togglePlayPause',
              function() {
                if (_this.state.playStatus === 'PLAYING') {
                  _this.pressPause();
                } else {
                  _this.pressPlay();
                }
              }
            );

            _defineProperty(
              _assertThisInitialized(_assertThisInitialized(_this)),
              'pressPlay',
              function() {
                _this.setState({
                  playStatus: 'PLAYING'
                });
              }
            );

            _defineProperty(
              _assertThisInitialized(_assertThisInitialized(_this)),
              'pressPause',
              function() {
                _this.setState({
                  playStatus: 'PAUSED'
                });
              }
            );

            _defineProperty(
              _assertThisInitialized(_assertThisInitialized(_this)),
              'pressFastForward',
              function() {
                if (_this.state.position + 10000 > _this.state.duration) {
                  _this.setState({
                    position: _this.state.duration
                  }); // lgtm [js/react/inconsistent-state-update]
                } else {
                  _this.setState({
                    position: _this.state.position + 10000
                  }); // lgtm [js/react/inconsistent-state-update]
                }
              }
            );

            _defineProperty(
              _assertThisInitialized(_assertThisInitialized(_this)),
              'pressBack',
              function() {
                if (_this.state.position - 10000 < 0) {
                  _this.setState({
                    position: 0
                  });
                } else {
                  _this.setState({
                    position: _this.state.position - 10000
                  }); // lgtm [js/react/inconsistent-state-update]
                }
              }
            );

            _defineProperty(
              _assertThisInitialized(_assertThisInitialized(_this)),
              'setPositionAndDuration',
              function(_ref) {
                var position = _ref.position,
                  duration = _ref.duration;

                _this.setState({
                  position: position,
                  duration: duration
                });
              }
            );

            _defineProperty(
              _assertThisInitialized(_assertThisInitialized(_this)),
              'setDuration',
              function(_ref2) {
                var duration = _ref2.duration;

                _this.setState({
                  duration: duration
                });
              }
            );

            _defineProperty(
              _assertThisInitialized(_assertThisInitialized(_this)),
              'handleVolumeChange',
              function(volume) {
                _this.setState({
                  playStatus: 'PAUSED'
                });

                _this.setState({
                  volume: volume
                });

                _this.setState({
                  playStatus: 'PLAYING'
                });
              }
            );

            _defineProperty(
              _assertThisInitialized(_assertThisInitialized(_this)),
              'handlePlaying',
              function(_ref3) {
                var position = _ref3.position;

                _this.setState({
                  position: position
                });
              }
            );

            _defineProperty(
              _assertThisInitialized(_assertThisInitialized(_this)),
              'render',
              function() {
                return external_react_default.a.createElement(
                  AudioPlayer,
                  {
                    colour: _this.props.colour
                  },
                  external_react_default.a.createElement(
                    external_react_sound_default.a,
                    {
                      url: _this.props.url,
                      volume: _this.state.volume,
                      autoLoad: true,
                      playStatus: _this.state.playStatus,
                      position: _this.state.position,
                      onPause: _this.setPositionAndDuration,
                      onStop: _this.setPositionAndDuration,
                      onLoading: _this.setDuration,
                      onPlaying: _this.handlePlaying
                    }
                  ),
                  external_react_default.a.createElement(
                    Button,
                    {
                      onClick: _this.pressBack
                    },
                    external_react_default.a.createElement('img', {
                      src: Object(helpers['c' /* getFullUrl */])(
                        '/uploads/rewind.png'
                      )
                    })
                  ),
                  external_react_default.a.createElement(
                    Button,
                    {
                      onClick: _this.togglePlayPause
                    },
                    _this.state.playStatus === 'PLAYING' &&
                      external_react_default.a.createElement('img', {
                        src: Object(helpers['c' /* getFullUrl */])(
                          '/uploads/pause.png'
                        )
                      }),
                    _this.state.playStatus === 'PAUSED' &&
                      external_react_default.a.createElement('img', {
                        src: Object(helpers['c' /* getFullUrl */])(
                          '/uploads/play.png'
                        )
                      }),
                    _this.state.playStatus === 'STOPPED' &&
                      external_react_default.a.createElement('img', {
                        src: Object(helpers['c' /* getFullUrl */])(
                          '/uploads/play.png'
                        )
                      })
                  ),
                  external_react_default.a.createElement(
                    Button,
                    {
                      onClick: _this.pressFastForward
                    },
                    external_react_default.a.createElement('img', {
                      src: Object(helpers['c' /* getFullUrl */])(
                        '/uploads/fast-forward.png'
                      )
                    })
                  ),
                  external_react_default.a.createElement(
                    Download,
                    {
                      href: _this.props.url,
                      colour: _this.props.lightColour
                    },
                    external_react_default.a.createElement('img', {
                      src: Object(helpers['c' /* getFullUrl */])(
                        '/uploads/download.png'
                      )
                    })
                  ),
                  external_react_default.a.createElement(
                    SliderContainer,
                    null,
                    external_react_default.a.createElement('img', {
                      src: Object(helpers['c' /* getFullUrl */])(
                        '/uploads/volume.png'
                      )
                    }),
                    external_react_default.a.createElement(StyledSlider, {
                      onChange: _this.handleVolumeChange,
                      defaultValue: 100,
                      colour: _this.props.lightColour
                    }),
                    external_react_default.a.createElement(
                      Clearfix['a' /* default */],
                      null
                    )
                  ),
                  external_react_default.a.createElement(
                    Clearfix['a' /* default */],
                    null
                  )
                );
              }
            );

            return _this;
          }

          return Audio;
        })(external_react_default.a.Component);

      /* harmony default export */ var components_Audio = Audio_Audio;
      // CONCATENATED MODULE: ./components/H1Word.js
      function H1Word_templateObject() {
        var data = H1Word_taggedTemplateLiteral([
          '\n  font-size: 57px;\n  line-height: 76px;\n  color: #fff;\n'
        ]);

        H1Word_templateObject = function _templateObject() {
          return data;
        };

        return data;
      }

      function H1Word_taggedTemplateLiteral(strings, raw) {
        if (!raw) {
          raw = strings.slice(0);
        }
        return Object.freeze(
          Object.defineProperties(strings, {raw: {value: Object.freeze(raw)}})
        );
      }

      var H1 = external_styled_components_default.a.h1(H1Word_templateObject());
      /* harmony default export */ var H1Word = H1;
      // CONCATENATED MODULE: ./components/H2Word.js
      function H2Word_templateObject() {
        var data = H2Word_taggedTemplateLiteral([
          '\n  font-size: 30px;\n  line-height: 40px;\n  color: #fff;\n'
        ]);

        H2Word_templateObject = function _templateObject() {
          return data;
        };

        return data;
      }

      function H2Word_taggedTemplateLiteral(strings, raw) {
        if (!raw) {
          raw = strings.slice(0);
        }
        return Object.freeze(
          Object.defineProperties(strings, {raw: {value: Object.freeze(raw)}})
        );
      }

      var H2 = external_styled_components_default.a.h2(H2Word_templateObject());
      /* harmony default export */ var H2Word = H2;
      // CONCATENATED MODULE: ./components/PWord.js
      function PWord_templateObject() {
        var data = PWord_taggedTemplateLiteral([
          '\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-bottom: 20px;\n\n  @media screen and (min-width: 1240px) {\n    margin-left: 0;\n    margin-right: 0;\n  }\n'
        ]);

        PWord_templateObject = function _templateObject() {
          return data;
        };

        return data;
      }

      function PWord_taggedTemplateLiteral(strings, raw) {
        if (!raw) {
          raw = strings.slice(0);
        }
        return Object.freeze(
          Object.defineProperties(strings, {raw: {value: Object.freeze(raw)}})
        );
      }

      var P = external_styled_components_default.a.div(PWord_templateObject());
      /* harmony default export */ var PWord = P;
      // CONCATENATED MODULE: ./components/DeckWord.js
      function DeckWord_templateObject() {
        var data = DeckWord_taggedTemplateLiteral([
          '\n  padding: 40px;\n  background: ',
          ';\n'
        ]);

        DeckWord_templateObject = function _templateObject() {
          return data;
        };

        return data;
      }

      function DeckWord_taggedTemplateLiteral(strings, raw) {
        if (!raw) {
          raw = strings.slice(0);
        }
        return Object.freeze(
          Object.defineProperties(strings, {raw: {value: Object.freeze(raw)}})
        );
      }

      var Deck = external_styled_components_default.a.div(
        DeckWord_templateObject(),
        function(props) {
          return props.colour;
        }
      );
      /* harmony default export */ var DeckWord = Deck;
      // CONCATENATED MODULE: ./components/DateWord.js
      function DateWord_templateObject() {
        var data = DateWord_taggedTemplateLiteral(['\n  color: ', ';\n']);

        DateWord_templateObject = function _templateObject() {
          return data;
        };

        return data;
      }

      function DateWord_taggedTemplateLiteral(strings, raw) {
        if (!raw) {
          raw = strings.slice(0);
        }
        return Object.freeze(
          Object.defineProperties(strings, {raw: {value: Object.freeze(raw)}})
        );
      }

      var StyledDate = external_styled_components_default.a.div(
        DateWord_templateObject(),
        function(props) {
          return props.colour;
        }
      );
      /* harmony default export */ var DateWord = StyledDate;
      // CONCATENATED MODULE: ./components/LinkWord.js
      function LinkWord_templateObject() {
        var data = LinkWord_taggedTemplateLiteral(['\n  color: ', ';\n']);

        LinkWord_templateObject = function _templateObject() {
          return data;
        };

        return data;
      }

      function LinkWord_taggedTemplateLiteral(strings, raw) {
        if (!raw) {
          raw = strings.slice(0);
        }
        return Object.freeze(
          Object.defineProperties(strings, {raw: {value: Object.freeze(raw)}})
        );
      }

      var Link = external_styled_components_default.a.a(
        LinkWord_templateObject(),
        function(props) {
          return props.colour;
        }
      );
      /* harmony default export */ var LinkWord = Link;
      // CONCATENATED MODULE: ./pages/word.js

      function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};
          var ownKeys = Object.keys(source);
          if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(
              Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
              })
            );
          }
          ownKeys.forEach(function(key) {
            word_defineProperty(target, key, source[key]);
          });
        }
        return target;
      }

      function word_defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }
        return obj;
      }

      function asyncGeneratorStep(
        gen,
        resolve,
        reject,
        _next,
        _throw,
        key,
        arg
      ) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }
        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function _asyncToGenerator(fn) {
        return function() {
          var self = this,
            args = arguments;
          return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                'next',
                value
              );
            }
            function _throw(err) {
              asyncGeneratorStep(
                gen,
                resolve,
                reject,
                _next,
                _throw,
                'throw',
                err
              );
            }
            _next(undefined);
          });
        };
      }

      function _slicedToArray(arr, i) {
        return (
          _arrayWithHoles(arr) ||
          _iterableToArrayLimit(arr, i) ||
          _nonIterableRest()
        );
      }

      function _nonIterableRest() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance'
        );
      }

      function _iterableToArrayLimit(arr, i) {
        var _arr = [];
        var _n = true;
        var _d = false;
        var _e = undefined;
        try {
          for (
            var _i = arr[Symbol.iterator](), _s;
            !(_n = (_s = _i.next()).done);
            _n = true
          ) {
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i['return'] != null) _i['return']();
          } finally {
            if (_d) throw _e;
          }
        }
        return _arr;
      }

      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }

      var word_Word = function Word(_ref) {
        var router = _ref.router;

        var _useState = Object(external_react_['useState'])(true),
          _useState2 = _slicedToArray(_useState, 2),
          loading = _useState2[0],
          setLoading = _useState2[1];

        var _useState3 = Object(external_react_['useState'])({}),
          _useState4 = _slicedToArray(_useState3, 2),
          word = _useState4[0],
          setWord = _useState4[1];

        var fetchData =
          /*#__PURE__*/
          (function() {
            var _ref2 = _asyncToGenerator(
              /*#__PURE__*/
              regenerator_default.a.mark(function _callee() {
                var id, data, colour, audioFile;
                return regenerator_default.a.wrap(
                  function _callee$(_context) {
                    while (1) {
                      switch ((_context.prev = _context.next)) {
                        case 0:
                          id = router.query.id;
                          id = id
                            .split(' ')
                            .join('-')
                            .split(':')
                            .join('')
                            .toLowerCase();
                          _context.next = 4;
                          return Object(helpers['b' /* getData */])(
                            'data/words/'.concat(id, '.json')
                          );

                        case 4:
                          data = _context.sent;
                          colour = Object(helpers['f' /* getMenuColour */])(
                            data
                          );
                          audioFile = data.audioFile;

                          if (!audioFile || !audioFile.includes('.mp3')) {
                            audioFile = '';
                          } else {
                            audioFile = Object(helpers['c' /* getFullUrl */])(
                              audioFile
                            );
                          }

                          setWord(
                            _objectSpread({}, data, {
                              audioFile: audioFile,
                              colour: colour,
                              colourHex: Object(
                                helpers['a' /* changeColourToHex */]
                              )(colour),
                              colourHexLight: Object(
                                helpers['a' /* changeColourToHex */]
                              )(colour, true)
                            })
                          );
                          setLoading(false);

                        case 10:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  },
                  _callee,
                  this
                );
              })
            );

            return function fetchData() {
              return _ref2.apply(this, arguments);
            };
          })();

        Object(external_react_['useEffect'])(
          function() {
            fetchData();
          },
          [router]
        );
        var title = word.title,
          colour = word.colour,
          colourHex = word.colourHex,
          colourHexLight = word.colourHexLight,
          date = word.date,
          subtitle = word.subtitle,
          url = word.url,
          image = word.image,
          audioFile = word.audioFile,
          deck = word.deck,
          youtubeLink = word.youtubeLink,
          file = word.file,
          authors = word.authors;

        if (loading) {
          return external_react_default.a.createElement('div', null);
        }

        return external_react_default.a.createElement(
          external_react_default.a.Fragment,
          null,
          external_react_default.a.createElement(
            head_default.a,
            null,
            external_react_default.a.createElement(
              'title',
              {
                key: 'title'
              },
              title,
              ' - Gateway Church, York'
            )
          ),
          external_react_default.a.createElement(Header['a' /* default */], {
            colour: colour,
            colourHex: colourHex,
            colourHexLight: colourHexLight,
            Header: HeaderContainer['a' /* default */]
          }),
          external_react_default.a.createElement(
            DeckWord,
            {
              colour: colourHexLight
            },
            external_react_default.a.createElement(
              Container['a' /* default */],
              null,
              external_react_default.a.createElement(
                DateWord,
                {
                  colour: colourHex
                },
                date &&
                  Object(external_date_fns_['format'])(
                    date,
                    'EEEE do LLLL yyyy'
                  ),
                ' ',
                authors &&
                  external_react_default.a.createElement(
                    external_react_default.a.Fragment,
                    null,
                    '-',
                    ' ',
                    authors.map(function(_ref3) {
                      var author = _ref3.author;
                      return external_react_default.a.createElement(
                        external_react_default.a.Fragment,
                        null,
                        author,
                        ' '
                      );
                    })
                  )
              ),
              external_react_default.a.createElement(
                H1Word,
                null,
                title &&
                  title
                    .split('-')
                    .map(function(word) {
                      return word[0].toUpperCase() + word.substr(1);
                    })
                    .join(' ')
              ),
              external_react_default.a.createElement(H2Word, null, subtitle)
            )
          ),
          external_react_default.a.createElement(
            Container['a' /* default */],
            null,
            image &&
              external_react_default.a.createElement(
                ImageWrapper['a' /* default */],
                null,
                external_react_default.a.createElement(
                  Image['a' /* default */],
                  {
                    url:
                      Object(helpers['c' /* getFullUrl */])() + image.slice(1)
                  }
                )
              ),
            audioFile &&
              external_react_default.a.createElement(
                PWord,
                null,
                external_react_default.a.createElement(components_Audio, {
                  url: audioFile,
                  colour: colourHex,
                  lightColour: colourHexLight
                })
              ),
            file &&
              file.endsWith('mp3') &&
              external_react_default.a.createElement(
                PWord,
                null,
                external_react_default.a.createElement(components_Audio, {
                  url: Object(helpers['c' /* getFullUrl */])(file),
                  colour: colourHex,
                  lightColour: colourHexLight
                })
              ),
            deck &&
              deck.startsWith('<') &&
              external_react_default.a.createElement(PWord, {
                dangerouslySetInnerHTML: {
                  __html: deck
                }
              }),
            deck &&
              !deck.startsWith('<') &&
              external_react_default.a.createElement(PWord, {
                dangerouslySetInnerHTML: {
                  __html: external_markdown_['markdown'].toHTML(deck)
                }
              }),
            youtubeLink &&
              external_react_default.a.createElement(
                PWord,
                null,
                external_react_default.a.createElement(
                  LinkWord,
                  {
                    colour: colourHex,
                    href: youtubeLink
                  },
                  youtubeLink
                )
              ),
            file &&
              !file.includes('mp3') &&
              external_react_default.a.createElement(
                PWord,
                null,
                external_react_default.a.createElement(
                  LinkWord,
                  {
                    colour: colourHex,
                    href: Object(helpers['c' /* getFullUrl */])(file)
                  },
                  file.replace('/uploads/', '')
                )
              )
          ),
          external_react_default.a.createElement(
            Footer['a' /* default */],
            null
          )
        );
      };

      /* harmony default export */ var pages_word = (__webpack_exports__[
        'default'
      ] = Object(router_['withRouter'])(word_Word));

      /***/
    }
    /******/
  ]
);
