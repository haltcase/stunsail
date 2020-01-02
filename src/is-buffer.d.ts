/// <reference types="node" />
/**
 * Check whether `value` is a Buffer.
 */
interface IsBuffer {
  (value: unknown): value is Buffer
}

declare const isBuffer: IsBuffer
export default isBuffer
