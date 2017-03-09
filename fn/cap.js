'use strict'

const curry = require('./curry')
const apply = require('./apply')
const getType = require('../get-type')
const toArray = require('../to/array')

module.exports = curry(function cap (limit, fn) {
  if (getType(fn) !== 'function') {
    throw new TypeError(`Expected a function.`)
  }

  if (getType(limit) !== 'number') {
    limit = Number(limit) || 0
  }

  let upper = Math.abs(limit)

  return function () {
    let args = toArray(arguments, 0, upper)
    return apply(fn, args)
  }
})
