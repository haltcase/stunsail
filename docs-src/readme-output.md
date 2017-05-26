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

### apply

```js
apply(fn, args)
```

Call `fn` using the Array `args` as its arguments.
Similar to native `Function#apply()` but does not
set the function's `this` value.

> **Returns**

`any`: result of applying `args` to `fn`

> **Usage**

```js
const max = apply(Math.max)

max([1, 2, 100, 4])
// -> 100
```

### cap

> coming soon [_contribute this_]

### clamp

> coming soon [_contribute this_]

### constants

> coming soon [_contribute this_]

### curry

> coming soon [_contribute this_]

### defaults

> coming soon [_contribute this_]

### each

> coming soon [_contribute this_]

### filter

> coming soon [_contribute this_]

### getOr

> coming soon [_contribute this_]

### getType

> coming soon [_contribute this_]

### get

> coming soon [_contribute this_]

### has

> coming soon [_contribute this_]

### invariant

> coming soon [_contribute this_]

### isArrayLike

> coming soon [_contribute this_]

### isArray

> coming soon [_contribute this_]

### isBoolean

> coming soon [_contribute this_]

### isBuffer

> coming soon [_contribute this_]

### isDate

> coming soon [_contribute this_]

### isEmpty

> coming soon [_contribute this_]

### isEqual

> coming soon [_contribute this_]

### isError

> coming soon [_contribute this_]

### isFunction

> coming soon [_contribute this_]

### isInRange

> coming soon [_contribute this_]

### isIterable

> coming soon [_contribute this_]

### isNan

> coming soon [_contribute this_]

### isNil

> coming soon [_contribute this_]

### isNumber

> coming soon [_contribute this_]

### isNumeric

> coming soon [_contribute this_]

### isObject

> coming soon [_contribute this_]

### isOneOf

> coming soon [_contribute this_]

### isPrimitive

> coming soon [_contribute this_]

### isString

> coming soon [_contribute this_]

### isThenable

> coming soon [_contribute this_]

### isType

> coming soon [_contribute this_]

### kebabCase

> coming soon [_contribute this_]

### map

> coming soon [_contribute this_]

### match

> coming soon [_contribute this_]

### once

> coming soon [_contribute this_]

### partition

> coming soon [_contribute this_]

### pipe

> coming soon [_contribute this_]

### random

> coming soon [_contribute this_]

### range

> coming soon [_contribute this_]

### reduce

> coming soon [_contribute this_]

### set

> coming soon [_contribute this_]

### sleep

> coming soon [_contribute this_]

### toArray

> coming soon [_contribute this_]

### toBoolean

> coming soon [_contribute this_]

### toEmpty

> coming soon [_contribute this_]

### toNumber

> coming soon [_contribute this_]

### toObject

> coming soon [_contribute this_]



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
