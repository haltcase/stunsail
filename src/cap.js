import apply from "./apply.js"
import getType from "./get-type.js"

export default function cap (fn, limit) {
  const type = getType(fn)
  if (type !== "function") {
    throw new TypeError(`Expected a function, got ${type}`)
  }

  if (getType(limit) !== "number") {
    limit = (Number(limit) || fn.length) ?? 1
  }

  const upper = Math.abs(limit)

  return (...args) =>
    apply(fn, args.slice(0, upper))
}
