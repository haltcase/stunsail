import { ArrayIterator, MapIterator, ObjectIterator, SetIterator, StringIterator } from './types';

/**
 * Universal version of native `Array#forEach` that works on pretty much any
 * iterable - Arrays & Array-likes, Objects, Sets, Maps, strings, custom
 * iterables, etc.
 */
export default function each<T extends string>(collection: T, fn: StringIterator<any>): void;
export default function each<T>(collection: T[], fn: ArrayIterator<T, any>): void;
export default function each<K, V>(collection: Map<K, V>, fn: MapIterator<K, V, any>): void;
export default function each<T>(collection: Set<T>, fn: SetIterator<T, any>): void;
export default function each<T extends object>(collection: T, fn: ObjectIterator<T, any>): void;
