'use strict'

const getType = require('../get-type')

const is = module.exports = (a, b) => {
  // eslint-disable-next-line no-self-compare
  if (a === b || (a !== a && b !== b)) return true

  let aType = getType(a)
  let bType = getType(b)

  if (
    aType !== bType ||
    !a || !b ||
    typeof a !== 'object'
  ) {
    return false
  }

  switch (aType) {
    case 'array':
      if (a.length !== b.length) return false
      return isDeep(a, b)
    case 'date':
      return a.valueOf() === b.valueOf()
    case 'promise':
      return a === b
    case 'map':
    case 'set':
      let aEntries = [...a.entries()]
      let bEntries = [...b.entries()]
      return aEntries.length === bEntries.length && is(aEntries, bEntries)
    // All object types require a deep comparison
    default:
      return isDeep(a, b)
  }
}

function isDeep (a, b) {
  let aKeys = Object.keys(a)
  if (aKeys.length !== Object.keys(b).length) return false

  let i = aKeys.length - 1
  while (i >= 0) {
    if (!{}.hasOwnProperty.call(b, aKeys[i])) return false
    let key = aKeys[i]
    if (!is(a[key], b[key])) return false
    i -= 1
  }
  return true
}
