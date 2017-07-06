export default function _normalizePath (path) {
  return path
    .replace(/\[([^[\]]+)\]/g, '.$1')
    .replace(/^[.]*|[.]*$/g, '')
}
