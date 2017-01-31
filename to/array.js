'use strict'

const getType = require('../get-type')

module.exports = (value, slice) => {
  let kind = getType(value)
  if (kind === 'undefined') return []

  let array = []
  if (kind === 'arguments' || kind === 'array') {
    array = Array.from(value)
  } else {
    array = Array.of(value)
  }

  return getType(slice) === 'number'
    ? array.slice(slice)
    : array
}
