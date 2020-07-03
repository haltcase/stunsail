import toNumber from "./to-number.js"
import isObject from "./is-object.js"
import isArrayLike from "./is-array-like.js"

export default function random (value, bound) {
  if (isObject(value)) {
    const keys = Object.keys(value)
    const selected = keys[~~(Math.random() * keys.length)]
    return value[selected]
  }

  if (isArrayLike(value)) {
    return value[~~(Math.random() * value.length)]
  }

  if (typeof value !== "number") {
    value = toNumber(value)
  }

  if (typeof bound === "undefined") {
    bound = value
    value = 0
  }

  if (value > bound) {
    const temp = value
    value = bound
    bound = temp
  }

  return value + Math.floor(Math.random() * (bound - value + 1))
}
