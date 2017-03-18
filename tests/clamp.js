import test from 'ava'
import fn from '../clamp'

test('ensures the number is within the supplied range', t => {
  t.is(fn(20, -10, 10), 10)
  t.is(fn(-15, -10, 10), -10)
})
