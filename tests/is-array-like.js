import test from 'ava'
import fn from '../is-array-like'

function getArguments () { return arguments }

test('reports true for arrays and array-likes', t => {
  t.true(fn([]))
  t.true(fn('some string'))
  t.true(fn({ 0: 'zero', length: 1 }))
  t.true(fn(getArguments(1, 2, 3, 4)))
})

test('reports false for non-arrays & other objects', t => {
  t.false(fn({ key: 'value' }))
  t.false(fn(new Date()))
  t.false(fn(4))
  t.false(fn(true))
  t.false(fn(new Map()))
  t.false(fn(new Set()))
})
