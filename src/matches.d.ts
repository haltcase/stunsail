/**
 * Check that all properties of `compare` are deeply equal to those same
 * properties of `object`.
 */
export default function matches<T extends object>(object: T, compare: object): boolean;
