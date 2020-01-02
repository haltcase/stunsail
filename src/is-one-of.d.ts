import { GenericCollection } from './types'

/**
 * Check whether `value` is included in `collection`. This is a version of
 * [`includes()`](#includes) with the arguments flipped.
 */
interface IsOneOf {
  <T> (value: T, collection: GenericCollection<T>): boolean
}

declare const isOneOf: IsOneOf
export default isOneOf
