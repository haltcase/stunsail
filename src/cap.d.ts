import * as t from './types'

/**
 * @description
 * Add a cap on the number of arguments passable to `fn`. Any arguments beyond
 * `limit` will not be passed, which is useful for creating functions
 * compatible with currying or as callbacks / parameters to higher order
 * functions.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | fn | `Function` | Function whose arguments to limit |
 * | limit | `Number` | The number of arguments to allow (default = 1) |
 *
 * @returns `Function` &ndash; new function accepting only `limit` arguments
 *
 * @example
 * const log = cap(console.log, 2)
 *
 * log(1, 2, 3)
 * // -> [ 1, 2 ]
 *
 * ;['1', '2.2', '2.54'].map(parseInt)
 * // -> [ 1, NaN, NaN ]
 *
 * const toInt = cap(parseInt)
 * ;['1', '2.2', '2.54'].map(toInt)
 * // -> [ 1, 2, 2 ]
 *
 * @since v1.0.0
 * @tag functions
 */
interface Cap {
  <F extends t.Callable, T1 = t.Param1<F>> (fn: F): (arg: T1) => ReturnType<F>
  <F extends t.Callable> (fn: F, limit: 0): () => ReturnType<F>
  <F extends t.Callable, T1 = t.ParamType<F, 0>> (fn: F, limit: 1): (arg: T1) => ReturnType<F>
  <F extends t.Callable, T1 = t.ParamType<F, 0>, T2 = t.ParamType<F, 1>> (fn: F, limit: 2): (...args: [T1, T2]) => ReturnType<F>
  <F extends t.Callable, T1 = t.ParamType<F, 0>, T2 = t.ParamType<F, 1>, T3 = t.ParamType<F, 2>> (fn: F, limit: 3): (...args: [T1, T2, T3]) => ReturnType<F>
  <F extends t.Callable, T1 = t.ParamType<F, 0>, T2 = t.ParamType<F, 1>, T3 = t.ParamType<F, 2>, T4 = t.ParamType<F, 3>> (fn: F, limit: 4): (...args: [T1, T2, T3, T4]) => ReturnType<F>
  <F extends t.Callable, T1 = t.ParamType<F, 0>, T2 = t.ParamType<F, 1>, T3 = t.ParamType<F, 2>, T4 = t.ParamType<F, 3>, T5 = t.ParamType<F, 4>> (fn: F, limit: 5): (...args: [T1, T2, T3, T4, T5]) => ReturnType<F>
  <F extends t.Callable, T1 = t.ParamType<F, 0>, T2 = t.ParamType<F, 1>, T3 = t.ParamType<F, 2>, T4 = t.ParamType<F, 3>, T5 = t.ParamType<F, 4>, T6 = t.ParamType<F, 5>> (fn: F, limit: 6): (...args: [T1, T2, T3, T4, T5, T6]) => ReturnType<F>
}

declare const cap: Cap
export default cap
