var React = znui.React || require('react');

module.exports = React.createClass({
	displayName:'FixedLayout',
	getDefaultProps: function (){
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
	getInitialState: function (){
		return {
			className: '',
			style: {},
			hStyle: {},
			bStyle: {},
			fStyle: {}
		};
	},
	__getStyles: function (){
		var props = this.props,
			_unit = props.unit,
			_begin = props.begin,
			_end = props.end,
			_header = {},
			_body = {},
			_footer = {};

		if(props.direction == 'top-bottom'){
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
		}
	},
	__renderHead: function (style){
		var _element = znui.react.createReactElement(this.props.headRender, {
			style: style,
			layout: this
		});
		if(_element){
			return _element;
		}
		return (
			<div className="layout-header" style={znui.react.style(style, this.state.hStyle)}>
				{znui.react.createReactElement(this.props.head, { style: style, layout: this})}
			</div>
		);
	},
	__renderBody: function (style){
		var _element = znui.react.createReactElement(this.props.bodyRender, {
			style: style,
			layout: this
		});
		if(_element){
			return _element;
		}
		return (
			<div className="layout-body" style={znui.react.style(style, this.state.bStyle)}>
				{znui.react.createReactElement(this.props.body, { style: style, layout: this})}
			</div>
		);
	},
	__renderFoot: function (style){
		var _element = znui.react.createReactElement(this.props.footRender, {
			style: style,
			layout: this
		});
		if(_element){
			return _element;
		}
		return (
			<div className="layout-footer" style={znui.react.style(style, this.state.fStyle)}>
				{znui.react.createReactElement(this.props.foot, { style: style, layout: this})}
			</div>
		);
	},
	render: function(){
		var _styles = this.__getStyles();   //h, v
		return (
			<div className={znui.react.classname("zr-layout", "zr-fixed-layout", "direction-" + this.props.direction, this.props.className, this.state.className)} style={znui.react.style(this.props.style, this.state.style)}>
				{ this.__renderHead(_styles.header) }
				{ this.__renderBody(_styles.body) }
				{ this.__renderFoot(_styles.footer) }
			</div>
		);
	}
});
