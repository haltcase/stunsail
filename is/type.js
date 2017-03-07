'use strict'

const curry = require('../fn/curry')
const getType = require('../get-type')

module.exports = curry(function isType (type, value) {
  let assertionType = getType(type)

  if (assertionType !== 'string') {
    type = assertionType
  }

  return getType(value) === type.toLowerCase()
})
