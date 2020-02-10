import isArrayLike from "./is-array-like"
import isSet from "./is-set"

export default function last (collection) {
  if (isArrayLike(collection)) {
    return collection[collection.length - 1]
  } else if (isSet(collection)) {
    let value
    for (value of collection.values());
    return value
  }
}
