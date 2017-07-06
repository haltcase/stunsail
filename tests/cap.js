import test from 'ava'
import fn from '../cap'

function target () {
  return arguments.length
}

const args = [1, 2, 3, 4, 5, 6]

test('limits maximum number of arguments passed to the function', t => {
  let zero = fn(target, 0)
  let one = fn(target, 1)
  let two = fn(target, 2)
  let three = fn(target, 3)
  let four = fn(target, 4)
  let five = fn(target, 5)
  let six = fn(target, 6)

  t.is(zero(...args), 0)
  t.is(one(...args), 1)
  t.is(two(...args), 2)
  t.is(three(...args), 3)
  t.is(four(...args), 4)
  t.is(five(...args), 5)
  t.is(six(...args), 6)
})
