/**
 * Return a wrapped version of `fn` that is only able to execute
 * a single time. Further calls to the wrapped function will return
 * the value from the original call.
 */
export default function once<T extends (...args: any[]) => any>(fn: T): (...args: any[]) => ReturnType<T>;
