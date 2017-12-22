import test from 'ava'
import fn from '../prod/reduce-while'

const object = { one: 1, two: 2, three: 3 }
const array = [1, 2, 3, 4, 5]
const string = 'foobar'

test('reduces object inputs while predicate returns true', t => {
  const result = fn(
    object,
    (acc, val) => acc !== 3,
    (acc, cur) => acc + cur,
    0
  )
  t.is(result, 3)
})

test('reduces array-like inputs while predicate returns true', t => {
  let result = fn(
    array,
    (acc, val) => val < 3,
    (acc, cur) => acc + cur,
    0
  )

  t.is(result, 3)

  result = fn(
    string,
    (acc, val) => val !== 'b',
    (acc, cur) => {
      acc.splice(0, 0, cur)
      return acc
    },
    []
  )

  t.deepEqual(result, ['o', 'o', 'f'])
})
