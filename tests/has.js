import test from 'ava'
import fn from '../has'

const object = { key: 'value', nested: { inner: { deep: 'thing' } } }

test(`returns true/false based on path's existence in the object`, t => {
  t.true(fn('nested.inner.deep', object))
  t.false(fn('super.deep.ultra.nested.inner.path', object))
})

test('auto-curried at two arguments', t => {
  t.is(typeof fn('key'), 'function')
})
