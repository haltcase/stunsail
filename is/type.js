'use strict'

const curry2 = require('../fn/curry2')
const getType = require('../get-type')

module.exports = curry2((type, value) => {
  let assertionType = getType(type)

  if (assertionType !== 'string') {
    type = assertionType
  }

  return getType(value) === type.toLowerCase()
})
