import test from 'ava'
import fn from '../prod/is-function'

test('reports true only for functions', t => {
  t.true(fn(Function))
  t.true(fn(() => {}))
  t.true(fn(async () => {}))
  t.true(fn(function () {}))
  t.true(fn(function * () {}))
  t.false(fn(false))
  t.false(fn(''))
  t.false(fn([]))
  t.false(fn({}))
  t.false(fn(new Map()))
  t.false(fn(new Set()))
  t.false(fn(new Date()))
  t.false(fn(null))
  t.false(fn(undefined))
  t.false(fn(1))
})
