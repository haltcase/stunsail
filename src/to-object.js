import reduce from './reduce'
import getType from './get-type'
import isPrimitive from './is-primitive'

export default value => {
  if (isPrimitive(value)) return { [value]: value }

  let inputType = getType(value)
  if (inputType === 'object') return value

  if (inputType === 'map' || inputType === 'set') {
    inputType = 'array'
    value = Array.from(value)
  }

  if (inputType !== 'array') return {}

  return reduce((acc, key) => {
    if (Array.isArray(key) && key.length === 2) {
      return Object.assign(acc, { [key[0]]: key[1] })
    }

    return Object.assign(acc, { [key]: key })
  }, {}, value)
}
