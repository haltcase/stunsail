import test from 'ava'
import fn from '../../col/match'

test('returns true when specified properties match', t => {
  let obj = { name: 'wishy', color: 'green' }
  t.true(fn({ color: 'green' }, obj))
})

test('returns false when specified properties do not match', t => {
  let obj = { name: 'washy', color: 'red' }
  t.false(fn({ color: 'blue' }, obj))
})

test('auto-curried at two arguments', t => {
  t.is(typeof fn({}), 'function')
})

test('effective as a predicate for Array#find()', t => {
  let arr = [
    { name: 'willy', color: 'red' },
    { name: 'wally', color: 'red' },
    { name: 'dopey', color: 'brown' },
    { name: 'wishy', color: 'blue' },
    { name: 'washy', color: 'green' }
  ]

  let res1 = arr.find(fn({ color: 'green' }))
  let res2 = arr.find(fn({ color: 'brown' }))
  let res3 = arr.find(fn({ color: 'red' }))

  t.is(res1.name, 'washy')
  t.is(res2.name, 'dopey')
  t.is(res3.name, 'willy')
})
