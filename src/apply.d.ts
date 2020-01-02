/**
 * Call `fn` using the Array `args` as its arguments. Similar to native
 * `Function#apply()` but does not set the function's `this` value.
 */
interface Apply {
  <T, F extends (...args: T[]) => any> (fn: F, args: T[]): ReturnType<F>
}

declare const apply: Apply
export default apply
