'use strict'

module.exports = function curry3 (fn, reverse) {
  let apply = (a1, a2, a3) => {
    if (reverse === true) return fn(a3, a2, a1)
    return fn(a1, a2, a3)
  }

  return function (a1, a2, a3) {
    let len = arguments.length

    if (len >= 3) return apply(a1, a2, a3)
    if (len === 2) return b3 => apply(a1, a2, b3)

    return function (b2, b3) {
      if (arguments.length >= 2) return apply(a1, b2, b3)
      return c3 => apply(a1, b2, c3)
    }
  }
}