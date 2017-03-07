import test from 'ava'
import fn from '../../fn/once'

test('calls provided function with an array of arguments', t => {
  let target = fn(x => x * 2)
  t.is(target(50), 100)

  t.is(target(1000), 100)
  t.is(target(Infinity), 100)
  t.is(target(null), 100)
  t.is(target({}), 100)
})
