[![npm][npm]][npm-url]
[![node][node]][node-url]
[![deps][deps]][deps-url]
[![chat][chat]][chat-url]

<h2 align="center">Install</h2>

```bash
npm install --save-dev uint8array-loader
```

<h2 align="center">Usage</h2>

Use the loader either via your webpack config, CLI or inline.

### Via webpack config (recommended)

**webpack.config.js**
```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.bfbs$/,
        use: 'unit8array-loader'
      }
    ]
  }
}
```

**In your application**
```js
import txt from 'file.bfbs';
```

### CLI

```bash
webpack --module-bind 'bfbs=uint8array-loader'
```

**In your application**
```js
import txt from 'file.bfbs';
```

### Inline

**In your application**
```js
import txt from 'unit8array-loader!./file.bfbs';
```
[npm]: https://img.shields.io/npm/v/uint8array-loader.svg
[npm-url]: https://npmjs.com/package/uint8array-loader

[node]: https://img.shields.io/node/v/uint8array-loader.svg
[node-url]: https://nodejs.org

[deps]: https://david-dm.org/webpack/uint8array-loader.svg
[deps-url]: https://david-dm.org/webpack/uint8array-loader
