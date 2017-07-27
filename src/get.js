import isArrayLike from './is-array-like'
import normalizePath from './lib/_normalize-path'

export default function get (object, path) {
  let keys = path

  if (typeof keys === 'string') {
    keys = normalizePath(path).split('.')
  }

  if (!isArrayLike(keys)) keys = [keys]

  let i = -1
  const { length } = keys
  let result = length ? object : undefined

  while (++i < length) {
    if (Object(result) !== result) return
    result = result[keys[i]]
  }

  return result
}
