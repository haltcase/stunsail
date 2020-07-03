import each from "./each.js"
import isArrayLike from "./is-array-like.js"

export default function map (collection, fn) {
  const arrayLike = isArrayLike(collection)
  const result = arrayLike ? [] : {}

  let i = -1
  each(collection, (v, k, o) => {
    k = arrayLike ? ++i : k
    result[k] = fn(v, k, o)
  })

  return typeof collection === "string"
    ? result.join("")
    : result
}
