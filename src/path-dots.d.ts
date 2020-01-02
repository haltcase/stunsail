import { PathLinks } from './types.js'

/**
 * Converts Arrays of object path segments into dot-notated paths.
 * If `value` is a string, brackets will be normalized to dots.
 */
interface PathDots {
  (value: string | PathLinks): string
}

declare const pathDots: PathDots
export default pathDots
