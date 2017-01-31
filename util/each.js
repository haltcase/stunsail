'use strict'

const isObject = require('../is/object')
const isArrayLike = require('../is/array-like')

module.exports = (collection, fn) => {
  if (isObject(collection)) {
    for (let key in collection) {
      if ({}.hasOwnProperty.call(collection, key)) {
        fn.call(collection, collection[key], key, collection)
      }
    }
  } else if (isArrayLike(collection)) {
    for (let i = 0; i < collection.length; i++) {
      fn.call(collection, collection[i], i, collection)
    }
  }
}
