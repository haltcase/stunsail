'use strict'

const get = require('./get')
const curry3 = require('../fn/curry3')

module.exports = curry3((defaultValue, path, object) => {
  let value = get(path, object)
  return typeof value !== 'undefined' ? value : defaultValue
})
