import { PathLinks } from './types.js'

/**
 * @description
 * Converts arrays of object path segments into dot-notated paths.
 * If `value` is a string, brackets will be normalized to dots.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | value | `string` &#124; `string[]` | String using dot or bracket syntax, or an array of path segments |
 *
 * @returns `boolean`
 *
 * @example
 * pathDots(['a', 'b', 'c', '0'])
 * // -> 'a.b.c.0'
 *
 * pathDots('a[1].b.c[0]')
 * // -> 'a.1.b.c.0'
 *
 * @see pathLinks
 * @since v1.0.0
 * @tag utilities
 */
interface PathDots {
  (value: string | PathLinks): string
}

declare const pathDots: PathDots
export default pathDots
