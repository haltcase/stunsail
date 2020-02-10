import isArrayLike from "./is-array-like"
import isSet from "./is-set"

export default function first (collection) {
  if (isArrayLike(collection)) {
    return collection[0]
  } else if (isSet(collection)) {
    return collection.values().next().value
  }
}
