import test from 'ava'
import fn from '../is-one-of'

const str = 'string'
const arr = [1, 2, 3, 4, 5]
const obj = { name: 'shady', genre: 'rap' }
const map = new Map([['keyOne', 'aValue'], ['keyTwo', 'otherValue']])
const _set = new Set([1, 2, 3, 4, 5])

test(`returns true/false based on value's presence in collection`, t => {
  t.true(fn(str, 'r'))
  t.true(fn(str, 'ng'))
  t.false(fn(str, 'e'))

  t.true(fn(arr, 3))
  t.false(fn(arr, 6))

  t.true(fn(obj, 'rap'))
  t.false(fn(obj, 'folk'))

  t.true(fn(map, 'otherValue'))
  t.false(fn(map, 'notAValue'))

  t.true(fn(_set, 2))
  t.false(fn(_set, 6))
})

test('auto-curried at two arguments', t => {
  t.is(typeof fn([1, 2, 3, 4, 5]), 'function')
})
