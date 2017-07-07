import test from 'ava'
import fn from '../path-links'

test('converts string inputs to an array of path links', t => {
  t.deepEqual(fn('a.b.c[0]'), ['a', 'b', 'c', '0'])
})

test('returns input if it is an array', t => {
  t.deepEqual(fn(['a', 'b', 'c', '0']), ['a', 'b', 'c', '0'])
})
