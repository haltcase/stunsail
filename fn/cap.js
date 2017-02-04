'use strict'

const getType = require('../get-type')
const isNumber = require('../is/number')

module.exports = (fn, limit) => {
  if (getType(fn) !== 'function') {
    throw new TypeError(`Expected a function.`)
  }

  limit = isNumber(limit) ? limit : fn.length || 0

  switch (limit) {
    case 1: return a => fn(a)
    case 2: return (a, b) => fn(a, b)
    case 3: return (a, b, c) => fn(a, b, c)
    case 4: return (a, b, c, d) => fn(a, b, c, d)
  }

  return fn
}
