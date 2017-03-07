'use strict'

const curry = require('../fn/curry')
const getType = require('../get-type')
const isIterable = require('../is/iterable')
const isArrayLike = require('../is/array-like')

module.exports = curry(function each (fn, collection) {
  let type = getType(collection)
  if (isIterable(collection)) {
    let i = 0
    for (let key of collection) {
      let value = collection[key]
      if (type === 'map') {
        value = key[1]
        key = key[0]
      } else if (isArrayLike(collection)) {
        value = key
        key = i++
      }

      if (fn(value, key, collection) === false) break
    }
  } else if (type === 'object') {
    for (let key in collection) {
      if (!{}.hasOwnProperty.call(collection, key)) continue
      let value = collection[key]
      if (fn(value, key, collection) === false) break
    }
  }
})
