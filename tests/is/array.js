import test from 'ava'
import fn from '../../is/empty'

test('reports true for empty values', t => {
  t.true(fn([]))
  t.true(fn({}))
  t.true(fn(''))
  t.true(fn(new Map()))
  t.true(fn(new Set()))
  t.true(fn(null))
  t.true(fn(undefined))
  t.true(fn(1))
  t.true(fn(true))
})

test('reports false for non-empty values', t => {
  t.false(fn([1, 2, 3]))
  t.false(fn({ one: 1 }))
  t.false(fn('foobar'))
  t.false(fn(new Map([[], []])))
  t.false(fn(new Set([1, 2, 3])))
})
