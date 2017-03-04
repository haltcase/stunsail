import test from 'ava'
import fn from '../../col/get'

const object = { key: 'value', nested: { inner: { deep: 'thing' } } }

test('returns the value at path if it is defined', t => {
  let res = fn('key', object)
  t.is(res, 'value')
})

test('returns deeply nested values', t => {
  let res = fn('nested.inner.deep', object)
  t.is(res, 'thing')
})

test('auto-curried at two arguments', t => {
  t.is(typeof fn('key'), 'function')
})
