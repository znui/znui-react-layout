"use strict";

var React = znui.React || require('react');
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