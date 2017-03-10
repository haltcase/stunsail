import each from './each'
import curry from './curry'

export default curry(function reduce (fn, initial, collection) {
  let accumulator = initial

  each((v, k, o) => {
    accumulator = fn(accumulator, v, k, o)
  }, collection)

  return accumulator
})
