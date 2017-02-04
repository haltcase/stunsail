'use strict'

module.exports = value => {
  return !value || (
    typeof value !== 'object' &&
    typeof value !== 'function'
  )
}
