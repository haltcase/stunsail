'use strict'

module.exports = (value, lower, upper) => {
  value = Number(value) || 0

  if (upper !== undefined) {
    upper = Number(upper) || value
    value = value <= upper ? value : upper
  } else {
    return Math.min(value, Number(lower) || value)
  }

  if (lower !== undefined) {
    lower = Number(lower) || value
    value = value >= lower ? value : lower
  }

  return value
}
