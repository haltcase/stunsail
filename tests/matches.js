import test from 'ava'
import fn from '../src/matches'

test('returns true when specified properties match', t => {
  const obj = { name: 'wishy', color: 'green' }
  t.true(fn(obj, { color: 'green' }))
})

test('returns false when specified properties do not match', t => {
  const obj = { name: 'washy', color: 'red' }
  t.false(fn(obj, { color: 'blue' }))
})

test('effective as a predicate for Array#find()', t => {
  const arr = [
    { name: 'willy', color: 'red' },
    { name: 'wally', color: 'red' },
    { name: 'dopey', color: 'brown' },
    { name: 'wishy', color: 'blue' },
    { name: 'washy', color: 'green' }
  ]

  const res1 = arr.find(o => fn(o, { color: 'green' }))
  const res2 = arr.find(o => fn(o, { color: 'brown' }))
  const res3 = arr.find(o => fn(o, { color: 'red' }))

  t.is(res1.name, 'washy')
  t.is(res2.name, 'dopey')
  t.is(res3.name, 'willy')
})
