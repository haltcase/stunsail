import isString from './is-string'
import isNumber from './is-number'

export default function isNumeric (value) {
  if (isNumber(value)) return true
  if (!isString(value)) return false
  return (/^((?:\d+)?\.?(?:\d+)?)$/).test(value)
}
