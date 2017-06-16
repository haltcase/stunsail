# stunsail _1.0.0-alpha.12_

### apply

```js
apply(fn, args)
```

- [X] curried

Call `fn` using the Array `args` as its arguments.
Similar to native `Function#apply()` but does not
set the function's `this` value.

Omitting `args` until a later time is useful for
creating versions of functions that once accepted
multiple parameters that now accept a single Array
argument.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| fn | `Function` | Function to which `args` will be applied |
| args | `Array` | Array of arguments to apply to `fn` |

> **Returns**

`any`: result of applying `args` to `fn`

> **Usage**

```js
apply(Math.max, [99, 5, 302])
// -> 302

const max = apply(Math.max)

max([1, 2, 100, 4])
// -> 100
```

### cap

```js
cap(limit, fn)
```

- [X] curried

Adds a cap on the number of arguments passable to `fn`.
Any arguments beyond `limit` will not be passed, which
is useful for creating functions compatible with currying
or as callbacks.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| limit | `Array` | The number of arguments to allow |
| fn | `Function` | Function whose arguments to limit |

> **Returns**

`Function`: new function accepting only `limit` arguments

> **Usage**

```js
const log = cap(console.log)

log(1, 2, 3)
// -> 1

['1', '2.2', '2.54'].map(parseInt)
// -> [ 1, NaN, NaN ]

const toInt = cap(parseInt)
['1', '2.2', '2.54'].map(toInt)
// -> [1, 2, 2]
```

### clamp

```js
clamp(value, lower, upper)
```

- [ ] curried

Ensures that a number `value` is between bounds
`lower` and `upper`.

If `value` is not a number it's assumed to be 0,
while `lower` and `upper` are set to `value`
when they aren't numbers (or aren't provided).

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| value | `number` | The number to operate on |
| lower | `number` | Lower bound |
| upper | `number` | Upper bound |

> **Returns**

`number`: between `lower` & `upper`

> **Usage**

```js
clamp(20, -10, 10)
// -> 10

clamp(-15, -10, 10)
// -> -10
```

### constants

> coming soon [[_contribute this_](https://github.com/citycide/stunsail/new/master?filename=docs-src/constants.js)]

### curry

```js
curry(fn)
```

- [ ] curried

Creates an auto-curried version of `fn` that can
accept any number of arguments at a time until the
full arity of `fn` has been met, at which point
the result of calling `fn`  with those arguments
is returned.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| fn | `Function` | Function to curry |

> **Returns**

`Function`: curried version of `fn`

> **Usage**

```js
const curriedAdd = curry((x, y) => x + y)
const addOne = curriedAdd(1)
addOne(2)
// -> 3
```

### defaults

```js
defaults(object, extension)
```

- [X] curried

Sets own properties from `extension` on
`object` if any of them are not present
on `object`.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| object | `Object` | Base object to extend |
| extension | `Object` | Object containing default properties |

> **Returns**

`Object`

> **Usage**

```js
const base = { abc: '123', def: '456' }
const ext = { abc: '999', ghi: '789' }
const result = defaults(base, ext)
// -> { abc: '123', def: '456', ghi: '789' }
```

### each

```js
each(fn, collection)
```

- [X] curried

Universal version of native `Array#forEach` that
works on pretty much any iterable - Arrays & Array-likes,
Objects, Sets, Maps, strings, custom iterables, etc.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| fn | `Function` | Called with each iteration |
| collection | `Iterable` | Iterable-like object to iterate over |

> **Returns**

`undefined`

> **Usage**

```js
const iterator = each(v => console.log(v))

iterator([1, 2, 3])
// -> 1  2  3

iterator('string')
// -> s  t  r  i  n  g

iterator({ key: 'value', keyTwo: 'valueTwo' })
// -> 'value'  'valueTwo'

iterator(new Set([1, 2, 3]))
// -> 1  2  3

const map = new Map()
map.set('keyOne', 'valueOne')
map.set('keyTwo', 'valueTwo')

iterator(map)
// -> 'value'  'valueTwo'

const obj = {
  * [Symbol.iterator] () {
    for (const n of [1, 2, 3]) {
      yield n
    }
  }
}

iterator(obj)
// -> 1  2  3
```

### filter

```js
filter(fn, collection)
```

- [X] curried

Universal version of native `Array#filter` that
works on pretty much any iterable - Arrays & Array-likes,
Objects, Sets, Maps, strings, custom iterables, etc.

`fn` is called with arguments `value`, `key`, `collection`.
If the result is truthy, the element will be present in the resulting
collection. If the result is falsy, it will be _filtered_.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| fn | `Function` | Predicate that decides whether to remove the item |
| collection | `Iterable` | Iterable-like object from which to filter items |

> **Returns**

`any`: same type as `collection`

> **Usage**

```js
const object = { one: 1, two: 2, three: 3 }
const array = [1, 2, 3, 4, 5]

const filterer = filter(value => value % 2)

filterer(object)
// -> { one: 1, three: 3 }

filterer(array)
// -> [1, 3, 5]

filter(value => value !== 'o', 'foobar')
// -> fbar
```

### getOr

```js
getOr(defaultValue, path, object)
```

- [X] curried

Access a property of `object` at `path` safely & deeply,
returning `defaultValue` if it doesn't exist.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| defaultValue | `any` | Value to return if `path` resolves to nil |
| path | `string, string[]` | String using dot or bracket syntax, or an array of path segments |
| object | `Object` | Object-like value to access |

> **Returns**

`any`

> **Usage**

```js
const result = getOr()
// -> result
```

### getType

```js
getType(value)
```

- [ ] curried

Alternative to the builtin `typeof` operator that returns a
more accurate type string.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| value | `any` |  |

> **Returns**

`string`

> **Usage**

```js
getType('hi!')
// -> string

getType({})
// -> object

getType([])
// -> array

getType(null)
// -> null

getType(new RangeError())
// -> rangeerror
```

### get

```js
get(path, object)
```

- [X] curried

Access a property of `object` at `path` safely & deeply,
returning `undefined` if it doesn't exist.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| path | `string, string[]` | String using dot or bracket syntax, or an array of path segments |
| object | `Object` | Object-like value to access |

> **Returns**

`any`

> **Usage**

```js
const result = get()
// -> result
```

### has

```js
has(path, object)
```

- [X] curried

Alternative to the builtin `Object#hasOwnProperty` function
with support for deep-property access using both dot and
bracket syntax.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| path | `string, string[]` | String using dot or bracket syntax, or an array of path segments |
| object | `Object` | Object-like value to access |

> **Returns**

`boolean`

> **Usage**

```js
const object = { attributes: { flammable: true } }
has('attributes.flammable', object)
// -> true

const objectTwo = { array: [1, 2, 3] }
// these are equivalent
has('array[2]', objectTwo)
has('array.2', objectTwo)
// -> true

has('array[3]', objectTwo)
// -> false
```

### invariant

```js
invariant(condition, message)
```

- [ ] curried

Test that `condition` is truthy and return its value,
or throw an error with `message` when it is falsy.

`message` defaults to 'Invariant Violation'.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| condition | `any` | Value to test |
| message | `string` | Message thrown with the error when `condition` is falsy |

> **Returns**

`any`

> **Usage**

```js
const truthyCondition = () => {}
const result1 = invariant(truthyCondition, 'No function provided.')
// -> () => {}

const falsyCondition = null
const result2 = invariant(truthyCondition, 'No function provided.')
// -> InvariantError: 'No function provided.'
```

### isArrayLike

```js
isArrayLike(value)
```

- [ ] curried

Check whether `value` is an Array or an object with a `length`
property and that it also has a property at `length - 1`.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| value | `any` | Value to test |

> **Returns**

`boolean`

> **Usage**

```js
isArrayLike([1, 2, 3])
// -> true

isArrayLike(null)
// -> false

isArrayLike('foobar')
// -> true

isArrayLike({ length: 2 })
// -> false

isArrayLike({ length: 2, 0: 'foo', 1: 'bar' })
// -> true
```

### isArray

```js
isArray(value)
```

- [ ] curried

Check whether `value` is an Array, like the built-in
`Array.isArray()` method.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| value | `any` | Value to test |

> **Returns**

`boolean`

> **Usage**

```js
isArray([1, 2, 3])
// -> true

isArray({ length: 2, 0: 'foo', 1: 'bar' })
// -> false
```

### isBoolean

```js
isBoolean(value)
```

- [ ] curried

Check whether `value` is a boolean.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| value | `any` | Value to test |

> **Returns**

`any`

> **Usage**

```js
isBoolean(true)
// -> true

isBoolean(false)
// -> true

isBoolean(0)
// -> false
```

### isBuffer

```js
isBuffer(value)
```

- [ ] curried

Check whether `value` is a Buffer.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| value | `any` | Value to test |

> **Returns**

`boolean`

> **Usage**

```js
isBuffer(Buffer.from('string'))
// -> true

isBuffer('string')
// -> false
```

### isDate

```js
isDate(value)
```

- [ ] curried

Check whether `value` is a `Date` instance.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| value | `any` | Value to test |

> **Returns**

`boolean`

> **Usage**

```js
isDate(new Date())
// -> true

isDate(Date.now())
// -> false
```

### isEmpty

```js
isEmpty(value)
```

- [ ] curried

Check whether `value` is an empty version of its type,
ie. `{}` for Objects, `[]` for Arrays, etc.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| value | `any` | Value to test |

> **Returns**

`boolean`

> **Usage**

```js
// examples of `true` cases:
isEmpty({})
isEmpty([])
isEmpty(null)
isEmpty('')

// examples of `false` cases:
isEmpty({ property: 'hello' })
isEmpty([1, 2, 3])
isEmpty(() => {})
isEmpty('a value')
```

### isEqual

```js
isEqual(a, b)
```

- [X] curried

Check whether two values `a` and `b` are deeply equal.
Works on almost any object - including plain Objects, Arrays,
Maps, Sets, and Dates.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| a | `any` |  |
| b | `any` |  |

> **Returns**

`boolean`

> **Usage**

```js
isEqual({}, {})
// -> true

isEqual(new Set([1, 2, 3]), new Set([1, 2, 3]))
// -> true

isEqual(new Set([1, 2]), new Set([9, 10]))
// -> false
```

### isError

```js
isError(value)
```

- [ ] curried

Check whether `value` is a built-in Error type.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| value | `any` | Value to test |

> **Returns**

`boolean`

> **Usage**

```js
isError(new Error('did a bad thing'))
// -> true

isError(new TypeError('wrong kind of thing'))
// -> true

isError({ code: 'ENOENT', message: 'wrong' })
// -> false
```

### isFunction

```js
isFunction(value)
```

- [ ] curried

Check whether `value` is a function.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| value | `any` | Value to test |

> **Returns**

`boolean`

> **Usage**

```js
// examples of `true` cases:
isFunction(Function)
isFunction(() => {})
isFunction(async () => {})
isFunction(function () {})
isFunction(function * () {})

// examples of `false` cases:
isFunction(false)
isFunction('')
isFunction([])
isFunction({})
isFunction(new Map())
isFunction(new Set())
isFunction(new Date())
isFunction(null)
isFunction(undefined)
isFunction(1)
```

### isInRange

```js
isInRange(value, start, end)
```

- [ ] curried

Check whether `value` is between `start` and `end`, inclusively.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| value | `number` | Value to test |
| start | `number` | Lower boundary |
| end | `number` | Upper boundary |

> **Returns**

`boolean`

> **Usage**

```js
isInRange(20, 0, 40)
// -> true

isInRange(-10, 0, 40)
// -> false

isInRange(10, 0, 10)
// -> true
```

### isIterable

```js
isIterable(value)
```

- [ ] curried

Check whether `value` is an iterable object, ie. its
`[Symbol.iterator]` property is set as a function.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| value | `any` | Value to test |

> **Returns**

`boolean`

> **Usage**

```js
isIterable([])
// -> true

isIterable({})
// -> false

isIterable(new Set())
// -> true

isIterable(new Map())
// -> true

isIterable({ [Symbol.iterator] () {} })
// -> true

isIterable(null)
// -> false
```

### isNan

```js
isNan(value)
```

- [ ] curried

Check whether `value` is `NaN`.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| value | `any` | Value to test |

> **Returns**

`boolean`

> **Usage**

```js
isNan(NaN)
// -> true

isNan(40)
// -> false

isNan('string')
// -> false

isNan({})
// -> false
```

### isNil

```js
isNil(value)
```

- [ ] curried

Check whether `value` is `null` or `undefined`.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| value | `any` | Value to test |

> **Returns**

`boolean`

> **Usage**

```js
isNil(null)
// -> true

isNil(undefined)
// -> true

isNil(false)
// -> false
```

### isNumber

```js
isNumber(value)
```

- [ ] curried

Check whether `value` is a number.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| value | `any` | Value to test |

> **Returns**

`boolean`

> **Usage**

```js
isNumber(4)
// -> true

isNumber(NaN)
// -> false
```

### isNumeric

```js
isNumeric(value)
```

- [ ] curried

Check whether `value` is a number or a string that appears
to be a number, including integers & decimals in strings.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| value | `any` | Value to test |

> **Returns**

`boolean`

> **Usage**

```js
// examples of `true` cases:
isNumeric(1)
isNumeric(1.343)
isNumeric(Infinity)
isNumeric('1')
isNumeric('1.6')
isNumeric('943034.3923')

// examples of `false` cases:
isNumeric(false)
isNumeric([])
isNumeric({})
isNumeric(new Map())
isNumeric(new Set())
isNumeric(new Date())
isNumeric(NaN)
isNumeric(null)
isNumeric(undefined)
```

### isObject

```js
isObject(value)
```

- [ ] curried

Check whether `value` is a plain object.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| value | `any` | Value to test |

> **Returns**

`boolean`

> **Usage**

```js
isObject({})
// -> true

isObject(() => {})
// -> false

isObject(new Map())
// -> false
```

### isOneOf

```js
isOneOf(collection, value)
```

- [X] curried

Check whether `value` is included in `collection`.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| collection | `Object` | List to check `value` against |
| value | `any` | Value to search for in `collection` |

> **Returns**

`boolean`

> **Usage**

```js
isOneOf([1, 2, 3], 2)
// -> true

isOneOf({ key: 'value' }, 'value')
// -> true
```

### isPrimitive

```js
isPrimitive(value)
```

- [ ] curried

Check whether `value` is a primitive, ie. one of:

- `null`
- `string`
- `number`
- `boolean`
- `undefined`

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| value | `any` | Value to test |

> **Returns**

`boolean`

> **Usage**

```js
// examples of `true` cases:
isPrimitive(null)
isPrimitive('string')
isPrimitive(4)
isPrimitive(true)
isPrimitive(undefined)

// examples of `false` cases:
isPrimitive({})
isPrimitive([])
isPrimitive(new Date())
```

### isString

```js
isString(value)
```

- [ ] curried

Check whether `value` is a string.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| value | `any` | Value to test |

> **Returns**

`boolean`

> **Usage**

```js
isString('something here')
// -> true

isString(400)
// -> false
```

### isThenable

```js
isThenable(value)
```

- [ ] curried

Check whether `value` is an object with a `then` method.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| value | `any` | Value to test |

> **Returns**

`boolean`

> **Usage**

```js
isThenable(Promise.resolve())
// -> true

isThenable({ then () {} })
```

### isType

```js
isType(type, value)
```

- [X] curried

If `type` is a string, check whether `value` has that type. Other
kinds will check that the types of `type` and `value` match.

Leaving `value` absent is useful to create an function to
check for that specific type.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| type | `string, any` |  |
| value | `any` | Value to test |

> **Returns**

`boolean`

> **Usage**

```js
isType('string', 'bar')
// -> true

isType('number', '3')
// -> false

isType(Date, new Date())
// -> true

const isArray = isType('array')

isArray([])
// -> true
```

### kebabCase

```js
kebabCase(string)
```

- [ ] curried

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| string | `string` | Input string to convert to kebab-case |

> **Returns**

`any`

> **Usage**

```js
kebabCase('A space separated string')
// -> 'a-space-separated-string'

kebabCase('camelCasedThing')
// -> 'camel-cased-thing'

kebabCase('already-kebab-cased')
// -> 'already-kebab-cased'
```

### map

```js
map(fn, collection)
```

- [X] curried

Universal version of native `Array#map` that
works on pretty much any iterable - Arrays & Array-likes,
Objects, Sets, Maps, strings, custom iterables, etc.

The return value will be `collection` but each value will
be the result of applying `fn` at each iteration to the
arguments `value`, `key`, `collection`.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| fn | `Function` | Callback applied to each item in `collection` |
| collection | `Object` | Iterable-like object to map over, applying `fn` on each iteration |

> **Returns**

`any`: same type as `collection`

> **Usage**

```js
map(v => v + 1, { one: 1, two: 2, three: 3 })
// -> { one: 2, two: 3, three: 4 }

map(v => v * -1, [1, 3, 5, 7])
// -> [-1, -3, -5, -7]

map(v => v + '-', 'foobar')
// -> 'f-o-o-b-a-r-'
```

### match

```js
match(compare, object)
```

- [X] curried

Check that all properties of `compare` are deeply
equal to those same properties of `object`.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| compare | `Object` | Object containing properties to match |
| object | `Object` | Object on which to check for properties of `match` |

> **Returns**

`boolean`

> **Usage**

```js
const wishy = { name: 'wishy', color: 'green' }
match({ color: 'green' }, wishy)
// -> true

const washy = { name: 'washy', color: 'red' }
map({ color: 'blue' }, washy)
// -> false

const arr = [
  { name: 'willy', color: 'red' },
  { name: 'wally', color: 'red' },
  { name: 'dopey', color: 'brown' },
  { name: 'wishy', color: 'blue' },
  { name: 'washy', color: 'green' }
]

arr.find(map({ color: 'green' })
// -> { name: 'washy', color: 'green' }

arr.find(map({ color: 'brown' })
// -> { name: 'dopey', color: 'brown' }

arr.find(map({ color: 'red' })
// -> { name: 'willy', color: 'red' }
```

### once

```js
once(fn)
```

- [ ] curried

Return a wrapped version of `fn` that is only able to execute
a single time. Further calls to the wrapped function will return
the value from the original call.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| fn | `Function` | Function to wrap so that it only executes a single time |

> **Returns**

`Function`

> **Usage**

```js
function expensive (someNumber) {
  return someNumber
}

const wrapped = once(expensive)

wrapped(100)
// -> 100

wrapped(93247593475)
// -> 100
```

### partition

```js
partition(fn, collection)
```

- [X] curried

Iterate over `collection` and apply `fn` to each item,
returning an Array where the first element contains all items
for which `fn` returned a truthy value, and the second element
contains all items for which it returned a falsy value.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| fn | `Function` | Predicate with which to split items |
| collection | `Object` | Object-like value to split |

> **Returns**

`[truthy, falsy]`

> **Usage**

```js
partition(v => v === true, [true, false, true, false])
    // -> [[true, true], [false, false]]

    partition(v => v === true, { keyOne: true, keyTwo: false })
    // -> [{ keyOne: true }, { keyTwo: false }]

    partition(v => v === ' ', 'some arbitrary string')
    // -> ['  ', 'somearbitrarystring']

    partition(v => v === true, new Map([['keyOne', true], ['keyTwo', false]]))
    // -> [ Map {'keyOne' => true}, Map {'keyTwo' => false} ]

    partition(v => v.startsWith('J'), new Set(['Joe', 'Jerry', 'Rick', 'Bob']))
    // -> [ Set {'Joe', 'Jerry'}, Set {'Rick', 'Bob'} ]
]
```

### pipe

```js
pipe(input)
```

- [ ] curried

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| input | `` |  |

> **Returns**

`Promise<>`

> **Usage**

```js
const result = pipe()
// -> result
```

### random

```js
random(value, bound)
```

- [ ] curried

If `value` is an Array or Object, return a random value.
If it's a number and `bound` is absent, return a random
number between 0 and `value`. If `bound` is provided,
return a random value between `value` and `bound`.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| value | `Array, Object, number` | Collection to sample or a bounding number |
| bound | `number` | Used as the upper bound when `value` is a number |

> **Returns**

`any`

> **Usage**

```js
random([1, 2, 3])
// -> randomly chosen element from the Array

random({ one: 1, two: 2, three: 3 })
// -> value from a randomly chosen key in the Object

random(10)
// -> randomly chosen number between 0 and 10

random(-5, 5)
// -> randomly chosen number between -5 and 5
```

### range

```js
range(start, end, step)
```

- [ ] curried

Create an Array of numbers beginning at and including `start`
through and including `end`.

If `step` is provided, it is used as the increment between
each element of the resulting Array. This can affect the number
of values in the result.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| start | `number` | Value at which to start the range |
| end | `number` | Value at which to end the range |
| step | `number` | Increment between each element |

> **Returns**

`number[]`

> **Usage**

```js
range(0, 10)
// -> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

range(0, 10, 2)
// -> [0, 2, 4, 6, 8, 10]
```

### reduceWhile

> coming soon [[_contribute this_](https://github.com/citycide/stunsail/new/master?filename=docs-src/reduce-while.js)]

### reduce

```js
reduce(fn, initial, collection)
```

- [X] curried

Universal version of native `Array#reduce` that
works on pretty much any iterable - Arrays & Array-likes,
Objects, Sets, Maps, strings, custom iterables, etc.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| fn | `Function` | Function that builds the accumulator with each iteration |
| initial | `any` | Value first passed to `fn` |
| collection | `Iterable` | Iterable-like object to reduce from |

> **Returns**

`any`

> **Usage**

```js
let collection = { one: 1, two: 2, three: 3 }
reduce((acc, cur) => acc + cur, 0, collection)
// -> 6

collection = [1, 2, 3, 4, 5]
reduce((acc, cur) => acc + cur, 0, collection)
// -> 15

collection = 'foobar'
fn((acc, cur) => {
  acc.splice(0, 0, cur)
  return acc
}, [], collection)
// -> ['r', 'a', 'b', 'o', 'o', 'f']
```

### set

```js
set(value, path, object)
```

- [X] curried

Sets the key at `path` to `value` on `object` and returns
the object. Deep property access is supported using both dot and
bracket syntax or an Array of path segments.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| value | `any` | Value to which `path` will be set |
| path | `string, string[]` | String using dot or bracket syntax, or an Array of path segments |
| object | `Object` | Object-like value to access |

> **Returns**

`Object`

> **Usage**

```js
const object = { key: 'value', nested: { inner: { deep: 'thing' } } }
set(40, 'nested.inner.deep', object)
// -> { key: 'value', nested: { inner: { deep: 40 } } }
```

### sleep

```js
sleep(ms)
```

- [ ] curried

Similar to the built-in `setTimeout` but does not receive
a function to run when the time expires. Simply returns a
Promise that resolves after `ms`. Pairs well with `await`.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| ms | `number` | Amount of time to wait |

> **Returns**

`any`

> **Usage**

```js
async function foo () {
  console.log('start')
  await sleep(5000)
  console.log('done')
}

foo()
// -> start
// ... 5 seconds pass ...
// -> done
```

### toArray

```js
toArray(value, begin, end)
```

- [ ] curried

Alternative to the `[].slice.call()` method of converting
values to Arrays. It will convert Array-like Objects and
wrap values in an Array that don't coerce.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| value | `any` | Value to convert |
| begin | `` |  |
| end | `` |  |

> **Returns**

`any`

> **Usage**

```js
toArray(undefined)
// -> []

toArray(null)
// -> [null]

toArray((function () { return arguments })(1, 2, 3))
// -> [1]

toArray(4)
// -> [4]

toArray(true)
// -> [true]

toArray(false)
// -> [false]

toArray({})
// -> [{}]

toArray([])
// -> []

toArray([1, 2, 3, 4, 5], 2)
// -> [3, 4, 5]

toArray([1, 2, 3, 4, 5], 2, -1)
// -> [3, 4]
```

### toBoolean

```js
toBoolean(value, smart)
```

- [ ] curried

Return a boolean based on `value` - the usual falsy values
and empty values will return `false`, while truthy values
return `true`.

When `smart` is `true` and `value` is a string, it will
be checked for the strings 'true' and 'false' and coerced to
a boolean accordingly.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| value | `any` | Value to convert |
| smart | `boolean` | Whether to coerce `value` based on strings 'true' or 'false' |

> **Returns**

`boolean`

> **Usage**

```js
// examples of `true` cases:
toBoolean(true)
toBoolean(1)
toBoolean('true')
toBoolean('false')
toBoolean(new Date())
toBoolean({ one: 1 })
toBoolean([1, 2, 3])

// examples of `false` cases:
toBoolean(false)
toBoolean(null)
toBoolean(undefined)
toBoolean('')
toBoolean(0)
toBoolean({})
toBoolean([])
```

### toEmpty

```js
toEmpty(type)
```

- [ ] curried

Return an empty value matching the kind supplied by `type`.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| type | `` |  |

> **Returns**

`any`

> **Usage**

```js
toEmpty('array')
// -> []

toEmpty('object')
// -> {}

toEmpty('boolean')
// -> false

toEmpty(null)
// -> null

toEmpty([1, 2, 3, 4])
// -> []
```

### toNumber

```js
toNumber(value, round)
```

- [ ] curried

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| value | `any` | Value to convert |
| round | `boolean` | Whether to round the output to an integer |

> **Returns**

`number`

> **Usage**

```js
toNumber(1)
// -> 1

toNumber(1.3345)
// -> 1.3345

const now = new Date
toNumber(now) === now.valueOf()
// -> true

toNumber({ one: 1, two: 2 })
// -> 2

toNumber([1, 2, 3])
// -> 3

toNumber('string')
// -> 6

toNumber(39.354, true)
// -> 39
```

### toObject

```js
toObject(value)
```

- [ ] curried

Ensure an Object is returned, by converting `value` if possible
or by returning an empty Object otherwise. If `value` is already
an Object it is simply returned.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| value | `any` | Value to convert |

> **Returns**

`Object`

> **Usage**

```js
toObject(['one', 'two', 'three'])
// -> { one: 'one', two: 'two', three: 'three' }

toObject(3)
// -> { '3': 3 }

toObject(new Map([['keyOne', 'valueOne], ['keyTwo', 'valueTwo']]))
// -> { keyOne: 'valueOne', keyTwo: 'valueTwo' }

toObject(true)
// -> { 'true': true }

toObject('fly')
// -> { 'fly': 'fly' }

toObject(null)
// -> { 'null': null }

toObject(undefined)
// -> { 'undefined': undefined }

toObject(new Date)
// -> {}
```

