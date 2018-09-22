webpackHotUpdate("static/development/pages/word.js",{

/***/ "./components/Audio.js":
/*!*****************************!*\
  !*** ./components/Audio.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_sound__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-sound */ "./node_modules/react-sound/lib/index.js");
/* harmony import */ var react_sound__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_sound__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_slider_lib_Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-slider/lib/Slider */ "./node_modules/rc-slider/lib/Slider.js");
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
      console.log(volume);

      _this.setState({
        volume: volume
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_sound__WEBPACK_IMPORTED_MODULE_1___default.a, {
        url: _this.props.url,
        autoLoad: true,
        playStatus: _this.state.playStatus,
        playFromPosition: _this.state.position,
        onPause: _this.setPositionAndDuration,
        onStop: _this.setPositionAndDuration,
        onLoading: _this.setDuration
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
        defaultValue: _this.state.value,
        value: _this.state.value
      }));
    });

    return _this;
  }

  return Audio;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Audio);

/***/ })

})
//# sourceMappingURL=word.js.c072fa5af9126b9f8f85.hot-update.js.map