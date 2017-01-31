'use strict'

const getType = require('../get-type')
const toArray = require('../to/array')

module.exports = (fn, ctx, args) => {
  if (getType(fn) !== 'function') {
    throw new TypeError(`Expected a function.`)
  }

  if (getType(args) !== 'array') {
    args = toArray(args)
  }

  let [one, two, three, four] = args
  switch (args.length) {
    case 1: return fn(one)
    case 2: return fn(one, two)
    case 3: return fn(one, two, three)
    case 4: return fn(one, two, three, four)
  }

  return fn.apply(ctx, args)
}
