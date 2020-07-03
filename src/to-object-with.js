import reduce from "./reduce.js"
import getType from "./get-type.js"
import isPrimitive from "./is-primitive.js"

export default function toObjectWith (value, fn) {
  const fnType = getType(fn)
  if (fnType !== "function") {
    throw new TypeError(`Expected a function, got ${fnType}`)
  }

  if (value == null) return {}
  if (isPrimitive(value)) return { [value]: fn(value) }

  let inputType = getType(value)
  if (inputType === "object") return value

  if (inputType === "map" || inputType === "set") {
    inputType = "array"
    value = Array.from(value)
  }

  if (inputType !== "array") return {}

  return reduce(value, (acc, key) => {
    if (Array.isArray(key) && key.length === 2) {
      return Object.assign(acc, { [key[0]]: fn(key[1]) })
    }

    return Object.assign(acc, { [key]: fn(key) })
  }, {})
}
