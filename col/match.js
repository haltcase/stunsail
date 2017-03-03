'use strict'

const each = require('./each')
const isEqual = require('../is/equal')
const curry2 = require('../fn/curry2')

module.exports = curry2((compare, object) => {
  let match = true
  each((value, key) => {
    if (!isEqual(value, object[key])) {
      match = false
      return false
    }
  }, compare)
  
  return match
})
