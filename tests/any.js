import test from 'ava'
import fn from '../prod/any'

const object = { one: 1, two: 2, three: 3 }
const array = [1, 2, 3, 4]
const string = 'foobar'
const _set = new Set(array)
const _map = new Map([['one', 1], ['two', 2], ['three', 3]])

test('iterates over objects, short-circuiting on first success', t => {
  let iterations = 0
  const result = fn(object, v => {
    iterations++
    return v % 2 === 0
  })

  t.true(result)
  t.is(iterations, 2)

  iterations = 0
  const none = fn(object, (v, k) => {
    iterations++
    return k === 'forty'
  })

  t.false(none)
  t.is(iterations, 3)
})

test('iterates over arrays, short-circuiting on first success', t => {
  let iterations = 0
  const result = fn(array, v => {
    iterations++
    return v % 2 === 1
  })

  t.true(result)
  t.is(iterations, 1)
})

test('iterates over strings, short-circuiting on first success', t => {
  let iterations = 0
  const result = fn(string, v => {
    iterations++
    return v === 'b'
  })

  t.true(result)
  t.is(iterations, 4)
})

test('works for `Map` and `Set`', t => {
  let setIterations = 0
  let mapIterations = 0
  const [setResult, mapResult] = [
    fn(_set, v => {
      setIterations++
      return v % 2 === 0
    }),
    fn(_map, v => {
      mapIterations++
      return v === 2
    })
  ]

  t.true(setResult)
  t.is(setIterations, 2)
  t.true(mapResult)
  t.is(mapIterations, 2)
})

test('allows omitting the predicate function', t => {
  const array = [false, false, false]
  t.false(fn(array))
  array.push(true)
  t.true(fn(array))
})
