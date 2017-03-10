import test from 'ava'
import fn from '../is-type'

test('returns true if value is the given type', t => {
  t.true(fn('string', 'hello, world!'))
  t.true(fn('number', 1))
  t.true(fn('object', {}))
  t.true(fn('array', []))
  t.true(fn('date', new Date()))
  t.true(fn('function', Function))
  t.true(fn('boolean', true))
  t.true(fn('null', null))
  t.true(fn('undefined', undefined))
  t.true(fn('nan', NaN))
})

test('returns false if value is not the given type', t => {
  t.false(fn('string', Infinity))
  t.false(fn('number', 'hello, world!'))
  t.false(fn('object', new Date()))
  t.false(fn('array', Function))
  t.false(fn('date', 4))
  t.false(fn('function', []))
  t.false(fn('boolean', {}))
  t.false(fn('null', undefined))
  t.false(fn('undefined', null))
  t.false(fn('nan', 4))
})

test('auto-curried at two arguments', t => {
  t.is(typeof fn('nan'), 'function')
})

test('matches types if first argument is not a string', t => {
  t.true(fn([], []))
  t.true(fn(1, 3))
  t.false(fn({}, []))
  t.false(fn('1', 934))
})
