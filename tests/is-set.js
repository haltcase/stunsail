import test from 'ava'
import fn from '../src/is-set'

test('reports true only for `Set` objects', t => {
  t.true(fn(new Set()))
  t.false(fn('string'))
  t.false(fn(1))
  t.false(fn(false))
  t.false(fn({}))
  t.false(fn([]))
  t.false(fn(new Map()))
  t.false(fn(new Date()))
  t.false(fn(NaN))
  t.false(fn(null))
  t.false(fn(undefined))
})
