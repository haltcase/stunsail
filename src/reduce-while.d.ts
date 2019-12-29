import { ArrayAccumulator, MapAccumulator, ObjectAccumulator, SetAccumulator, StringAccumulator } from './types';

/**
 * Works just like [`reduce`](#reduce) but short-circuits when
 * `predicate` returns a falsy value.
 */
export default function reduceWhile <T extends string, U = string>(collection: T, predicate: (accumulator: T, value: U) => boolean, fn: StringAccumulator<T, U>, initial?: U): U;
export default function reduceWhile <T, U = T extends (infer A)[] ? A : never>(collection: T[], predicate: (accumulator: T, value: U) => boolean, fn: ArrayAccumulator<T, U>, initial?: U): U;
export default function reduceWhile <K, V>(collection: Map<K, V>, predicate: (accumulator: T, value: U) => boolean, fn: MapAccumulator<K, V, any>): Map<K, V>;
export default function reduceWhile <T, U = T>(collection: Set<T>, predicate: (accumulator: T, value: U) => boolean, fn: SetAccumulator<T, U>, initial?: U): U;
export default function reduceWhile <T extends object>(collection: T, predicate: (accumulator: T, value: U) => boolean, fn: ObjectAccumulator<T, T[keyof T]>): T;
export default function reduceWhile <T extends object, U>(collection: T, predicate: (accumulator: T, value: U) => boolean, fn: ObjectAccumulator<T, U>, initial: U): U;
