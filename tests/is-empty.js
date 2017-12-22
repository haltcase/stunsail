import test from 'ava'
import fn from '../prod/is-empty'

test('reports true for empty values', t => {
  t.true(fn([]))
  t.true(fn({}))
  t.true(fn(''))
  t.true(fn(new Map()))
  t.true(fn(new Set()))
  t.true(fn(null))
  t.true(fn(undefined))
  t.true(fn(0))
  t.true(fn(false))
  t.true(fn(new Error()))
})

test('reports false for non-empty values', t => {
  t.false(fn(1))
  t.false(fn(true))
  t.false(fn([1, 2, 3]))
  t.false(fn({ one: 1 }))
  t.false(fn('foobar'))
  t.false(fn(new Map([[], []])))
  t.false(fn(new Set([1, 2, 3])))
  t.false(fn(new Error('failure')))
  t.false(fn(new Date()))
})
