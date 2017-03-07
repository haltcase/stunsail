'use strict'

const each = require('./each')
const curry = require('../fn/curry')

module.exports = curry(function reduce (fn, initial, collection) {
  let accumulator = initial

  each((v, k, o) => {
    accumulator = fn(accumulator, v, k, o)
  }, collection)

  return accumulator
})
