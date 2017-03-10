import test from 'ava'
import fn from '../get-or'

const object = { key: 'value', nested: { inner: { deep: 'thing' } } }

test('returns the value at path if it is defined', t => {
  let res = fn('string', 'key', object)
  t.is(res, 'value')
})

test('returns deeply nested values', t => {
  let res = fn('nope', 'nested.inner.deep', object)
  t.is(res, 'thing')
})

test('returns given default value if path is undefined', t => {
  let res = fn('string', 'key.inside.value', object)
  t.is(res, 'string')
})

test('auto-curried at three arguments', t => {
  t.is(typeof fn(1), 'function')
  t.is(typeof fn(1, 'key'), 'function')
})
