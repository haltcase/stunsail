'use strict'

const apply = require('./apply')
const getType = require('../get-type')
const toArray = require('../to/array')
const isNumber = require('../is/number')

module.exports = (fn, limit) => {
  if (getType(fn) !== 'function') {
    throw new TypeError(`Expected a function.`)
  }

  limit = isNumber(limit) ? Math.abs(limit) : fn.length || 0

  if (
    ('length' in fn) &&
    (fn.length < 1 ||
    (fn.length > 0 && limit >= fn.length))
  ) {
    return fn
  }

  return function () {
    let args = toArray(arguments, 0, limit)
    return apply(fn, args)
  }
}
