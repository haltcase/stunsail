import test from 'ava'
import fn from '../set'

const object = { key: 'value', nested: { inner: { deep: 'thing' } } }

test('sets the key at path to the given value', t => {
  let res = fn(40, 'nested.inner.deep', object)
  t.is(object.nested.inner.deep, 40)
  t.is(object, res)
})

test('auto-curried at three arguments', t => {
  t.is(typeof fn('value'), 'function')
  t.is(typeof fn('value', 'some.path'), 'function')
})
