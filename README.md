# uint8array-loader

[![Downloads][npm-dm]][package-url]
[![Downloads][npm-dt]][package-url]
[![NPM Version][npm-v]][package-url]
[![Dependencies][deps]][package-url]
[![Dev Dependencies][dev-deps]][package-url]
[![License][license]][package-url]

__babel loader to return content as a uint8array__

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
        use: 'uint8array-loader'
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
import txt from 'uint8array-loader!./file.bfbs';
```
[npm-dm]: https://img.shields.io/npm/dm/uint8array-loader.svg
[npm-dt]: https://img.shields.io/npm/dt/uint8array-loader.svg
[npm-v]: https://img.shields.io/npm/v/uint8array-loader.svg
[deps]: https://img.shields.io/david/jcgertig/uint8array-loader.svg
[dev-deps]: https://img.shields.io/david/dev/jcgertig/uint8array-loader.svg
[license]: https://img.shields.io/npm/l/uint8array-loader.svg
[package-url]: https://npmjs.com/package/uint8array-loader
