import test from 'ava'
import fn from '../src/is-date'

test('reports true only for date objects', t => {
  t.true(fn(new Date()))
  t.false(fn(false))
  t.false(fn(''))
  t.false(fn([]))
  t.false(fn({}))
  t.false(fn(new Map()))
  t.false(fn(new Set()))
  t.false(fn(null))
  t.false(fn(undefined))
  t.false(fn(1))
})
