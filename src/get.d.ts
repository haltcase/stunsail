import { PathLinks } from './types';

/**
 * Access a property of `object` at `path` safely & deeply, returning
 * `undefined` if it doesn't exist.
 */
export default function get<K extends string | number | symbol, V>(object: Record<K, V>, path: string | PathLinks): V | undefined;
