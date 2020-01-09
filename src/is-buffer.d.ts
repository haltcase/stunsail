/// <reference types="node" />

/**
 *
 * @description
 * Check whether `value` is a Buffer.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | value | `any` | Value to test |
 *
 * @returns `boolean`
 *
 * @example
 * isBuffer(Buffer.from('string'))
 * // -> true
 *
 * isBuffer('string')
 * // -> false
 */
interface IsBuffer {
  (value: unknown): value is Buffer
}

declare const isBuffer: IsBuffer
export default isBuffer
