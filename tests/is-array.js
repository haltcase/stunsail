import test from 'ava'
import fn from '../prod/is-array'

test('reports true only for array values', t => {
  t.true(fn([]))
  t.false(fn({}))
  t.false(fn(''))
  t.false(fn(new Map()))
  t.false(fn(new Set()))
  t.false(fn(null))
  t.false(fn(undefined))
  t.false(fn(1))
  t.false(fn(true))
})
