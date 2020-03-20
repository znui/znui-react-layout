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
      return React.createElement("div", {
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

    return React.createElement("div", {
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
      return React.createElement("div", {
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

    return React.createElement("div", {
      className: "layout-footer",
      style: znui.react.style(style, this.state.fStyle)
    }, znui.react.createReactElement(this.props.foot, {
      style: style,
      layout: this
    }));
  },
  render: function render() {
    var _styles = this.__getStyles();

    return React.createElement("div", {
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

    return React.createElement("div", {
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

    return React.createElement("div", {
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

    return React.createElement("div", {
      className: "layout-footer",
      style: znui.react.style(style, this.state.fStyle)
    }, znui.react.createReactElement(this.props.foot, {
      style: style,
      layout: this
    }));
  },
  render: function render() {
    var _styles = this.__getStyles(); //h, v


    return React.createElement("div", {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQWN0aXZpdHlMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vRml4ZWRMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiJdLCJuYW1lcyI6WyJSZWFjdCIsInpudWkiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJnZXREZWZhdWx0UHJvcHMiLCJiZWdpbiIsImVuZCIsImJhcldpZHRoIiwiaFN0eWxlIiwiYlN0eWxlIiwiZlN0eWxlIiwiZGlyZWN0aW9uIiwidW5pdCIsImdldEluaXRpYWxTdGF0ZSIsImNsYXNzTmFtZSIsInN0eWxlIiwiY29tcG9uZW50RGlkTW91bnQiLCJfc291cmNlIiwiX2JhciIsIl92ZWN0b3IiLCJwcm9wcyIsInNwbGl0IiwiX3N0YXJ0Iiwiem4iLCJkcmFnZ2FibGUiLCJjcmVhdGUiLCJ2ZWN0b3IiLCJzdGFydCIsIm9uRHJhZ1N0YXJ0IiwiX19vbk5vZGVEcmFnU3RhcnQiLCJvbkRyYWciLCJfX29uTm9kZURyYWciLCJvbkRyYWdFbmQiLCJfX29uTm9kZURyYWdFbmQiLCJkb20iLCJvbiIsIl9fb25Nb3VzZU92ZXIiLCJfX29uTW91c2VPdXQiLCJldmVudCIsImRhdGEiLCJzZXRTdGF0ZSIsIndpZHRoIiwiY3VyclgiLCJ0b3AiLCJsZWZ0IiwiaGVpZ2h0IiwibW91c2VZIiwiX19nZXRTdHlsZXMiLCJfdW5pdCIsIl9iZWdpbiIsIl9lbmQiLCJfaGVhZGVyIiwiX2JvZHkiLCJfZm9vdGVyIiwicmlnaHQiLCJib3R0b20iLCJoZWFkZXIiLCJleHRlbmQiLCJib2R5IiwiZm9vdGVyIiwiX19ib2R5UmVuZGVyIiwiX3JlbmRlciIsImJvZHlSZW5kZXIiLCJfX3JlbmRlckhlYWQiLCJfZWxlbWVudCIsInJlYWN0IiwiY3JlYXRlUmVhY3RFbGVtZW50IiwiaGVhZFJlbmRlciIsImxheW91dCIsInN0YXRlIiwiaGVhZCIsIl9fcmVuZGVyQm9keSIsIl9fcmVuZGVyRm9vdCIsImZvb3RSZW5kZXIiLCJmb290IiwicmVuZGVyIiwiX3N0eWxlcyIsImNsYXNzbmFtZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLElBQUlBLEtBQUssR0FBR0MsSUFBSSxDQUFDRCxLQUFMLElBQWNFLG1CQUFPLENBQUMsb0JBQUQsQ0FBakM7O0FBRUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkosS0FBSyxDQUFDSyxXQUFOLENBQWtCO0FBQ2xDQyxhQUFXLEVBQUMsZ0JBRHNCO0FBRWxDQyxpQkFBZSxFQUFFLDJCQUFXO0FBQzNCLFdBQU87QUFDTkMsV0FBSyxFQUFFLENBREQ7QUFFTkMsU0FBRyxFQUFFLENBRkM7QUFHTkMsY0FBUSxFQUFFLENBSEo7QUFJTkMsWUFBTSxFQUFFLEVBSkY7QUFLTkMs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QU8sQ0FBQyx1Q0FBRDtBQUZULENBQWpCLEM7Ozs7Ozs7Ozs7O0FDQUEsYUFBYSxnQ0FBZ0MsRUFBRSxJIiwiZmlsZSI6Ii4vZGlzdC9kZXZlbG9wbWVudC9pbmRleC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J0FjdGl2aXR5TGF5b3V0Jyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YmVnaW46IDAsXG5cdFx0XHRlbmQ6IDAsXG5cdFx0XHRiYXJXaWR0aDogMyxcblx0XHRcdGhTdHlsZToge30sXG5cdFx0XHRiU3R5bGU6IHt9LFxuXHRcdFx0ZlN0eWxlOiB7fSxcblx0XHRcdGRpcmVjdGlvbjogJ2xlZnQtcmlnaHQnLFxuXHRcdFx0dW5pdDogJ3B4J1xuXHRcdH07XG5cdH0sXG5cdGdldEluaXRpYWxTdGF0ZTogZnVuY3Rpb24gKCl7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNsYXNzTmFtZTogJycsXG5cdFx0XHRzdHlsZToge30sXG5cdFx0XHRoU3R5bGU6IHt9LFxuXHRcdFx0YlN0eWxlOiB7fSxcblx0XHRcdGZTdHlsZToge31cblx0XHR9O1xuXHR9LFxuXHRjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9zb3VyY2UgPSB0aGlzLl9iYXI7XG5cdFx0aWYoX3NvdXJjZSkge1xuXHRcdFx0dmFyIF92ZWN0b3IgPSB0aGlzLnByb3BzLmRpcmVjdGlvbi5zcGxpdCgnLScpLFxuXHRcdFx0XHRfc3RhcnQgPSBbdGhpcy5wcm9wcy5iZWdpbiwgMF07XG5cdFx0XHRpZih0aGlzLnByb3BzLmRpcmVjdGlvbiA9PSAndG9wLWJvdHRvbScpe1xuXHRcdFx0XHRfdmVjdG9yID0gWydib3R0b20nLCAndG9wJ107XG5cdFx0XHRcdF9zdGFydCA9IFt0aGlzLnByb3BzLmJlZ2luLCB0aGlzLnByb3BzLmJlZ2luXTtcblx0XHRcdH1cblx0XHRcdHpuLmRyYWdnYWJsZS5jcmVhdGUoX3NvdXJjZSwge1xuXHRcdFx0XHR2ZWN0b3I6IF92ZWN0b3IsXG5cdFx0XHRcdHN0YXJ0OiBfc3RhcnQsXG5cdFx0XHRcdG9uRHJhZ1N0YXJ0OiB0aGlzLl9fb25Ob2RlRHJhZ1N0YXJ0LFxuXHRcdFx0XHRvbkRyYWc6IHRoaXMuX19vbk5vZGVEcmFnLFxuXHRcdFx0XHRvbkRyYWdFbmQ6IHRoaXMuX19vbk5vZGVEcmFnRW5kXG5cdFx0XHR9KTtcblx0XHRcdHpuLmRvbS5vbihfc291cmNlLCAnbW91c2VvdmVyJywgdGhpcy5fX29uTW91c2VPdmVyKTtcblx0XHRcdHpuLmRvbS5vbihfc291cmNlLCAnbW91c2VvdXQnLCB0aGlzLl9fb25Nb3VzZU91dCk7XG5cdFx0fVxuXHRcdFxuXHR9LFxuXHRfX29uTW91c2VPdmVyOiBmdW5jdGlvbiAoKXtcblxuXHR9LFxuXHRfX29uTW91c2VPdXQ6IGZ1bmN0aW9uICgpe1xuXG5cdH0sXG5cdF9fb25Ob2RlRHJhZ1N0YXJ0OiBmdW5jdGlvbiAoZXZlbnQsIGRhdGEpe1xuXHRcdFxuXHR9LFxuXHRfX29uTm9kZURyYWc6IGZ1bmN0aW9uIChldmVudCwgZGF0YSl7XG5cdFx0aWYodGhpcy5wcm9wcy5kaXJlY3Rpb24gPT0gJ2xlZnQtcmlnaHQnKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0aFN0eWxlOiB7XG5cdFx0XHRcdFx0d2lkdGg6IGRhdGEuY3Vyclhcblx0XHRcdFx0fSxcblx0XHRcdFx0YlN0eWxlOiB7XG5cdFx0XHRcdFx0dG9wOiAwXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGZTdHlsZToge1xuXHRcdFx0XHRcdGxlZnQ6IGRhdGEuY3VyclggKyB0aGlzLnByb3BzLmJhcldpZHRoXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1lbHNle1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGhTdHlsZToge1xuXHRcdFx0XHRcdGhlaWdodDogZGF0YS5tb3VzZVlcblx0XHRcdFx0fSxcblx0XHRcdFx0YlN0eWxlOiB7XG5cdFx0XHRcdFx0dG9wOiBkYXRhLm1vdXNlWSxcblx0XHRcdFx0XHRsZWZ0OiAwXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGZTdHlsZToge1xuXHRcdFx0XHRcdHRvcDogZGF0YS5tb3VzZVkgKyB0aGlzLnByb3BzLmJhcldpZHRoXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fSxcblx0X19vbk5vZGVEcmFnRW5kOiBmdW5jdGlvbiAoZXZlbnQsIGRhdGEpe1xuXHRcdFxuXHR9LFxuXHRfX2dldFN0eWxlczogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIHByb3BzID0gdGhpcy5wcm9wcyxcblx0XHRcdF91bml0ID0gcHJvcHMudW5pdCxcblx0XHRcdF9iZWdpbiA9IHByb3BzLmJlZ2luLFxuXHRcdFx0X2VuZCA9IHByb3BzLmVuZCxcblx0XHRcdF9oZWFkZXIgPSB7fSxcblx0XHRcdF9ib2R5ID0ge30sXG5cdFx0XHRfZm9vdGVyID0ge307XG5cblx0XHRpZihwcm9wcy5kaXJlY3Rpb24gPT0gJ2xlZnQtcmlnaHQnKXtcblx0XHRcdF9ib2R5LndpZHRoID0gcHJvcHMuYmFyV2lkdGggKyBfdW5pdDtcblx0XHRcdGlmKF9iZWdpbil7XG5cdFx0XHRcdF9oZWFkZXIud2lkdGggPSBfYmVnaW4gKyBfdW5pdDtcblx0XHRcdFx0X2JvZHkubGVmdCA9IF9iZWdpbiArIF91bml0O1xuXHRcdFx0XHRfZm9vdGVyLmxlZnQgPSAoX2JlZ2luICsgcHJvcHMuYmFyV2lkdGgpICsgX3VuaXQ7XG5cdFx0XHR9XG5cdFx0XHRpZihfZW5kKXtcblx0XHRcdFx0X2hlYWRlci5yaWdodCA9IChfZW5kICsgcHJvcHMuYmFyV2lkdGgpICsgX3VuaXQ7XG5cdFx0XHRcdF9ib2R5LnJpZ2h0ID0gX2VuZCArIF91bml0O1xuXHRcdFx0XHRfZm9vdGVyLndpZHRoID0gX2VuZCArIF91bml0O1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRfYm9keS5oZWlnaHQgPSBwcm9wcy5iYXJXaWR0aCArIF91bml0O1xuXHRcdFx0aWYoX2JlZ2luKXtcblx0XHRcdFx0X2hlYWRlci5oZWlnaHQgPSBfYmVnaW4gKyBfdW5pdDtcblx0XHRcdFx0X2JvZHkudG9wID0gX2JlZ2luICsgX3VuaXQ7XG5cdFx0XHRcdF9mb290ZXIudG9wID0gKF9iZWdpbiArIHByb3BzLmJhcldpZHRoKSArIF91bml0O1xuXHRcdFx0fVxuXHRcdFx0aWYoX2VuZCl7XG5cdFx0XHRcdF9oZWFkZXIuYm90dG9tID0gKF9lbmQgKyBwcm9wcy5iYXJXaWR0aCkgKyBfdW5pdDtcblx0XHRcdFx0X2JvZHkuYm90dG9tID0gX2VuZCArIF91bml0O1xuXHRcdFx0XHRfZm9vdGVyLmhlaWdodCA9IF9lbmQgKyBfdW5pdDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0aGVhZGVyOiB6bi5leHRlbmQoX2hlYWRlciwgcHJvcHMuaFN0eWxlKSxcblx0XHRcdGJvZHk6IHpuLmV4dGVuZChfYm9keSwgcHJvcHMuYlN0eWxlKSxcblx0XHRcdGZvb3Rlcjogem4uZXh0ZW5kKF9mb290ZXIsIHByb3BzLmZTdHlsZSlcblx0XHR9XG5cdH0sXG5cdF9fYm9keVJlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9yZW5kZXIgPSB0aGlzLnByb3BzLmJvZHlSZW5kZXIgJiYgdGhpcy5wcm9wcy5ib2R5UmVuZGVyKHRoaXMpO1xuXHRcdGlmKF9yZW5kZXIpe1xuXHRcdFx0cmV0dXJuIF9yZW5kZXI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImFjdGl2aXR5LWJhclwiPjwvZGl2Pjtcblx0XHR9XG5cdH0sXG5cdF9fcmVuZGVySGVhZDogZnVuY3Rpb24gKHN0eWxlKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmhlYWRSZW5kZXIsIHtcblx0XHRcdHN0eWxlOiBzdHlsZSxcblx0XHRcdGxheW91dDogdGhpc1xuXHRcdH0pO1xuXHRcdGlmKF9lbGVtZW50KXtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0LWhlYWRlclwiIHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHN0eWxlLCB0aGlzLnN0YXRlLmhTdHlsZSl9PlxuXHRcdFx0XHR7em51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5oZWFkLCB7IHN0eWxlOiBzdHlsZSwgbGF5b3V0OiB0aGlzfSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH0sXG5cdF9fcmVuZGVyQm9keTogZnVuY3Rpb24gKHN0eWxlKXtcblx0XHRpZih0aGlzLnByb3BzLmJhcldpZHRoKSB7XG5cdFx0XHRyZXR1cm4gPGRpdiByZWY9eyhkb20pPT50aGlzLl9iYXIgPSBkb219IGNsYXNzTmFtZT1cImxheW91dC1ib2R5XCIgc3R5bGU9e3pudWkucmVhY3Quc3R5bGUoc3R5bGUsIHRoaXMuc3RhdGUuYlN0eWxlKX0+e3RoaXMuX19ib2R5UmVuZGVyKCl9PC9kaXY+O1xuXHRcdH1cblx0fSxcblx0X19yZW5kZXJGb290OiBmdW5jdGlvbiAoc3R5bGUpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuZm9vdFJlbmRlciwge1xuXHRcdFx0c3R5bGU6IHN0eWxlLFxuXHRcdFx0bGF5b3V0OiB0aGlzXG5cdFx0fSk7XG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsYXlvdXQtZm9vdGVyXCIgc3R5bGU9e3pudWkucmVhY3Quc3R5bGUoc3R5bGUsIHRoaXMuc3RhdGUuZlN0eWxlKX0+XG5cdFx0XHRcdHt6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmZvb3QsIHsgc3R5bGU6IHN0eWxlLCBsYXlvdXQ6IHRoaXN9KX1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHR2YXIgX3N0eWxlcyA9IHRoaXMuX19nZXRTdHlsZXMoKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItbGF5b3V0XCIsIFwienItYWN0aXZpdHktbGF5b3V0XCIsIFwiZGlyZWN0aW9uLVwiICsgdGhpcy5wcm9wcy5kaXJlY3Rpb24sIHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLnN0YXRlLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlLCB0aGlzLnN0YXRlLnN0eWxlKX0gPlxuXHRcdFx0XHR7IHRoaXMuX19yZW5kZXJIZWFkKF9zdHlsZXMuaGVhZGVyKSB9XG5cdFx0XHRcdHsgdGhpcy5fX3JlbmRlckJvZHkoX3N0eWxlcy5ib2R5KSB9XG5cdFx0XHRcdHsgdGhpcy5fX3JlbmRlckZvb3QoX3N0eWxlcy5mb290ZXIpIH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J0ZpeGVkTGF5b3V0Jyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YmVnaW46IDAsXG5cdFx0XHRlbmQ6IDAsXG5cdFx0XHRoU3R5bGU6IHt9LFxuXHRcdFx0YlN0eWxlOiB7fSxcblx0XHRcdGZTdHlsZToge30sXG5cdFx0XHRkaXJlY3Rpb246ICd0b3AtYm90dG9tJyxcblx0XHRcdHVuaXQ6ICdweCdcblx0XHR9O1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0c3R5bGU6IHt9LFxuXHRcdFx0aFN0eWxlOiB7fSxcblx0XHRcdGJTdHlsZToge30sXG5cdFx0XHRmU3R5bGU6IHt9XG5cdFx0fTtcblx0fSxcblx0X19nZXRTdHlsZXM6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBwcm9wcyA9IHRoaXMucHJvcHMsXG5cdFx0XHRfdW5pdCA9IHByb3BzLnVuaXQsXG5cdFx0XHRfYmVnaW4gPSBwcm9wcy5iZWdpbixcblx0XHRcdF9lbmQgPSBwcm9wcy5lbmQsXG5cdFx0XHRfaGVhZGVyID0ge30sXG5cdFx0XHRfYm9keSA9IHt9LFxuXHRcdFx0X2Zvb3RlciA9IHt9O1xuXG5cdFx0aWYocHJvcHMuZGlyZWN0aW9uID09ICd0b3AtYm90dG9tJyl7XG5cdFx0XHRfaGVhZGVyID0ge1xuXHRcdFx0XHRoZWlnaHQ6IF9iZWdpbiArIF91bml0XG5cdFx0XHR9O1xuXHRcdFx0X2JvZHkgPSB7XG5cdFx0XHRcdHRvcDogX2JlZ2luICsgX3VuaXQsXG5cdFx0XHRcdGJvdHRvbTogX2VuZCArIF91bml0XG5cdFx0XHR9O1xuXHRcdFx0X2Zvb3RlciA9IHtcblx0XHRcdFx0aGVpZ2h0OiBfZW5kICsgX3VuaXRcblx0XHRcdH07XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9oZWFkZXIgPSB7XG5cdFx0XHRcdHdpZHRoOiBfYmVnaW4gKyBfdW5pdFxuXHRcdFx0fTtcblx0XHRcdF9ib2R5ID0ge1xuXHRcdFx0XHRsZWZ0OiBfYmVnaW4gKyBfdW5pdCxcblx0XHRcdFx0cmlnaHQ6IF9lbmQgKyBfdW5pdFxuXHRcdFx0fTtcblx0XHRcdF9mb290ZXIgPSB7XG5cdFx0XHRcdHdpZHRoOiBfZW5kICsgX3VuaXRcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGhlYWRlcjogem4uZXh0ZW5kKF9oZWFkZXIsIHByb3BzLmhTdHlsZSksXG5cdFx0XHRib2R5OiB6bi5leHRlbmQoX2JvZHksIHByb3BzLmJTdHlsZSksXG5cdFx0XHRmb290ZXI6IHpuLmV4dGVuZChfZm9vdGVyLCBwcm9wcy5mU3R5bGUpXG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlckhlYWQ6IGZ1bmN0aW9uIChzdHlsZSl7XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5oZWFkUmVuZGVyLCB7XG5cdFx0XHRzdHlsZTogc3R5bGUsXG5cdFx0XHRsYXlvdXQ6IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxheW91dC1oZWFkZXJcIiBzdHlsZT17em51aS5yZWFjdC5zdHlsZShzdHlsZSwgdGhpcy5zdGF0ZS5oU3R5bGUpfT5cblx0XHRcdFx0e3pudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuaGVhZCwgeyBzdHlsZTogc3R5bGUsIGxheW91dDogdGhpc30pfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0X19yZW5kZXJCb2R5OiBmdW5jdGlvbiAoc3R5bGUpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuYm9keVJlbmRlciwge1xuXHRcdFx0c3R5bGU6IHN0eWxlLFxuXHRcdFx0bGF5b3V0OiB0aGlzXG5cdFx0fSk7XG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsYXlvdXQtYm9keVwiIHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHN0eWxlLCB0aGlzLnN0YXRlLmJTdHlsZSl9PlxuXHRcdFx0XHR7em51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5ib2R5LCB7IHN0eWxlOiBzdHlsZSwgbGF5b3V0OiB0aGlzfSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LFxuXHRfX3JlbmRlckZvb3Q6IGZ1bmN0aW9uIChzdHlsZSl7XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5mb290UmVuZGVyLCB7XG5cdFx0XHRzdHlsZTogc3R5bGUsXG5cdFx0XHRsYXlvdXQ6IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxheW91dC1mb290ZXJcIiBzdHlsZT17em51aS5yZWFjdC5zdHlsZShzdHlsZSwgdGhpcy5zdGF0ZS5mU3R5bGUpfT5cblx0XHRcdFx0e3pudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuZm9vdCwgeyBzdHlsZTogc3R5bGUsIGxheW91dDogdGhpc30pfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHZhciBfc3R5bGVzID0gdGhpcy5fX2dldFN0eWxlcygpOyAgIC8vaCwgdlxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1sYXlvdXRcIiwgXCJ6ci1maXhlZC1sYXlvdXRcIiwgXCJkaXJlY3Rpb24tXCIgKyB0aGlzLnByb3BzLmRpcmVjdGlvbiwgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMuc3RhdGUuY2xhc3NOYW1lKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSl9PlxuXHRcdFx0XHR7IHRoaXMuX19yZW5kZXJIZWFkKF9zdHlsZXMuaGVhZGVyKSB9XG5cdFx0XHRcdHsgdGhpcy5fX3JlbmRlckJvZHkoX3N0eWxlcy5ib2R5KSB9XG5cdFx0XHRcdHsgdGhpcy5fX3JlbmRlckZvb3QoX3N0eWxlcy5mb290ZXIpIH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgJ0FjdGl2aXR5TGF5b3V0JzogcmVxdWlyZSgnLi9BY3Rpdml0eUxheW91dCcpLFxuICAgICdGaXhlZExheW91dCc6IHJlcXVpcmUoJy4vRml4ZWRMYXlvdXQnKVxufTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0XCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=