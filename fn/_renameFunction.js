'use strict'

module.exports = function _renameFunction (name, fn) {
  Object.defineProperty(fn, 'name', { value: name })
  Object.defineProperty(fn, 'displayName', {
    value: name,
    configurable: true,
    enumerable: false
  })

  fn.toString = function () { return name }

  return fn
}
