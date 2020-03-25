require('znui-react');
require('../../src/index.less');
require('./index.less');
var React = znui.React || require('react');
var LayoutDemo = require('./LayoutDemo');

znui.react.createApplication({
    render: <LayoutDemo />
});