import { Primitive } from './types';
/**
 * Check whether `value` is a primitive, ie. one of:
 *
 * * `null`
 * * `string`
 * * `number`
 * * `boolean`
 * * `undefined`
 */
export default function isPrimitive(value: unknown): value is Primitive;
