import { PathLinks } from './types';

/**
 * Alternative to the builtin `Object#hasOwnProperty` function with support
 * for deep-property access using both dot and bracket syntax.
 */
export default function has<K extends string | number | symbol, V>(object: Record<K, V>, path: string | PathLinks): boolean;
