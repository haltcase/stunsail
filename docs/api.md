# stunsail _1.0.0-alpha.14_

### all

```js
all(collection, fn)
```

Universal version of native `Array#every` that
works on pretty much any iterable - Arrays & Array-likes,
Objects, Sets, Maps, strings, custom iterables, etc.

Returns `true` if the result of `fn` is truthy for every item
in the collection, or stops iteration early and returns `false` if
some item causes `fn` to return a falsy value.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| collection | `Object` | Iterable-like object to map over, applying `fn` on each iteration |
| fn | `Function` | Callback applied to each item in `collection` |

> **Returns**

`boolean`: whether all items satisifed the condition

> **Usage**

```js
all([1, 3, 5, 7], v => v < 10)
// -> true

all({ one: 1, two: 2, three: 3 }, v => v === 3)
// -> false
```

### any

```js
any(collection, fn)
```

Universal version of native `Array#some` that
works on pretty much any iterable - Arrays & Array-likes,
Objects, Sets, Maps, strings, custom iterables, etc.

Returns `true` if the result of `fn` is truthy for any item
in the collection, or stops iteration early and returns `false` if
some item causes `fn` to return a falsy value.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| collection | `Object` | Iterable-like object to map over, applying `fn` on each iteration |
| fn | `Function` | Callback applied to each item in `collection` |

> **Returns**

`boolean`: whether any item satisifed the condition

> **Usage**

```js
any({ one: 1, two: 2, three: 3 }, v => v === 3)
// -> true

any([1, 3, 5, 7], v => v > 10)
// -> false
```

### apply

```js
apply(fn, args)
```

Call `fn` using the Array `args` as its arguments.
Similar to native `Function#apply()` but does not
set the function's `this` value.

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

### camelCase

```js
camelCase(string)
```

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| string | `string` | Input string to convert to camel-case |

> **Returns**

`any`

> **Usage**

```js
camelCase('A space separated string')
// -> 'aSpaceSeparatedString'

camelCase('snake_cased_thing')
// -> 'snakeCasedThing'

camelCase('alreadyCamelCased')
// -> 'alreadyCamelCased'
```

### cap

```js
cap(fn, limit)
```

Adds a cap on the number of arguments passable to `fn`.
Any arguments beyond `limit` will not be passed, which
is useful for creating functions compatible with currying
or as callbacks / parameters to higher order functions.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| fn | `Function` | Function whose arguments to limit |
| limit | `Number` | The number of arguments to allow |

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

### defaults

```js
defaults(object, extension)
```

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
each(collection, fn)
```

Universal version of native `Array#forEach` that
works on pretty much any iterable - Arrays & Array-likes,
Objects, Sets, Maps, strings, custom iterables, etc.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| collection | `Iterable` | Iterable-like object to iterate over |
| fn | `Function` | Called with each iteration |

> **Returns**

`undefined`

> **Usage**

```js
each([1, 2, 3], v => console.log(v))
// -> 1  2  3

each('string', v => console.log(v))
// -> s  t  r  i  n  g

each({ key: 'value', keyTwo: 'valueTwo' }, v => console.log(v))
// -> 'value'  'valueTwo'

each(new Set([1, 2, 3]), v => console.log(v))
// -> 1  2  3

const map = new Map()
map.set('keyOne', 'valueOne')
map.set('keyTwo', 'valueTwo')

each(map, v => console.log(v))
// -> 'value'  'valueTwo'

const obj = {
  * [Symbol.iterator] () {
    for (const n of [1, 2, 3]) {
      yield n
    }
  }
}

each(obj, v => console.log(v))
// -> 1  2  3
```

### filter

```js
filter(collection, fn)
```

Universal version of native `Array#filter` that
works on pretty much any iterable - Arrays & Array-likes,
Objects, Sets, Maps, strings, custom iterables, etc.

`fn` is called with arguments `value`, `key`, `collection`.
If the result is truthy, the element will be present in the resulting
collection. If the result is falsy, it will be _filtered_.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| collection | `Iterable` | Iterable-like object from which to filter items |
| fn | `Function` | Predicate that decides whether to remove the item |

> **Returns**

`any`: same type as `collection`

> **Usage**

```js
const object = { one: 1, two: 2, three: 3 }
filter(object, value => value % 2)
// -> { one: 1, three: 3 }

const array = [1, 2, 3, 4, 5]
filter(array, value => value % 2)
// -> [1, 3, 5]

filter('foobar', value => value !== 'o')
// -> fbar
```

### first

```js
first(arrayLike)
```

Retreive the item at index zero of the given Array-like or `Set` object.
For `Set`s this is based on insertion order, ie. the first inserted object.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| arrayLike | `Array` | Array-like value to access |

> **Returns**

`any`: first value of the given collection, ie. `array[0]`

> **Usage**

```js
first([1, 2, 3, 4])
// -> 1

first(new Set([1, 2, 3, 4]))
// -> 1

first((function () { return arguments }(1, 2, 3, 4)))
// -> 1
```

### getOr

```js
getOr(object, path, defaultValue)
```

Access a property of `object` at `path` safely & deeply,
returning `defaultValue` if it doesn't exist.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| object | `Object` | Object-like value to access |
| path | `string, string[]` | String using dot or bracket syntax, or an array of path segments |
| defaultValue | `any` | Value to return if `path` resolves to nil |

> **Returns**

`any`

> **Usage**

```js
const object = { attributes: { flammable: true } }
getOr(object, 'attributes.toxic', false)
// -> false

getOr(object, 'attributes.flammable', false)
// -> true

const objectTwo = { array: [1, 2, 3] }
// these are equivalent
getOr(objectTwo, 'array[2]', 'item three')
getOr(objectTwo, 'array.2', 'item three')
// -> 2

getOr(objectTwo, 'array[3]', 'item four')
// -> 'item four'
```

### getType

```js
getType(value)
```

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
get(object, path)
```

Access a property of `object` at `path` safely & deeply,
returning `undefined` if it doesn't exist.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| object | `Object` | Object-like value to access |
| path | `string, string[]` | String using dot or bracket syntax, or an array of path segments |

> **Returns**

`any`

> **Usage**

```js
const object = { attributes: { flammable: true } }
get(object, 'attributes.toxic')
// -> undefined

get(object, 'attributes.flammable')
// -> true

const objectTwo = { array: [1, 2, 3] }
// these are equivalent
get(objectTwo, 'array[2]')
get(objectTwo, 'array.2')
// -> 2

get(objectTwo, 'array[3]')
// -> undefined
```

### has

```js
has(path, object)
```

Alternative to the builtin `Object#hasOwnProperty` function
with support for deep-property access using both dot and
bracket syntax.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| object | `Object` | Object-like value to access |
| path | `string, string[]` | String using dot or bracket syntax, or an array of path segments |

> **Returns**

`boolean`

> **Usage**

```js
const object = { attributes: { flammable: true } }
has('attributes.flammable', object)
// -> true

const objectTwo = { array: [1, 2, 3] }
// these are equivalent
has(objectTwo, 'array[2]')
has(objectTwo, 'array.2')
// -> true

has(objectTwo, 'array[3]')
// -> false
```

### includes

```js
includes(collection, value)
```

Check whether `value` is included in `collection`.
This is a version of [`isOneOf()`](#isoneof) with the
arguments flipped.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| collection | `Object` | List to check `value` against |
| value | `any` | Value to search for in `collection` |

> **Returns**

`boolean`

> **Usage**

```js
includes([1, 2, 3], 2)
// -> true

includes({ key: 'value' }, 'value')
// -> true
```

### invariant

```js
invariant(condition, message)
```

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

### isMap

```js
isMap(value)
```

Check whether `value` is a `Map` object.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| value | `any` | Value to test |

> **Returns**

`boolean`

> **Usage**

```js
isMap(new Map())
// -> true

isMap({})
// -> false
```

### isNan

```js
isNan(value)
```

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
isOneOf(value, collection)
```

Check whether `value` is included in `collection`.
This is a version of [`includes()`](#includes) with the
arguments flipped.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| value | `any` | Value to search for in `collection` |
| collection | `Object` | List to check `value` against |

> **Returns**

`boolean`

> **Usage**

```js
isOneOf(2, [1, 2, 3])
// -> true

isOneOf('value', { key: 'value' })
// -> true
```

### isPrimitive

```js
isPrimitive(value)
```

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

### isSet

```js
isSet(value)
```

Check whether `value` is a `Set` object.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| value | `any` | Value to test |

> **Returns**

`boolean`

> **Usage**

```js
isSet(new Set())
// -> true

isSet([])
// -> false
```

### isString

```js
isString(value)
```

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
isType(value, type)
```

If `type` is a string, check whether `value` has that type. Other
kinds will check that the types of `type` and `value` match.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| value | `any` | Value to test |
| type | `string, any` |  |

> **Returns**

`boolean`

> **Usage**

```js
isType('bar', 'string')
// -> true

isType('3', 'number')
// -> false

isType(new Date(), Date)
// -> true
```

### kebabCase

```js
kebabCase(string)
```

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

### last

```js
last(arrayLike)
```

Retreive the item at the highest index of the given Array-like or `Set` object.
For `Set`s this is based on insertion order, ie. the last inserted object.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| arrayLike | `Array` | Array-like value to access |

> **Returns**

`any`: last value of the given collection, ie. `array[array.length - 1]`

> **Usage**

```js
last([1, 2, 3, 4])
// -> 4

last(new Set([1, 2, 3, 4]))
// -> 4

last((function () { return arguments }(1, 2, 3, 4)))
// -> 4
```

### map

```js
map(collection, fn)
```

Universal version of native `Array#map` that
works on pretty much any iterable - Arrays & Array-likes,
Objects, Sets, Maps, strings, custom iterables, etc.

The return value will be `collection` but each value will
be the result of applying `fn` at each iteration to the
arguments `value`, `key`, `collection`.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| collection | `Object` | Iterable-like object to map over, applying `fn` on each iteration |
| fn | `Function` | Callback applied to each item in `collection` |

> **Returns**

`any`: same type as `collection`

> **Usage**

```js
map({ one: 1, two: 2, three: 3 }, v => v + 1)
// -> { one: 2, two: 3, three: 4 }

map([1, 3, 5, 7], v => v * -1)
// -> [-1, -3, -5, -7]

map('foobar', v => v + '-')
// -> 'f-o-o-b-a-r-'
```

### matches

```js
matches(object, compare)
```

Check that all properties of `compare` are deeply
equal to those same properties of `object`.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| object | `Object` | Object on which to check for properties of `compare` |
| compare | `Object` | Object containing properties to match |

> **Returns**

`boolean`

> **Usage**

```js
const wishy = { name: 'wishy', color: 'green' }
matches(wishy, { color: 'green' })
// -> true

const washy = { name: 'washy', color: 'red' }
matches(washy, { color: 'blue' })
// -> false

const arr = [
  { name: 'willy', color: 'red' },
  { name: 'wally', color: 'red' },
  { name: 'dopey', color: 'brown' },
  { name: 'wishy', color: 'blue' },
  { name: 'washy', color: 'green' }
]

arr.find(o => matches(o, { color: 'green' })
// -> { name: 'washy', color: 'green' }

arr.find(o => matches(o, { color: 'brown' })
// -> { name: 'dopey', color: 'brown' }

arr.find(o => matches(o, { color: 'red' })
// -> { name: 'willy', color: 'red' }
```

### once

```js
once(fn)
```

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
partition(collection, fn)
```

Iterate over `collection` and apply `fn` to each item,
returning an Array where the first element contains all items
for which `fn` returned a truthy value, and the second element
contains all items for which it returned a falsy value.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| collection | `Object` | Object-like value to split |
| fn | `Function` | Predicate with which to split items |

> **Returns**

`[truthy, falsy]`

> **Usage**

```js
partition([true, false, true, false], v => v === true)
// -> [[true, true], [false, false]]

partition({ keyOne: true, keyTwo: false }, v => v === true)
// -> [{ keyOne: true }, { keyTwo: false }]

partition('some arbitrary string', v => v === ' ')
// -> ['  ', 'somearbitrarystring']

partition(new Map([['keyOne', true], ['keyTwo', false]]), v => v === true)
// -> [ Map {'keyOne' => true}, Map {'keyTwo' => false} ]

partition(new Set(['Joe', 'Jerry', 'Rick', 'Bob']), v => v.startsWith('J'))
// -> [ Set {'Joe', 'Jerry'}, Set {'Rick', 'Bob'} ]
```

### pathDots

```js
pathDots(value)
```

Converts Arrays of object path segments into dot-notated paths.
If `value` is a string, brackets will be normalized to dots.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| value | `string, string[]` | String using dot or bracket syntax, or an array of path segments |

> **Returns**

`boolean`

> **Usage**

```js
pathDots(['a', 'b', 'c', '0'])
// -> 'a.b.c.0'

pathDots('a[1].b.c[0]')
// -> 'a.1.b.c.0'
```

### pathLinks

```js
pathLinks(value)
```

Convert `value` (a dot or bracket notated string) to an
Array of object path segments. If it's already an Array it
will just be returned.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| value | `string, string[]` | String using dot or bracket syntax, or an array of path segments |

> **Returns**

`boolean`

> **Usage**

```js
pathLinks('a[1].b.c[0]')
// -> ['a', '1', 'b', 'c', '0']

pathLinks(['a', 'b', 'c', '0'])
// -> ['a', 'b', 'c', '0']
```

### pipe

```js
pipe(input)
```

Run a set of functions in series using the output of each
as the input to the next. The first value is allowed to be
of any kind - if it is not a function it is simply passed
as the argument to the second item. Subsequent non-function
items are ignored.

Because `pipe` handles Promise-returning functions, it will
always return a Promise in order to maintain a consistent API
even if all given functions & values are synchronous.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| input | `Function[]` | List of functions to pipe through |

> **Returns**

`Promise<any>`

> **Usage**

```js
pipe(
  'hello',
  str => str.toUpperCase(),
  str => str.split('').join('-')
).then(result => {
  console.log(result)
  // -> 'H-E-L-L-O'
})

async function getUserData (name) {
  return { name, favoriteColor: 'blue' }
}

pipe(
  name => getUserData(name),
  user => user.favoriteColor === 'blue'
).then(result => {
  console.log(result)
  // -> true
})
```

### random

```js
random(value, bound)
```

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

```js
reduceWhile(collection, predicate, fn, initial)
```

Works just like [`reduce`](#reduce) but short-circuits when
`predicate` returns a falsy value.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| collection | `Iterable` | Iterable-like object to reduce from |
| predicate | `Function` | Function that will stop iteration when returning a falsy value |
| fn | `Function` | Function that builds the accumulator with each iteration |
| initial | `any` | Value first passed to `fn` |

> **Returns**

`any`

> **Usage**

```js
const predicate = accumulator => accumulator !== 3
const reducer = (acc, cur) => acc + cur
const object = { one: 1, two: 2, three: 3 }

reduce(object, reducer, 0)
// -> 6

reduceWhile(object, predicate, reducer, 0)
// -> 3
```

### reduce

```js
reduce(collection, fn, initial)
```

Universal version of native `Array#reduce` that
works on pretty much any iterable - Arrays & Array-likes,
Objects, Sets, Maps, strings, custom iterables, etc.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| collection | `Iterable` | Iterable-like object to reduce from |
| fn | `Function` | Function that builds the accumulator with each iteration |
| initial | `any` | Value first passed to `fn` |

> **Returns**

`any`

> **Usage**

```js
let collection = { one: 1, two: 2, three: 3 }
reduce(collection, (acc, cur) => acc + cur, 0)
// -> 6

collection = [1, 2, 3, 4, 5]
reduce(collection, (acc, cur) => acc + cur, 0)
// -> 15

collection = 'foobar'
fn(collection, (acc, cur) => {
  acc.splice(0, 0, cur)
  return acc
}, [])
// -> ['r', 'a', 'b', 'o', 'o', 'f']
```

### set

```js
set(object, path, value)
```

Sets the key at `path` to `value` on `object` and returns
the object. Deep property access is supported using both dot and
bracket syntax or an Array of path segments.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| object | `Object` | Object-like value to access |
| path | `string, string[]` | String using dot or bracket syntax, or an Array of path segments |
| value | `any` | Value to which `path` will be set |

> **Returns**

`Object`

> **Usage**

```js
const object = { key: 'value', nested: { inner: { deep: 'thing' } } }
set(object, 'nested.inner.deep', 40)
// -> { key: 'value', nested: { inner: { deep: 40 } } }
```

### sleep

```js
sleep(ms)
```

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

### snakeCase

```js
snakeCase(string)
```

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| string | `string` | Input string to convert to snake-case |

> **Returns**

`any`

> **Usage**

```js
snakeCase('A space separated string')
// -> 'a_space_separated_string'

snakeCase('camelCasedThing')
// -> 'camel_cased_thing'

snakeCase('already_snake_cased')
// -> 'already_snake_cased'
```

### toArray

```js
toArray(value, begin, end)
```

Alternative to the `[].slice.call()` method of converting
values to Arrays. It will convert Array-like Objects and
wrap values in an Array that don't coerce.

> **Arguments**

| name | type | description |
| :--: | :--: | ----------- |
| value | `any` | Value to convert |
| begin | `Number` | Optional index at which to begin a slice |
| end | `Number` | Optional index at which to end a slice |

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

Return an empty value matching the kind supplied by `type`,
which is either a string representing its kind or any object.

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

toObject(new Map([['keyOne', 'valueOne'], ['keyTwo', 'valueTwo']]))
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

