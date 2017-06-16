import each from './each'
import curry from './curry'

export default curry(function reduce (predicate, fn, initial, collection) {
  let accumulator = initial

  each((v, k, o) => {
    if (!predicate(accumulator, v)) return false
    accumulator = fn(accumulator, v, k, o)
  }, collection)

  return accumulator
})
