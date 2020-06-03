require('./LayoutDemo.less');
var React = znui.React || require('react');
var layout = require('../../src/index');

module.exports = React.createClass({
	displayName:'LayoutDemo',
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
						component: require('./FixedLayout')
					},
					{
						label: 'ActivityLayout',
						component: require('./ActivityLayout')
					}
				].map(function (item, index){
					return <li key={index} className={this.state.component == item.component ? 'curr': ''} onClick={()=>this.setState({component: item.component})}>
						{item.label}
					</li>;
				}.bind(this))
			}
		</ul>;
	},
	__foot: function (){
		return <div className="right">
			{this.state.component && <this.state.component />}
		</div>;
	},
	render: function(){
		return (
			<layout.FixedLayout 
				className="zr-layout-demo"
				begin={50} 
				end={50} 
				head={<div className="demo-head">Layout Demo</div>} 
				body={<layout.ActivityLayout className="demo-body" minX={160} begin={200} head={this.__head} foot={this.__foot}  />} 
				foot={<div className="demo-foot">znui-react-layout</div>} />
		);
	}
});

function fun (a){
	a(1);
}

function main (){
	var f = fun;
	f(function (i, j, str){
		console.log(i, j, str);
		return '1';
	});
}

main();