/**
 * Check whether `value` is an iterable object, ie. its `[Symbol.iterator]`
 * property is set as a function.
 */
interface IsIterable {
  (value: unknown): value is Iterable<unknown>
}

declare const isIterable: IsIterable
export default isIterable
