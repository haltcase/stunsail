'use strict'

module.exports = value => {
  return (
    value != null &&
    typeof value[Symbol.iterator] === 'function'
  )
}
