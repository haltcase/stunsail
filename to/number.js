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

  let inputType = getType(value)

  let rolling = value
  if (typeof rolling === 'object') {
    rolling = inputType === 'object'
      ? Object.keys(rolling).length
      : getType(rolling.valueOf) === 'function'
        ? rolling.valueOf()
        : rolling
  }

  if (typeof rolling !== 'string') {
    if (isArrayLike(rolling)) return rolling.length
    rolling = String(rolling)
  }

  rolling = rolling.replace(/^\s+|\s+$/g, '')

  let isBinary = BINARY_REGEX.test(rolling)
  if (isBinary || OCTAL_REGEX.test(rolling)) {
    rolling = parseInt(rolling.slice(2), isBinary ? 2 : 8)
  } else {
    if (BAD_HEX_REGEX.test(rolling)) {
      rolling = (0 / 0)
    }
  }

  rolling = Number.isNaN(rolling) ? 0 : +rolling
  rolling = Number.isNaN(rolling)
    ? inputType === 'string' ? value.length : 0
    : rolling

  return round ? Math.round(rolling) : rolling
}
