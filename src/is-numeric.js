import isString from "./is-string.js"
import isNumber from "./is-number.js"
import { NUMERIC_REGEX } from "./constants.js"

export default function isNumeric (value) {
  if (isNumber(value)) return true
  if (!isString(value)) return false
  return NUMERIC_REGEX.test(value)
}
