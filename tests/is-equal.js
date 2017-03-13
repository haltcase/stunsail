import test from 'ava'
import fn from '../is-equal'

test('returns true for strictly equal primitives', t => {
  t.true(fn(1, 1))
  t.true(fn('one', 'one'))
  t.true(fn(true, true))
  t.true(fn(null, null))
  t.true(fn(undefined, undefined))
})

test('returns false for strictly unequal primitives', t => {
  t.false(fn(1, 2))
  t.false(fn('one', 'two'))
  t.false(fn(true, false))
  t.false(fn(null, undefined))
  t.false(fn(undefined, null))
})

test('returns false for different types', t => {
  t.false(fn(1, '1'))
  t.false(fn(true, 'true'))
  t.false(fn(null, 'null'))
  t.false(fn('undefined', undefined))
  t.false(fn([], {}))
  t.false(fn(new Date(), () => {}))
})

test('returns true for deeply equal objects', t => {
  t.true(fn({ color: 'red' }, { color: 'red' }))
  t.true(fn([1, 2, 3], [1, 2, 3]))
  t.true(fn(new Set([1, 2, 3, 4, 5]), new Set([1, 2, 3, 4, 5])))

  t.true(fn(
    new Map([['key1', 'value1'], ['key2', 'value2']]),
    new Map([['key1', 'value1'], ['key2', 'value2']])
  ))
})

test('returns false for deeply unequal objects', t => {
  t.false(fn({ color: 'red' }, { color: 'blue' }))
  t.false(fn([1, 2, 3], [1, 3, 5]))
  t.false(fn(new Set([1, 3, 5, 7, 9]), new Set([1, 2, 3, 4, 5])))

  t.false(fn(
    new Map([['key1', 'value1'], ['key2', 'value2']]),
    new Map([['key3', 'value3'], ['key4', 'value4']])
  ))
})

test('works as expected for weird values', t => {
  t.true(fn(NaN, NaN))
  t.true(fn(-0, 0))
})

test('auto-curried at two arguments', t => {
  t.is(typeof fn(1), 'function')
})
