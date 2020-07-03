import isArrayLike from "./is-array-like.js"
import isSet from "./is-set.js"

export default function last (collection) {
  if (isArrayLike(collection)) {
    return collection[collection.length - 1]
  } else if (isSet(collection)) {
    let value
    for (value of collection.values());
    return value
  }
}
