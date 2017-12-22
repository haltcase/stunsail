import test from 'ava'
import fn from '../prod/is-numeric'

test('reports true for numbers & numeric string values', t => {
  t.true(fn(1))
  t.true(fn(1.343))
  t.true(fn(Infinity))
  t.true(fn('1'))
  t.true(fn('1.6'))
  t.true(fn('943034.3923'))

  t.false(fn(false))
  t.false(fn([]))
  t.false(fn({}))
  t.false(fn(new Map()))
  t.false(fn(new Set()))
  t.false(fn(new Date()))
  t.false(fn(NaN))
  t.false(fn(null))
  t.false(fn(undefined))
})
