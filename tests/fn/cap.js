import test from 'ava'
import fn from '../../fn/cap'

function target () {
  return arguments.length
}

const args = [1, 2, 3, 4, 5, 6]

test('limits maximum number of arguments passed to the function', t => {
  let zero = fn(0, target)
  let one = fn(1, target)
  let two = fn(2, target)
  let three = fn(3, target)
  let four = fn(4, target)
  let five = fn(5, target)
  let six = fn(6, target)

  t.is(zero(...args), 0)
  t.is(one(...args), 1)
  t.is(two(...args), 2)
  t.is(three(...args), 3)
  t.is(four(...args), 4)
  t.is(five(...args), 5)
  t.is(six(...args), 6)
})
