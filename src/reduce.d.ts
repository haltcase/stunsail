import { ArrayAccumulator, MapAccumulator, ObjectAccumulator, SetAccumulator, StringAccumulator } from './types';

/**
 * Universal version of native `Array#reduce` that works on pretty much any
 * iterable - Arrays & Array-likes, Objects, Sets, Maps, strings, custom
 * iterables, etc.
 */
export default function reduce<T extends string, U = string>(collection: T, fn: StringAccumulator<T, U>, initial?: U): U;
export default function reduce<T, U = T extends (infer A)[] ? A : never>(collection: T[], fn: ArrayAccumulator<T, U>, initial?: U): U;
export default function reduce<K, V>(collection: Map<K, V>, fn: MapAccumulator<K, V, any>): Map<K, V>;
export default function reduce<T, U = T>(collection: Set<T>, fn: SetAccumulator<T, U>, initial?: U): U;
export default function reduce<T extends object>(collection: T, fn: ObjectAccumulator<T, T[keyof T]>): T;
export default function reduce<T extends object, U>(collection: T, fn: ObjectAccumulator<T, U>, initial: U): U;
