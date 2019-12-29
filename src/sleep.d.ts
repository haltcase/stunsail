/**
 * Similar to the built-in `setTimeout` but does not receive
 * a function to run when the time expires. Simply returns a
 * Promise that resolves after `ms`. Pairs well with `await`.
 */
export default function sleep(ms: number): Promise<void>;
