/**
 * @description
 * Return a wrapped version of `fn` that is only able to execute
 * a single time. Further calls to the wrapped function will return
 * the value from the original call.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | fn | `Function` | Function to wrap so that it only executes a single time |
 *
 * @returns `Function`
 *
 * @example
 * function expensive (someNumber) {
 *   return someNumber
 * }
 *
 * const wrapped = once(expensive)
 *
 * wrapped(100)
 * // -> 100
 *
 * wrapped(93247593475)
 * // -> 100
 */
interface Once {
  <T extends (...args: any[]) => any> (fn: T): (...args: any[]) => ReturnType<T>
}

declare const once: Once
export default once
