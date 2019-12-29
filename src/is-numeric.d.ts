/**
 * Check whether `value` is a number or a string that appears to be a number,
 * including integers & decimals in strings.
 */
export default function isNumeric<T>(value: T): T extends number ? true : T extends string ? boolean : false;
