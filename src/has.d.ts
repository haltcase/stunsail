import { PathLinks } from './types'

/**
 * Alternative to the builtin `Object#hasOwnProperty` function with support
 * for deep-property access using both dot and bracket syntax.
 */
interface Has {
  <K extends string | number | symbol, V> (object: Record<K, V>, path: string | PathLinks): boolean
}

declare const has: Has
export default has
