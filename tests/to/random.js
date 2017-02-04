import test from 'ava'
import toRandom from '../../to/random'

test('operates on array input', t => {
  let input = [1, 2, 3]
  let result = toRandom(input)
  t.true(input.indexOf(result) > -1)
})

test('operates on object input', t => {
  let values = [1, 2, 3]
  let input = { one: 1, two: 2, three: 3 }
  let result = toRandom(input)
  t.true(values.indexOf(result) > -1)
})

test('operates on number input, one argument', t => {
  let result = toRandom(50)
  t.true(typeof result === 'number')
  t.true(result >= 0 && result <= 50)

  result = toRandom(1)
  t.true(typeof result === 'number')
  t.true(result >= 0 && result <= 1)
})

test('operates on number input, two arguments', t => {
  let result = toRandom(-1, 4)
  t.true(typeof result === 'number')
  t.true(result >= -1 && result <= 4)

  result = toRandom(0, 0)
  t.true(typeof result === 'number')
  t.true(result === 0)
})
