import test from 'ava'
import fn from '../../is/buffer'

test('reports true only for buffer values', t => {
  t.true(fn(new Buffer('str')))
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