'use strict'

const getType = require('../get-type')

module.exports = (value, begin, end) => {
  let kind = getType(value)
  if (kind === 'undefined') return []

  let array = []
  if (kind === 'arguments' || kind === 'array') {
    array = Array.from(value)
  } else {
    array = Array.of(value)
  }

  return getType(begin) === 'number'
    ? array.slice(begin, end)
    : array
}
