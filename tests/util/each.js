import test from 'ava'
import fn from '../../util/each'

const object = { one: 1, two: 2, three: 3 }
const array = [1, 3, 5, 7]
const string = 'foobar'

test('iterates over objects', t => {
  fn((v, k) => t.is(v, object[k]), object)
})

test('iterates over arrays & array-likes', t => {
  fn((v, i) => t.is(v, array[i]), array)
  fn((v, i) => t.is(v, string[i]), string)
})

test('auto-curried at two arguments', t => {
  t.is(typeof fn(() => {}), 'function')
})
