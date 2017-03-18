import test from 'ava'
import fn from '../defaults'

test('does not overwrite defined keys', t => {
  let object = { one: 1, two: 2 }
  let result = fn(object, { one: 2, two: 4 })
  t.deepEqual(result, object)
})

test('applies undefined keys', t => {
  let object = { one: 1, two: 2 }
  let result = fn(object, { three: 3, replaced: true })
  let compare = { one: 1, two: 2, three: 3, replaced: true }
  t.deepEqual(compare, result)
})

test('deeply applies undefined keys', t => {
  let object = {
    inner: {
      nested: {
        key: 'value'
      },
      other: {
        inside: true
      }
    }
  }

  let result = fn(object, {
    inner: {
      nested: {
        newKey: 'with a value'
      },
      other: {
        inside: false
      }
    }
  })

  let compare = {
    inner: {
      nested: {
        key: 'value',
        newKey: 'with a value'
      },
      other: {
        inside: true
      }
    }
  }

  t.deepEqual(compare, result)
})
