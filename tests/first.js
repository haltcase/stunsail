import test from 'ava'
import fn from '../prod/first'

function getArguments () { return arguments }

test('retrieves the first value of the given array-like', t => {
  let result = fn([1, 2, 3, 4, 5])
  t.is(result, 1)

  result = fn(getArguments('hi', 'world'))
  t.is(result, 'hi')
})

test('works for `Set`', t => {
  const result = fn(new Set([1, 2, 3, 4, 5]))
  t.is(result, 1)
})
