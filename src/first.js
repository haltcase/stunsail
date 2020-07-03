import isArrayLike from "./is-array-like.js"
import isSet from "./is-set.js"

export default function first (collection) {
  if (isArrayLike(collection)) {
    return collection[0]
  } else if (isSet(collection)) {
    return collection.values().next().value
  }
}
