import { GenericCollection } from './types';
/**
 * Check whether `value` is included in `collection`. This is a version of
 * [`includes()`](#includes) with the arguments flipped.
 */
export default function isOneOf<T>(value: T, collection: GenericCollection<T>): boolean;
