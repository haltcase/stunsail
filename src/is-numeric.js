import isString from './is-string'
import isNumber from './is-number'
import { NUMERIC_REGEX } from './constants'

export default function isNumeric (value) {
  if (isNumber(value)) return true
  if (!isString(value)) return false
  return NUMERIC_REGEX.test(value)
}
