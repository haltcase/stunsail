'use strict'

const curry2 = require('../fn/curry2')
const isArrayLike = require('../is/array-like')

module.exports = curry2((path, object) => {
  let keys = path

  if (typeof keys === 'string') {
    keys = convertBrackets(path).split('.')
  }

  if (!isArrayLike(keys)) keys = [keys]

  let i = -1
  let length = keys.length
  let result = length ? object : undefined

  while (++i < length) {
    if (Object(result) !== result) return
    result = result[keys[i]]
  }

  return result
})

function convertBrackets (path) {
  return path
    .replace(/\[([^[\]]+)\]/g, '.$1')
    .replace(/^[.]*|[.]*$/g, '')
}
