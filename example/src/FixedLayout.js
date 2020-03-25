require('./FixedLayout.less');
var React = znui.React || require('react');
var layout = require('../../src/index');

module.exports = React.createClass({
	displayName:'FixedLayout',
	getDefaultProps: function (){
		return {
			
		};
	},
	getInitialState: function (){
		return {
			
		};
	},
	__head: function (){
		return <ul className="nav">
			{
				[
					{
						label: 'FixedLayout',
						component: null
					},
					{
						label: 'ActivityLayout',
						component: null
					}
				].map(function (item, index){
					return <li key={index}>
						{item.label}
					</li>;
				})
			}
		</ul>;
	},
	__foot: function (){
		return <div className="right">

		</div>;
	},
	render: function(){
		return (
			<layout.FixedLayout 
				begin={50} 
				end={50} 
				head={<div>Layout Head</div>} 
				body={<div>Layout Body</div>} 
				foot={<div>Layout Foot</div>} />
		);
	}
});