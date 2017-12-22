import test from 'ava'
import fn from '../prod/to-array'

const cases = [
  { input: undefined, output: [] },
  { input: null, output: [null] },
  { input: (function () { return arguments })(1), output: [1] },
  { input: 4, output: [4] },
  { input: true, output: [true] },
  { input: false, output: [false] },
  { input: {}, output: [{}] },
  { input: [], output: [] }
]

test('returns the expected array value based on input', t => {
  t.plan(cases.length)
  cases.forEach(({ input, output }) => t.deepEqual(fn(input), output))
})

test('removes values when provided the slice argument', t => {
  const input = [1, 2, 3, 4, 5]
  let result = fn(input, 2)
  t.deepEqual(result, [3, 4, 5])
  t.deepEqual(result, input.slice(2))

  result = fn(input, 2, -1)
  t.deepEqual(result, [3, 4])
  t.deepEqual(result, input.slice(2, -1))
})
