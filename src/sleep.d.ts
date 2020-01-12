/**
 * @description
 * Similar to the built-in `setTimeout` but does not receive
 * a function to run when the time expires. Simply returns a
 * Promise that resolves after `ms`. Pairs well with `await`.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | ms | `number` | Amount of time to wait |
 *
 * @returns `any`
 *
 * @example
 * async function foo () {
 *   console.log('start')
 *   await sleep(5000)
 *   console.log('done')
 * }
 *
 * foo()
 * // -> start
 * // ... 5 seconds pass ...
 * // -> done
 *
 * @since v1.0.0
 * @tag utilities
 */
interface Sleep {
  (ms: number): Promise<void>
}

declare const sleep: Sleep
export default sleep
