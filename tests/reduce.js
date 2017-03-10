import test from 'ava'
import fn from '../reduce'

const object = { one: 1, two: 2, three: 3 }
const array = [1, 2, 3, 4, 5]
const string = 'foobar'

test('reduces object inputs', t => {
  let result = fn((acc, cur) => acc + cur, 0, object)
  t.is(result, 6)
})

test('reduces array-like inputs', t => {
  let result = fn((acc, cur) => acc + cur, 0, array)
  t.is(result, 15)

  result = fn((acc, cur) => {
    acc.splice(0, 0, cur)
    return acc
  }, [], string)

  t.deepEqual(result, ['r', 'a', 'b', 'o', 'o', 'f'])
})

test('auto-curried at three arguments', t => {
  t.is(typeof fn(() => {}), 'function')
  t.is(typeof fn(() => {}, []), 'function')
})
