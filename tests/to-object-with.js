import test from 'ava'
import fn from '../prod/to-object-with'

const run = (expectedValues, input = expectedValues) => {
  const results = []

  const callback = value => {
    results.push(expectedValues.includes(value))
    return value
  }

  fn(input, callback)

  return results.every(Boolean)
}

test('array: callback receives each element', t => {
  t.true(run(['one', 'two', 'three']))
})

test('primitive: callback receives the primitive', t => {
  t.true(run([3], 3))
  t.true(run([true], true))
  t.true(run(['fly'], 'fly'))
  t.true(run([null], null))
  t.true(run([undefined], undefined))
})

test('object: callback receives each value', t => {
  t.true(run(['cool'], { ultra: 'cool' }))
})

test('array: callback receives value of object entry-like elements', t => {
  const input = [['keyOne', 1], ['keyTwo', 2], ['keyThree', 3]]
  t.true(run([1, 2, 3], input))
})

test('map: callback receives each element', t => {
  const input = new Map([['keyOne', 1], ['keyTwo', 2], ['keyThree', 3]])
  t.true(run([1, 2, 3], input))
})

test('set: callback receives each element', t => {
  const input = new Set(['one', 'two', 'three'])
  t.true(run(['one', 'two', 'three'], input))
})

test('returns an empty object for unhandled types', t => {
  t.throws(() => fn('input'), TypeError)
})

test('allows for transforming values of the resulting object', t => {
  const input = new Set(['one', 'two', 'three', 'four', 'five'])

  const callback = value => {
    switch (value) {
      case 'one': return [1]
      case 'two': return [2]
      case 'three': return [3]
      case 'four': return [4]
      case 'five': return [5]
    }
  }

  const actual = fn(input, callback)

  const expected = {
    one: [1],
    two: [2],
    three: [3],
    four: [4],
    five: [5]
  }

  t.deepEqual(actual, expected)
})
