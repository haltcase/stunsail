import test from 'ava'
import fn from '../prod/is-nil'

test('reports true only for null & undefined', t => {
  t.true(fn(null))
  t.true(fn(undefined))
  t.false(fn(false))
  t.false(fn(''))
  t.false(fn([]))
  t.false(fn({}))
  t.false(fn(new Map()))
  t.false(fn(new Set()))
  t.false(fn(new Date()))
  t.false(fn(NaN))
  t.false(fn(1))
})
