import isObject from './is-object'

export default (value, smart) => {
  // takes care of falsy values
  // false || '' || null || undefined || 0 || NaN
  if (!value) return false

  // returns `value` if it's already a boolean
  if (value === true) return value

  if (typeof value === 'string') {
    if (!smart) return !!value.length
    return value === 'true'
  }

  if (Array.isArray(value)) return !!value.length
  if (isObject(value)) return !!Object.keys(value).length

  return !!value
}
