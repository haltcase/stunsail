import each from './each'
import isArrayLike from './is-array-like'

export default function map (collection, fn) {
  let arrayLike = isArrayLike(collection)
  let result = arrayLike ? [] : {}

  let i = -1
  each(collection, (v, k, o) => {
    k = arrayLike ? ++i : k
    result[k] = fn(v, k, o)
  })

  return typeof collection === 'string'
    ? result.join('')
    : result
}
