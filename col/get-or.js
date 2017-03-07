'use strict'

const get = require('./get')
const curry = require('../fn/curry')

module.exports = curry(function getOr (defaultValue, path, object) {
  let value = get(path, object)
  return typeof value !== 'undefined' ? value : defaultValue
})
