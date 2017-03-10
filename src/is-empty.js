import getType from './get-type'
import isArrayLike from './is-array-like'
import isOneOf from './is-one-of'

const INPUT_ARRAY_LIKES = [
  'array',
  'string',
  'arguments',
  'buffer'
]

export default value => {
  let type = getType(value)
  if (isArrayLike(value)) {
    if (isOneOf(INPUT_ARRAY_LIKES, type)) {
      return !value.length
    }
  }

  if (type === 'set' || type === 'map') {
    return !value.size
  }

  if (type === 'object') {
    return !Object.keys(value).length
  }

  return true
}
