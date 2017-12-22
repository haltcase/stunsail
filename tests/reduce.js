import test from 'ava'
import fn from '../prod/reduce'

const object = { one: 1, two: 2, three: 3 }
const array = [1, 2, 3, 4, 5]
const string = 'foobar'

test('reduces object inputs', t => {
  const result = fn(object, (acc, cur) => acc + cur, 0)
  t.is(result, 6)
})

test('reduces array-like inputs', t => {
  let result = fn(array, (acc, cur) => acc + cur, 0)
  t.is(result, 15)

  result = fn(string, (acc, cur) => {
    acc.splice(0, 0, cur)
    return acc
  }, [])

  t.deepEqual(result, ['r', 'a', 'b', 'o', 'o', 'f'])
})
