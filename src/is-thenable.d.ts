/**
 * Check whether `value` is an object with a `then` method.
 */
export default function isThenable(value: unknown): value is PromiseLike<unknown>;
