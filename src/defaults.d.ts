import { Primitive } from './types';

/**
 * Sets own properties from `extension` on `object` if any of them are not
 * present on `object`.
 */
export default function defaults<T extends Primitive>(object: T, extension: any): T;
export default function defaults<T extends object, U extends object>(object: T, extension: U): T & U;
