'use strict'

const each = require('./each')
const isEqual = require('../is/equal')
const curry = require('../fn/curry')

module.exports = curry(function match (compare, object) {
  let match = true
  each((value, key) => {
    if (!isEqual(value, object[key])) {
      match = false
      return false
    }
  }, compare)

  return match
})
