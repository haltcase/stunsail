import { PathLinks } from './types';

/**
 * Sets the key at `path` to `value` on `object` and returns
 * the object. Deep property access is supported using both dot and
 * bracket syntax or an Array of path segments.
 */
export default function set<K extends string | number | symbol, V>(object: Record<K, V>, path: string | PathLinks, value: V): Record<K, V>;
