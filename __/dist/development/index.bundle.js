(function(e, a) { for(var i in a) e[i] = a[i]; }(this, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./ActivityLayout.js":
/*!***************************!*\
  !*** ./ActivityLayout.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");
module.exports = React.createClass({
  displayName: 'ActivityLayout',
  getDefaultProps: function getDefaultProps() {
    return {
      minX: 100,
      maxX: 480,
      begin: 0,
      end: 0,
      barWidth: 3,
      hStyle: {},
      bStyle: {},
      fStyle: {},
      direction: 'left-right',
      unit: 'px'
    };
  },
  getInitialState: function getInitialState() {
    return {
      className: '',
      style: {},
      hStyle: {},
      bStyle: {},
      fStyle: {}
    };
  },
  componentDidMount: function componentDidMount() {
    var _source = this._bar;
    if (_source) {
      var _vector = this.props.direction.split('-'),
        _start = [this.props.begin, 0];
      if (this.props.direction == 'top-bottom') {
        _vector = ['bottom', 'top'];
        _start = [this.props.begin, this.props.begin];
      }
      zn.draggable.create(_source, {
        vector: _vector,
        start: _start,
        minX: this.props.minX,
        maxX: this.props.maxX,
        minY: this.props.minY,
        maxY: this.props.maxY,
        xHandler: this.props.xHandler,
        yHandler: this.props.yHandler,
        onDragStart: this.__onNodeDragStart,
        onDrag: this.__onNodeDrag,
        onDragEnd: this.__onNodeDragEnd
      });
      zn.dom.on(_source, 'mouseover', this.__onMouseOver);
      zn.dom.on(_source, 'mouseout', this.__onMouseOut);
    }
  },
  __onMouseOver: function __onMouseOver() {},
  __onMouseOut: function __onMouseOut() {},
  __onNodeDragStart: function __onNodeDragStart(event, data) {},
  __onNodeDrag: function __onNodeDrag(event, data) {
    if (this.props.direction == 'left-right') {
      if (data.currX < this.props.minX || data.currX > this.props.maxX) {
        return false;
      }
      this.setState({
        hStyle: {
          width: data.currX
        },
        bStyle: {
          top: 0
        },
        fStyle: {
          left: data.currX + this.props.barWidth
        }
      });
    } else {
      this.setState({
        hStyle: {
          height: data.mouseY
        },
        bStyle: {
          top: data.mouseY,
          left: 0
        },
        fStyle: {
          top: data.mouseY + this.props.barWidth
        }
      });
    }
  },
  __onNodeDragEnd: function __onNodeDragEnd(event, data) {},
  __getStyles: function __getStyles() {
    var props = this.props,
      _unit = props.unit,
      _begin = props.begin,
      _end = props.end,
      _header = {},
      _body = {},
      _footer = {};
    if (props.direction == 'left-right') {
      _body.width = props.barWidth + _unit;
      if (_begin) {
        _header.width = _begin + _unit;
        _body.left = _begin + _unit;
        _footer.left = _begin + props.barWidth + _unit;
      }
      if (_end) {
        _header.right = _end + props.barWidth + _unit;
        _body.right = _end + _unit;
        _footer.width = _end + _unit;
      }
    } else {
      _body.height = props.barWidth + _unit;
      if (_begin) {
        _header.height = _begin + _unit;
        _body.top = _begin + _unit;
        _footer.top = _begin + props.barWidth + _unit;
      }
      if (_end) {
        _header.bottom = _end + props.barWidth + _unit;
        _body.bottom = _end + _unit;
        _footer.height = _end + _unit;
      }
    }
    return {
      header: zn.extend(_header, props.hStyle),
      body: zn.extend(_body, props.bStyle),
      footer: zn.extend(_footer, props.fStyle)
    };
  },
  __bodyRender: function __bodyRender() {
    var _render = this.props.bodyRender && this.props.bodyRender(this);
    if (_render) {
      return _render;
    } else {
      return /*#__PURE__*/React.createElement("div", {
        className: "activity-bar"
      });
    }
  },
  __renderHead: function __renderHead(style) {
    var _element = znui.react.createReactElement(this.props.headRender, {
      style: style,
      layout: this
    });
    if (_element) {
      return _element;
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "layout-header",
      style: znui.react.style(style, this.state.hStyle)
    }, znui.react.createReactElement(this.props.head, {
      style: style,
      layout: this
    }));
  },
  __renderBody: function __renderBody(style) {
    var _this = this;
    if (this.props.barWidth) {
      return /*#__PURE__*/React.createElement("div", {
        ref: function ref(dom) {
          return _this._bar = dom;
        },
        className: "layout-body",
        style: znui.react.style(style, this.state.bStyle)
      }, this.__bodyRender());
    }
  },
  __renderFoot: function __renderFoot(style) {
    var _element = znui.react.createReactElement(this.props.footRender, {
      style: style,
      layout: this
    });
    if (_element) {
      return _element;
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "layout-footer",
      style: znui.react.style(style, this.state.fStyle)
    }, znui.react.createReactElement(this.props.foot, {
      style: style,
      layout: this
    }));
  },
  render: function render() {
    var _styles = this.__getStyles();
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("zr-layout", "zr-activity-layout", "direction-" + this.props.direction, this.props.className, this.state.className),
      style: znui.react.style(this.props.style, this.state.style)
    }, this.__renderHead(_styles.header), this.__renderBody(_styles.body), this.__renderFoot(_styles.footer));
  }
});

/***/ }),

/***/ "./FixedLayout.js":
/*!************************!*\
  !*** ./FixedLayout.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var React = znui.React || __webpack_require__(/*! react */ "react");
module.exports = React.createClass({
  displayName: 'FixedLayout',
  getDefaultProps: function getDefaultProps() {
    return {
      begin: 0,
      end: 0,
      hStyle: {},
      bStyle: {},
      fStyle: {},
      direction: 'top-bottom',
      unit: 'px'
    };
  },
  getInitialState: function getInitialState() {
    return {
      className: '',
      style: {},
      hStyle: {},
      bStyle: {},
      fStyle: {}
    };
  },
  __getStyles: function __getStyles() {
    var props = this.props,
      _unit = props.unit,
      _begin = props.begin,
      _end = props.end,
      _header = {},
      _body = {},
      _footer = {};
    if (props.direction == 'top-bottom') {
      _header = {
        height: _begin + _unit
      };
      _body = {
        top: _begin + _unit,
        bottom: _end + _unit
      };
      _footer = {
        height: _end + _unit
      };
    } else {
      _header = {
        width: _begin + _unit
      };
      _body = {
        left: _begin + _unit,
        right: _end + _unit
      };
      _footer = {
        width: _end + _unit
      };
    }
    return {
      header: zn.extend(_header, props.hStyle),
      body: zn.extend(_body, props.bStyle),
      footer: zn.extend(_footer, props.fStyle)
    };
  },
  __renderHead: function __renderHead(style) {
    var _element = znui.react.createReactElement(this.props.headRender, {
      style: style,
      layout: this
    });
    if (_element) {
      return _element;
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "layout-header",
      style: znui.react.style(style, this.state.hStyle)
    }, znui.react.createReactElement(this.props.head, {
      style: style,
      layout: this
    }));
  },
  __renderBody: function __renderBody(style) {
    var _element = znui.react.createReactElement(this.props.bodyRender, {
      style: style,
      layout: this
    });
    if (_element) {
      return _element;
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "layout-body",
      style: znui.react.style(style, this.state.bStyle)
    }, znui.react.createReactElement(this.props.body, {
      style: style,
      layout: this
    }));
  },
  __renderFoot: function __renderFoot(style) {
    var _element = znui.react.createReactElement(this.props.footRender, {
      style: style,
      layout: this
    });
    if (_element) {
      return _element;
    }
    return /*#__PURE__*/React.createElement("div", {
      className: "layout-footer",
      style: znui.react.style(style, this.state.fStyle)
    }, znui.react.createReactElement(this.props.foot, {
      style: style,
      layout: this
    }));
  },
  render: function render() {
    var _styles = this.__getStyles(); //h, v
    return /*#__PURE__*/React.createElement("div", {
      className: znui.react.classname("zr-layout", "zr-fixed-layout", "direction-" + this.props.direction, this.props.className, this.state.className),
      style: znui.react.style(this.props.style, this.state.style)
    }, this.__renderHead(_styles.header), this.__renderBody(_styles.body), this.__renderFoot(_styles.footer));
  }
});

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  'ActivityLayout': __webpack_require__(/*! ./ActivityLayout */ "./ActivityLayout.js"),
  'FixedLayout': __webpack_require__(/*! ./FixedLayout */ "./FixedLayout.js")
};

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ })));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQWN0aXZpdHlMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vRml4ZWRMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiJdLCJuYW1lcyI6WyJSZWFjdCIsInpudWkiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJnZXREZWZhdWx0UHJvcHMiLCJtaW5YIiwibWF4WCIsImJlZ2luIiwiZW5kIiwiYmFyV2lkdGgiLCJoU3R5bGUiLCJiU3R5bGUiLCJmU3R5bGUiLCJkaXJlY3Rpb24iLCJ1bml0IiwiZ2V0SW5pdGlhbFN0YXRlIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJjb21wb25lbnREaWRNb3VudCIsIl9zb3VyY2UiLCJfYmFyIiwiX3ZlY3RvciIsInByb3BzIiwic3BsaXQiLCJfc3RhcnQiLCJ6biIsImRyYWdnYWJsZSIsImNyZWF0ZSIsInZlY3RvciIsInN0YXJ0IiwibWluWSIsIm1heFkiLCJ4SGFuZGxlciIsInlIYW5kbGVyIiwib25EcmFnU3RhcnQiLCJfX29uTm9kZURyYWdTdGFydCIsIm9uRHJhZyIsIl9fb25Ob2RlRHJhZyIsIm9uRHJhZ0VuZCIsIl9fb25Ob2RlRHJhZ0VuZCIsImRvbSIsIm9uIiwiX19vbk1vdXNlT3ZlciIsIl9fb25Nb3VzZU91dCIsImV2ZW50IiwiZGF0YSIsImN1cnJYIiwic2V0U3RhdGUiLCJ3aWR0aCIsInRvcCIsImxlZnQiLCJoZWlnaHQiLCJtb3VzZVkiLCJfX2dldFN0eWxlcyIsIl91bml0IiwiX2JlZ2luIiwiX2VuZCIsIl9oZWFkZXIiLCJfYm9keSIsIl9mb290ZXIiLCJyaWdodCIsImJvdHRvbSIsImhlYWRlciIsImV4dGVuZCIsImJvZHkiLCJmb290ZXIiLCJfX2JvZHlSZW5kZXIiLCJfcmVuZGVyIiwiYm9keVJlbmRlciIsImNyZWF0ZUVsZW1lbnQiLCJfX3JlbmRlckhlYWQiLCJfZWxlbWVudCIsInJlYWN0IiwiY3JlYXRlUmVhY3RFbGVtZW50IiwiaGVhZFJlbmRlciIsImxheW91dCIsInN0YXRlIiwiaGVhZCIsIl9fcmVuZGVyQm9keSIsIl90aGlzIiwicmVmIiwiX19yZW5kZXJGb290IiwiZm9vdFJlbmRlciIsImZvb3QiLCJyZW5kZXIiLCJfc3R5bGVzIiwiY2xhc3NuYW1lIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsSUFBSUEsS0FBSyxHQUFHQyxJQUFJLENBQUNELEtBQUssSUFBSUUsbUJBQU8sQ0FBQyxvQkFBTyxDQUFDO0FBRTFDQyxNQUFNLENBQUNDLE9BQU8sR0FBR0osS0FBSyxDQUFDSyxXQUFXLENBQUM7RUFDbENDLFdBQVcsRUFBQyxnQkFBZ0I7RUFDNUJDLGVBQWUsRUFBRSxTQUFqQkEsZUFBZUEsQ0FBQSxFQUFhO0lBQzNCLE9B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QUNxRCxZQUFZLENBQUNlLE9BQU8sQ0FBQ3ZCLE1BQU0sQ0FBQyxFQUNqQyxJQUFJLENBQUNnQixZQUFZLENBQUNPLE9BQU8sQ0FBQ3JCLElBQUksQ0FBQyxFQUMvQixJQUFJLENBQUNpQixZQUFZLENBQUNJLE9BQU8sQ0FBQ3BCLE1BQU0sQ0FDOUIsQ0FBQztFQUVSO0FBQ0QsQ0FBQyxDQUFDLEM7Ozs7Ozs7Ozs7O0FDbkhGakUsTUFBTSxDQUFDQyxPQUFPLEdBQUc7RUFDYixnQkFBZ0IsRUFBRUYsbUJBQU8sQ0FBQyw2Q0FBa0IsQ0FBQztFQUM3QyxhQUFhLEVBQUVBLG1CQUFPLENBQUMsdUNBQWU7QUFDMUMsQ0FBQyxDOzs7Ozs7Ozs7OztBQ0hELGFBQWEsZ0NBQWdDLEVBQUUsSSIsImZpbGUiOiIuL2Rpc3QvZGV2ZWxvcG1lbnQvaW5kZXguYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9pbmRleC5qc1wiKTtcbiIsInZhciBSZWFjdCA9IHpudWkuUmVhY3QgfHwgcmVxdWlyZSgncmVhY3QnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG5cdGRpc3BsYXlOYW1lOidBY3Rpdml0eUxheW91dCcsXG5cdGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdG1pblg6IDEwMCxcblx0XHRcdG1heFg6IDQ4MCxcblx0XHRcdGJlZ2luOiAwLFxuXHRcdFx0ZW5kOiAwLFxuXHRcdFx0YmFyV2lkdGg6IDMsXG5cdFx0XHRoU3R5bGU6IHt9LFxuXHRcdFx0YlN0eWxlOiB7fSxcblx0XHRcdGZTdHlsZToge30sXG5cdFx0XHRkaXJlY3Rpb246ICdsZWZ0LXJpZ2h0Jyxcblx0XHRcdHVuaXQ6ICdweCdcblx0XHR9O1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0c3R5bGU6IHt9LFxuXHRcdFx0aFN0eWxlOiB7fSxcblx0XHRcdGJTdHlsZToge30sXG5cdFx0XHRmU3R5bGU6IHt9XG5cdFx0fTtcblx0fSxcblx0Y29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBfc291cmNlID0gdGhpcy5fYmFyO1xuXHRcdGlmKF9zb3VyY2UpIHtcblx0XHRcdHZhciBfdmVjdG9yID0gdGhpcy5wcm9wcy5kaXJlY3Rpb24uc3BsaXQoJy0nKSxcblx0XHRcdFx0X3N0YXJ0ID0gW3RoaXMucHJvcHMuYmVnaW4sIDBdO1xuXHRcdFx0aWYodGhpcy5wcm9wcy5kaXJlY3Rpb24gPT0gJ3RvcC1ib3R0b20nKXtcblx0XHRcdFx0X3ZlY3RvciA9IFsnYm90dG9tJywgJ3RvcCddO1xuXHRcdFx0XHRfc3RhcnQgPSBbdGhpcy5wcm9wcy5iZWdpbiwgdGhpcy5wcm9wcy5iZWdpbl07XG5cdFx0XHR9XG5cdFx0XHR6bi5kcmFnZ2FibGUuY3JlYXRlKF9zb3VyY2UsIHtcblx0XHRcdFx0dmVjdG9yOiBfdmVjdG9yLFxuXHRcdFx0XHRzdGFydDogX3N0YXJ0LFxuXHRcdFx0XHRtaW5YOiB0aGlzLnByb3BzLm1pblgsXG5cdFx0XHRcdG1heFg6IHRoaXMucHJvcHMubWF4WCxcblx0XHRcdFx0bWluWTogdGhpcy5wcm9wcy5taW5ZLFxuXHRcdFx0XHRtYXhZOiB0aGlzLnByb3BzLm1heFksXG5cdFx0XHRcdHhIYW5kbGVyOiB0aGlzLnByb3BzLnhIYW5kbGVyLFxuXHRcdFx0XHR5SGFuZGxlcjogdGhpcy5wcm9wcy55SGFuZGxlcixcblx0XHRcdFx0b25EcmFnU3RhcnQ6IHRoaXMuX19vbk5vZGVEcmFnU3RhcnQsXG5cdFx0XHRcdG9uRHJhZzogdGhpcy5fX29uTm9kZURyYWcsXG5cdFx0XHRcdG9uRHJhZ0VuZDogdGhpcy5fX29uTm9kZURyYWdFbmRcblx0XHRcdH0pO1xuXHRcdFx0em4uZG9tLm9uKF9zb3VyY2UsICdtb3VzZW92ZXInLCB0aGlzLl9fb25Nb3VzZU92ZXIpO1xuXHRcdFx0em4uZG9tLm9uKF9zb3VyY2UsICdtb3VzZW91dCcsIHRoaXMuX19vbk1vdXNlT3V0KTtcblx0XHR9XG5cdFx0XG5cdH0sXG5cdF9fb25Nb3VzZU92ZXI6IGZ1bmN0aW9uICgpe1xuXG5cdH0sXG5cdF9fb25Nb3VzZU91dDogZnVuY3Rpb24gKCl7XG5cblx0fSxcblx0X19vbk5vZGVEcmFnU3RhcnQ6IGZ1bmN0aW9uIChldmVudCwgZGF0YSl7XG5cdFx0XG5cdH0sXG5cdF9fb25Ob2RlRHJhZzogZnVuY3Rpb24gKGV2ZW50LCBkYXRhKXtcblx0XHRpZih0aGlzLnByb3BzLmRpcmVjdGlvbiA9PSAnbGVmdC1yaWdodCcpIHtcblx0XHRcdGlmKGRhdGEuY3VyclggPCB0aGlzLnByb3BzLm1pblggfHwgZGF0YS5jdXJyWCA+IHRoaXMucHJvcHMubWF4WCl7IFxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0aFN0eWxlOiB7XG5cdFx0XHRcdFx0d2lkdGg6IGRhdGEuY3Vyclhcblx0XHRcdFx0fSxcblx0XHRcdFx0YlN0eWxlOiB7XG5cdFx0XHRcdFx0dG9wOiAwXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGZTdHlsZToge1xuXHRcdFx0XHRcdGxlZnQ6IGRhdGEuY3VyclggKyB0aGlzLnByb3BzLmJhcldpZHRoXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1lbHNle1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGhTdHlsZToge1xuXHRcdFx0XHRcdGhlaWdodDogZGF0YS5tb3VzZVlcblx0XHRcdFx0fSxcblx0XHRcdFx0YlN0eWxlOiB7XG5cdFx0XHRcdFx0dG9wOiBkYXRhLm1vdXNlWSxcblx0XHRcdFx0XHRsZWZ0OiAwXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGZTdHlsZToge1xuXHRcdFx0XHRcdHRvcDogZGF0YS5tb3VzZVkgKyB0aGlzLnByb3BzLmJhcldpZHRoXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fSxcblx0X19vbk5vZGVEcmFnRW5kOiBmdW5jdGlvbiAoZXZlbnQsIGRhdGEpe1xuXHRcdFxuXHR9LFxuXHRfX2dldFN0eWxlczogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIHByb3BzID0gdGhpcy5wcm9wcyxcblx0XHRcdF91bml0ID0gcHJvcHMudW5pdCxcblx0XHRcdF9iZWdpbiA9IHByb3BzLmJlZ2luLFxuXHRcdFx0X2VuZCA9IHByb3BzLmVuZCxcblx0XHRcdF9oZWFkZXIgPSB7fSxcblx0XHRcdF9ib2R5ID0ge30sXG5cdFx0XHRfZm9vdGVyID0ge307XG5cblx0XHRpZihwcm9wcy5kaXJlY3Rpb24gPT0gJ2xlZnQtcmlnaHQnKXtcblx0XHRcdF9ib2R5LndpZHRoID0gcHJvcHMuYmFyV2lkdGggKyBfdW5pdDtcblx0XHRcdGlmKF9iZWdpbil7XG5cdFx0XHRcdF9oZWFkZXIud2lkdGggPSBfYmVnaW4gKyBfdW5pdDtcblx0XHRcdFx0X2JvZHkubGVmdCA9IF9iZWdpbiArIF91bml0O1xuXHRcdFx0XHRfZm9vdGVyLmxlZnQgPSAoX2JlZ2luICsgcHJvcHMuYmFyV2lkdGgpICsgX3VuaXQ7XG5cdFx0XHR9XG5cdFx0XHRpZihfZW5kKXtcblx0XHRcdFx0X2hlYWRlci5yaWdodCA9IChfZW5kICsgcHJvcHMuYmFyV2lkdGgpICsgX3VuaXQ7XG5cdFx0XHRcdF9ib2R5LnJpZ2h0ID0gX2VuZCArIF91bml0O1xuXHRcdFx0XHRfZm9vdGVyLndpZHRoID0gX2VuZCArIF91bml0O1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRfYm9keS5oZWlnaHQgPSBwcm9wcy5iYXJXaWR0aCArIF91bml0O1xuXHRcdFx0aWYoX2JlZ2luKXtcblx0XHRcdFx0X2hlYWRlci5oZWlnaHQgPSBfYmVnaW4gKyBfdW5pdDtcblx0XHRcdFx0X2JvZHkudG9wID0gX2JlZ2luICsgX3VuaXQ7XG5cdFx0XHRcdF9mb290ZXIudG9wID0gKF9iZWdpbiArIHByb3BzLmJhcldpZHRoKSArIF91bml0O1xuXHRcdFx0fVxuXHRcdFx0aWYoX2VuZCl7XG5cdFx0XHRcdF9oZWFkZXIuYm90dG9tID0gKF9lbmQgKyBwcm9wcy5iYXJXaWR0aCkgKyBfdW5pdDtcblx0XHRcdFx0X2JvZHkuYm90dG9tID0gX2VuZCArIF91bml0O1xuXHRcdFx0XHRfZm9vdGVyLmhlaWdodCA9IF9lbmQgKyBfdW5pdDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0aGVhZGVyOiB6bi5leHRlbmQoX2hlYWRlciwgcHJvcHMuaFN0eWxlKSxcblx0XHRcdGJvZHk6IHpuLmV4dGVuZChfYm9keSwgcHJvcHMuYlN0eWxlKSxcblx0XHRcdGZvb3Rlcjogem4uZXh0ZW5kKF9mb290ZXIsIHByb3BzLmZTdHlsZSlcblx0XHR9XG5cdH0sXG5cdF9fYm9keVJlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9yZW5kZXIgPSB0aGlzLnByb3BzLmJvZHlSZW5kZXIgJiYgdGhpcy5wcm9wcy5ib2R5UmVuZGVyKHRoaXMpO1xuXHRcdGlmKF9yZW5kZXIpe1xuXHRcdFx0cmV0dXJuIF9yZW5kZXI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImFjdGl2aXR5LWJhclwiPjwvZGl2Pjtcblx0XHR9XG5cdH0sXG5cdF9fcmVuZGVySGVhZDogZnVuY3Rpb24gKHN0eWxlKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmhlYWRSZW5kZXIsIHtcblx0XHRcdHN0eWxlOiBzdHlsZSxcblx0XHRcdGxheW91dDogdGhpc1xuXHRcdH0pO1xuXHRcdGlmKF9lbGVtZW50KXtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0LWhlYWRlclwiIHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHN0eWxlLCB0aGlzLnN0YXRlLmhTdHlsZSl9PlxuXHRcdFx0XHR7em51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5oZWFkLCB7IHN0eWxlOiBzdHlsZSwgbGF5b3V0OiB0aGlzfSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH0sXG5cdF9fcmVuZGVyQm9keTogZnVuY3Rpb24gKHN0eWxlKXtcblx0XHRpZih0aGlzLnByb3BzLmJhcldpZHRoKSB7XG5cdFx0XHRyZXR1cm4gPGRpdiByZWY9eyhkb20pPT50aGlzLl9iYXIgPSBkb219IGNsYXNzTmFtZT1cImxheW91dC1ib2R5XCIgc3R5bGU9e3pudWkucmVhY3Quc3R5bGUoc3R5bGUsIHRoaXMuc3RhdGUuYlN0eWxlKX0+e3RoaXMuX19ib2R5UmVuZGVyKCl9PC9kaXY+O1xuXHRcdH1cblx0fSxcblx0X19yZW5kZXJGb290OiBmdW5jdGlvbiAoc3R5bGUpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuZm9vdFJlbmRlciwge1xuXHRcdFx0c3R5bGU6IHN0eWxlLFxuXHRcdFx0bGF5b3V0OiB0aGlzXG5cdFx0fSk7XG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsYXlvdXQtZm9vdGVyXCIgc3R5bGU9e3pudWkucmVhY3Quc3R5bGUoc3R5bGUsIHRoaXMuc3RhdGUuZlN0eWxlKX0+XG5cdFx0XHRcdHt6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmZvb3QsIHsgc3R5bGU6IHN0eWxlLCBsYXlvdXQ6IHRoaXN9KX1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHR2YXIgX3N0eWxlcyA9IHRoaXMuX19nZXRTdHlsZXMoKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItbGF5b3V0XCIsIFwienItYWN0aXZpdHktbGF5b3V0XCIsIFwiZGlyZWN0aW9uLVwiICsgdGhpcy5wcm9wcy5kaXJlY3Rpb24sIHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLnN0YXRlLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlLCB0aGlzLnN0YXRlLnN0eWxlKX0gPlxuXHRcdFx0XHR7IHRoaXMuX19yZW5kZXJIZWFkKF9zdHlsZXMuaGVhZGVyKSB9XG5cdFx0XHRcdHsgdGhpcy5fX3JlbmRlckJvZHkoX3N0eWxlcy5ib2R5KSB9XG5cdFx0XHRcdHsgdGhpcy5fX3JlbmRlckZvb3QoX3N0eWxlcy5mb290ZXIpIH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J0ZpeGVkTGF5b3V0Jyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YmVnaW46IDAsXG5cdFx0XHRlbmQ6IDAsXG5cdFx0XHRoU3R5bGU6IHt9LFxuXHRcdFx0YlN0eWxlOiB7fSxcblx0XHRcdGZTdHlsZToge30sXG5cdFx0XHRkaXJlY3Rpb246ICd0b3AtYm90dG9tJyxcblx0XHRcdHVuaXQ6ICdweCdcblx0XHR9O1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0c3R5bGU6IHt9LFxuXHRcdFx0aFN0eWxlOiB7fSxcblx0XHRcdGJTdHlsZToge30sXG5cdFx0XHRmU3R5bGU6IHt9XG5cdFx0fTtcblx0fSxcblx0X19nZXRTdHlsZXM6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBwcm9wcyA9IHRoaXMucHJvcHMsXG5cdFx0XHRfdW5pdCA9IHByb3BzLnVuaXQsXG5cdFx0XHRfYmVnaW4gPSBwcm9wcy5iZWdpbixcblx0XHRcdF9lbmQgPSBwcm9wcy5lbmQsXG5cdFx0XHRfaGVhZGVyID0ge30sXG5cdFx0XHRfYm9keSA9IHt9LFxuXHRcdFx0X2Zvb3RlciA9IHt9O1xuXG5cdFx0aWYocHJvcHMuZGlyZWN0aW9uID09ICd0b3AtYm90dG9tJyl7XG5cdFx0XHRfaGVhZGVyID0ge1xuXHRcdFx0XHRoZWlnaHQ6IF9iZWdpbiArIF91bml0XG5cdFx0XHR9O1xuXHRcdFx0X2JvZHkgPSB7XG5cdFx0XHRcdHRvcDogX2JlZ2luICsgX3VuaXQsXG5cdFx0XHRcdGJvdHRvbTogX2VuZCArIF91bml0XG5cdFx0XHR9O1xuXHRcdFx0X2Zvb3RlciA9IHtcblx0XHRcdFx0aGVpZ2h0OiBfZW5kICsgX3VuaXRcblx0XHRcdH07XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9oZWFkZXIgPSB7XG5cdFx0XHRcdHdpZHRoOiBfYmVnaW4gKyBfdW5pdFxuXHRcdFx0fTtcblx0XHRcdF9ib2R5ID0ge1xuXHRcdFx0XHRsZWZ0OiBfYmVnaW4gKyBfdW5pdCxcblx0XHRcdFx0cmlnaHQ6IF9lbmQgKyBfdW5pdFxuXHRcdFx0fTtcblx0XHRcdF9mb290ZXIgPSB7XG5cdFx0XHRcdHdpZHRoOiBfZW5kICsgX3VuaXRcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGhlYWRlcjogem4uZXh0ZW5kKF9oZWFkZXIsIHByb3BzLmhTdHlsZSksXG5cdFx0XHRib2R5OiB6bi5leHRlbmQoX2JvZHksIHByb3BzLmJTdHlsZSksXG5cdFx0XHRmb290ZXI6IHpuLmV4dGVuZChfZm9vdGVyLCBwcm9wcy5mU3R5bGUpXG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlckhlYWQ6IGZ1bmN0aW9uIChzdHlsZSl7XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5oZWFkUmVuZGVyLCB7XG5cdFx0XHRzdHlsZTogc3R5bGUsXG5cdFx0XHRsYXlvdXQ6IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxheW91dC1oZWFkZXJcIiBzdHlsZT17em51aS5yZWFjdC5zdHlsZShzdHlsZSwgdGhpcy5zdGF0ZS5oU3R5bGUpfT5cblx0XHRcdFx0e3pudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuaGVhZCwgeyBzdHlsZTogc3R5bGUsIGxheW91dDogdGhpc30pfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0X19yZW5kZXJCb2R5OiBmdW5jdGlvbiAoc3R5bGUpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuYm9keVJlbmRlciwge1xuXHRcdFx0c3R5bGU6IHN0eWxlLFxuXHRcdFx0bGF5b3V0OiB0aGlzXG5cdFx0fSk7XG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsYXlvdXQtYm9keVwiIHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHN0eWxlLCB0aGlzLnN0YXRlLmJTdHlsZSl9PlxuXHRcdFx0XHR7em51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5ib2R5LCB7IHN0eWxlOiBzdHlsZSwgbGF5b3V0OiB0aGlzfSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LFxuXHRfX3JlbmRlckZvb3Q6IGZ1bmN0aW9uIChzdHlsZSl7XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5mb290UmVuZGVyLCB7XG5cdFx0XHRzdHlsZTogc3R5bGUsXG5cdFx0XHRsYXlvdXQ6IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxheW91dC1mb290ZXJcIiBzdHlsZT17em51aS5yZWFjdC5zdHlsZShzdHlsZSwgdGhpcy5zdGF0ZS5mU3R5bGUpfT5cblx0XHRcdFx0e3pudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuZm9vdCwgeyBzdHlsZTogc3R5bGUsIGxheW91dDogdGhpc30pfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHZhciBfc3R5bGVzID0gdGhpcy5fX2dldFN0eWxlcygpOyAgIC8vaCwgdlxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1sYXlvdXRcIiwgXCJ6ci1maXhlZC1sYXlvdXRcIiwgXCJkaXJlY3Rpb24tXCIgKyB0aGlzLnByb3BzLmRpcmVjdGlvbiwgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMuc3RhdGUuY2xhc3NOYW1lKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSl9PlxuXHRcdFx0XHR7IHRoaXMuX19yZW5kZXJIZWFkKF9zdHlsZXMuaGVhZGVyKSB9XG5cdFx0XHRcdHsgdGhpcy5fX3JlbmRlckJvZHkoX3N0eWxlcy5ib2R5KSB9XG5cdFx0XHRcdHsgdGhpcy5fX3JlbmRlckZvb3QoX3N0eWxlcy5mb290ZXIpIH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgJ0FjdGl2aXR5TGF5b3V0JzogcmVxdWlyZSgnLi9BY3Rpdml0eUxheW91dCcpLFxuICAgICdGaXhlZExheW91dCc6IHJlcXVpcmUoJy4vRml4ZWRMYXlvdXQnKVxufTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0XCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=