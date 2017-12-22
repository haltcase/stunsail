import test from 'ava'
import fn from '../prod/is-one-of'

const str = 'string'
const arr = [1, 2, 3, 4, 5]
const obj = { name: 'shady', genre: 'rap' }
const map = new Map([['keyOne', 'aValue'], ['keyTwo', 'otherValue']])
const _set = new Set([1, 2, 3, 4, 5])

test(`returns true/false based on value's presence in collection`, t => {
  t.true(fn('r', str))
  t.true(fn('ng', str))
  t.false(fn('e', str))

  t.true(fn(3, arr))
  t.false(fn(6, arr))

  t.true(fn('rap', obj))
  t.false(fn('folk', obj))

  t.true(fn('otherValue', map))
  t.false(fn('notAValue', map))

  t.true(fn(2, _set))
  t.false(fn(6, _set))
})
