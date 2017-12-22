import test from 'ava'
import fn from '../prod/cap'

function target () {
  return arguments.length
}

const args = [1, 2, 3, 4, 5, 6]

test('limits maximum number of arguments passed to the function', t => {
  const zero = fn(target, 0)
  const one = fn(target, 1)
  const two = fn(target, 2)
  const three = fn(target, 3)
  const four = fn(target, 4)
  const five = fn(target, 5)
  const six = fn(target, 6)

  t.is(zero(...args), 0)
  t.is(one(...args), 1)
  t.is(two(...args), 2)
  t.is(three(...args), 3)
  t.is(four(...args), 4)
  t.is(five(...args), 5)
  t.is(six(...args), 6)
})
