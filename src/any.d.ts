import { ArrayIterator, MapIterator, ObjectIterator, SetIterator, StringIterator } from './types';

/**
 * Universal version of native `Array#some` that works on pretty much any
 * iterable - Arrays & Array-likes, Objects, Sets, Maps, strings, custom
 * iterables, etc.
 *
 * Returns `true` if the result of `fn` is truthy for any item in the
 * collection, or stops iteration early and returns `false` if some item
 * causes `fn` to return a falsy value.
 *
 * `fn` defaults to `val => !!val` so that `collection` can quickly be tested
 * for truthiness throughout.
 */
export default function any<T extends string>(collection: T, fn?: StringIterator<boolean>): boolean;
export default function any<T>(collection: T[], fn?: ArrayIterator<T, boolean>): boolean;
export default function any<K, V>(collection: Map<K, V>, fn?: MapIterator<K, V, boolean>): boolean;
export default function any<T>(collection: Set<T>, fn?: SetIterator<T, boolean>): boolean;
export default function any<T extends object>(collection: T, fn?: ObjectIterator<T, boolean>): boolean;
