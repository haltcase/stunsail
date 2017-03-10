import each from './each'
import curry from './curry'
import isArrayLike from './is-array-like'

export default curry(function map (fn, collection) {
  let arrayLike = isArrayLike(collection)
  let result = arrayLike ? [] : {}

  let i = -1
  each((v, k, o) => {
    k = arrayLike ? ++i : k
    result[k] = fn(v, k, o)
  }, collection)

  return typeof collection === 'string'
    ? result.join('')
    : result
})
