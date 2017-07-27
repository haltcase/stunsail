import isObject from './is-object'
import isIterable from './is-iterable'
import isPrimitive from './is-primitive'

const isTraversable = v => isIterable(v) || isObject(v)

export default function defaults (object, extension) {
  if (isPrimitive(object)) return object

  return base(object, extension, (obj, ext, key) => {
    if (!(key in obj)) obj[key] = ext[key]
  })
}

function base (object, extension, fn) {
  if (isPrimitive(extension)) return object

  const keys = Object.keys(extension)
  for (const key of keys) {
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
