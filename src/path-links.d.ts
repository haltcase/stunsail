import { PathLinks } from './types.js'

/**
 * @description
 * Convert `value` (a dot or bracket notated string) to an array of object path
 * segments. If it's already an array it will just be returned.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | value | `string, string[]` | String using dot or bracket syntax, or an array of path segments |
 *
 * @returns `boolean`
 *
 * @example
 * pathLinks('a[1].b.c[0]')
 * // -> ['a', '1', 'b', 'c', '0']
 *
 * pathLinks(['a', 'b', 'c', '0'])
 * // -> ['a', 'b', 'c', '0']
 *
 * @see pathDots
 */
interface PathLinksFn {
  (value: string | PathLinks): PathLinks
}

declare const pathLinks: PathLinksFn
export default pathLinks
