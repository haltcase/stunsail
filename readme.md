# stunsail &middot; [![Version](https://img.shields.io/npm/v/stunsail.svg?style=flat-square&maxAge=3600)](https://www.npmjs.com/package/stunsail) [![License](https://img.shields.io/npm/l/stunsail.svg?style=flat-square&maxAge=3600)](https://www.npmjs.com/package/stunsail) [![Travis CI](https://img.shields.io/travis/citycide/stunsail.svg?style=flat-square&maxAge=3600)](https://travis-ci.org/citycide/stunsail) [![JavaScript Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square&maxAge=3600)](https://standardjs.com)

> A super opinionated JavaScript utility library.

## features

## installation

```console
$ npm i stunsail
```

## usage

While still in early development, here's some basic usage of various
parts of the library:

```js
const { is, to, fn } = require('stunsail')

/**
 * or, more efficiently:
 * const is = require('stunsail/is')
 * const to = require('stunsail/to')
 * const fn = require('stunsail/fn')
 *
 * or even:
 * const toArray = require('stunsail/to/array')
 */

to.number('1') // -> 1
to.clamp(4, 1, 3) // -> 3
is.object({}) // -> true
is.object([]) // -> false
is.oneOf([1, 2, 3], 3) // -> true

fn.pipe([
  'hello world',
  v => v + '!',
  v => v.toUpperCase()
  v => Promise.resolve(v)
]).then(console.log) // -> 'HELLO WORLD!'

// `pipe()` always returns a Promise
fn.pipe(['hello']).then(console.log) // -> 'hello'
```

## api

> coming soon


## contributing

Pull requests and any [issues](https://github.com/citycide/stunsail/issues)
found are always welcome.

## license

MIT © [Bo Lingen / citycide](https://github.com/citycide)
