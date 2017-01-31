import test from 'ava'
import fn from '../../util/each'

const object = { one: 1, two: 2, three: 3 }
const array = [1, 3, 5, 7]
const string = 'foobar'

test('iterates over objects', t => {
  fn(object, (v, k) => t.is(v, object[k]))
})

test('iterates over arrays & array-likes', t => {
  fn(array, (v, i) => t.is(v, array[i]))
  fn(string, (v, i) => t.is(v, string[i]))
})
