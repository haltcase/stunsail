import { GenericCollection } from './types'

/**
 * Check whether `value` is included in `collection`. This is a version of
 * [`isOneOf()`](#isoneof) with the arguments flipped.
 */
interface Includes {
  <T> (value: T, collection: GenericCollection<T>): boolean
}

declare const includes: Includes
export default includes
