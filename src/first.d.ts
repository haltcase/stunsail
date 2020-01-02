/**
 * Retreive the item at index zero of the given Array-like or `Set` object.
 * For `Set`s this is based on insertion order, ie. the first inserted object.
 */
interface First {
  <T> (collection: ArrayLike<T> | Set<T>): T | undefined
}

declare const first: First
export default first
