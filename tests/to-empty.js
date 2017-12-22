import test from 'ava'
import fn from '../prod/to-empty'

test('returns an empty object of the provided type', t => {
  t.is(fn('string'), '')
  t.is(fn('number'), 0)
  t.is(fn('boolean'), false)
  t.is(fn('null'), null)
  t.is(fn('undefined'), undefined)
  t.deepEqual(fn('object'), {})
  t.deepEqual(fn('array'), [])
  t.deepEqual(fn('set'), new Set())
  t.deepEqual(fn('map'), new Map())
})

test('returns matching type if not provided string', t => {
  t.deepEqual(fn(null), null)
  t.deepEqual(fn(undefined), undefined)
  t.deepEqual(fn(1000), 0)
  t.deepEqual(fn([1, 2, 3, 4]), [])
  t.deepEqual(fn({ key: 'value' }), {})
})
