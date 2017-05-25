import test from 'ava'
import fn from '../partition'

test('works for array inputs', t => {
  let input = [true, false, true, false]
  let result = fn(v => v === true, input)
  let expected = [[true, true], [false, false]]

  t.deepEqual(result, expected)
})

test('works for object inputs', t => {
  let input = { keyOne: true, keyTwo: false }
  let result = fn(v => v === true, input)
  let expected = [{ keyOne: true }, { keyTwo: false }]

  t.deepEqual(result, expected)
})

test('works for string inputs', t => {
  let input = 'some arbitrary string'
  let result = fn(v => v === ' ', input)
  let expected = ['  ', 'somearbitrarystring']

  t.deepEqual(result, expected)
})

test('works for map inputs', t => {
  let input = new Map([['keyOne', true], ['keyTwo', false]])
  let result = fn(v => v === true, input)
  let expected = [
    new Map([['keyOne', true]]),
    new Map([['keyTwo', false]])
  ]

  t.deepEqual(result, expected)
})

test('works for set inputs', t => {
  let input = new Set(['Joe', 'Jerry', 'Rick', 'Bob'])
  let result = fn(v => v.startsWith('J'), input)
  let expected = [
    new Set(['Joe', 'Jerry']),
    new Set(['Rick', 'Bob'])
  ]

  t.deepEqual(result, expected)
})
