import each from './each'
import isEqual from './is-equal'

export default function matches (object, compare) {
  let isMatch = true
  each(compare, (value, key) => {
    if (!isEqual(value, object[key])) {
      isMatch = false
      return false
    }
  })

  return isMatch
}
