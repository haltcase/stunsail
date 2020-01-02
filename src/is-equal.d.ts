/**
 * Check whether two values `a` and `b` are deeply equal. Works on almost any
 * object - including plain Objects, Arrays, Maps, Sets, and Dates.
 */
interface Is {
  <T> (a: T, b: T): boolean
}

declare const is: Is
export default is
