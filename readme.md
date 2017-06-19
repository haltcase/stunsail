# stunsail &middot; [![Version](https://img.shields.io/npm/v/stunsail.svg?style=flat-square&maxAge=3600)](https://www.npmjs.com/package/stunsail) [![License](https://img.shields.io/npm/l/stunsail.svg?style=flat-square&maxAge=3600)](https://www.npmjs.com/package/stunsail) [![Travis CI](https://img.shields.io/travis/citycide/stunsail.svg?style=flat-square&maxAge=3600)](https://travis-ci.org/citycide/stunsail) [![JavaScript Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square&maxAge=3600)](https://standardjs.com)

> A super opinionated JavaScript utility library.

## features

## installation

```console
$ npm i stunsail
```

## usage

To import the entire library:

```js
import S from 'stunsail'

// commonjs / ES5
const S = require('stunsail')
```

A module version is also available if you use ES modules:

```js
import S from 'stunsail/es'
```

## api

> see the [API docs](docs/api.md)

## babel plugin

stunsail currently ships with a babel plugin included - though it
may move to a separate package eventually. It can be used like so:

```json
{
  "presets": [],
  "plugins": [
    "stunsail/babel"
  ]
}
```

This will allow you to write simpler `import`s but output
and still benefit from more efficient alternatives, ie:

```js
import { partition } from 'stunsail'

// commonjs / ES5
const { partition } = require('stunsail')
```

... will be compiled to:

```js
import partition from 'stunsail/partition'

// commonjs / ES5
const partition = require('stunsail/partition')
```

`import` statements can optionally be compiled to equivalent `require`
calls to avoid adding a module plugin separately.

## babel plugin

stunsail currently ships with a babel plugin included - though it
may move to a separate package eventually. It can be used like so:

```json
{
  "presets": [],
  "plugins": [
    "stunsail/babel"
  ]
}
```

## contributing

Pull requests and any [issues](https://github.com/citycide/stunsail/issues)
found are always welcome.

## license

MIT © [Bo Lingen / citycide](https://github.com/citycide)
