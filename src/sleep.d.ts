/**
 * Similar to the built-in `setTimeout` but does not receive
 * a function to run when the time expires. Simply returns a
 * Promise that resolves after `ms`. Pairs well with `await`.
 */
interface Sleep {
  (ms: number): Promise<void>
}

declare const sleep: Sleep
export default sleep
