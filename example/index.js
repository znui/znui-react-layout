
require('znui-react');
require('../src/index.less');
require('./index.less');
var React = require('react');
var ReactDOM = require('react-dom');
var layout = require('../src/index.js');

ReactDOM.render(
    <div style={{width: 1000, border: '1px solid #CCC'}}>
        <layout.FixedLayout begin={100} end={100} head={<span>head</span>} foot={<span>foot</span>}  />
    </div>,
    document.getElementById('container'),
);