require('./ActivityLayout.less');
var React = znui.React || require('react');
var layout = require('../../src/index');

module.exports = React.createClass({
	displayName:'ActivityLayout',
	getDefaultProps: function (){
		return {
			
		};
	},
	getInitialState: function (){
		return {
			
		};
	},
	__head: function (){
		return <div className="left">
			Left
		</div>;
	},
	__foot: function (){
		return <div className="right">
			Right
		</div>;
	},
	render: function(){
		return (
			<layout.ActivityLayout className="demo-body" minX={160} begin={200} head={this.__head} foot={this.__foot}  />
		);
	}
});
