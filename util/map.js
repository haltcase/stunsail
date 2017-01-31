'use strict'

const getType = require('../get-type')
const isArrayLike = require('../is/array-like')

module.exports = (collection, fn) => {
  let type = getType(collection)
  if (type === 'object') {
    let result = {}
    for (let key in collection) {
      if ({}.hasOwnProperty.call(collection, key)) {
        result[key] = fn.call(collection, collection[key], key, collection)
      }
    }

    return result
  } else if (isArrayLike(collection)) {
    let result = []
    for (let i = 0; i < collection.length; i++) {
      result.push(fn.call(collection, collection[i], i, collection))
    }

    if (type === 'string') {
      return result.join('')
    }

    return result
  }

  return collection
}
