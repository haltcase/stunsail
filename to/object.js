'use strict'

module.exports = array => {
  if (!Array.isArray(array)) return {}

  return array.reduce((acc, key) => {
    if (Array.isArray(key) && key.length === 2) {
      return Object.assign(acc, { [key[0]]: key[1] })
    }

    return Object.assign(acc, { [key]: key })
  }, {})
}
