import test from 'ava'
import fn from '../src/filter'

const object = { one: 1, two: 2, three: 3 }
const array = [1, 2, 3, 4, 5]
const string = 'foobar'

test('filters object inputs', t => {
  const result = fn(object, value => value % 2)
  t.deepEqual(result, { one: 1, three: 3 })
})

test('filters array-like inputs', t => {
  let result = fn(array, value => value % 2)
  t.deepEqual(result, [1, 3, 5])

  result = fn(string, value => value !== 'o')
  t.is(result, 'fbar')
})
