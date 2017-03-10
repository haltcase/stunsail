import each from './each'
import curry from './curry'
import isArrayLike from './is-array-like'

export default curry(function filter (fn, collection) {
  let arrayLike = isArrayLike(collection)
  let result = arrayLike ? [] : {}

  each((v, k, o) => {
    if (fn(v, k, o)) {
      if (arrayLike) {
        result.push(v)
      } else {
        result[k] = v
      }
    }
  }, collection)

  return typeof collection === 'string'
    ? result.join('')
    : result
})
