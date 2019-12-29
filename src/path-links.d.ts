import { PathLinks } from './types.js';

/**
 * Convert `value` (a dot or bracket notated string) to an array of object path
 * segments. If it's already an array it will just be returned.
 */
export default function pathLinks(value: string | PathLinks): PathLinks;
