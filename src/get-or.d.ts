import { PathLinks } from './types'

/**
 * Access a property of `object` at `path` safely & deeply, returning
 * `defaultValue` if it doesn't exist.
 */
interface GetOr {
  <K extends string | number | symbol, V> (object: Record<K, V>, path: string | PathLinks, defaultValue: V): V
}

declare const getOr: GetOr
export default getOr
