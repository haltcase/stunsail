import test from 'ava'
import fn from '../../is/iterable'

test('returns true for iterable objects', t => {
  t.true(fn([]))
  t.true(fn(new Set([1, 2, 3])))
  t.true(fn(new Map([[1, 2], [3, 4]])))

  let custom = { [Symbol.iterator] () {} }
  t.true(fn(custom))
})

test('returns false for non-iterable objects', t => {
  t.false(fn({ 0: 'zero', length: 1 }))
  t.false(fn(new Date()))
  t.false(fn(null))
  t.false(fn(undefined))
  t.false(fn(false))
})
