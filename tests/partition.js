import test from 'ava'
import fn from '../prod/partition'

test('works for array inputs', t => {
  const input = [true, false, true, false]
  const result = fn(input, v => v === true)
  const expected = [[true, true], [false, false]]

  t.deepEqual(result, expected)
})

test('works for object inputs', t => {
  const input = { keyOne: true, keyTwo: false }
  const result = fn(input, v => v === true)
  const expected = [{ keyOne: true }, { keyTwo: false }]

  t.deepEqual(result, expected)
})

test('works for string inputs', t => {
  const input = 'some arbitrary string'
  const result = fn(input, v => v === ' ')
  const expected = ['  ', 'somearbitrarystring']

  t.deepEqual(result, expected)
})

test('works for map inputs', t => {
  const input = new Map([['keyOne', true], ['keyTwo', false]])
  const result = fn(input, v => v === true)
  const expected = [
    new Map([['keyOne', true]]),
    new Map([['keyTwo', false]])
  ]

  t.deepEqual(result, expected)
})

test('works for set inputs', t => {
  const input = new Set(['Joe', 'Jerry', 'Rick', 'Bob'])
  const result = fn(input, v => v.startsWith('J'))
  const expected = [
    new Set(['Joe', 'Jerry']),
    new Set(['Rick', 'Bob'])
  ]

  t.deepEqual(result, expected)
})
