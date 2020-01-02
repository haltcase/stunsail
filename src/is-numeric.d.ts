/**
 * Check whether `value` is a number or a string that appears to be a number,
 * including integers & decimals in strings.
 */
interface IsNumeric {
  <T> (value: T): T extends number ? true : T extends string ? boolean : false
}

declare const isNumeric: IsNumeric
export default isNumeric
