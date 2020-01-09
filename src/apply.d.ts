/**
 * @description
 * Call `fn` using the array `args` as its arguments. Similar to native
 * `Function#apply()` but does not set the function's `this` value.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | fn | `Function` | Function to which `args` will be applied |
 * | args | `array` | Array of arguments to apply to `fn` |
 *
 * @returns `any` &ndash; result of applying `args` to `fn`
 *
 * @example
 * apply(Math.max, [99, 5, 302])
 * // -> 302
 *
 * const max = apply(Math.max)
 *
 * max([1, 2, 100, 4])
 * // -> 100
 */
interface Apply {
  <T, F extends (...args: T[]) => any> (fn: F, args: T[]): ReturnType<F>
}

declare const apply: Apply
export default apply
