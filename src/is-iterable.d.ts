/**
 * Check whether `value` is an iterable object, ie. its `[Symbol.iterator]`
 * property is set as a function.
 */
export default function isIterable(value: unknown): value is Iterable<unknown>;
