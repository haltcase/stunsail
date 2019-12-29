# stunsail &middot; [![Version](https://img.shields.io/npm/v/stunsail.svg?style=flat-square&maxAge=3600)](https://www.npmjs.com/package/stunsail) [![License](https://img.shields.io/npm/l/stunsail.svg?style=flat-square&maxAge=3600)](https://www.npmjs.com/package/stunsail) [![Travis CI](https://img.shields.io/travis/citycide/stunsail.svg?style=flat-square&maxAge=3600)](https://travis-ci.org/citycide/stunsail) [![JavaScript Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square&maxAge=3600)](https://standardjs.com)

> Super opinionated, functional utility collection.

## installation

```console
$ npm i stunsail
```

or

```console
$ yarn add stunsail
```

## usage

```js
import S from 'stunsail'

// commonjs / ES5
const S = require('stunsail')
```

A module version is also available if you use ES modules:

```js
import S from 'stunsail/es'
```

You can also selectively `import` just what you need, which is especially
recommended if you use the [babel plugin](#babel-plugin) as this is much
more efficient.

```js
import { defaults, kebabCase, matches, toArray } from 'stunsail'

const { defaults, kebabCase, matches, toArray } = require('stunsail')
```

## api

See the [documentation here](https://citycide.github.io/stunsail/docs/api)
for a more complete reference.

### overview

```js
import {
  clamp,
  map,
  filter,
  first,
  matches,
  pipe,
  toNumber
} from 'stunsail'

const number = pipe([
  '36',
  num => toNumber(num),      // -> 36
  num => clamp(num, 10, 30), // -> 30
  num => console.log(num)    // -> 'number = 30'
])

const found = pipe([
  map([1, 2, 3, 4, 5], num => ({ value: num * 2 })),
  // -> [{ value: 2 }, { value: 4 }, ... ]
  objects => filter(objects, obj => matches(obj, { value: 6 })),
  // -> [{ value: 6 }]
  objects => first(objects),
  // -> { value: 6 }
  obj => console.log(obj.value)
  // -> 6
])
```

### with `param.macro`

stunsail is really fun to use alongside [`param.macro`][macro] &mdash; a Babel
plugin that lets you partially apply functions at compile time. You can make
the [above example](#overview) look like this:

```js
import { _, it } from 'param.macro'
import {
  clamp,
  map,
  filter,
  first,
  matches,
  pipe,
  toNumber
} from 'stunsail'

const number = pipe([
  '36',
  toNumber(_),
  clamp(_, 10, 30),
  console.log(`number = ${_}`)
])

const found = pipe([
  map([1, 2, 3, 4, 5], { value: it * 2 }),
  filter(_, matches(_, { value: 6 })),
  first(_),
  console.log(_.value)
])
```

This combo allows you to use stunsail like you would lodash/fp or Ramda,
but without the runtime performance hit that comes with an auto-curried
library.

## babel plugin

stunsail ships with a babel plugin included. It can be used like so:

### babel v7

`.babelrc.js` &rarr;

```js
module.exports = {
  presets: [],
  plugins: ['module:stunsail/babel']
}
```

### babel v6

`.babelrc` &rarr;

```json
{
  "presets": [],
  "plugins": ["stunsail/babel"]
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
calls to avoid adding a module transformer separately.

### configuration

Optionally configure the plugin by using an Array of
`[pluginName, optionsObject]`:

```js
module.exports = {
  presets: [],
  plugins: [
    ['module:stunsail/babel', {
      useRequire: false,
      useModules: true
    }]
  ]
}
```

| property     | type      | default | description |
| :----------: | :-------: | :-----: | ----------- |
| `useRequire` | `Boolean` | `false` | Whether to convert `import` statements to `require`s. Has no effect on `require` calls. |
| `useModules` | `Boolean` | `false` | Redirect `stunsail` imports to `stunsail/es`. Ignored if `useRequire` is set to `true`. |

## see also

* [`param.macro`][macro] &ndash; Babel plugin for compile-time partial application
  and lambda parameters
* [`tryad`][tryad] &ndash; Monadic mashup of Maybe & Either (Option/Result) for
  more functional null & error handling

## contributing

Search the [issues](https://github.com/citycide/stunsail) if you come
across any trouble, open a new one if it hasn't been posted, or, if you're
able, open a [pull request](https://help.github.com/articles/about-pull-requests/).
Contributions of any kind are welcome in this project.

## license

MIT © [Bo Lingen / citycide](https://github.com/citycide)

[macro]: https://github.com/citycide/param.macro
[tryad]: https://github.com/citycide/tryad
