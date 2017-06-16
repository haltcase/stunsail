import test from 'ava'
import fn from '../reduce-while'

const object = { one: 1, two: 2, three: 3 }
const array = [1, 2, 3, 4, 5]
const string = 'foobar'

test('reduces object inputs while predicate returns true', t => {
  let result = fn(
    (acc, val) => acc !== 3,
    (acc, cur) => acc + cur,
    0,
    object
  )
  t.is(result, 3)
})

test('reduces array-like inputs while predicate returns true', t => {
  let result = fn(
    (acc, val) => val < 3,
    (acc, cur) => acc + cur,
    0,
    array
  )

  t.is(result, 3)

  result = fn(
    (acc, val) => val !== 'b',
    (acc, cur) => {
      acc.splice(0, 0, cur)
      return acc
    },
    [],
    string
  )

  t.deepEqual(result, ['o', 'o', 'f'])
})

test('auto-curried at four arguments', t => {
  t.is(typeof fn(() => {}), 'function')
  t.is(typeof fn(() => {}, () => {}), 'function')
  t.is(typeof fn(() => {}, () => {}, []), 'function')
})
