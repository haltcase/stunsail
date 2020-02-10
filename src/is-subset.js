import each from "./each"
import isEqual from "./is-equal"
import isObject from "./is-object"

export default function isSubset (superset, subset) {
  if (!isObject(superset) || !isObject(subset)) {
    return false
  }

  let isMatch = true
  each(subset, (value, key) => {
    if (!{}.propertyIsEnumerable.call(superset, key)) {
      return (isMatch = false)
    }

    const superValue = superset[key]

    if (isObject(value)) {
      return (isMatch = isSubset(superValue, value))
    }

    if (!isEqual(superValue, value)) {
      return (isMatch = false)
    }
  })

  return isMatch
}
