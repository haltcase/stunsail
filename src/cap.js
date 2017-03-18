import curry from './curry'
import apply from './apply'
import getType from './get-type'
import toArray from './to-array'

export default curry(function cap (limit, fn) {
  if (getType(fn) !== 'function') {
    throw new TypeError(`Expected a function.`)
  }

  if (getType(limit) !== 'number') {
    limit = Number(limit) || fn.length
  }

  let upper = Math.abs(limit)

  return function () {
    let args = toArray(arguments, 0, upper)
    return apply(fn, args)
  }
})
