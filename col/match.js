'use strict'

const each = require('./each')
const isEqual = require('../is/equal')
const curry = require('../fn/curry')

module.exports = curry(function match (compare, object) {
  let isMatch = true
  each((value, key) => {
    if (!isEqual(value, object[key])) {
      isMatch = false
      return false
    }
  }, compare)

  return isMatch
})
