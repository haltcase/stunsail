import test from 'ava'
import fn from '../src/is-thenable'

test('reports true for Promises & other thenables', t => {
  t.true(fn(new Promise((resolve, reject) => {})))
  t.true(fn(Promise.resolve()))
  t.true(fn({ then: () => {} }))
})
