module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getAllColours; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return changeColourToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getMenuColour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getFullUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getResizedImageUrl; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var getAllColours = function getAllColours() {
  var colour = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var c = _config__WEBPACK_IMPORTED_MODULE_2__[/* colours */ "a"].find(function (c) {
    return c.name.toLowerCase() === colour.toLowerCase();
  });
  return c ? [c.name, c.hex, c.hexLight] : [];
};
var changeColourToHex = function changeColourToHex(colour, lightVariant) {
  var _getAllColours = getAllColours(colour),
      _getAllColours2 = _slicedToArray(_getAllColours, 3),
      hex = _getAllColours2[1],
      hexLight = _getAllColours2[2];

  return lightVariant ? hexLight : hex;
};
var getMenuColour = function getMenuColour(pageData) {
  return pageData.header && pageData.header.menuColour || pageData.menuColour || 'red';
};
var getMenu =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var menuUrl, menuResponse, menuData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            menuUrl = _config__WEBPACK_IMPORTED_MODULE_2__[/* url */ "b"] + 'data/menu.json';
            _context.next = 3;
            return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(menuUrl).catch(function (e) {
              return e;
            });

          case 3:
            menuResponse = _context.sent;
            _context.next = 6;
            return menuResponse.json();

          case 6:
            menuData = _context.sent;
            return _context.abrupt("return", menuData);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getMenu() {
    return _ref.apply(this, arguments);
  };
}();
var getFullUrl = function getFullUrl() {
  var urlEnd = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  if (urlEnd.includes('http')) {
    return urlEnd;
  }

  if (urlEnd[0] === '/') {
    urlEnd = urlEnd.replace('/', '');
  }

  return _config__WEBPACK_IMPORTED_MODULE_2__[/* url */ "b"] + urlEnd;
};
var getLogo =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(menuColour) {
    var logoLocation, logoResponse, logoData, logoUrl;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            logoLocation = getFullUrl("data/logos/".concat(menuColour || 'red', ".json"));
            _context2.next = 3;
            return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(logoLocation).catch(function (e) {
              return e;
            });

          case 3:
            logoResponse = _context2.sent;
            _context2.next = 6;
            return logoResponse.json();

          case 6:
            logoData = _context2.sent;
            logoUrl = getFullUrl(logoData.image);
            return _context2.abrupt("return", logoUrl);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getLogo(_x) {
    return _ref2.apply(this, arguments);
  };
}();
var getData =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(pageName) {
    var pageUrl, response, pageData;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            pageUrl = _config__WEBPACK_IMPORTED_MODULE_2__[/* url */ "b"] + pageName;
            _context3.next = 3;
            return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default()(pageUrl);

          case 3:
            response = _context3.sent;

            if (response.ok) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return", new Error('something messed up'));

          case 6:
            _context3.next = 8;
            return response.json();

          case 8:
            pageData = _context3.sent;
            return _context3.abrupt("return", pageData);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getData(_x2) {
    return _ref3.apply(this, arguments);
  };
}();
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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var routes = module.exports = __webpack_require__(22)();

module.exports = routes.add('index', '/').add('events', '/events').add('event', '/events/:id').add('people', '/people').add('person', '/people/:id').add('words', '/words').add('word', '/words/:id').add('contact-us', '/contact-us').add('error-404', '/404').add('page', '/:id');

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  @media screen and (min-width: 1241px) {\n    width: 1200px;\n    margin: 0 auto;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());
/* harmony default export */ __webpack_exports__["a"] = (Container);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  clear: both;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Clearfix = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());
/* harmony default export */ __webpack_exports__["a"] = (Clearfix);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-with-breakpoints");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return colours; });
var url = 'https://gateway-cms.netlify.com/';
var colours = [{
  name: 'red',
  hex: '#f05a64',
  hexLight: '#f7a994'
}, {
  name: 'orange',
  hex: 'rgb(252, 180, 46)',
  hexLight: '#ffd782'
}, {
  name: 'green',
  hex: '#067f8e',
  hexLight: '#55c2b8'
}, {
  name: 'purple',
  hex: '#9666a8',
  hexLight: '#c1a2cd'
}];

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-burger-menu");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-image: url('", "');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  transition: opacity 0.3s;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Image = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject(), function (props) {
  return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[/* getResizedImageUrl */ "h"])(props.url);
});
/* harmony default export */ __webpack_exports__["a"] = (Image);

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("downshift");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("flat");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _components_Clearfix__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_6__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  margin-right: 50px;\n\n  & a {\n    display: block;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 20px;\n  line-height: 18px;\n  color: white;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  padding-bottom: 5px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: #fff;\n  margin-bottom: 20px;\n  margin-left: 20px;\n\n  a {\n    color: #fff;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding: 20px;\n\n  @media screen and (min-width: 991px) {\n    width: calc(30% - 20px);\n    float: left;\n    margin-right: 20px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  background: rgb(180, 180, 180);\n  font-size: 14px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: #666;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var H3 = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h3(_templateObject());
var Footer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.footer(_templateObject2());
var Section = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.section(_templateObject3());
var Credits = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul(_templateObject4());
var Credit = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li(_templateObject5());
var Main = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject6());
var SocialMediaItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li(_templateObject7());
var Map = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_6__["withScriptjs"])(Object(react_google_maps__WEBPACK_IMPORTED_MODULE_6__["withGoogleMap"])(function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_6__["GoogleMap"], {
    defaultZoom: 15,
    defaultCenter: {
      lat: 53.954981,
      lng: -1.124655
    },
    key: "AIzaSyAM-NvLRlF1XXUKnPCoRKWfuuodqKuvBso"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_6__["Marker"], {
    position: {
      lat: 53.954981,
      lng: -1.124655
    }
  }));
}));

var FooterTemplate = function FooterTemplate() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState4 = _slicedToArray(_useState3, 2),
      address = _useState4[0],
      setAddress = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState6 = _slicedToArray(_useState5, 2),
      contact = _useState6[0],
      setContact = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState8 = _slicedToArray(_useState7, 2),
      credits = _useState8[0],
      setCredits = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({}),
      _useState10 = _slicedToArray(_useState9, 2),
      socialMedia = _useState10[0],
      setSocialMedia = _useState10[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_helpers__WEBPACK_IMPORTED_MODULE_5__[/* getData */ "c"])('data/footer.json').then(function (data) {
      setAddress(data.address);
      setContact(data.contact);
      setCredits(data.credits);
      setSocialMedia(data.socialMedia);
      setLoading(false);
    });
  }, []);
  if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H3, null, address.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Main, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("address", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, address.addressLine1), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, address.addressLine2, ", ", address.city), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, address.postcode)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H3, null, contact.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Main, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, contact.contactNumber), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, contact.email)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H3, null, socialMedia.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Main, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, socialMedia.list && socialMedia.list.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SocialMediaItem, {
      key: item.link
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: item.link
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: Object(_helpers__WEBPACK_IMPORTED_MODULE_5__[/* getFullUrl */ "d"])(item.image)
    })));
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Clearfix__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Credits, null, credits.map(function (credit) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Credit, {
      key: JSON.stringify(credit)
    }, credit.role, " by", ' ', credit.links.map(function (link, index) {
      var l = link.link;

      if (!l.includes('http')) {
        l = "http://".concat(l);
      }

      if (index + 1 === credit.links.length) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          href: l,
          key: l
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, link.name));
      }

      if (index + 1 === credit.links.length - 1) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          key: l
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
          href: l
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, link.name)), ' and ');
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        key: l
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
        href: l
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, link.name)), ', ');
    }));
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Map, {
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAM-NvLRlF1XXUKnPCoRKWfuuodqKuvBso&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null),
    containerElement: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        height: "150px"
      }
    }),
    mapElement: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        height: "100%"
      }
    })
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (FooterTemplate);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "react-burger-menu"
var external_react_burger_menu_ = __webpack_require__(10);

// CONCATENATED MODULE: ./components/MobileMenu.js
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  padding: 20px 25px;\n  display: inline-block;\n  text-decoration: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var MenuLink = external_styled_components_default.a.a(_templateObject(), function (props) {
  return props.menuColour;
});

var MobileMenu_MenuItem = function MenuItem(_ref) {
  var menuItem = _ref.menuItem,
      menuColour = _ref.menuColour;
  return external_react_default.a.createElement("div", {
    key: menuItem.title
  }, external_react_default.a.createElement(MenuLink, {
    href: menuItem.link,
    menuColour: menuColour
  }, menuItem.title));
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
  return external_react_default.a.createElement(external_react_burger_menu_["slide"], {
    styles: styles,
    isOpen: isOpen,
    onStateChange: function onStateChange(state) {
      return handleStateChange(state);
    }
  }, menuItems.map(function (menuItem, id) {
    return external_react_default.a.createElement(MobileMenu_MenuItem, {
      menuItem: menuItem,
      menuColour: menuColour,
      key: id
    });
  }));
};

/* harmony default export */ var components_MobileMenu = (MobileMenu_MobileMenu);
// EXTERNAL MODULE: external "react-promise"
var external_react_promise_ = __webpack_require__(21);

// EXTERNAL MODULE: external "downshift"
var external_downshift_ = __webpack_require__(15);
var external_downshift_default = /*#__PURE__*/__webpack_require__.n(external_downshift_);

// EXTERNAL MODULE: external "flat"
var external_flat_ = __webpack_require__(16);
var external_flat_default = /*#__PURE__*/__webpack_require__.n(external_flat_);

// EXTERNAL MODULE: ./router.js
var router = __webpack_require__(3);

// EXTERNAL MODULE: ./helpers/index.js
var helpers = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Search.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject2() {
  var data = Search_taggedTemplateLiteral(["\n  background: ", ";\n  color: white;\n  border: 0;\n  font-size: 20px;\n  border-bottom: 3px solid ", ";\n  font-family: 'Ginger', sans-serif;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Search_templateObject() {
  var data = Search_taggedTemplateLiteral(["\n  color: white;\n  padding: 20px 25px;\n  display: inline-block;\n  text-decoration: none;\n"]);

  Search_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Search_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var StyledLink = external_styled_components_default.a.a(Search_templateObject());
var StyledSearchInput = external_styled_components_default.a.input(_templateObject2(), function (props) {
  return props.colour;
}, function (props) {
  return props.borderColour;
});

var Search_SearchInput = function SearchInput(props) {
  return external_react_default.a.createElement(StyledSearchInput, _extends({}, props, {
    type: "text"
  }));
};

var Search_SearchListItem = function SearchListItem(_ref) {
  var item = _ref.item,
      getItemProps = _ref.getItemProps;
  return external_react_default.a.createElement("li", getItemProps({
    key: item.data.title,
    item: item
  }), external_react_default.a.createElement(router["Link"], {
    href: "/".concat(item.pageUrl)
  }, external_react_default.a.createElement(StyledLink, null, external_react_default.a.createElement("div", null, item.data.title.split('-').map(function (word) {
    return word && word[0].toUpperCase() + word.substr(1);
  }).join(' ')), external_react_default.a.createElement("div", null, item.breadcrumb.split(' - ').join('___').split('-').map(function (word) {
    return word && word[0].toUpperCase() + word.substr(1);
  }).join(' ').split('___').map(function (word) {
    return word && word[0].toUpperCase() + word.substr(1);
  }).join(' - ')))));
};

var blackList = ['audioFile', 'colour', 'date', 'email', 'file', 'filters', 'time', 'titleRole', 'image', 'menuColour', 'optionalContent', 'phoneNumber', 'youtubeLink'];

var setStyles = function setStyles(colour) {
  return {
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
};

var Search_Search = function Search(_ref2) {
  var colour = _ref2.colour,
      isOpen = _ref2.isOpen,
      handleStateChange = _ref2.handleStateChange,
      borderColour = _ref2.borderColour;

  var _useState = Object(external_react_["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(external_react_["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      searchData = _useState4[0],
      setSearchData = _useState4[1];

  Object(external_react_["useEffect"])(function () {
    Object(helpers["c" /* getData */])('data/search/index.json').then(function (data) {
      data.forEach(function (item, index) {
        var flattened = Object.entries(external_flat_default()(item.data));
        var filtered = flattened.reduce(function (acc, item) {
          var inBlackList = blackList.some(function (blackListItem) {
            return item[0].includes(blackListItem);
          });
          return inBlackList ? acc : [].concat(_toConsumableArray(acc), [item]);
        }, []);
        data[index].flat = filtered;
        var pageUrl = data[index].url.slice(0, -5).split('data/')[1];
        data[index].pageUrl = pageUrl;
        var breadcrumb = pageUrl.split('/').join(' - ');
        data[index].breadcrumb = breadcrumb;
        setSearchData(data);
        setLoading(false);
      });
    });
  }, []);
  var styles = setStyles(colour);

  var onSearch = function onSearch(data, inputValue) {
    return data.filter(function (item) {
      return item.flat.some(function (flatItem) {
        return flatItem && flatItem[1] && _typeof(flatItem[1]) !== 'object' && !Array.isArray(flatItem[1]) && typeof flatItem[1] !== 'boolean' && typeof flatItem[1] !== 'number' && flatItem[1].toLowerCase().includes(inputValue.toLowerCase());
      });
    });
  };

  if (loading) return external_react_default.a.createElement("div", null);
  return external_react_default.a.createElement(external_react_burger_menu_["slide"], {
    styles: styles,
    right: true,
    isOpen: isOpen,
    onStateChange: handleStateChange
  }, external_react_default.a.createElement(external_downshift_default.a, {
    itemToString: function itemToString(item) {
      return '';
    }
  }, function (props) {
    var getInputProps = props.getInputProps,
        getMenuProps = props.getMenuProps,
        getItemProps = props.getItemProps,
        inputValue = props.inputValue;
    return external_react_default.a.createElement("div", null, external_react_default.a.createElement(Search_SearchInput, _extends({}, getInputProps(), {
      colour: colour,
      borderColour: borderColour
    })), isOpen && !!inputValue.length && external_react_default.a.createElement("ul", getMenuProps(), onSearch(searchData, inputValue).filter(function (item) {
      if (item.type !== 'people') return true;
      if (!item.data.filters.all) return false;
      if (item.data.filters.all === 'false') return false;
      return true;
    }).map(function (item) {
      return external_react_default.a.createElement(Search_SearchListItem, {
        item: item,
        getItemProps: getItemProps
      });
    })));
  }));
};

/* harmony default export */ var components_Search = (Search_Search);
// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(12);

// EXTERNAL MODULE: external "react-with-breakpoints"
var external_react_with_breakpoints_ = __webpack_require__(7);

// CONCATENATED MODULE: ./components/Menu.js
function Menu_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Menu_typeof = function _typeof(obj) { return typeof obj; }; } else { Menu_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Menu_typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (Menu_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject12() {
  var data = Menu_taggedTemplateLiteral(["\n  display: inline-block;\n  border-bottom: 5px solid white;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Menu_taggedTemplateLiteral(["\n  display: block;\n  padding: 0 20px;\n  line-height: 30px;\n  color: ", ";\n\n  &:hover {\n    span {\n      border-bottom-color: ", ";\n    }\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Menu_taggedTemplateLiteral(["\n  display: none;\n  background: white;\n  text-align: left;\n  position: absolute;\n  z-index: 2;\n  padding-bottom: 10px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Menu_taggedTemplateLiteral(["\n  color: ", ";\n\n  &:hover {\n    border-bottom: 5px solid ", ";\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Menu_taggedTemplateLiteral(["\n  flex: 1 1 auto;\n  text-align: center;\n  line-height: 60px;\n  color: ", ";\n\n  &:hover ul {\n    display: block;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Menu_taggedTemplateLiteral(["\n  display: flex;\n  padding-left: 50px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Menu_taggedTemplateLiteral(["\n  height: 60px;\n  width: 60px;\n  float: right;\n  cursor: pointer;\n  line-height: 60px;\n  margin: 0 auto;\n  font-size: 30px;\n  color: ", ";\n\n  svg {\n    display: block;\n    padding-top: 15px;\n    padding-left: 15px;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Menu_taggedTemplateLiteral(["\n  height: 60px;\n  width: 60px;\n  float: left;\n  cursor: pointer;\n  line-height: 60px;\n  margin: 0 auto;\n  font-size: 30px;\n  color: ", ";\n\n  svg {\n    display: block;\n    padding-top: 15px;\n    padding-left: 15px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Menu_taggedTemplateLiteral(["\n  @media screen and (min-width: 1241px) {\n    width: 1200px;\n    margin: 0 auto;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Menu_taggedTemplateLiteral(["\n  height: 60px;\n  position: ", ";\n  top: 0;\n  z-index: 2;\n  background: #fff;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function Menu_templateObject2() {
  var data = Menu_taggedTemplateLiteral(["\n  padding-top: 15px;\n  display: inline-block;\n"]);

  Menu_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function Menu_templateObject() {
  var data = Menu_taggedTemplateLiteral(["\n  padding: 0 20px 1px;\n  text-align: center;\n\n  @media screen and (min-width: 991px) {\n    float: left;\n  }\n"]);

  Menu_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function Menu_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var Menu_Logo = function Logo(_ref) {
  var logoUrl = _ref.logoUrl;
  return external_react_default.a.createElement("img", {
    src: logoUrl,
    alt: "logo"
  });
};

var StyledLogo = external_styled_components_default.a.div(Menu_templateObject());
var Menu_StyledLink = external_styled_components_default.a.a(Menu_templateObject2());
var MenuContainer = external_styled_components_default.a.div(_templateObject3(), function (props) {
  return props.stickyMenu ? 'sticky' : 'static';
});
var MenuInnerContainer = external_styled_components_default.a.div(_templateObject4());
var MenuButton = external_styled_components_default.a.div(_templateObject5(), function (props) {
  return props.colour;
});
var SearchButton = external_styled_components_default.a.div(_templateObject6(), function (props) {
  return props.colour;
});
var MainMenu = external_styled_components_default.a.ul(_templateObject7());
var Menu_MenuItem = external_styled_components_default.a.li(_templateObject8(), function (props) {
  return props.colour;
});
var StyledMenuLink = external_styled_components_default.a.a(_templateObject9(), function (props) {
  return props.colour;
}, function (props) {
  return props.colour;
});
var ChildMenu = external_styled_components_default.a.ul(_templateObject10());
var ChildLink = external_styled_components_default.a.a(_templateObject11(), function (props) {
  return props.colour;
}, function (props) {
  return props.colour;
});
var ChildUnderline = external_styled_components_default.a.span(_templateObject12());

var Menu_Menu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu(props) {
    var _this;

    _classCallCheck(this, Menu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Menu).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      window.addEventListener('scroll', _this.handleScroll);
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      window.removeEventListener('scroll', _this.handleScroll);
    });

    _defineProperty(_assertThisInitialized(_this), "handleScroll", function () {
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
    });

    _this.state = {
      stickyMenu: props.sticky || false,
      alwaysSticky: props.sticky || false
    };
    return _this;
  }

  _createClass(Menu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          logoUrl = _this$props.logoUrl,
          onMenuClick = _this$props.onMenuClick,
          onSearchClick = _this$props.onSearchClick,
          colour = _this$props.colour,
          menuItems = _this$props.menuItems;
      var stickyMenu = this.state.stickyMenu;
      return external_react_default.a.createElement(MenuContainer, {
        classname: "menu",
        stickyMenu: stickyMenu
      }, external_react_default.a.createElement(MenuInnerContainer, null, external_react_default.a.createElement(external_react_with_breakpoints_["ShowAt"], {
        breakpoint: "mediumAndBelow"
      }, external_react_default.a.createElement(MenuButton, {
        onClick: onMenuClick,
        colour: colour
      }, external_react_default.a.createElement(fa_["FaBars"], null))), external_react_default.a.createElement(SearchButton, {
        onClick: onSearchClick,
        colour: colour
      }, external_react_default.a.createElement(fa_["FaSearch"], null)), external_react_default.a.createElement(StyledLogo, null, external_react_default.a.createElement(router["Link"], {
        href: "/",
        prefetch: true
      }, external_react_default.a.createElement(Menu_StyledLink, null, external_react_default.a.createElement(Menu_Logo, {
        logoUrl: logoUrl
      })))), external_react_default.a.createElement(external_react_with_breakpoints_["HideAt"], {
        breakpoint: "mediumAndBelow"
      }, external_react_default.a.createElement("nav", null, external_react_default.a.createElement(MainMenu, null, menuItems.map(function (item) {
        return external_react_default.a.createElement(Menu_MenuItem, {
          colour: colour,
          key: item.link
        }, external_react_default.a.createElement(router["Link"], {
          href: item.link
        }, external_react_default.a.createElement(StyledMenuLink, {
          colour: colour,
          href: item.link
        }, item.title)), item.childMenu && item.childMenu.length && external_react_default.a.createElement(ChildMenu, null, item.childMenu.map(function (childItem) {
          return external_react_default.a.createElement("li", {
            key: childItem.link
          }, external_react_default.a.createElement(router["Link"], {
            href: childItem.link,
            prefetch: true
          }, external_react_default.a.createElement(ChildLink, {
            colour: colour,
            href: childItem.link
          }, external_react_default.a.createElement(ChildUnderline, null, childItem.title))));
        })));
      }))))));
    }
  }]);

  return Menu;
}(external_react_default.a.Component);

/* harmony default export */ var components_Menu = (Menu_Menu);
// EXTERNAL MODULE: ./components/Clearfix.js
var Clearfix = __webpack_require__(6);

// CONCATENATED MODULE: ./templates/Header.js
function Header_slicedToArray(arr, i) { return Header_arrayWithHoles(arr) || Header_iterableToArrayLimit(arr, i) || Header_nonIterableRest(); }

function Header_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function Header_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Header_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Header_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Header_typeof = function _typeof(obj) { return typeof obj; }; } else { Header_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Header_typeof(obj); }

function Header_toConsumableArray(arr) { return Header_arrayWithoutHoles(arr) || Header_iterableToArray(arr) || Header_nonIterableSpread(); }

function Header_nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function Header_iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function Header_arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function Header_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Header_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Header_createClass(Constructor, protoProps, staticProps) { if (protoProps) Header_defineProperties(Constructor.prototype, protoProps); if (staticProps) Header_defineProperties(Constructor, staticProps); return Constructor; }

function Header_possibleConstructorReturn(self, call) { if (call && (Header_typeof(call) === "object" || typeof call === "function")) { return call; } return Header_assertThisInitialized(self); }

function Header_getPrototypeOf(o) { Header_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Header_getPrototypeOf(o); }

function Header_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Header_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Header_setPrototypeOf(subClass, superClass); }

function Header_setPrototypeOf(o, p) { Header_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Header_setPrototypeOf(o, p); }

function Header_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var Header_MenuTemplate =
/*#__PURE__*/
function (_React$Component) {
  Header_inherits(MenuTemplate, _React$Component);

  function MenuTemplate() {
    var _getPrototypeOf2;

    var _this;

    Header_classCallCheck(this, MenuTemplate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Header_possibleConstructorReturn(this, (_getPrototypeOf2 = Header_getPrototypeOf(MenuTemplate)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Header_defineProperty(Header_assertThisInitialized(_this), "state", {
      menuOpen: false,
      searchOpen: false
    });

    return _this;
  }

  Header_createClass(MenuTemplate, [{
    key: "handleMenuStateChange",
    value: function handleMenuStateChange(_ref) {
      var isOpen = _ref.isOpen;
      this.setState({
        menuOpen: isOpen
      });
    }
  }, {
    key: "handleSearchStateChange",
    value: function handleSearchStateChange(_ref2) {
      var isOpen = _ref2.isOpen;
      this.setState({
        searchOpen: isOpen
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          menuItems = _this$props.menuItems,
          menuColour = _this$props.menuColour,
          borderColour = _this$props.borderColour,
          logoUrl = _this$props.logoUrl,
          sticky = _this$props.sticky,
          children = _this$props.children;
      var mobileMenuItems = menuItems.reduce(function (acc, item) {
        return item.childMenu ? [].concat(Header_toConsumableArray(acc), Header_toConsumableArray(item.childMenu)) : [].concat(Header_toConsumableArray(acc), [item]);
      }, []);
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(external_react_with_breakpoints_["HideAt"], {
        breakpoint: "large"
      }, external_react_default.a.createElement(components_MobileMenu, {
        menuItems: mobileMenuItems,
        menuColour: menuColour,
        isOpen: this.state.menuOpen,
        handleStateChange: function handleStateChange(state) {
          _this2.handleMenuStateChange(state);
        }
      })), external_react_default.a.createElement(components_Search, {
        colour: menuColour,
        borderColour: borderColour,
        isOpen: this.state.searchOpen,
        handleStateChange: function handleStateChange(state) {
          _this2.handleSearchStateChange(state);
        }
      }), children, external_react_default.a.createElement(components_Menu, {
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
      }), external_react_default.a.createElement(Clearfix["a" /* default */], null));
    }
  }]);

  return MenuTemplate;
}(external_react_default.a.Component);

var Header_HeaderTemplate = function HeaderTemplate(_ref3) {
  var colour = _ref3.colour,
      colourHex = _ref3.colourHex,
      colourHexLight = _ref3.colourHexLight,
      Header = _ref3.Header,
      title = _ref3.title,
      image = _ref3.image;

  var _useState = Object(external_react_["useState"])(true),
      _useState2 = Header_slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(external_react_["useState"])([]),
      _useState4 = Header_slicedToArray(_useState3, 2),
      menu = _useState4[0],
      setMenu = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(''),
      _useState6 = Header_slicedToArray(_useState5, 2),
      logoUrl = _useState6[0],
      setLogoUrl = _useState6[1];

  Object(external_react_["useEffect"])(function () {
    Promise.all([Object(helpers["f" /* getMenu */])(), Object(helpers["e" /* getLogo */])(colour)]).then(function (_ref4) {
      var _ref5 = Header_slicedToArray(_ref4, 2),
          menu = _ref5[0].menu,
          logoUrl = _ref5[1];

      setMenu(menu);
      setLogoUrl(logoUrl);
      setLoading(false);
    });
  }, []);
  if (loading) return external_react_default.a.createElement("div", null);

  if (!title || !image) {
    return external_react_default.a.createElement(Header_MenuTemplate, {
      menuItems: menu,
      menuColour: colourHex,
      borderColour: colourHexLight,
      logoUrl: logoUrl,
      sticky: true
    });
  }

  return external_react_default.a.createElement(Header_MenuTemplate, {
    menuItems: menu,
    menuColour: colourHex,
    borderColour: colourHexLight,
    logoUrl: logoUrl
  }, external_react_default.a.createElement(Header, {
    text: title,
    image: Object(helpers["h" /* getResizedImageUrl */])(Object(helpers["d" /* getFullUrl */])(image)),
    colour: colourHex
  }));
};

/* harmony default export */ var templates_Header = __webpack_exports__["a"] = (Header_HeaderTemplate);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/Header.js
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  background-image: url(\"", "\");\n  height: 200px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n\n  h1 {\n    line-height: 200px;\n    text-align: center;\n    font-size: 40px;\n  }\n\n  @media screen and (min-width: 991px) {\n    height: 400px;\n\n    h1 {\n      line-height: 400px;\n        font-size: 145px;\n    }\n  }\n\n  @media screen and (min-width: 1241px) {\n    height: 600px;\n\n    h1 {\n      line-height: 600px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Header = external_styled_components_default.a.header(_templateObject(), function (props) {
  return props.colour;
}, function (props) {
  return props.image;
});
/* harmony default export */ var components_Header = (Header);
// CONCATENATED MODULE: ./components/H1.js
function H1_templateObject() {
  var data = H1_taggedTemplateLiteral(["\n  color: #fff;\n  font-size: 40px;\n"]);

  H1_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function H1_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var H1 = external_styled_components_default.a.h1(H1_templateObject());
/* harmony default export */ var components_H1 = (H1);
// CONCATENATED MODULE: ./components/HeaderContainer.js




var HeaderContainer_HeaderContainer = function HeaderContainer(_ref) {
  var text = _ref.text,
      image = _ref.image,
      colour = _ref.colour;
  return external_react_default.a.createElement(components_Header, {
    image: image,
    colour: colour
  }, external_react_default.a.createElement(components_H1, null, text));
};

/* harmony default export */ var components_HeaderContainer = __webpack_exports__["a"] = (HeaderContainer_HeaderContainer);

/***/ }),
/* 20 */,
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-promise");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 25 */,
/* 26 */
/***/ (function(module, exports) {

module.exports = require("markdown");

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(41);


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(26);
/* harmony import */ var markdown__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(markdown__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _templates_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18);
/* harmony import */ var _templates_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(17);
/* harmony import */ var _components_HeaderContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(19);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4);
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14);
/* harmony import */ var _components_Clearfix__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  p {\n    margin-bottom: 1em;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  display: inline-block;\n  border: 3px solid ", ";\n  padding: 10px;\n  border-radius: 5px;\n  margin-top: 10px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  padding: 20px;\n  background-color: ", ";\n  color: white;\n  line-height: 1.3em;\n  margin-bottom: 60px;\n\n  @media screen and (min-width: 991px) {\n    float: right;\n    width: calc(60% - 40px);\n  }\n\n  li {\n    list-style: inside;\n    margin-bottom: 10px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  padding: 20px;\n  background-color: ", ";\n  color: white;\n  line-height: 1.3em;\n  margin-bottom: 60px;\n\n  @media screen and (min-width: 991px) {\n    float: left;\n    width: calc(40% - 40px);\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 30px;\n  line-height: 1.5em;\n  color: #fff;\n  text-align: center;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  transform: translateY(-50%);\n\n  @media screen and (min-width: 768px) {\n    font-size: 90px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  height: 200px;\n  position: relative;\n  background-color: ", ";\n  color: white;\n  text-decoration: none;\n\n  @media screen and (min-width: 768px) {\n    height: 500px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }















var Subtitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject(), function (props) {
  return props.colour;
});
var Title = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.h2(_templateObject2());
var ContentLeft = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3(), function (props) {
  return props.colour;
});
var ContentRight = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4(), function (props) {
  return props.colour;
});
var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a(_templateObject5(), function (props) {
  return props.colour;
}, function (props) {
  return props.colour;
});
var Article = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject6());
var Event = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(function (_ref) {
  var router = _ref.router;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState4 = _slicedToArray(_useState3, 2),
      title = _useState4[0],
      setTitle = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState6 = _slicedToArray(_useState5, 2),
      image = _useState6[0],
      setImage = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState8 = _slicedToArray(_useState7, 2),
      dateTime = _useState8[0],
      setDateTime = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState10 = _slicedToArray(_useState9, 2),
      time = _useState10[0],
      setTime = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState12 = _slicedToArray(_useState11, 2),
      article = _useState12[0],
      setArticle = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState14 = _slicedToArray(_useState13, 2),
      colour = _useState14[0],
      setColour = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState16 = _slicedToArray(_useState15, 2),
      colourHex = _useState16[0],
      setColourHex = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState18 = _slicedToArray(_useState17, 2),
      colourHexLight = _useState18[0],
      setColourHexLight = _useState18[1];

  var query = router.query;
  var pathname = query.id.split(' ').join('-').toLowerCase();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    Object(_helpers__WEBPACK_IMPORTED_MODULE_13__[/* getData */ "c"])("data/events/".concat(pathname, ".json")).then(function (data) {
      var _getAllColours = Object(_helpers__WEBPACK_IMPORTED_MODULE_13__[/* getAllColours */ "b"])(Object(_helpers__WEBPACK_IMPORTED_MODULE_13__[/* getMenuColour */ "g"])(data)),
          _getAllColours2 = _slicedToArray(_getAllColours, 3),
          colour = _getAllColours2[0],
          colourHex = _getAllColours2[1],
          colourHexLight = _getAllColours2[2];

      setColour(colour);
      setColourHex(colourHex);
      setColourHexLight(colourHexLight);
      setDateTime(moment__WEBPACK_IMPORTED_MODULE_2___default()(data.dateTime).format('dddd DD MMM YYYY'));
      setTime(moment__WEBPACK_IMPORTED_MODULE_2___default()(data.dateTime).format('HH:mm'));
      setTitle(data.title);
      setImage(data.image);
      setArticle(data.article);
      setLoading(false);
    });
  }, []);
  if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    key: "title"
  }, title, " - Gateway Church, York")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_templates_Header__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    colour: colour,
    colourHex: colourHex,
    colourHexLight: colourHexLight,
    Header: _components_HeaderContainer__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Subtitle, {
    colour: colourHex
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Image__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    url: Object(_helpers__WEBPACK_IMPORTED_MODULE_13__[/* getFullUrl */ "d"])(image)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, null, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContentLeft, {
    colour: colourHexLight
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, dateTime), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, time)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContentRight, {
    colour: colourHex
  }, article && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Article, {
    dangerouslySetInnerHTML: {
      __html: markdown__WEBPACK_IMPORTED_MODULE_5__["markdown"].toHTML(article)
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_router__WEBPACK_IMPORTED_MODULE_6__["Link"], {
    href: "/events",
    passHref: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
    colour: colourHexLight
  }, "View a list of all events")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Clearfix__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_templates_Footer__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null));
});
/* harmony default export */ __webpack_exports__["default"] = (Event);

/***/ })
/******/ ]);