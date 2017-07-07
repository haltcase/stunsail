import test from 'ava'
import fn from '../path-dots'

test('converts input arrays to dot paths', t => {
  t.is(fn(['a', 'b', 'c', '0']), 'a.b.c.0')
})

test('normalizes input strings to dot notation', t => {
  t.is(fn('a[1].b.c[0]'), 'a.1.b.c.0')
})
