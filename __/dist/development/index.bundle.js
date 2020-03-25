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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQWN0aXZpdHlMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vRml4ZWRMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiUmVhY3RcIiJdLCJuYW1lcyI6WyJSZWFjdCIsInpudWkiLCJyZXF1aXJlIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUNsYXNzIiwiZGlzcGxheU5hbWUiLCJnZXREZWZhdWx0UHJvcHMiLCJiZWdpbiIsImVuZCIsImJhcldpZHRoIiwiaFN0eWxlIiwiYlN0eWxlIiwiZlN0eWxlIiwiZGlyZWN0aW9uIiwidW5pdCIsImdldEluaXRpYWxTdGF0ZSIsImNsYXNzTmFtZSIsInN0eWxlIiwiY29tcG9uZW50RGlkTW91bnQiLCJfc291cmNlIiwiX2JhciIsIl92ZWN0b3IiLCJwcm9wcyIsInNwbGl0IiwiX3N0YXJ0Iiwiem4iLCJkcmFnZ2FibGUiLCJjcmVhdGUiLCJ2ZWN0b3IiLCJzdGFydCIsIm1pblgiLCJtYXhYIiwibWluWSIsIm1heFkiLCJ4SGFuZGxlciIsInlIYW5kbGVyIiwib25EcmFnU3RhcnQiLCJfX29uTm9kZURyYWdTdGFydCIsIm9uRHJhZyIsIl9fb25Ob2RlRHJhZyIsIm9uRHJhZ0VuZCIsIl9fb25Ob2RlRHJhZ0VuZCIsImRvbSIsIm9uIiwiX19vbk1vdXNlT3ZlciIsIl9fb25Nb3VzZU91dCIsImV2ZW50IiwiZGF0YSIsInNldFN0YXRlIiwid2lkdGgiLCJjdXJyWCIsInRvcCIsImxlZnQiLCJoZWlnaHQiLCJtb3VzZVkiLCJfX2dldFN0eWxlcyIsIl91bml0IiwiX2JlZ2luIiwiX2VuZCIsIl9oZWFkZXIiLCJfYm9keSIsIl9mb290ZXIiLCJyaWdodCIsImJvdHRvbSIsImhlYWRlciIsImV4dGVuZCIsImJvZHkiLCJmb290ZXIiLCJfX2JvZHlSZW5kZXIiLCJfcmVuZGVyIiwiYm9keVJlbmRlciIsIl9fcmVuZGVySGVhZCIsIl9lbGVtZW50IiwicmVhY3QiLCJjcmVhdGVSZWFjdEVsZW1lbnQiLCJoZWFkUmVuZGVyIiwibGF5b3V0Iiwic3RhdGUiLCJoZWFkIiwiX19yZW5kZXJCb2R5IiwiX19yZW5kZXJGb290IiwiZm9vdFJlbmRlciIsImZvb3QiLCJyZW5kZXIiLCJfc3R5bGVzIiwiY2xhc3NuYW1lIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsSUFBSUEsS0FBSyxHQUFHQyxJQUFJLENBQUNELEtBQUwsSUFBY0UsbUJBQU8sQ0FBQyxvQkFBRCxDQUFqQzs7QUFFQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSixLQUFLLENBQUNLLFdBQU4sQ0FBa0I7QUFDbENDLGFBQVcsRUFBQyxnQkFEc0I7QUFFbENDLGlCQUFlLEVBQUUsMkJBQVc7QUFDM0IsV0FBTztBQUNOQyxXQUFLLEVBQUUsQ0FERDtBQUVOQyxTQUFHLEVBQUUsQ0FGQztBQUdOQyxjQUFRLEVBQUUsQ0FISjtBQUlOQyxZQUFNLEVBQUUsRUFKRjtBQUtOQyxZQUFNLEVBQUUsRUFMRjtBQU1OQyxZQUFNLEVBQUUsRUFORjtBQU9OQyxlQUFTLEVBQUUsWUFQTDtBQVFOQyxVQUFJLEVBQUU7QUFSQSxLQUFQO0FBVUEsR0FiaUM7QUFjbENDLGlCQUFlLEVBQUUsMkJBQVc7QUFDM0IsV0FBTztBQUNOQyxlQUFTLEVBQUUsRUFETDtBQUVOQyxXQUFLLEVBQUUsRUFGRDtBQUdOUCxZQUFNLEVBQUUsRUFIRjtBQUlOQyxZQUFNLEVBQUUsRUFKRjtBQUtOQyxZQUFNLEVBQUU7QUFMRixLQUFQO0FBT0EsR0F0QmlDO0FBdUJsQ00sbUJBQWlCLEVBQUUsNkJBQVc7QUFDN0IsUUFBSUMsT0FBTyxHQUFHLEtBQUtDLElBQW5COztBQUNBLFFBQUdELE9BQUgsRUFBWTtBQUNYLFVBQUlFLE9BQU8sR0FBRyxLQUFLQyxLQUFMLENBQVdULFNBQVgsQ0FBcUJVLEtBQXJCLENBQTJCLEdBQTNCLENBQWQ7QUFBQSxVQUNDQyxNQUFNLEdBQUcsQ0FBQyxLQUFLRixLQUFMLENBQVdmLEtBQVosRUFBbUIsQ0FBbkIsQ0FEVjs7QUFFQSxVQUFHLEtBQUtlLEtBQUwsQ0FBV1QsU0FBWCxJQUF3QixZQUEzQixFQUF3QztBQUN2Q1EsZUFBTyxHQUFHLENBQUMsUUFBRCxFQUFXLEtBQVgsQ0FBVjtBQUNBRyxjQUFNLEdBQUcsQ0FBQyxLQUFLRixLQUFMLENBQVdmLEtBQVosRUFBbUIsS0FBS2UsS0FBTCxDQUFXZixLQUE5QixDQUFUO0FBQ0E7O0FBQ0RrQixRQUFFLENBQUNDLFNBQUgsQ0FBYUMsTUFBYixDQUFvQlIsT0FBcEIsRUFBNkI7QUFDNUJTLGNBQU0sRUFBRVAsT0FEb0I7QUFFNUJRLGFBQUssRUFBRUwsTUFGcUI7QUFHNUJNLFlBQUksRUFBRSxLQUFLUixLQUFMLENBQVdRLElBSFc7QUFJNUJDLFlBQUksRUFBRSxLQUFLVCxLQUFMLENBQVdTLElBSlc7QUFLNUJDLFlBQUksRUFBRSxLQUFLVixLQUFMLENBQVdVLElBTFc7QUFNNUJDLFlBQUksRUFBRSxLQUFLWCxLQUFMLENBQVdXLElBTlc7QUFPNUJDLGdCQUFRLEVBQUUsS0FBS1osS0FBTCxDQUFXWSxRQVBPO0FBUTVCQyxnQkFBUSxFQUFFLEtBQUtiLEtBQUwsQ0FBV2EsUUFSTztBQVM1QkMsbUJBQVcsRUFBRSxLQUFLQyxpQkFUVTtBQVU1QkMsY0FBTSxFQUFFLEtBQUtDLFlBVmU7QUFXNUJDLGlCQUFTLEVBQUUsS0FBS0M7QUFYWSxPQUE3QjtBQWFBaEIsUUFBRSxDQUFDaUIsR0FBSCxDQUFPQyxFQUFQLENBQVV4QixPQUFWLEVBQW1CLFdBQW5CLEVBQWdDLEtBQUt5QixhQUFyQztBQUNBbkIsUUFBRSxDQUFDaUIsR0FBSCxDQUFPQyxFQUFQLENBQVV4QixPQUFWLEVBQW1CLFVBQW5CLEVBQStCLEtBQUswQixZQUFwQztBQUNBO0FBRUQsR0FqRGlDO0FBa0RsQ0QsZUFBYSxFQUFFLHlCQUFXLENBRXpCLENBcERpQztBQXFEbENDLGNBQVksRUFBRSx3QkFBVyxDQUV4QixDQXZEaUM7QUF3RGxDUixtQkFBaUIsRUFBRSwyQkFBVVMsS0FBVixFQUFpQkMsSUFBakIsRUFBc0IsQ0FFeEMsQ0ExRGlDO0FBMkRsQ1IsY0FBWSxFQUFFLHNCQUFVTyxLQUFWLEVBQWlCQyxJQUFqQixFQUFzQjtBQUNuQyxRQUFHLEtBQUt6QixLQUFMLENBQVdULFNBQVgsSUFBd0IsWUFBM0IsRUFBeUM7QUFDeEMsV0FBS21DLFFBQUwsQ0FBYztBQUNidEMsY0FBTSxFQUFFO0FBQ1B1QyxlQUFLLEVBQUVGLElBQUksQ0FBQ0c7QUFETCxTQURLO0FBSWJ2QyxjQUFNLEVBQUU7QUFDUHdDLGFBQUcsRUFBRTtBQURFLFNBSks7QUFPYnZDLGNBQU0sRUFBRTtBQUNQd0MsY0FBSSxFQUFFTCxJQUFJLENBQUNHLEtBQUwsR0FBYSxLQUFLNUIsS0FBTCxDQUFXYjtBQUR2QjtBQVBLLE9BQWQ7QUFXQSxLQVpELE1BWUs7QUFDSixXQUFLdUMsUUFBTCxDQUFjO0FBQ2J0QyxjQUFNLEVBQUU7QUFDUDJDLGdCQUFNLEVBQUVOLElBQUksQ0FBQ087QUFETixTQURLO0FBSWIzQyxjQUFNLEVBQUU7QUFDUHdDLGFBQUcsRUFBRUosSUFBSSxDQUFDTyxNQURIO0FBRVBGLGNBQUksRUFBRTtBQUZDLFNBSks7QUFRYnhDLGNBQU0sRUFBRTtBQUNQdUMsYUFBRyxFQUFFSixJQUFJLENBQUNPLE1BQUwsR0FBYyxLQUFLaEMsS0FBTCxDQUFXYjtBQUR2QjtBQVJLLE9BQWQ7QUFZQTtBQUNELEdBdEZpQztBQXVGbENnQyxpQkFBZSxFQUFFLHlCQUFVSyxLQUFWLEVBQWlCQyxJQUFqQixFQUFzQixDQUV0QyxDQXpGaUM7QUEwRmxDUSxhQUFXLEVBQUUsdUJBQVc7QUFDdkIsUUFBSWpDLEtBQUssR0FBRyxLQUFLQSxLQUFqQjtBQUFBLFFBQ0NrQyxLQUFLLEdBQUdsQyxLQUFLLENBQUNSLElBRGY7QUFBQSxRQUVDMkMsTUFBTSxHQUFHbkMsS0FBSyxDQUFDZixLQUZoQjtBQUFBLFFBR0NtRCxJQUFJLEdBQUdwQyxLQUFLLENBQUNkLEdBSGQ7QUFBQSxRQUlDbUQsT0FBTyxHQUFHLEVBSlg7QUFBQSxRQUtDQyxLQUFLLEdBQUcsRUFMVDtBQUFBLFFBTUNDLE9BQU8sR0FBRyxFQU5YOztBQVFBLFFBQUd2QyxLQUFLLENBQUNULFNBQU4sSUFBbUIsWUFBdEIsRUFBbUM7QUFDbEMrQyxXQUFLLENBQUNYLEtBQU4sR0FBYzNCLEtBQUssQ0FBQ2IsUUFBTixHQUFpQitDLEtBQS9COztBQUNBLFVBQUdDLE1BQUgsRUFBVTtBQUNURSxlQUFPLENBQUNWLEtBQVIsR0FBZ0JRLE1BQU0sR0FBR0QsS0FBekI7QUFDQUksYUFBSyxDQUFDUixJQUFOLEdBQWFLLE1BQU0sR0FBR0QsS0FBdEI7QUFDQUssZUFBTyxDQUFDVCxJQUFSLEdBQWdCSyxNQUFNLEdBQUduQyxLQUFLLENBQUNiLFFBQWhCLEdBQTRCK0MsS0FBM0M7QUFDQTs7QUFDRCxVQUFHRSxJQUFILEVBQVE7QUFDUEMsZUFBTyxDQUFDRyxLQUFSLEdBQWlCSixJQUFJLEdBQUdwQyxLQUFLLENBQUNiLFFBQWQsR0FBMEIrQyxLQUExQztBQUNBSSxhQUFLLENBQUNFLEtBQU4sR0FBY0osSUFBSSxHQUFHRixLQUFyQjtBQUNBSyxlQUFPLENBQUNaLEtBQVIsR0FBZ0JTLElBQUksR0FBR0YsS0FBdkI7QUFDQTtBQUNELEtBWkQsTUFZTztBQUNOSSxXQUFLLENBQUNQLE1BQU4sR0FBZS9CLEtBQUssQ0FBQ2IsUUFBTixHQUFpQitDLEtBQWhDOztBQUNBLFVBQUdDLE1BQUgsRUFBVTtBQUNURSxlQUFPLENBQUNOLE1BQVIsR0FBaUJJLE1BQU0sR0FBR0QsS0FBMUI7QUFDQUksYUFBSyxDQUFDVCxHQUFOLEdBQVlNLE1BQU0sR0FBR0QsS0FBckI7QUFDQUssZUFBTyxDQUFDVixHQUFSLEdBQWVNLE1BQU0sR0FBR25DLEtBQUssQ0FBQ2IsUUFBaEIsR0FBNEIrQyxLQUExQztBQUNBOztBQUNELFVBQUdFLElBQUgsRUFBUTtBQUNQQyxlQUFPLENBQUNJLE1BQVIsR0FBa0JMLElBQUksR0FBR3BDLEtBQUssQ0FBQ2IsUUFBZCxHQUEwQitDLEtBQTNDO0FBQ0FJLGFBQUssQ0FBQ0csTUFBTixHQUFlTCxJQUFJLEdBQUdGLEtBQXRCO0FBQ0FLLGVBQU8sQ0FBQ1IsTUFBUixHQUFpQkssSUFBSSxHQUFHRixLQUF4QjtBQUNBO0FBQ0Q7O0FBRUQsV0FBTztBQUNOUSxZQUFNLEVBQUV2QyxFQUFFLENBQUN3QyxNQUFILENBQVVOLE9BQVYsRUFBbUJyQyxLQUFLLENBQUNaLE1BQXpCLENBREY7QUFFTndELFVBQUksRUFBRXpDLEVBQUUsQ0FBQ3dDLE1BQUgsQ0FBVUwsS0FBVixFQUFpQnRDLEtBQUssQ0FBQ1gsTUFBdkIsQ0FGQTtBQUdOd0QsWUFBTSxFQUFFMUMsRUFBRSxDQUFDd0MsTUFBSCxDQUFVSixPQUFWLEVBQW1CdkMsS0FBSyxDQUFDVixNQUF6QjtBQUhGLEtBQVA7QUFLQSxHQWxJaUM7QUFtSWxDd0QsY0FBWSxFQUFFLHdCQUFXO0FBQ3hCLFFBQUlDLE9BQU8sR0FBRyxLQUFLL0MsS0FBTCxDQUFXZ0QsVUFBWCxJQUF5QixLQUFLaEQsS0FBTCxDQUFXZ0QsVUFBWCxDQUFzQixJQUF0QixDQUF2Qzs7QUFDQSxRQUFHRCxPQUFILEVBQVc7QUFDVixhQUFPQSxPQUFQO0FBQ0EsS0FGRCxNQUVPO0FBQ04sMEJBQU87QUFBSyxpQkFBUyxFQUFDO0FBQWYsUUFBUDtBQUNBO0FBQ0QsR0ExSWlDO0FBMklsQ0UsY0FBWSxFQUFFLHNCQUFVdEQsS0FBVixFQUFnQjtBQUM3QixRQUFJdUQsUUFBUSxHQUFHeEUsSUFBSSxDQUFDeUUsS0FBTCxDQUFXQyxrQkFBWCxDQUE4QixLQUFLcEQsS0FBTCxDQUFXcUQsVUFBekMsRUFBcUQ7QUFDbkUxRCxXQUFLLEVBQUVBLEtBRDREO0FBRW5FMkQsWUFBTSxFQUFFO0FBRjJELEtBQXJELENBQWY7O0FBSUEsUUFBR0osUUFBSCxFQUFZO0FBQ1gsYUFBT0EsUUFBUDtBQUNBOztBQUNELHdCQUNDO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBK0IsV0FBSyxFQUFFeEUsSUFBSSxDQUFDeUUsS0FBTCxDQUFXeEQsS0FBWCxDQUFpQkEsS0FBakIsRUFBd0IsS0FBSzRELEtBQUwsQ0FBV25FLE1BQW5DO0FBQXRDLE9BQ0VWLElBQUksQ0FBQ3lFLEtBQUwsQ0FBV0Msa0JBQVgsQ0FBOEIsS0FBS3BELEtBQUwsQ0FBV3dELElBQXpDLEVBQStDO0FBQUU3RCxXQUFLLEVBQUVBLEtBQVQ7QUFBZ0IyRCxZQUFNLEVBQUU7QUFBeEIsS0FBL0MsQ0FERixDQUREO0FBS0EsR0F4SmlDO0FBeUpsQ0csY0FBWSxFQUFFLHNCQUFVOUQsS0FBVixFQUFnQjtBQUFBOztBQUM3QixRQUFHLEtBQUtLLEtBQUwsQ0FBV2IsUUFBZCxFQUF3QjtBQUN2QiwwQkFBTztBQUFLLFdBQUcsRUFBRSxhQUFDaUMsR0FBRDtBQUFBLGlCQUFPLEtBQUksQ0FBQ3RCLElBQUwsR0FBWXNCLEdBQW5CO0FBQUEsU0FBVjtBQUFrQyxpQkFBUyxFQUFDLGFBQTVDO0FBQTBELGFBQUssRUFBRTFDLElBQUksQ0FBQ3lFLEtBQUwsQ0FBV3hELEtBQVgsQ0FBaUJBLEtBQWpCLEVBQXdCLEtBQUs0RCxLQUFMLENBQVdsRSxNQUFuQztBQUFqRSxTQUE4RyxLQUFLeUQsWUFBTCxFQUE5RyxDQUFQO0FBQ0E7QUFDRCxHQTdKaUM7QUE4SmxDWSxjQUFZLEVBQUUsc0JBQVUvRCxLQUFWLEVBQWdCO0FBQzdCLFFBQUl1RCxRQUFRLEdBQUd4RSxJQUFJLENBQUN5RSxLQUFMLENBQVdDLGtCQUFYLENBQThCLEtBQUtwRCxLQUFMLENBQVcyRCxVQUF6QyxFQUFxRDtBQUNuRWhFLFdBQUssRUFBRUEsS0FENEQ7QUFFbkUyRCxZQUFNLEVBQUU7QUFGMkQsS0FBckQsQ0FBZjs7QUFJQSxRQUFHSixRQUFILEVBQVk7QUFDWCxhQUFPQSxRQUFQO0FBQ0E7O0FBQ0Qsd0JBQ0M7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUErQixXQUFLLEVBQUV4RSxJQUFJLENBQUN5RSxLQUFMLENBQVd4RCxLQUFYLENBQWlCQSxLQUFqQixFQUF3QixLQUFLNEQsS0FBTCxDQUFXakUsTUFBbkM7QUFBdEMsT0FDRVosSUFBSSxDQUFDeUUsS0FBTCxDQUFXQyxrQkFBWCxDQUE4QixLQUFLcEQsS0FBTCxDQUFXNEQsSUFBekMsRUFBK0M7QUFBRWpFLFdBQUssRUFBRUEsS0FBVDtBQUFnQjJELFlBQU0sRUFBRTtBQUF4QixLQUEvQyxDQURGLENBREQ7QUFLQSxHQTNLaUM7QUE0S2xDTyxRQUFNLEVBQUUsa0JBQVU7QUFDakIsUUFBSUMsT0FBTyxHQUFHLEtBQUs3QixXQUFMLEVBQWQ7O0FBQ0Esd0JBQ0M7QUFBSyxlQUFTLEVBQUV2RCxJQUFJLENBQUN5RSxLQUFMLENBQVdZLFNBQVgsQ0FBcUIsV0FBckIsRUFBa0Msb0JBQWxDLEVBQXdELGVBQWUsS0FBSy9ELEtBQUwsQ0FBV1QsU0FBbEYsRUFBNkYsS0FBS1MsS0FBTCxDQUFXTixTQUF4RyxFQUFtSCxLQUFLNkQsS0FBTCxDQUFXN0QsU0FBOUgsQ0FBaEI7QUFDQyxXQUFLLEVBQUVoQixJQUFJLENBQUN5RSxLQUFMLENBQVd4RCxLQUFYLENBQWlCLEtBQUtLLEtBQUwsQ0FBV0wsS0FBNUIsRUFBbUMsS0FBSzRELEtBQUwsQ0FBVzVELEtBQTlDO0FBRFIsT0FFRyxLQUFLc0QsWUFBTCxDQUFrQmEsT0FBTyxDQUFDcEIsTUFBMUIsQ0FGSCxFQUdHLEtBQUtlLFlBQUwsQ0FBa0JLLE9BQU8sQ0FBQ2xCLElBQTFCLENBSEgsRUFJRyxLQUFLYyxZQUFMLENBQWtCSSxPQUFPLENBQUNqQixNQUExQixDQUpILENBREQ7QUFRQTtBQXRMaUMsQ0FBbEIsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNGQSxJQUFJcEUsS0FBSyxHQUFHQyxJQUFJLENBQUNELEtBQUwsSUFBY0UsbUJBQU8sQ0FBQyxvQkFBRCxDQUFqQzs7QUFFQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCSixLQUFLLENBQUNLLFdBQU4sQ0FBa0I7QUFDbENDLGFBQVcsRUFBQyxhQURzQjtBQUVsQ0MsaUJBQWUsRUFBRSwyQkFBVztBQUMzQixXQUFPO0FBQ05DLFdBQUssRUFBRSxDQUREO0FBRU5DLFNBQUcsRUFBRSxDQUZDO0FBR05FLFlBQU0sRUFBRSxFQUhGO0FBSU5DLFlBQU0sRUFBRSxFQUpGO0FBS05DLFlBQU0sRUFBRSxFQUxGO0FBTU5DLGVBQVMsRUFBRSxZQU5MO0FBT05DLFVBQUksRUFBRTtBQVBBLEtBQVA7QUFTQSxHQVppQztBQWFsQ0MsaUJBQWUsRUFBRSwyQkFBVztBQUMzQixXQUFPO0FBQ05DLGVBQVMsRUFBRSxFQURMO0FBRU5DLFdBQUssRUFBRSxFQUZEO0FBR05QLFlBQU0sRUFBRSxFQUhGO0FBSU5DLFlBQU0sRUFBRSxFQUpGO0FBS05DLFlBQU0sRUFBRTtBQUxGLEtBQVA7QUFPQSxHQXJCaUM7QUFzQmxDMkMsYUFBVyxFQUFFLHVCQUFXO0FBQ3ZCLFFBQUlqQyxLQUFLLEdBQUcsS0FBS0EsS0FBakI7QUFBQSxRQUNDa0MsS0FBSyxHQUFHbEMsS0FBSyxDQUFDUixJQURmO0FBQUEsUUFFQzJDLE1BQU0sR0FBR25DLEtBQUssQ0FBQ2YsS0FGaEI7QUFBQSxRQUdDbUQsSUFBSSxHQUFHcEMsS0FBSyxDQUFDZCxHQUhkO0FBQUEsUUFJQ21ELE9BQU8sR0FBRyxFQUpYO0FBQUEsUUFLQ0MsS0FBSyxHQUFHLEVBTFQ7QUFBQSxRQU1DQyxPQUFPLEdBQUcsRUFOWDs7QUFRQSxRQUFHdkMsS0FBSyxDQUFDVCxTQUFOLElBQW1CLFlBQXRCLEVBQW1DO0FBQ2xDOEMsYUFBTyxHQUFHO0FBQ1ROLGNBQU0sRUFBRUksTUFBTSxHQUFHRDtBQURSLE9BQVY7QUFHQUksV0FBSyxHQUFHO0FBQ1BULFdBQUcsRUFBRU0sTUFBTSxHQUFHRCxLQURQO0FBRVBPLGNBQU0sRUFBRUwsSUFBSSxHQUFHRjtBQUZSLE9BQVI7QUFJQUssYUFBTyxHQUFHO0FBQ1RSLGNBQU0sRUFBRUssSUFBSSxHQUFHRjtBQUROLE9BQVY7QUFHQSxLQVhELE1BV087QUFDTkcsYUFBTyxHQUFHO0FBQ1RWLGFBQUssRUFBRVEsTUFBTSxHQUFHRDtBQURQLE9BQVY7QUFHQUksV0FBSyxHQUFHO0FBQ1BSLFlBQUksRUFBRUssTUFBTSxHQUFHRCxLQURSO0FBRVBNLGFBQUssRUFBRUosSUFBSSxHQUFHRjtBQUZQLE9BQVI7QUFJQUssYUFBTyxHQUFHO0FBQ1RaLGFBQUssRUFBRVMsSUFBSSxHQUFHRjtBQURMLE9BQVY7QUFHQTs7QUFFRCxXQUFPO0FBQ05RLFlBQU0sRUFBRXZDLEVBQUUsQ0FBQ3dDLE1BQUgsQ0FBVU4sT0FBVixFQUFtQnJDLEtBQUssQ0FBQ1osTUFBekIsQ0FERjtBQUVOd0QsVUFBSSxFQUFFekMsRUFBRSxDQUFDd0MsTUFBSCxDQUFVTCxLQUFWLEVBQWlCdEMsS0FBSyxDQUFDWCxNQUF2QixDQUZBO0FBR053RCxZQUFNLEVBQUUxQyxFQUFFLENBQUN3QyxNQUFILENBQVVKLE9BQVYsRUFBbUJ2QyxLQUFLLENBQUNWLE1BQXpCO0FBSEYsS0FBUDtBQUtBLEdBNURpQztBQTZEbEMyRCxjQUFZLEVBQUUsc0JBQVV0RCxLQUFWLEVBQWdCO0FBQzdCLFFBQUl1RCxRQUFRLEdBQUd4RSxJQUFJLENBQUN5RSxLQUFMLENBQVdDLGtCQUFYLENBQThCLEtBQUtwRCxLQUFMLENBQVdxRCxVQUF6QyxFQUFxRDtBQUNuRTFELFdBQUssRUFBRUEsS0FENEQ7QUFFbkUyRCxZQUFNLEVBQUU7QUFGMkQsS0FBckQsQ0FBZjs7QUFJQSxRQUFHSixRQUFILEVBQVk7QUFDWCxhQUFPQSxRQUFQO0FBQ0E7O0FBQ0Qsd0JBQ0M7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUErQixXQUFLLEVBQUV4RSxJQUFJLENBQUN5RSxLQUFMLENBQVd4RCxLQUFYLENBQWlCQSxLQUFqQixFQUF3QixLQUFLNEQsS0FBTCxDQUFXbkUsTUFBbkM7QUFBdEMsT0FDRVYsSUFBSSxDQUFDeUUsS0FBTCxDQUFXQyxrQkFBWCxDQUE4QixLQUFLcEQsS0FBTCxDQUFXd0QsSUFBekMsRUFBK0M7QUFBRTdELFdBQUssRUFBRUEsS0FBVDtBQUFnQjJELFlBQU0sRUFBRTtBQUF4QixLQUEvQyxDQURGLENBREQ7QUFLQSxHQTFFaUM7QUEyRWxDRyxjQUFZLEVBQUUsc0JBQVU5RCxLQUFWLEVBQWdCO0FBQzdCLFFBQUl1RCxRQUFRLEdBQUd4RSxJQUFJLENBQUN5RSxLQUFMLENBQVdDLGtCQUFYLENBQThCLEtBQUtwRCxLQUFMLENBQVdnRCxVQUF6QyxFQUFxRDtBQUNuRXJELFdBQUssRUFBRUEsS0FENEQ7QUFFbkUyRCxZQUFNLEVBQUU7QUFGMkQsS0FBckQsQ0FBZjs7QUFJQSxRQUFHSixRQUFILEVBQVk7QUFDWCxhQUFPQSxRQUFQO0FBQ0E7O0FBQ0Qsd0JBQ0M7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUE2QixXQUFLLEVBQUV4RSxJQUFJLENBQUN5RSxLQUFMLENBQVd4RCxLQUFYLENBQWlCQSxLQUFqQixFQUF3QixLQUFLNEQsS0FBTCxDQUFXbEUsTUFBbkM7QUFBcEMsT0FDRVgsSUFBSSxDQUFDeUUsS0FBTCxDQUFXQyxrQkFBWCxDQUE4QixLQUFLcEQsS0FBTCxDQUFXNEMsSUFBekMsRUFBK0M7QUFBRWpELFdBQUssRUFBRUEsS0FBVDtBQUFnQjJELFlBQU0sRUFBRTtBQUF4QixLQUEvQyxDQURGLENBREQ7QUFLQSxHQXhGaUM7QUF5RmxDSSxjQUFZLEVBQUUsc0JBQVUvRCxLQUFWLEVBQWdCO0FBQzdCLFFBQUl1RCxRQUFRLEdBQUd4RSxJQUFJLENBQUN5RSxLQUFMLENBQVdDLGtCQUFYLENBQThCLEtBQUtwRCxLQUFMLENBQVcyRCxVQUF6QyxFQUFxRDtBQUNuRWhFLFdBQUssRUFBRUEsS0FENEQ7QUFFbkUyRCxZQUFNLEVBQUU7QUFGMkQsS0FBckQsQ0FBZjs7QUFJQSxRQUFHSixRQUFILEVBQVk7QUFDWCxhQUFPQSxRQUFQO0FBQ0E7O0FBQ0Qsd0JBQ0M7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUErQixXQUFLLEVBQUV4RSxJQUFJLENBQUN5RSxLQUFMLENBQVd4RCxLQUFYLENBQWlCQSxLQUFqQixFQUF3QixLQUFLNEQsS0FBTCxDQUFXakUsTUFBbkM7QUFBdEMsT0FDRVosSUFBSSxDQUFDeUUsS0FBTCxDQUFXQyxrQkFBWCxDQUE4QixLQUFLcEQsS0FBTCxDQUFXNEQsSUFBekMsRUFBK0M7QUFBRWpFLFdBQUssRUFBRUEsS0FBVDtBQUFnQjJELFlBQU0sRUFBRTtBQUF4QixLQUEvQyxDQURGLENBREQ7QUFLQSxHQXRHaUM7QUF1R2xDTyxRQUFNLEVBQUUsa0JBQVU7QUFDakIsUUFBSUMsT0FBTyxHQUFHLEtBQUs3QixXQUFMLEVBQWQsQ0FEaUIsQ0FDbUI7OztBQUNwQyx3QkFDQztBQUFLLGVBQVMsRUFBRXZELElBQUksQ0FBQ3lFLEtBQUwsQ0FBV1ksU0FBWCxDQUFxQixXQUFyQixFQUFrQyxpQkFBbEMsRUFBcUQsZUFBZSxLQUFLL0QsS0FBTCxDQUFXVCxTQUEvRSxFQUEwRixLQUFLUyxLQUFMLENBQVdOLFNBQXJHLEVBQWdILEtBQUs2RCxLQUFMLENBQVc3RCxTQUEzSCxDQUFoQjtBQUF1SixXQUFLLEVBQUVoQixJQUFJLENBQUN5RSxLQUFMLENBQVd4RCxLQUFYLENBQWlCLEtBQUtLLEtBQUwsQ0FBV0wsS0FBNUIsRUFBbUMsS0FBSzRELEtBQUwsQ0FBVzVELEtBQTlDO0FBQTlKLE9BQ0csS0FBS3NELFlBQUwsQ0FBa0JhLE9BQU8sQ0FBQ3BCLE1BQTFCLENBREgsRUFFRyxLQUFLZSxZQUFMLENBQWtCSyxPQUFPLENBQUNsQixJQUExQixDQUZILEVBR0csS0FBS2MsWUFBTCxDQUFrQkksT0FBTyxDQUFDakIsTUFBMUIsQ0FISCxDQUREO0FBT0E7QUFoSGlDLENBQWxCLENBQWpCLEM7Ozs7Ozs7Ozs7O0FDRkFqRSxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDYixvQkFBa0JGLG1CQUFPLENBQUMsNkNBQUQsQ0FEWjtBQUViLGlCQUFlQSxtQkFBTyxDQUFDLHVDQUFEO0FBRlQsQ0FBakIsQzs7Ozs7Ozs7Ozs7QUNBQSxhQUFhLGdDQUFnQyxFQUFFLEkiLCJmaWxlIjoiLi9kaXN0L2RldmVsb3BtZW50L2luZGV4LmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJ2YXIgUmVhY3QgPSB6bnVpLlJlYWN0IHx8IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXHRkaXNwbGF5TmFtZTonQWN0aXZpdHlMYXlvdXQnLFxuXHRnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRiZWdpbjogMCxcblx0XHRcdGVuZDogMCxcblx0XHRcdGJhcldpZHRoOiAzLFxuXHRcdFx0aFN0eWxlOiB7fSxcblx0XHRcdGJTdHlsZToge30sXG5cdFx0XHRmU3R5bGU6IHt9LFxuXHRcdFx0ZGlyZWN0aW9uOiAnbGVmdC1yaWdodCcsXG5cdFx0XHR1bml0OiAncHgnXG5cdFx0fTtcblx0fSxcblx0Z2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y2xhc3NOYW1lOiAnJyxcblx0XHRcdHN0eWxlOiB7fSxcblx0XHRcdGhTdHlsZToge30sXG5cdFx0XHRiU3R5bGU6IHt9LFxuXHRcdFx0ZlN0eWxlOiB7fVxuXHRcdH07XG5cdH0sXG5cdGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbiAoKXtcblx0XHR2YXIgX3NvdXJjZSA9IHRoaXMuX2Jhcjtcblx0XHRpZihfc291cmNlKSB7XG5cdFx0XHR2YXIgX3ZlY3RvciA9IHRoaXMucHJvcHMuZGlyZWN0aW9uLnNwbGl0KCctJyksXG5cdFx0XHRcdF9zdGFydCA9IFt0aGlzLnByb3BzLmJlZ2luLCAwXTtcblx0XHRcdGlmKHRoaXMucHJvcHMuZGlyZWN0aW9uID09ICd0b3AtYm90dG9tJyl7XG5cdFx0XHRcdF92ZWN0b3IgPSBbJ2JvdHRvbScsICd0b3AnXTtcblx0XHRcdFx0X3N0YXJ0ID0gW3RoaXMucHJvcHMuYmVnaW4sIHRoaXMucHJvcHMuYmVnaW5dO1xuXHRcdFx0fVxuXHRcdFx0em4uZHJhZ2dhYmxlLmNyZWF0ZShfc291cmNlLCB7XG5cdFx0XHRcdHZlY3RvcjogX3ZlY3Rvcixcblx0XHRcdFx0c3RhcnQ6IF9zdGFydCxcblx0XHRcdFx0bWluWDogdGhpcy5wcm9wcy5taW5YLFxuXHRcdFx0XHRtYXhYOiB0aGlzLnByb3BzLm1heFgsXG5cdFx0XHRcdG1pblk6IHRoaXMucHJvcHMubWluWSxcblx0XHRcdFx0bWF4WTogdGhpcy5wcm9wcy5tYXhZLFxuXHRcdFx0XHR4SGFuZGxlcjogdGhpcy5wcm9wcy54SGFuZGxlcixcblx0XHRcdFx0eUhhbmRsZXI6IHRoaXMucHJvcHMueUhhbmRsZXIsXG5cdFx0XHRcdG9uRHJhZ1N0YXJ0OiB0aGlzLl9fb25Ob2RlRHJhZ1N0YXJ0LFxuXHRcdFx0XHRvbkRyYWc6IHRoaXMuX19vbk5vZGVEcmFnLFxuXHRcdFx0XHRvbkRyYWdFbmQ6IHRoaXMuX19vbk5vZGVEcmFnRW5kXG5cdFx0XHR9KTtcblx0XHRcdHpuLmRvbS5vbihfc291cmNlLCAnbW91c2VvdmVyJywgdGhpcy5fX29uTW91c2VPdmVyKTtcblx0XHRcdHpuLmRvbS5vbihfc291cmNlLCAnbW91c2VvdXQnLCB0aGlzLl9fb25Nb3VzZU91dCk7XG5cdFx0fVxuXHRcdFxuXHR9LFxuXHRfX29uTW91c2VPdmVyOiBmdW5jdGlvbiAoKXtcblxuXHR9LFxuXHRfX29uTW91c2VPdXQ6IGZ1bmN0aW9uICgpe1xuXG5cdH0sXG5cdF9fb25Ob2RlRHJhZ1N0YXJ0OiBmdW5jdGlvbiAoZXZlbnQsIGRhdGEpe1xuXHRcdFxuXHR9LFxuXHRfX29uTm9kZURyYWc6IGZ1bmN0aW9uIChldmVudCwgZGF0YSl7XG5cdFx0aWYodGhpcy5wcm9wcy5kaXJlY3Rpb24gPT0gJ2xlZnQtcmlnaHQnKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdFx0aFN0eWxlOiB7XG5cdFx0XHRcdFx0d2lkdGg6IGRhdGEuY3Vyclhcblx0XHRcdFx0fSxcblx0XHRcdFx0YlN0eWxlOiB7XG5cdFx0XHRcdFx0dG9wOiAwXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGZTdHlsZToge1xuXHRcdFx0XHRcdGxlZnQ6IGRhdGEuY3VyclggKyB0aGlzLnByb3BzLmJhcldpZHRoXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1lbHNle1xuXHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRcdGhTdHlsZToge1xuXHRcdFx0XHRcdGhlaWdodDogZGF0YS5tb3VzZVlcblx0XHRcdFx0fSxcblx0XHRcdFx0YlN0eWxlOiB7XG5cdFx0XHRcdFx0dG9wOiBkYXRhLm1vdXNlWSxcblx0XHRcdFx0XHRsZWZ0OiAwXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGZTdHlsZToge1xuXHRcdFx0XHRcdHRvcDogZGF0YS5tb3VzZVkgKyB0aGlzLnByb3BzLmJhcldpZHRoXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fSxcblx0X19vbk5vZGVEcmFnRW5kOiBmdW5jdGlvbiAoZXZlbnQsIGRhdGEpe1xuXHRcdFxuXHR9LFxuXHRfX2dldFN0eWxlczogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIHByb3BzID0gdGhpcy5wcm9wcyxcblx0XHRcdF91bml0ID0gcHJvcHMudW5pdCxcblx0XHRcdF9iZWdpbiA9IHByb3BzLmJlZ2luLFxuXHRcdFx0X2VuZCA9IHByb3BzLmVuZCxcblx0XHRcdF9oZWFkZXIgPSB7fSxcblx0XHRcdF9ib2R5ID0ge30sXG5cdFx0XHRfZm9vdGVyID0ge307XG5cblx0XHRpZihwcm9wcy5kaXJlY3Rpb24gPT0gJ2xlZnQtcmlnaHQnKXtcblx0XHRcdF9ib2R5LndpZHRoID0gcHJvcHMuYmFyV2lkdGggKyBfdW5pdDtcblx0XHRcdGlmKF9iZWdpbil7XG5cdFx0XHRcdF9oZWFkZXIud2lkdGggPSBfYmVnaW4gKyBfdW5pdDtcblx0XHRcdFx0X2JvZHkubGVmdCA9IF9iZWdpbiArIF91bml0O1xuXHRcdFx0XHRfZm9vdGVyLmxlZnQgPSAoX2JlZ2luICsgcHJvcHMuYmFyV2lkdGgpICsgX3VuaXQ7XG5cdFx0XHR9XG5cdFx0XHRpZihfZW5kKXtcblx0XHRcdFx0X2hlYWRlci5yaWdodCA9IChfZW5kICsgcHJvcHMuYmFyV2lkdGgpICsgX3VuaXQ7XG5cdFx0XHRcdF9ib2R5LnJpZ2h0ID0gX2VuZCArIF91bml0O1xuXHRcdFx0XHRfZm9vdGVyLndpZHRoID0gX2VuZCArIF91bml0O1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRfYm9keS5oZWlnaHQgPSBwcm9wcy5iYXJXaWR0aCArIF91bml0O1xuXHRcdFx0aWYoX2JlZ2luKXtcblx0XHRcdFx0X2hlYWRlci5oZWlnaHQgPSBfYmVnaW4gKyBfdW5pdDtcblx0XHRcdFx0X2JvZHkudG9wID0gX2JlZ2luICsgX3VuaXQ7XG5cdFx0XHRcdF9mb290ZXIudG9wID0gKF9iZWdpbiArIHByb3BzLmJhcldpZHRoKSArIF91bml0O1xuXHRcdFx0fVxuXHRcdFx0aWYoX2VuZCl7XG5cdFx0XHRcdF9oZWFkZXIuYm90dG9tID0gKF9lbmQgKyBwcm9wcy5iYXJXaWR0aCkgKyBfdW5pdDtcblx0XHRcdFx0X2JvZHkuYm90dG9tID0gX2VuZCArIF91bml0O1xuXHRcdFx0XHRfZm9vdGVyLmhlaWdodCA9IF9lbmQgKyBfdW5pdDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0aGVhZGVyOiB6bi5leHRlbmQoX2hlYWRlciwgcHJvcHMuaFN0eWxlKSxcblx0XHRcdGJvZHk6IHpuLmV4dGVuZChfYm9keSwgcHJvcHMuYlN0eWxlKSxcblx0XHRcdGZvb3Rlcjogem4uZXh0ZW5kKF9mb290ZXIsIHByb3BzLmZTdHlsZSlcblx0XHR9XG5cdH0sXG5cdF9fYm9keVJlbmRlcjogZnVuY3Rpb24gKCl7XG5cdFx0dmFyIF9yZW5kZXIgPSB0aGlzLnByb3BzLmJvZHlSZW5kZXIgJiYgdGhpcy5wcm9wcy5ib2R5UmVuZGVyKHRoaXMpO1xuXHRcdGlmKF9yZW5kZXIpe1xuXHRcdFx0cmV0dXJuIF9yZW5kZXI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImFjdGl2aXR5LWJhclwiPjwvZGl2Pjtcblx0XHR9XG5cdH0sXG5cdF9fcmVuZGVySGVhZDogZnVuY3Rpb24gKHN0eWxlKXtcblx0XHR2YXIgX2VsZW1lbnQgPSB6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmhlYWRSZW5kZXIsIHtcblx0XHRcdHN0eWxlOiBzdHlsZSxcblx0XHRcdGxheW91dDogdGhpc1xuXHRcdH0pO1xuXHRcdGlmKF9lbGVtZW50KXtcblx0XHRcdHJldHVybiBfZWxlbWVudDtcblx0XHR9XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibGF5b3V0LWhlYWRlclwiIHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHN0eWxlLCB0aGlzLnN0YXRlLmhTdHlsZSl9PlxuXHRcdFx0XHR7em51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5oZWFkLCB7IHN0eWxlOiBzdHlsZSwgbGF5b3V0OiB0aGlzfSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH0sXG5cdF9fcmVuZGVyQm9keTogZnVuY3Rpb24gKHN0eWxlKXtcblx0XHRpZih0aGlzLnByb3BzLmJhcldpZHRoKSB7XG5cdFx0XHRyZXR1cm4gPGRpdiByZWY9eyhkb20pPT50aGlzLl9iYXIgPSBkb219IGNsYXNzTmFtZT1cImxheW91dC1ib2R5XCIgc3R5bGU9e3pudWkucmVhY3Quc3R5bGUoc3R5bGUsIHRoaXMuc3RhdGUuYlN0eWxlKX0+e3RoaXMuX19ib2R5UmVuZGVyKCl9PC9kaXY+O1xuXHRcdH1cblx0fSxcblx0X19yZW5kZXJGb290OiBmdW5jdGlvbiAoc3R5bGUpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuZm9vdFJlbmRlciwge1xuXHRcdFx0c3R5bGU6IHN0eWxlLFxuXHRcdFx0bGF5b3V0OiB0aGlzXG5cdFx0fSk7XG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsYXlvdXQtZm9vdGVyXCIgc3R5bGU9e3pudWkucmVhY3Quc3R5bGUoc3R5bGUsIHRoaXMuc3RhdGUuZlN0eWxlKX0+XG5cdFx0XHRcdHt6bnVpLnJlYWN0LmNyZWF0ZVJlYWN0RWxlbWVudCh0aGlzLnByb3BzLmZvb3QsIHsgc3R5bGU6IHN0eWxlLCBsYXlvdXQ6IHRoaXN9KX1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG5cdHJlbmRlcjogZnVuY3Rpb24oKXtcblx0XHR2YXIgX3N0eWxlcyA9IHRoaXMuX19nZXRTdHlsZXMoKTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3pudWkucmVhY3QuY2xhc3NuYW1lKFwienItbGF5b3V0XCIsIFwienItYWN0aXZpdHktbGF5b3V0XCIsIFwiZGlyZWN0aW9uLVwiICsgdGhpcy5wcm9wcy5kaXJlY3Rpb24sIHRoaXMucHJvcHMuY2xhc3NOYW1lLCB0aGlzLnN0YXRlLmNsYXNzTmFtZSl9IFxuXHRcdFx0XHRzdHlsZT17em51aS5yZWFjdC5zdHlsZSh0aGlzLnByb3BzLnN0eWxlLCB0aGlzLnN0YXRlLnN0eWxlKX0gPlxuXHRcdFx0XHR7IHRoaXMuX19yZW5kZXJIZWFkKF9zdHlsZXMuaGVhZGVyKSB9XG5cdFx0XHRcdHsgdGhpcy5fX3JlbmRlckJvZHkoX3N0eWxlcy5ib2R5KSB9XG5cdFx0XHRcdHsgdGhpcy5fX3JlbmRlckZvb3QoX3N0eWxlcy5mb290ZXIpIH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwidmFyIFJlYWN0ID0gem51aS5SZWFjdCB8fCByZXF1aXJlKCdyZWFjdCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcblx0ZGlzcGxheU5hbWU6J0ZpeGVkTGF5b3V0Jyxcblx0Z2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbiAoKXtcblx0XHRyZXR1cm4ge1xuXHRcdFx0YmVnaW46IDAsXG5cdFx0XHRlbmQ6IDAsXG5cdFx0XHRoU3R5bGU6IHt9LFxuXHRcdFx0YlN0eWxlOiB7fSxcblx0XHRcdGZTdHlsZToge30sXG5cdFx0XHRkaXJlY3Rpb246ICd0b3AtYm90dG9tJyxcblx0XHRcdHVuaXQ6ICdweCdcblx0XHR9O1xuXHR9LFxuXHRnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRjbGFzc05hbWU6ICcnLFxuXHRcdFx0c3R5bGU6IHt9LFxuXHRcdFx0aFN0eWxlOiB7fSxcblx0XHRcdGJTdHlsZToge30sXG5cdFx0XHRmU3R5bGU6IHt9XG5cdFx0fTtcblx0fSxcblx0X19nZXRTdHlsZXM6IGZ1bmN0aW9uICgpe1xuXHRcdHZhciBwcm9wcyA9IHRoaXMucHJvcHMsXG5cdFx0XHRfdW5pdCA9IHByb3BzLnVuaXQsXG5cdFx0XHRfYmVnaW4gPSBwcm9wcy5iZWdpbixcblx0XHRcdF9lbmQgPSBwcm9wcy5lbmQsXG5cdFx0XHRfaGVhZGVyID0ge30sXG5cdFx0XHRfYm9keSA9IHt9LFxuXHRcdFx0X2Zvb3RlciA9IHt9O1xuXG5cdFx0aWYocHJvcHMuZGlyZWN0aW9uID09ICd0b3AtYm90dG9tJyl7XG5cdFx0XHRfaGVhZGVyID0ge1xuXHRcdFx0XHRoZWlnaHQ6IF9iZWdpbiArIF91bml0XG5cdFx0XHR9O1xuXHRcdFx0X2JvZHkgPSB7XG5cdFx0XHRcdHRvcDogX2JlZ2luICsgX3VuaXQsXG5cdFx0XHRcdGJvdHRvbTogX2VuZCArIF91bml0XG5cdFx0XHR9O1xuXHRcdFx0X2Zvb3RlciA9IHtcblx0XHRcdFx0aGVpZ2h0OiBfZW5kICsgX3VuaXRcblx0XHRcdH07XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9oZWFkZXIgPSB7XG5cdFx0XHRcdHdpZHRoOiBfYmVnaW4gKyBfdW5pdFxuXHRcdFx0fTtcblx0XHRcdF9ib2R5ID0ge1xuXHRcdFx0XHRsZWZ0OiBfYmVnaW4gKyBfdW5pdCxcblx0XHRcdFx0cmlnaHQ6IF9lbmQgKyBfdW5pdFxuXHRcdFx0fTtcblx0XHRcdF9mb290ZXIgPSB7XG5cdFx0XHRcdHdpZHRoOiBfZW5kICsgX3VuaXRcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGhlYWRlcjogem4uZXh0ZW5kKF9oZWFkZXIsIHByb3BzLmhTdHlsZSksXG5cdFx0XHRib2R5OiB6bi5leHRlbmQoX2JvZHksIHByb3BzLmJTdHlsZSksXG5cdFx0XHRmb290ZXI6IHpuLmV4dGVuZChfZm9vdGVyLCBwcm9wcy5mU3R5bGUpXG5cdFx0fVxuXHR9LFxuXHRfX3JlbmRlckhlYWQ6IGZ1bmN0aW9uIChzdHlsZSl7XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5oZWFkUmVuZGVyLCB7XG5cdFx0XHRzdHlsZTogc3R5bGUsXG5cdFx0XHRsYXlvdXQ6IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxheW91dC1oZWFkZXJcIiBzdHlsZT17em51aS5yZWFjdC5zdHlsZShzdHlsZSwgdGhpcy5zdGF0ZS5oU3R5bGUpfT5cblx0XHRcdFx0e3pudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuaGVhZCwgeyBzdHlsZTogc3R5bGUsIGxheW91dDogdGhpc30pfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0X19yZW5kZXJCb2R5OiBmdW5jdGlvbiAoc3R5bGUpe1xuXHRcdHZhciBfZWxlbWVudCA9IHpudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuYm9keVJlbmRlciwge1xuXHRcdFx0c3R5bGU6IHN0eWxlLFxuXHRcdFx0bGF5b3V0OiB0aGlzXG5cdFx0fSk7XG5cdFx0aWYoX2VsZW1lbnQpe1xuXHRcdFx0cmV0dXJuIF9lbGVtZW50O1xuXHRcdH1cblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJsYXlvdXQtYm9keVwiIHN0eWxlPXt6bnVpLnJlYWN0LnN0eWxlKHN0eWxlLCB0aGlzLnN0YXRlLmJTdHlsZSl9PlxuXHRcdFx0XHR7em51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5ib2R5LCB7IHN0eWxlOiBzdHlsZSwgbGF5b3V0OiB0aGlzfSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQpO1xuXHR9LFxuXHRfX3JlbmRlckZvb3Q6IGZ1bmN0aW9uIChzdHlsZSl7XG5cdFx0dmFyIF9lbGVtZW50ID0gem51aS5yZWFjdC5jcmVhdGVSZWFjdEVsZW1lbnQodGhpcy5wcm9wcy5mb290UmVuZGVyLCB7XG5cdFx0XHRzdHlsZTogc3R5bGUsXG5cdFx0XHRsYXlvdXQ6IHRoaXNcblx0XHR9KTtcblx0XHRpZihfZWxlbWVudCl7XG5cdFx0XHRyZXR1cm4gX2VsZW1lbnQ7XG5cdFx0fVxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImxheW91dC1mb290ZXJcIiBzdHlsZT17em51aS5yZWFjdC5zdHlsZShzdHlsZSwgdGhpcy5zdGF0ZS5mU3R5bGUpfT5cblx0XHRcdFx0e3pudWkucmVhY3QuY3JlYXRlUmVhY3RFbGVtZW50KHRoaXMucHJvcHMuZm9vdCwgeyBzdHlsZTogc3R5bGUsIGxheW91dDogdGhpc30pfVxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblx0fSxcblx0cmVuZGVyOiBmdW5jdGlvbigpe1xuXHRcdHZhciBfc3R5bGVzID0gdGhpcy5fX2dldFN0eWxlcygpOyAgIC8vaCwgdlxuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17em51aS5yZWFjdC5jbGFzc25hbWUoXCJ6ci1sYXlvdXRcIiwgXCJ6ci1maXhlZC1sYXlvdXRcIiwgXCJkaXJlY3Rpb24tXCIgKyB0aGlzLnByb3BzLmRpcmVjdGlvbiwgdGhpcy5wcm9wcy5jbGFzc05hbWUsIHRoaXMuc3RhdGUuY2xhc3NOYW1lKX0gc3R5bGU9e3pudWkucmVhY3Quc3R5bGUodGhpcy5wcm9wcy5zdHlsZSwgdGhpcy5zdGF0ZS5zdHlsZSl9PlxuXHRcdFx0XHR7IHRoaXMuX19yZW5kZXJIZWFkKF9zdHlsZXMuaGVhZGVyKSB9XG5cdFx0XHRcdHsgdGhpcy5fX3JlbmRlckJvZHkoX3N0eWxlcy5ib2R5KSB9XG5cdFx0XHRcdHsgdGhpcy5fX3JlbmRlckZvb3QoX3N0eWxlcy5mb290ZXIpIH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgJ0FjdGl2aXR5TGF5b3V0JzogcmVxdWlyZSgnLi9BY3Rpdml0eUxheW91dCcpLFxuICAgICdGaXhlZExheW91dCc6IHJlcXVpcmUoJy4vRml4ZWRMYXlvdXQnKVxufTsiLCIoZnVuY3Rpb24oKSB7IG1vZHVsZS5leHBvcnRzID0gdGhpc1tcIlJlYWN0XCJdOyB9KCkpOyJdLCJzb3VyY2VSb290IjoiIn0=