import { Falsy } from './types';

/**
 * Return a boolean based on `value` - the usual falsy values
 * and empty values will return `false`, while truthy values
 * return `true`.
 *
 * When `smart` is `true` and `value` is a string, it will
 * be checked for the strings 'true' and 'false' and coerced to
 * a boolean accordingly.
 */
export default function toBoolean(value: true, smart?: boolean): true;
export default function toBoolean(value: Falsy, smart?: boolean): false;
