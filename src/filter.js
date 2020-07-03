import each from "./each.js"
import isArrayLike from "./is-array-like.js"

export default function filter (collection, fn) {
  const arrayLike = isArrayLike(collection)
  const result = arrayLike ? [] : {}

  each(collection, (v, k, o) => {
    if (fn(v, k, o)) {
      if (arrayLike) {
        result.push(v)
      } else {
        result[k] = v
      }
    }
  })

  return typeof collection === "string"
    ? result.join("")
    : result
}
