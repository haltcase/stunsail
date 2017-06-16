import test from 'ava'
import fn from '../to-object'

test('array: creates an object using array values as its pairs', t => {
  let input = ['one', 'two', 'three']
  let res = { one: 'one', two: 'two', three: 'three' }
  t.deepEqual(fn(input), res)
})

test('primitive: creates an object with the input as both key & value', t => {
  /* eslint-disable object-shorthand */
  t.deepEqual(fn(3), { '3': 3 })
  t.deepEqual(fn(true), { 'true': true })
  t.deepEqual(fn('fly'), { 'fly': 'fly' })
  t.deepEqual(fn(null), { 'null': null })
  t.deepEqual(fn(undefined), { 'undefined': undefined })
  /* eslint-enable object-shorthand */
})

test('object: returns the input directly', t => {
  let input = { ultra: 'cool' }
  t.is(fn(input), input)
})

test('array: converts key / value pair arrays', t => {
  let input = [['keyOne', 1], ['keyTwo', 2], ['keyThree', 3]]
  let expected = {
    keyOne: 1,
    keyTwo: 2,
    keyThree: 3
  }

  t.deepEqual(fn(input), expected)
})

test('map: creates a plain object from map entries', t => {
  let input = new Map([['keyOne', 1], ['keyTwo', 2], ['keyThree', 3]])
  let expected = {
    keyOne: 1,
    keyTwo: 2,
    keyThree: 3
  }

  t.deepEqual(fn(input), expected)
})

test('set: creates an object using set entries as its pairs', t => {
  let input = new Set(['one', 'two', 'three'])
  let res = { one: 'one', two: 'two', three: 'three' }
  t.deepEqual(fn(input), res)
})

test('returns an empty object for unhandled types', t => {
  t.deepEqual(fn(new Date()), {})
})
