/**
 * Return a wrapped version of `fn` that is only able to execute
 * a single time. Further calls to the wrapped function will return
 * the value from the original call.
 */
interface Once {
  <T extends (...args: any[]) => any> (fn: T): (...args: any[]) => ReturnType<T>
}

declare const once: Once
export default once
