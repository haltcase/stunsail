'use strict'

const getType = require('../get-type')
const toArray = require('../to/array')

module.exports = (fn, args) => {
  if (getType(fn) !== 'function') {
    throw new TypeError(`Expected a function.`)
  }

  if (getType(args) !== 'array') {
    args = toArray(args)
  }

  let [a, b, c, d, e, f] = args
  switch (args.length) {
    case 0: return fn()
    case 1: return fn(a)
    case 2: return fn(a, b)
    case 3: return fn(a, b, c)
    case 4: return fn(a, b, c, d)
    case 5: return fn(a, b, c, d, e)
    case 6: return fn(a, b, c, d, e, f)
  }

  return fn.apply(null, args)
}
