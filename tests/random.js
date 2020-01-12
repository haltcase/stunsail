import test from 'ava'
import fn from '../src/random'

test('operates on array input', t => {
  const input = [1, 2, 3]
  const result = fn(input)
  t.true(input.indexOf(result) > -1)
})

test('operates on object input', t => {
  const values = [1, 2, 3]
  const input = { one: 1, two: 2, three: 3 }
  const result = fn(input)
  t.true(values.indexOf(result) > -1)
})

test('operates on number input, one argument', t => {
  let result = fn(50)
  t.true(typeof result === 'number')
  t.true(result >= 0 && result <= 50)

  result = fn(1)
  t.true(typeof result === 'number')
  t.true(result >= 0 && result <= 1)
})

test('operates on number input, two arguments', t => {
  let result = fn(-1, 4)
  t.true(typeof result === 'number')
  t.true(result >= -1 && result <= 4)

  result = fn(0, 0)
  t.true(typeof result === 'number')
  t.true(result === 0)
})
