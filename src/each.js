import getType from "./get-type.js"
import isIterable from "./is-iterable.js"
import isArrayLike from "./is-array-like.js"

export default function each (collection, fn) {
  const type = getType(collection)
  if (isIterable(collection)) {
    let i = 0
    for (let key of collection) {
      let value = collection[key]
      if (type === "map") {
        value = key[1]
        key = key[0]
      } else if (type === "set") {
        value = key
      } else if (isArrayLike(collection)) {
        value = key
        key = i++
      }

      if (fn(value, key, collection) === false) break
    }
  } else if (type === "object") {
    for (const key of Object.keys(collection)) {
      const value = collection[key]
      if (fn(value, key, collection) === false) break
    }
  }
}
