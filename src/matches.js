import each from "./each.js"
import isEqual from "./is-equal.js"

export default function matches (object, compare) {
  let isMatch = true
  each(compare, (value, key) => {
    if (!isEqual(value, object[key])) {
      return (isMatch = false)
    }
  })

  return isMatch
}
