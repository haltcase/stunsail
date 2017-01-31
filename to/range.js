'use strict'

module.exports = function (start, end, step) {
  if (arguments.length === 0) return []
  if (arguments.length === 1) {
    end = start
    start = 0
  }

  if (typeof step === 'undefined') step = 1
  return Array.from({ length: (end - start) }, (v, k) => k + step)
}
