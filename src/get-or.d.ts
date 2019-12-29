import { PathLinks } from './types';

/**
 * Access a property of `object` at `path` safely & deeply, returning
 * `defaultValue` if it doesn't exist.
 */
export default function getOr<K extends string | number | symbol, V>(object: Record<K, V>, path: string | PathLinks, defaultValue: V): V;
