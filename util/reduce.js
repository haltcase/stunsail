'use strict'

const each = require('./each')
const curry3 = require('../fn/curry3')

module.exports = curry3((fn, initial, collection) => {
  let accumulator = initial

  each((v, k, o) => {
    accumulator = fn(accumulator, v, k, o)
  }, collection)

  return accumulator
})
