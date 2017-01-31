'use strict'

module.exports = (value, lower, upper) => {
  value = Number(value) || 0
  lower = Number(lower) || value
  upper = Number(upper) || value

  value = value <= upper ? value : upper
  value = value >= lower ? value : lower

  return value
}
