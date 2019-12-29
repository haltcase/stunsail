import { PathLinks } from './types.js';

/**
 * Converts Arrays of object path segments into dot-notated paths.
 * If `value` is a string, brackets will be normalized to dots.
 */
export default function pathDots(value: string | PathLinks): string;
