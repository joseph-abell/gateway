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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Audio.js":
/*!*****************************!*\
  !*** ./components/Audio.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_sound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-sound */ "react-sound");
/* harmony import */ var react_sound__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_sound__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_slider_lib_Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-slider/lib/Slider */ "rc-slider/lib/Slider");
/* harmony import */ var rc_slider_lib_Slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rc_slider_lib_Slider__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Audio =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Audio, _React$Component);

  function Audio() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Audio);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Audio)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      playStatus: 'STOPPED',
      position: 0,
      duration: 0,
      volume: 100
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "togglePlayPause", function () {
      if (_this.state.playStatus === 'PLAYING') {
        _this.pressPause();
      } else {
        _this.pressPlay();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "pressPlay", function () {
      _this.setState({
        playStatus: 'PLAYING'
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "pressPause", function () {
      _this.setState({
        playStatus: 'PAUSED'
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "pressFastForward", function () {
      if (_this.state.position + 10000 > _this.state.duration) {
        _this.setState({
          position: _this.state.duration
        });
      } else {
        _this.setState({
          position: _this.state.position + 10000
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "pressBack", function () {
      if (_this.state.position - 10000 < 0) {
        _this.setState({
          position: 0
        });
      } else {
        _this.setState({
          position: _this.state.position - 10000
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setPositionAndDuration", function (_ref) {
      var position = _ref.position,
          duration = _ref.duration;

      _this.setState({
        position: position,
        duration: duration
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setDuration", function (_ref2) {
      var duration = _ref2.duration;

      _this.setState({
        duration: duration
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleVolumeChange", function (volume) {
      _this.setState({
        playState: 'PAUSED'
      });

      _this.setState({
        volume: volume
      });

      _this.setState({
        playState: 'PLAYING'
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePlaying", function (_ref3) {
      var position = _ref3.position;

      _this.setState({
        position: position
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_sound__WEBPACK_IMPORTED_MODULE_1___default.a, {
        url: _this.props.url,
        volume: _this.state.volume,
        autoLoad: true,
        playStatus: _this.state.playStatus,
        position: _this.state.position,
        onPause: _this.setPositionAndDuration,
        onStop: _this.setPositionAndDuration,
        onLoading: _this.setDuration,
        onPlaying: _this.handlePlaying
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: _this.pressBack
      }, "Back"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: _this.togglePlayPause
      }, "Play / Pause"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: _this.pressFastForward
      }, "Fast Forward"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: _this.props.url
      }, "Download"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rc_slider_lib_Slider__WEBPACK_IMPORTED_MODULE_2___default.a, {
        onChange: _this.handleVolumeChange,
        defaultValue: 100
      }));
    });

    return _this;
  }

  return Audio;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Audio);

/***/ }),

/***/ "./components/Clearfix.js":
/*!********************************!*\
  !*** ./components/Clearfix.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
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
/* harmony default export */ __webpack_exports__["default"] = (Clearfix);

/***/ }),

/***/ "./components/H1.js":
/*!**************************!*\
  !*** ./components/H1.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: #fff;\n  font-size: 40px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var H1 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (H1);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  background-image: url(\"", "\");\n  height: 200px;\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n\n  h1 {\n    line-height: 200px;\n    text-align: center;\n    font-size: 40px;\n  }\n\n  @media screen and (min-width: 991px) {\n    height: 400px;\n\n    h1 {\n      line-height: 400px;\n    }\n  }\n\n  @media screen and (min-width: 1241px) {\n    height: 600px;\n\n    h1 {\n      line-height: 600px;\n      font-size: 145px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Header = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.header(_templateObject(), function (props) {
  return props.colour;
}, function (props) {
  return props.image;
});
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/HeaderContainer.js":
/*!***************************************!*\
  !*** ./components/HeaderContainer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/Header.js");
/* harmony import */ var _H1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./H1 */ "./components/H1.js");




var HeaderContainer = function HeaderContainer(_ref) {
  var text = _ref.text,
      image = _ref.image,
      colour = _ref.colour;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: image,
    colour: colour
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_H1__WEBPACK_IMPORTED_MODULE_2__["default"], null, text));
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderContainer);

/***/ }),

/***/ "./components/HideOnDesktop.js":
/*!*************************************!*\
  !*** ./components/HideOnDesktop.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n\n  @media screen and (min-width: 991px) {\n    display: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var HideOnDesktop = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (HideOnDesktop);

/***/ }),

/***/ "./components/Image.js":
/*!*****************************!*\
  !*** ./components/Image.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-image: url('", "');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  transition: opacity 0.3s;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Image = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject(), function (props) {
  return props.url;
});
/* harmony default export */ __webpack_exports__["default"] = (Image);

/***/ }),

/***/ "./components/ImageWrapper.js":
/*!************************************!*\
  !*** ./components/ImageWrapper.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  height: ", ";\n  background: ", ";\n  overflow: hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject(), function (props) {
  return props.height || '200px';
}, function (props) {
  return props.color;
});
/* harmony default export */ __webpack_exports__["default"] = (ImageWrapper);

/***/ }),

/***/ "./components/Menu.js":
/*!****************************!*\
  !*** ./components/Menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../router */ "./router.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ShowOnDesktop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShowOnDesktop */ "./components/ShowOnDesktop.js");
/* harmony import */ var _HideOnDesktop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HideOnDesktop */ "./components/HideOnDesktop.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  border-bottom: 5px solid white;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  padding: 0 20px;\n  line-height: 30px;\n  color: ", ";\n\n  &:hover {\n    span {\n      border-bottom-color: ", ";\n    }\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n  background: white;\n  text-align: left;\n  position: absolute;\n  z-index: 2;\n  padding-bottom: 10px;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n\n  &:hover {\n    border-bottom: 5px solid ", ";\n  }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  flex: 1 1 auto;\n  text-align: center;\n  line-height: 60px;\n  color: ", ";\n\n  &:hover ul {\n    display: block;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  padding-left: 50px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  height: 60px;\n  width: 60px;\n  float: right;\n  cursor: pointer;\n  line-height: 60px;\n  margin: 0 auto;\n  font-size: 30px;\n  color: ", ";\n\n  svg {\n    display: block;\n    padding-top: 15px;\n    padding-left: 15px;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  height: 60px;\n  width: 60px;\n  float: left;\n  cursor: pointer;\n  line-height: 60px;\n  margin: 0 auto;\n  font-size: 30px;\n  color: ", ";\n\n  svg {\n    display: block;\n    padding-top: 15px;\n    padding-left: 15px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  @media screen and (min-width: 1241px) {\n    width: 1200px;\n    margin: 0 auto;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  height: 60px;\n  position: ", ";\n  top: 0;\n  z-index: 2;\n  background: #fff;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding-top: 15px;\n  display: inline-block;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 20px 1px;\n  text-align: center;\n\n  @media screen and (min-width: 991px) {\n    float: left;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var Logo = function Logo(_ref) {
  var logoUrl = _ref.logoUrl;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: logoUrl,
    alt: "logo"
  });
};

var StyledLogo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a(_templateObject2());
var MenuContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3(), function (props) {
  return props.stickyMenu ? 'sticky' : 'static';
});
var MenuInnerContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject4());
var MenuButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject5(), function (props) {
  return props.colour;
});
var SearchButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject6(), function (props) {
  return props.colour;
});
var MainMenu = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul(_templateObject7());
var MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li(_templateObject8(), function (props) {
  return props.colour;
});
var StyledMenuLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a(_templateObject9(), function (props) {
  return props.colour;
}, function (props) {
  return props.colour;
});
var ChildMenu = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul(_templateObject10());
var ChildLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a(_templateObject11(), function (props) {
  return props.colour;
}, function (props) {
  return props.colour;
});
var ChildUnderline = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span(_templateObject12());

var Menu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu(props) {
    var _this;

    _classCallCheck(this, Menu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Menu).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      window.addEventListener('scroll', _this.handleScroll);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentWillUnmount", function () {
      window.removeEventListener('scroll', _this.handleScroll);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleScroll", function () {
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuContainer, {
        classname: "menu",
        stickyMenu: stickyMenu
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuInnerContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HideOnDesktop__WEBPACK_IMPORTED_MODULE_5__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuButton, {
        onClick: onMenuClick,
        colour: colour
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaBars"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SearchButton, {
        onClick: onSearchClick,
        colour: colour
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaSearch"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLogo, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_router__WEBPACK_IMPORTED_MODULE_3__["Link"], {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, {
        logoUrl: logoUrl
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShowOnDesktop__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainMenu, null, menuItems.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, {
          colour: colour,
          key: item.link
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_router__WEBPACK_IMPORTED_MODULE_3__["Link"], {
          href: item.link
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledMenuLink, {
          colour: colour
        }, item.title)), item.childMenu && item.childMenu.length && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChildMenu, null, item.childMenu.map(function (childItem) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            key: childItem.link
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_router__WEBPACK_IMPORTED_MODULE_3__["Link"], {
            href: childItem.link
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChildLink, {
            colour: colour
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ChildUnderline, null, childItem.title))));
        })));
      }))))));
    }
  }]);

  return Menu;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Menu);

/***/ }),

/***/ "./components/MobileMenu.js":
/*!**********************************!*\
  !*** ./components/MobileMenu.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-burger-menu */ "react-burger-menu");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_2__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  padding: 20px 25px;\n  display: inline-block;\n  text-decoration: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var MenuLink = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a(_templateObject(), function (props) {
  return props.menuColour;
});

var MenuItem = function MenuItem(_ref) {
  var menuItem = _ref.menuItem,
      menuColour = _ref.menuColour;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: menuItem.title
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuLink, {
    href: menuItem.link,
    menuColour: menuColour
  }, menuItem.title));
};

var MobileMenu = function MobileMenu(_ref2) {
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_burger_menu__WEBPACK_IMPORTED_MODULE_2__["slide"], {
    styles: styles,
    isOpen: isOpen,
    onStateChange: function onStateChange(state) {
      return handleStateChange(state);
    }
  }, menuItems.map(function (menuItem, id) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, {
      menuItem: menuItem,
      menuColour: menuColour,
      key: id
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MobileMenu);

/***/ }),

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-burger-menu */ "react-burger-menu");
/* harmony import */ var react_burger_menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_burger_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-promise */ "react-promise");
/* harmony import */ var react_promise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_promise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! downshift */ "downshift");
/* harmony import */ var downshift__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(downshift__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flat */ "flat");
/* harmony import */ var flat__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flat__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../router */ "./router.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers */ "./helpers/index.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: white;\n  padding: 20px 25px;\n  display: inline-block;\n  text-decoration: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a(_templateObject());

var SearchInput = function SearchInput(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", _extends({}, props, {
    type: "text"
  }));
};

var SearchListItem = function SearchListItem(_ref) {
  var item = _ref.item,
      getItemProps = _ref.getItemProps;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", getItemProps({
    key: item.data.title,
    item: item
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_router__WEBPACK_IMPORTED_MODULE_7__["Link"], {
    href: item.pageUrl
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledLink, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, item.data.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, item.breadcrumb))));
};

var Search =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Search)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      value: '',
      searchData: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSearch", function (event) {
      _this.setState({
        value: event.target.value
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "search", function (data, inputValue) {
      return data.filter(function (item) {
        return item.flat.some(function (flatItem) {
          return flatItem[1] && !Array.isArray(flatItem[1]) && flatItem[1].toLowerCase().includes(inputValue.toLowerCase());
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "promise", new Promise(
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(resolve) {
        var data, blackList;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_this.state.searchData.length) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", resolve(_this.state.searchData));

              case 2:
                _context.next = 4;
                return Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["getData"])('data/search/index.json');

              case 4:
                data = _context.sent;
                blackList = ['audioFile', 'colour', 'date', 'email', 'file', 'filters', 'time', 'titleRole', 'image', 'menuColour', 'optionalContent', 'phoneNumber', 'youtubeLink'];
                data.forEach(function (item, index) {
                  var flattened = Object.entries(flat__WEBPACK_IMPORTED_MODULE_6___default()(data[index].data));
                  var filtered = flattened.reduce(function (acc, item) {
                    var inBlackList = blackList.some(function (blackListItem) {
                      return item[0].includes(blackListItem);
                    });
                    return inBlackList ? acc : _toConsumableArray(acc).concat([item]);
                  }, []);
                  data[index].flat = filtered;
                  var pageUrl = data[index].url.slice(0, -5).split('data/')[1];
                  data[index].pageUrl = pageUrl;
                  var breadcrumb = pageUrl.split('/').join(' - ');
                  data[index].breadcrumb = breadcrumb;

                  _this.setState({
                    searchData: data
                  });
                });
                return _context.abrupt("return", resolve(data));

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      var _this$props = _this.props,
          colour = _this$props.colour,
          isOpen = _this$props.isOpen,
          handleStateChange = _this$props.handleStateChange;
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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_burger_menu__WEBPACK_IMPORTED_MODULE_3__["slide"], {
        styles: styles,
        right: true,
        isOpen: isOpen,
        onStateChange: handleStateChange
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(downshift__WEBPACK_IMPORTED_MODULE_5___default.a, {
        onChange: _this.handleSearch,
        itemToString: function itemToString(item) {
          return '';
        }
      }, function (props) {
        var getInputProps = props.getInputProps,
            getMenuProps = props.getMenuProps,
            getItemProps = props.getItemProps,
            inputValue = props.inputValue;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SearchInput, getInputProps()), isOpen && !!inputValue.length && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_promise__WEBPACK_IMPORTED_MODULE_4___default.a, {
          promise: _this.promise,
          then: function then(data) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", getMenuProps(), _this.search(data, inputValue).map(function (item) {
              return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SearchListItem, {
                item: item,
                getItemProps: getItemProps
              });
            }));
          }
        }));
      }));
    });

    return _this;
  }

  return Search;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./components/ShowOnDesktop.js":
/*!*************************************!*\
  !*** ./components/ShowOnDesktop.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n\n  @media screen and (min-width: 991px) {\n    display: block;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var ShowOnDesktop = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (ShowOnDesktop);

/***/ }),

/***/ "./helpers/config.js":
/*!***************************!*\
  !*** ./helpers/config.js ***!
  \***************************/
/*! exports provided: url */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return url; });
var url = 'https://gateway-cms.netlify.com/';

/***/ }),

/***/ "./helpers/index.js":
/*!**************************!*\
  !*** ./helpers/index.js ***!
  \**************************/
/*! exports provided: changeColourToHex, getMenuColour, getMenu, getLogo, getData, getFullUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeColourToHex", function() { return changeColourToHex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenuColour", function() { return getMenuColour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMenu", function() { return getMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLogo", function() { return getLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return getData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFullUrl", function() { return getFullUrl; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./helpers/config.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* global fetch */

var changeColourToHex = function changeColourToHex(colour, lightVariant) {
  if (lightVariant) {
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
  }

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
            menuUrl = _config__WEBPACK_IMPORTED_MODULE_1__["url"] + 'data/menu.json';
            _context.next = 3;
            return fetch(menuUrl).catch(function (e) {
              console.log(e);
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
    }, _callee, this);
  }));

  return function getMenu() {
    return _ref.apply(this, arguments);
  };
}();
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
            logoLocation = getFullUrl("data/logos/".concat(menuColour, ".json"));
            _context2.next = 3;
            return fetch(logoLocation).catch(function (e) {
              console.log(e);
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
    }, _callee2, this);
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
            pageUrl = _config__WEBPACK_IMPORTED_MODULE_1__["url"] + pageName;
            _context3.next = 3;
            return fetch(pageUrl);

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
    }, _callee3, this);
  }));

  return function getData(_x2) {
    return _ref3.apply(this, arguments);
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

  return _config__WEBPACK_IMPORTED_MODULE_1__["url"] + urlEnd;
};

/***/ }),

/***/ "./pages/word.js":
/*!***********************!*\
  !*** ./pages/word.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-promise */ "react-promise");
/* harmony import */ var react_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers/config */ "./helpers/config.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers */ "./helpers/index.js");
/* harmony import */ var _templates_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../templates/Header */ "./templates/Header.js");
/* harmony import */ var _components_HeaderContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/HeaderContainer */ "./components/HeaderContainer.js");
/* harmony import */ var _components_ImageWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ImageWrapper */ "./components/ImageWrapper.js");
/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Image */ "./components/Image.js");
/* harmony import */ var _components_Audio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Audio */ "./components/Audio.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 30px;\n  line-height: 40px;\n  color: #fff;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 57px;\n  line-height: 76px;\n  color: #fff;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 40px;\n  background: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }












var Deck = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject(), function (props) {
  return props.colour;
});
var Date = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject2(), function (props) {
  return props.colour;
});
var H1 = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h1(_templateObject3());
var H2 = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h2(_templateObject4());
var Word = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(function (_ref) {
  var router = _ref.router;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_promise__WEBPACK_IMPORTED_MODULE_2___default.a, {
    promise: new Promise(
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(resolve) {
        var query, id, data, colour, colourHex, colourHexLight, title, image, deck, date, subtitle, audioFile, file, youtubeLink;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = router.query;
                id = query.id;
                _context.next = 4;
                return Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["getData"])("data/words/".concat(id, ".json"));

              case 4:
                data = _context.sent;
                colour = Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["getMenuColour"])(data);
                colourHex = Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["changeColourToHex"])(colour);
                colourHexLight = Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["changeColourToHex"])(colour, true);
                title = data.title, image = data.image, deck = data.deck, date = data.date, subtitle = data.subtitle, audioFile = data.audioFile, file = data.file, youtubeLink = data.youtubeLink;
                resolve({
                  title: title,
                  image: image,
                  deck: deck,
                  date: date,
                  subtitle: subtitle,
                  audioFile: Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["getFullUrl"])(audioFile),
                  file: file,
                  youtubeLink: youtubeLink,
                  colour: colour,
                  colourHex: colourHex,
                  colourHexLight: colourHexLight
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()),
    then: function then(_ref3) {
      var title = _ref3.title,
          image = _ref3.image,
          deck = _ref3.deck,
          date = _ref3.date,
          subtitle = _ref3.subtitle,
          audioFile = _ref3.audioFile,
          file = _ref3.file,
          youtubeLink = _ref3.youtubeLink,
          colour = _ref3.colour,
          colourHex = _ref3.colourHex,
          colourHexLight = _ref3.colourHexLight;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_templates_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
        colour: colour,
        colourHex: colourHex,
        Header: _components_HeaderContainer__WEBPACK_IMPORTED_MODULE_8__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Deck, {
        colour: colourHexLight
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Date, {
        colour: colourHex
      }, date), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(H1, null, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(H2, null, subtitle)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ImageWrapper__WEBPACK_IMPORTED_MODULE_9__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Image__WEBPACK_IMPORTED_MODULE_10__["default"], {
        url: _helpers_config__WEBPACK_IMPORTED_MODULE_5__["url"] + image.slice(1)
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Audio__WEBPACK_IMPORTED_MODULE_11__["default"], {
        url: audioFile
      })));
    }
  });
});
/* harmony default export */ __webpack_exports__["default"] = (Word);

/***/ }),

/***/ "./router.js":
/*!*******************!*\
  !*** ./router.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var routes = module.exports = __webpack_require__(/*! next-routes */ "next-routes")();

module.exports = routes.add('index', '/').add('events', 'events').add('event', '/events/:id').add('people', '/people').add('person', '/people/:id').add('words', '/words').add('word', '/words/:id').add('contact-us', '/contact-us').add('error-404', '/404').add('page', '/:id');

/***/ }),

/***/ "./templates/Header.js":
/*!*****************************!*\
  !*** ./templates/Header.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-promise */ "react-promise");
/* harmony import */ var react_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_MobileMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MobileMenu */ "./components/MobileMenu.js");
/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Search */ "./components/Search.js");
/* harmony import */ var _components_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Menu */ "./components/Menu.js");
/* harmony import */ var _components_HideOnDesktop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/HideOnDesktop */ "./components/HideOnDesktop.js");
/* harmony import */ var _components_Clearfix__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Clearfix */ "./components/Clearfix.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers */ "./helpers/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var MenuTemplate =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MenuTemplate, _React$Component);

  function MenuTemplate() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MenuTemplate);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MenuTemplate)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      menuOpen: false,
      searchOpen: false
    });

    return _this;
  }

  _createClass(MenuTemplate, [{
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
          logoUrl = _this$props.logoUrl,
          sticky = _this$props.sticky,
          children = _this$props.children;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_HideOnDesktop__WEBPACK_IMPORTED_MODULE_6__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_MobileMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
        menuItems: menuItems,
        menuColour: menuColour,
        isOpen: this.state.menuOpen,
        handleStateChange: function handleStateChange(state) {
          _this2.handleMenuStateChange(state);
        }
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Search__WEBPACK_IMPORTED_MODULE_4__["default"], {
        colour: menuColour,
        isOpen: this.state.searchOpen,
        handleStateChange: function handleStateChange(state) {
          _this2.handleSearchStateChange(state);
        }
      }), children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Clearfix__WEBPACK_IMPORTED_MODULE_7__["default"], null));
    }
  }]);

  return MenuTemplate;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

;

var HeaderTemplate = function HeaderTemplate(_ref3) {
  var colour = _ref3.colour,
      colourHex = _ref3.colourHex,
      Header = _ref3.Header,
      title = _ref3.title,
      image = _ref3.image;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_promise__WEBPACK_IMPORTED_MODULE_2___default.a, {
    promise: new Promise(
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(resolve) {
        var _ref5, menu, logoUrl;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["getMenu"])();

              case 2:
                _ref5 = _context.sent;
                menu = _ref5.menu;
                _context.next = 6;
                return Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["getLogo"])(colour);

              case 6:
                logoUrl = _context.sent;
                resolve({
                  menu: menu,
                  logoUrl: logoUrl
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref4.apply(this, arguments);
      };
    }()),
    then: function then(_ref6) {
      var menu = _ref6.menu,
          logoUrl = _ref6.logoUrl;

      if (!title || !image) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuTemplate, {
          menuItems: menu,
          menuColour: colourHex,
          logoUrl: logoUrl,
          sticky: true
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MenuTemplate, {
        menuItems: menu,
        menuColour: colourHex,
        logoUrl: logoUrl
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, {
        text: title,
        image: Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["getFullUrl"])(image)
      }));
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderTemplate);

/***/ }),

/***/ 3:
/*!*****************************!*\
  !*** multi ./pages/word.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/word.js */"./pages/word.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "downshift":
/*!****************************!*\
  !*** external "downshift" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("downshift");

/***/ }),

/***/ "flat":
/*!***********************!*\
  !*** external "flat" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("flat");

/***/ }),

/***/ "next-routes":
/*!******************************!*\
  !*** external "next-routes" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "rc-slider/lib/Slider":
/*!***************************************!*\
  !*** external "rc-slider/lib/Slider" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-slider/lib/Slider");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-burger-menu":
/*!************************************!*\
  !*** external "react-burger-menu" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-burger-menu");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-promise":
/*!********************************!*\
  !*** external "react-promise" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-promise");

/***/ }),

/***/ "react-sound":
/*!******************************!*\
  !*** external "react-sound" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-sound");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=word.js.map