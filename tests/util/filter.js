import test from 'ava'
import fn from '../../util/filter'

const object = { one: 1, two: 2, three: 3 }
const array = [1, 2, 3, 4, 5]
const string = 'foobar'

test('filters object inputs', t => {
  let result = fn(value => value % 2, object)
  t.deepEqual(result, { one: 1, three: 3 })
})

test('filters array-like inputs', t => {
  let result = fn(value => value % 2, array)
  t.deepEqual(result, [1, 3, 5])

  result = fn(value => value !== 'o', string)
  t.is(result, 'fbar')
})

test('auto-curried at two arguments', t => {
  t.is(typeof fn(() => {}), 'function')
})
