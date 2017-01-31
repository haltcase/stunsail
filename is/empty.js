'use strict'

const getType = require('../get-type')
const isArrayLike = require('./array-like')
const isOneOf = require('./one-of')

const INPUT_ARRAY_LIKES = [
  'array',
  'string',
  'arguments',
  'buffer'
]

module.exports = value => {
  let type = getType(value)
  if (isArrayLike(value)) {
    if (isOneOf(INPUT_ARRAY_LIKES, type)) {
      return !value.length
    }
  }

  if (type === 'set' || type === 'map') {
    return !value.size
  }

  if (type === 'object') {
    return !Object.keys(value).length
  }

  return true
}
