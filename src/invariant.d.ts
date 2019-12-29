import { Falsy } from './types';

/**
 * Test that `condition` is truthy and return its value,
 * or throw an error with `message` when it is falsy.
 *
 * `message` defaults to 'Invariant Violation'.
 */
export default function invariant(condition: Falsy, message?: string): never;
export default function invariant<T>(condition: T, message?: string): T | never;
