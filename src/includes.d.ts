import { GenericCollection } from './types';

/**
 * Check whether `value` is included in `collection`. This is a version of
 * [`isOneOf()`](#isoneof) with the arguments flipped.
 */
export default function includes<T>(value: T, collection: GenericCollection<T>): boolean;
