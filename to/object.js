'use strict'

const getType = require('../get-type')
const isPrimitive = require('../is/primitive')

module.exports = value => {
  if (isPrimitive(value)) return { [value]: value }

  let inputType = getType(value)
  if (inputType === 'object') return value
  if (inputType !== 'array') return {}

  return value.reduce((acc, key) => {
    if (Array.isArray(key) && key.length === 2) {
      return Object.assign(acc, { [key[0]]: key[1] })
    }

    return Object.assign(acc, { [key]: key })
  }, {})
}
