import getType from "./get-type.js"
import isArrayLike from "./is-array-like.js"

export default function isEmpty (value) {
  const type = getType(value)

  switch (type) {
    case "string":
      return value.trim().length === 0
    case "null":
    case "undefined":
      return true
    case "map":
    case "set":
      return value.size === 0
    case "number": return value === 0
    case "object": return !Object.keys(value).length
  }

  if (isArrayLike(value)) {
    return value.length === 0
  }

  if (/error/gi.test(type)) {
    return value.message.length === 0
  }

  return !value
}
