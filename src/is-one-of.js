import isEqual from './is-equal'
import curry from './curry'
import getType from './get-type'

export default curry((collection, value) => {
  let inputType = getType(collection)

  switch (inputType) {
    case 'string':
      return collection.indexOf(value) > -1
    case 'array':
      return findIndex(collection, value) > -1
    case 'object':
      let values = Object.keys(collection).map(k => collection[k])
      return findIndex(values, value) > -1
    default:
      throw new TypeError(
        `expected array, object, or string and got ${inputType}`
      )
  }
})

function findIndex (arr, val) {
  let i = -1
  let length = arr.length

  while (++i < length) {
    if (isEqual(val, arr[i])) {
      return i
    }
  }

  return -1
}
