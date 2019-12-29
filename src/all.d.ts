import { ArrayIterator, MapIterator, ObjectIterator, SetIterator, StringIterator } from './types';
/**
 * Universal version of native `Array#every` that works on pretty much any
 * iterable - Arrays & Array-likes, Objects, Sets, Maps, strings, custom
 * iterables, etc.
 *
 * Returns `true` if the result of `fn` is truthy for every item in the
 * collection, or stops iteration early and returns `false` if some item
 * causes `fn` to return a falsy value.
 *
 * `fn` defaults to `value => !!value` so that `collection` can quickly be
 * tested for truthiness throughout.
 */
export default function all<T extends string>(collection: T, fn?: StringIterator<boolean>): boolean;
export default function all<T>(collection: T[], fn?: ArrayIterator<T, boolean>): boolean;
export default function all<K, V>(collection: Map<K, V>, fn?: MapIterator<K, V, boolean>): boolean;
export default function all<T>(collection: Set<T>, fn?: SetIterator<T, boolean>): boolean;
export default function all<T extends object>(collection: T, fn?: ObjectIterator<T, boolean>): boolean;
