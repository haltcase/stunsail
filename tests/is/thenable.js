import test from 'ava'
import fn from '../../is/thenable'

test('reports true for Promises & other thenables', t => {
  t.true(fn(Promise.resolve()))
  t.true(fn(new Promise((r, t) => {})))
  t.true(fn({ then: () => {} }))
})
