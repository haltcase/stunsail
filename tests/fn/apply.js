import test from 'ava'
import fn from '../../fn/apply'

function target () {
  return arguments.length
}

const args = [1, 2, 3, 4, 5, 6]

test('calls provided function with an array of arguments', t => {
  t.is(fn(target, args), 6)
})
