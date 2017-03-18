# stunsail &middot; [![Version](https://img.shields.io/npm/v/stunsail.svg?style=flat-square&maxAge=3600)](https://www.npmjs.com/package/stunsail) [![License](https://img.shields.io/npm/l/stunsail.svg?style=flat-square&maxAge=3600)](https://www.npmjs.com/package/stunsail) [![Travis CI](https://img.shields.io/travis/citycide/stunsail.svg?style=flat-square&maxAge=3600)](https://travis-ci.org/citycide/stunsail) [![JavaScript Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square&maxAge=3600)](https://standardjs.com)

> A super opinionated JavaScript utility library.

## features

## installation

```console
$ npm i stunsail
```

## usage

While still in early development, the general idea is _approachable_ functional
programming and avoiding duplicating code that's easy enough in modern JavaScript.
Here are some parts of the library while docs are still nowhere to be found:

```js
const {
  pipe,
  map,
  filter,
  toNumber,
  isOneOf,
  clamp,
  match
} = require('.')

/**
 * or to be more efficient:
 *
 * const pipe = require('stunsail/pipe')
 * const map = require('stunsail/map')
 * const isString = require('stunsail/is-string')
 *
 * ... etc.
 */

let number = toNumber('8.5') // -> 8.5
clamp(number, 1, 3)          // -> 3

pipe([
  'hello world',
  map(v => `${v.toUpperCase}-`),             // -> 'H-E-L-L-O- -W-O-R-L-D-'
  filter(isOneOf(['H', 'L', 'W', 'D', '-'])) // -> 'H-L-L-W-L-D-'
]).then(final => {
  console.log(`always returns a Promise`)
  console.log(final === 'H-L-L-W-L-D-')
  // -> true
})

let characters = [
  { name: 'Deadpool', weapon: 'swords' },
  { name: 'Wolverine', weapon: 'claws' },
  { name: 'Captain America', weapon: 'shield' } // wat
]

characters.find(match({ weapon: 'shield' }))
// -> { name: 'Captain America', weapon: 'shield' }
```

## api

> coming soon


## contributing

Pull requests and any [issues](https://github.com/citycide/stunsail/issues)
found are always welcome.

## license

MIT © [Bo Lingen / citycide](https://github.com/citycide)
