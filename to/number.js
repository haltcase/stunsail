'use strict'

const getType = require('../get-type')
const isArrayLike = require('../is/array-like')

const {
  BINARY_REGEX,
  OCTAL_REGEX,
  BAD_HEX_REGEX
} = require('../constants')

module.exports = (value, round) => {
  if (!value) return 0

  let type = getType(value)

  if (type === 'object') {
    value = getType(value.valueOf) === 'function'
      ? value.valueOf() : Object.keys().length
  }

  if (typeof value !== 'string') {
    if (isArrayLike(value)) return value.length
    value = String(value)
  }

  value = value.replace(/^\s+|\s+$/g, '')

  let isBinary = BINARY_REGEX.test(value)
  if (isBinary || OCTAL_REGEX.test(value)) {
    value = parseInt(value.slice(2), isBinary ? 2 : 8)
  } else {
    if (BAD_HEX_REGEX.test(value)) {
      value = (0 / 0)
    }
  }

  value = Number.isNaN(value) ? 0 : +value

  return round ? Math.round(value) : value
}
