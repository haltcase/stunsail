'use strict'

const getType = require('../get-type')
const isOneOf = require('./one-of')

module.exports = value => {
  let type = getType(value)

  return isOneOf([
    'error',
    'typeerror',
    'rangeerror',
    'referenceerror',
    'evalerror',
    'urierror',
    'syntaxerror'
  ], type)
}
