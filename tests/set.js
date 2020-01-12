import test from 'ava'
import fn from '../src/set'

const object = { key: 'value', nested: { inner: { deep: 'thing' } } }

test('sets the key at path to the given value', t => {
  const res = fn(object, 'nested.inner.deep', 40)
  t.is(object.nested.inner.deep, 40)
  t.is(object, res)
})
