'use strict'

const getType = require('../get-type')
const apply = require('./apply')

module.exports = fn => {
  let type = getType(fn)
  if (type !== 'function') {
    throw new TypeError(`Expected function, got ${type}`)
  }

  let result
  let called = false

  return function () {
    if (!called) {
      result = apply(fn, this, arguments)
    }

    fn = undefined
    called = true
    return result
  }
}
