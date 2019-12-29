import { ArrayIterator, MapIterator, ObjectIterator, SetIterator, StringIterator } from './types';
declare type Tuple<T> = [T, T];

/**
 * Iterate over `collection` and apply `fn` to each item,
 * returning an Array where the first element contains all items
 * for which `fn` returned a truthy value, and the second element
 * contains all items for which it returned a falsy value.
 */
export default function partition<T extends string>(collection: T, fn: StringIterator<boolean>): Tuple<string>;
export default function partition<T>(collection: T[], fn: ArrayIterator<T, boolean>): Tuple<T[]>;
export default function partition<K, V>(collection: Map<K, V>, fn: MapIterator<K, V, boolean>): Tuple<Map<K, V>>;
export default function partition<T>(collection: Set<T>, fn: SetIterator<T, boolean>): Tuple<Set<T>>;
export default function partition<T extends object>(collection: T, fn: ObjectIterator<T, boolean>): Tuple<Partial<T>>;
export {};
