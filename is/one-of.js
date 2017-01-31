'use strict'

const isObject = require('./object')

module.exports = (collection, value, from) => {
  if (Array.isArray(collection) || typeof collection === 'string') {
    return collection.indexOf(value, from) > -1
  } else if (isObject(collection)) {
    let values = Object.keys(collection).map(k => collection[k])
    let length = values.length

    if (from < 0) {
      from = Math.max(length + from, 0)
    }

    return !!length && values.indexOf(value) > -1
  } else {
    throw new TypeError(
      `Expected array, object, or string and got ${typeof collection}`
    )
  }
}
