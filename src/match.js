import each from './each'
import curry from './curry'
import isEqual from './is-equal'

export default curry(function match (compare, object) {
  let isMatch = true
  each((value, key) => {
    if (!isEqual(value, object[key])) {
      isMatch = false
      return false
    }
  }, compare)

  return isMatch
})
