'use strict'

const isArrayLike = require('../is/array-like')
const isObject = require('../is/object')
const toNumber = require('./number')

module.exports = (value, bound) => {
  if (isObject(value)) {
    let keys = Object.keys(value)
    return keys[~~(Math.random() * keys.length)]
  }

  if (isArrayLike(value)) {
    return value[~~(Math.random() * value.length)]
  }

  if (typeof value !== 'number') {
    value = toNumber(value)
  }

  if (typeof bound === 'undefined') {
    bound = value
    value = 0
  }

  if (value > bound) {
    let temp = value
    value = bound
    bound = temp
  }

  return value + Math.floor(Math.random() * (bound - value + 1))
}
