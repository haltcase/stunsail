'use strict'

const isObject = require('../is/object')
const isArrayLike = require('../is/array-like')

module.exports = (collection, fn) => {
  if (isObject(collection)) {
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

    return result
  }
}
