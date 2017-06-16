# stunsail &middot; [![Version](https://img.shields.io/npm/v/stunsail.svg?style=flat-square&maxAge=3600)](https://www.npmjs.com/package/stunsail) [![License](https://img.shields.io/npm/l/stunsail.svg?style=flat-square&maxAge=3600)](https://www.npmjs.com/package/stunsail) [![Travis CI](https://img.shields.io/travis/citycide/stunsail.svg?style=flat-square&maxAge=3600)](https://travis-ci.org/citycide/stunsail) [![JavaScript Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square&maxAge=3600)](https://standardjs.com)

> A super opinionated JavaScript utility library.

## features

## installation

```console
$ npm i stunsail
```

## usage

While still in early development, the general idea is
_approachable_ functional programming while avoiding
duplicating code that's easy enough in modern JavaScript.
Here are some parts of the library while docs are still
nowhere to be found:

```js
const {
  pipe,
  map,
  filter,
  toNumber,
  isOneOf,
  clamp,
  match,
  partition
} = require('stunsail')

let number = toNumber('8.5') // -> 8.5
clamp(number, 1, 3)          // -> 3

pipe([
  'hello world',
  map(v => `${v.toUpperCase}-`),             // -> 'H-E-L-L-O- -W-O-R-L-D-'
  filter(isOneOf(['H', 'L', 'W', 'D', '-'])) // -> 'H-L-L-W-L-D-'
]).then(final => {
  console.log(`pipe allows mixing sync & async functions`)
  console.log(`it always returns a Promise to stay consistent`)
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

A secondary goal is to also provide functions that handle
types as you'd expect, without changing the interface. Take
`partition()` for example, which other libraries provide
for working with Arrays. It's the same here:

```js
partition(value => !!value, [true, false, 1, undefined])
// -> [[true, 1], [false, undefined]]
```

... but it also works with objects:

```js
partition((val, key) => val === key, { a: 'a', b: 'c' })
// -> [{ a: 'a' }, { b: 'c' }]
```

... and even on strings:

```js
partition(value => value === ' ', 'a string with spaces in it')
// -> ['     ', 'astringwithspacesinit']
```

In fact, `partition()` works with pretty much anything
you could iterate over, and the same goes for `each()`,
`map()`, `filter()`, `reduce()` etc. That means Arrays,
Objects, Array-likes, strings, Sets, Maps, and custom
iterables.

## api

> work in progress

{{api}}

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
