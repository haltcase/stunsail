import isObject from "./is-object.js"
import isIterable from "./is-iterable.js"
import isPrimitive from "./is-primitive.js"

const isTraversable = v => isIterable(v) || isObject(v)

export default function defaults (object, extension) {
  if (isPrimitive(object)) return object

  return base(object, extension, (obj, ext, key) => {
    if (!(key in obj)) obj[key] = ext[key]
  })
}

function base (object, extension, fn) {
  if (isPrimitive(extension)) return object

  for (const key of Object.keys(extension)) {
    if (fn(object, extension, key) === false) break

    if (
      isTraversable(extension[key]) &&
      isTraversable(object[key])
    ) {
      base(object[key], extension[key], fn)
    }
  }

  return object
}
