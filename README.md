# znui-react-layout
Layout component.

[![npm](https://img.shields.io/npm/v/znui-react-layout.svg)](https://www.npmjs.com/package/znui-react-layout)
[![npm](https://img.shields.io/npm/dm/znui-react-layout.svg)](https://www.npmjs.com/package/znui-react-layout)

## Demo

[Take a look at the demo](https://znui.github.io/znui-react-layout/example/www/index.html)

## Installation

```bash
npm install znui-react-layout -s
```

## Usage

```javascript

var ReactDOM = require('react-dom');

var inputs = require('znui-react-input');


znui.react.createApplication({
    render: <div className="form-container">
        <inputs.Input onChange={(event)=>console.log(event.value)} />
        <inputs.Input name="name"/>
        <inputs.Textarea onChange={(event)=>console.log(event.value)} />
    </div>
});
```

## License

MIT