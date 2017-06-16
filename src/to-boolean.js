import isEmpty from './is-empty'

export default (value, smart) => {
  // takes care of falsy values
  // false || '' || null || undefined || 0 || NaN
  if (!value) return false

  // returns `value` if it's already a boolean
  if (value === true) return value

  let kind = typeof value
  if (kind === 'string') {
    if (!smart) return !!value.length
    return value === 'true'
  }

  if (kind === 'number') return !!value
  return !isEmpty(value)
}
