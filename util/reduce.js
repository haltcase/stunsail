'use strict'

const isObject = require('../is/object')
const isArrayLike = require('../is/array-like')

module.exports = (collection, fn, initial) {
  let accumulator = initial

  if (isObject(collection)) {
    for (let key in collection) {
      if ({}.hasOwnProperty.call(collection, key)) {
        accumulator = fn(accumulator, collection[key], key, collection)
      }
    }
  } else if (isArrayLike(collection)) {
    for (let i = 0; i < collection.length; i++) {
      accumulator = fn(accumulator, collection[i], i, collection)
    }
  }
  
  return accumulator
}
