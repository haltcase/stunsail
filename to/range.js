'use strict'

module.exports = (start, end, step) => {
  if (arguments.length === 0) return []
  if (arguments.length === 1) {
    end = start
    start = 0
  }

  if (typeof step === 'undefined') step = 1
  if (start > end) step = -Math.abs(step)

  if (step === 0) return [start, end]

  let i = start
  let result = []
  while (step > 0 ? end >= i : end <= i) {
    result.push(i)
    i += step
  }

  return result
}
