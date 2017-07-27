import getType from './get-type'
import isIterable from './is-iterable'
import isArrayLike from './is-array-like'

export default function each (collection, fn) {
  const type = getType(collection)
  if (isIterable(collection)) {
    let i = 0
    for (let key of collection) {
      let value = collection[key]
      if (type === 'map') {
        value = key[1]
        key = key[0]
      } else if (type === 'set') {
        value = key
      } else if (isArrayLike(collection)) {
        value = key
        key = i++
      }

      if (fn(value, key, collection) === false) break
    }
  } else if (type === 'object') {
    const keys = Object.keys(collection)
    for (const key of keys) {
      const value = collection[key]
      if (fn(value, key, collection) === false) break
    }
  }
}
