import isObject from "./is-object.js"
import isArrayLike from "./is-array-like.js"
import normalizePath from "./lib/_normalize-path.js"

export default function set (object, path, value) {
  let keys = path

  if (typeof keys === "string") {
    keys = normalizePath(path).split(".")
  }

  if (!isArrayLike(keys)) keys = [keys]

  let i = -1
  const { length } = keys
  let result = length ? object : undefined

  while (++i < length) {
    if (Object(result) !== result) return object
    const current = keys[i]

    if (i === length - 1) {
      result[current] = value
      continue
    }

    if (!isObject(result[current])) {
      result[current] = {}
    }

    result = result[current]
  }

  return object
}
