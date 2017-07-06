import each from './each'
import isArrayLike from './is-array-like'

export default function filter (collection, fn) {
  let arrayLike = isArrayLike(collection)
  let result = arrayLike ? [] : {}

  each(collection, (v, k, o) => {
    if (fn(v, k, o)) {
      if (arrayLike) {
        result.push(v)
      } else {
        result[k] = v
      }
    }
  })

  return typeof collection === 'string'
    ? result.join('')
    : result
}
