'use strict'

const curry3 = require('../fn/curry3')
const isObject = require('../is/object')
const isArrayLike = require('../is/array-like')

module.exports = curry3((value, path, object) => {
  let keys = path

  if (typeof keys === 'string') {
    keys = convertBrackets(path).split('.')
  }

  if (!isArrayLike(keys)) keys = [keys]

  let i = -1
  let length = keys.length
  let result = length ? object : undefined

  while (++i < length) {
    if (Object(result) !== result) return object
    let current = keys[i]

    if (i === length - 1) {
      result[current] = value
      continue
    }

    if (!isObject(result[current])) {
      result[current] = {}
    }

    result = result[current]
  }

  return object
})

function convertBrackets (path) {
  return path
    .replace(/\[([^[\]]+)\]/g, '.$1')
    .replace(/^[.]*|[.]*$/g, '')
}
