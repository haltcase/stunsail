import apply from "./apply"
import getType from "./get-type"

export default function once (fn) {
  const type = getType(fn)
  if (type !== "function") {
    throw new TypeError(`Expected function, got ${type}`)
  }

  let result
  let called = false

  return (...args) => {
    if (!called) {
      result = apply(fn, args)
    }

    fn = undefined
    called = true
    return result
  }
}
