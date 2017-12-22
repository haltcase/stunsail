import test from 'ava'
import fn from '../prod/all'

const object = { one: 1, two: 2, three: 3 }
const array = [1, 2, 3, 4]
const string = 'foobar'
const _set = new Set(array)
const _map = new Map([['one', 1], ['two', 2], ['three', 3]])

test('iterates over objects, short-circuiting on first failure', t => {
  let iterations = 0
  const result = fn(object, v => {
    iterations++
    return v % 2 === 1
  })

  t.false(result)
  t.is(iterations, 2)

  iterations = 0
  const all = fn(object, v => {
    iterations++
    return v < 5
  })

  t.true(all)
  t.is(iterations, 3)
})

test('iterates over arrays, short-circuiting on first failure', t => {
  let iterations = 0
  const result = fn(array, v => {
    iterations++
    return v === 1
  })

  t.false(result)
  t.is(iterations, 2)
})

test('iterates over strings, short-circuiting on first failure', t => {
  let iterations = 0
  const result = fn(string, v => {
    iterations++
    return v === 'f' || v === 'o'
  })

  t.false(result)
  t.is(iterations, 4)
})

test('works for `Map` and `Set`', t => {
  let setIterations = 0
  let mapIterations = 0
  const [setResult, mapResult] = [
    fn(_set, v => {
      setIterations++
      return v < 3
    }),
    fn(_map, v => {
      mapIterations++
      return v < 1
    })
  ]

  t.false(setResult)
  t.is(setIterations, 3)
  t.false(mapResult)
  t.is(mapIterations, 1)
})

test('allows omitting the predicate function', t => {
  const array = [true, true, true]
  t.true(fn(array))
  array.push(false)
  t.false(fn(array))
})
