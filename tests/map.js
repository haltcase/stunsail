import test from 'ava'
import fn from '../map'

const object = { one: 1, two: 2, three: 3 }
const array = [1, 3, 5, 7]
const string = 'foobar'

test('maps over objects', t => {
  let newObject = fn(v => v + 1, object)
  t.deepEqual(newObject, { one: 2, two: 3, three: 4 })
})

test('maps over arrays', t => {
  let newArray = fn(v => v * -1, array)
  t.deepEqual(newArray, [-1, -3, -5, -7])
})

test('mapping a string results in a string', t => {
  let newString = fn(v => v + '-', string)
  t.is(newString, 'f-o-o-b-a-r-')
})

test('auto-curried at two arguments', t => {
  t.is(typeof fn(() => {}), 'function')
})
