import { ArrayIterator, MapIterator, ObjectIterator, SetIterator, StringIterator } from './types';

/**
 * Universal version of native `Array#filter` that works on pretty much any
 * iterable - Arrays & Array-likes, Objects, Sets, Maps, strings, custom
 * iterables, etc.
 *
 * `fn` is called with arguments `value`, `key`, `collection`. If the result
 * is truthy, the element will be present in the resulting collection. If the
 * result is falsy, it will be _filtered_.
 */
export default function filter<T extends string>(collection: string, fn: StringIterator<boolean>): string;
export default function filter<T, R extends T>(collection: T[], fn: ArrayIterator<T, boolean>): R[];
export default function filter<K, V, R extends Map<K, V>>(collection: Map<K, V>, fn: MapIterator<K, V, boolean>): R;
export default function filter<T, R extends T>(collection: Set<T>, fn: SetIterator<T, boolean>): Set<R>;
export default function filter<T extends object, R extends T>(collection: T, fn: ObjectIterator<T, boolean>): Partial<R>;
