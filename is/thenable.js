'use strict'

module.exports = value => {
  return typeof value === 'object' &&
    typeof value.then === 'function'
}
