'use strict'

const getType = require('../get-type')
const isOneOf = require('../is/one-of')

module.exports = (object, extension) => {
  object = Object.assign({}, object)

  return base(object, extension, (obj, ext, key) => {
    if (!(key in obj)) obj[key] = ext[key]
  })
}

function isIterable (value) {
  let type = getType(value)
  return isOneOf(['array', 'map', 'object'], type)
}

function isPrimitive (value) {
  return !value || (
    typeof value !== 'object' &&
    typeof value !== 'function'
  )
}

function base (object, extension, fn) {
  if (isPrimitive(extension)) return object

  for (let item in extension) {
    if (!{}.hasOwnProperty.call(extension, item)) continue
    if (fn(object, extension, item) === false) break

    if (isIterable(extension[item]) && isIterable(object[item])) {
      base(object[item], extension[item], fn)
    }
  }

  return object
}
