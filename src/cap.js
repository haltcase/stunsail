import apply from './apply'
import getType from './get-type'

export default function cap (fn, limit) {
  if (getType(fn) !== 'function') {
    throw new TypeError(`Expected a function.`)
  }

  if (getType(limit) !== 'number') {
    limit = (Number(limit) || fn.length) ?? 1
  }

  const upper = Math.abs(limit)

  return (...args) =>
    apply(fn, args.slice(0, upper))
}
