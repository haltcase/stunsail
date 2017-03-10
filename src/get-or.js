import get from './get'
import curry from './curry'

export default curry(function getOr (defaultValue, path, object) {
  let value = get(path, object)
  return typeof value !== 'undefined' ? value : defaultValue
})
