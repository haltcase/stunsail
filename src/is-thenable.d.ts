/**
 * Check whether `value` is an object with a `then` method.
 */
interface IsThenable {
  (value: unknown): value is PromiseLike<unknown>
}

declare const isThenable: IsThenable
export default isThenable
