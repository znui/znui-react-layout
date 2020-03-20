require('znui-react');
require('../../src/index.less');
require('./index.less');
var React = znui.React || require('react');
var layout = require('../../src/index');

znui.react.createApplication({
    render: <div style={{width: 1000, border: '1px solid #CCC'}}>
        <layout.FixedLayout begin={100} end={100} head={<span>head</span>} foot={<span>foot</span>}  />
        <layout.ActivityLayout begin={100} end={100} head={<span style={{color: 'red'}}>head</span>} foot={<span style={{color: 'green'}}>foot</span>}  />
    </div>
});