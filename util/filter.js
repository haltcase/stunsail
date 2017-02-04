'use strict'

const each = require('./each')
const curry2 = require('../fn/curry2')
const isArrayLike = require('../is/array-like')

module.exports = curry2((fn, collection) => {
  let arrayLike = isArrayLike(collection)
  let result = arrayLike ? [] : {}

  each((v, k, o) => {
    if (fn(v, k, o)) {
      if (arrayLike) {
        result.push(v)
      } else {
        result[k] = v
      }
    }
  }, collection)

  return typeof collection === 'string'
    ? result.join('')
    : result
})
