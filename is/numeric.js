'use strict'

const isString = require('./string')
const isNumber = require('./number')

module.exports = value => {
  if (isNumber(value)) return true
  if (!isString(value)) return false
  return (/^((?:\d+)?\.?(?:\d+)?)$/).test(value)
}
