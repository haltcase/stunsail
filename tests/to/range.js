import test from 'ava'
import fn from '../../to/range'

test('returns an array containing numbers from start to end', t => {
  t.deepEqual(fn(0, 10), [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
})

test('creates a range using the given step value', t => {
  t.deepEqual(fn(0, 10, 2), [0, 2, 4, 6, 8, 10])
})
