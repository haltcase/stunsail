import curry from './curry'
import isArrayLike from './is-array-like'

export default curry(function has (path, object) {
  let keys = path

  if (typeof keys === 'string') {
    keys = convertBrackets(path).split('.')
  }

  if (!isArrayLike(keys)) keys = [keys]

  let i = -1
  let length = keys.length
  let result = length ? object : undefined

  while (++i < length) {
    if (Object(result) !== result) return false
    if (!{}.hasOwnProperty.call(result, keys[i])) {
      return false
    }

    result = result[keys[i]]
  }

  return true
})

function convertBrackets (path) {
  return path
    .replace(/\[([^[\]]+)\]/g, '.$1')
    .replace(/^[.]*|[.]*$/g, '')
}
