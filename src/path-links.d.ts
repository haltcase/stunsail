import { PathLinks } from './types.js'

/**
 * Convert `value` (a dot or bracket notated string) to an array of object path
 * segments. If it's already an array it will just be returned.
 */
interface PathLinks {
  (value: string | PathLinks): PathLinks
}

declare const pathLinks: PathLinks
export default pathLinks