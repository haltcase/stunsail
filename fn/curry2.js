'use strict'

module.exports = function curry2 (fn, reverse) {
  let apply = (a1, a2) => {
    if (reverse === true) return fn(a2, a1)
    return fn(a1, a2)
  }

  return function (a1, a2) {
    if (arguments.length >= 2) return apply(a1, a2)
    return b2 => apply(a1, b2)
  }
}
