import isEqual from './is-equal'
import getType from './get-type'

export default function isOneOf (value, collection) {
  const inputType = getType(collection)

  switch (inputType) {
    case 'string':
      return collection.indexOf(value) > -1
    case 'array':
      return findIndex(collection, value) > -1
    case 'object':
      const values = Object.keys(collection).map(k => collection[k])
      return findIndex(values, value) > -1
    case 'set':
      return collection.has(value)
    case 'map':
      return findIndex(Array.from(collection.values()), value) > -1
    default:
      throw new TypeError(
        `expected a collection-like object and got ${inputType}`
      )
  }
}

function findIndex (arr, val) {
  const { length } = arr

  let i = -1
  while (++i < length) {
    if (isEqual(val, arr[i])) {
      return i
    }
  }

  return -1
}
