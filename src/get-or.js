import get from './get'

export default function getOr (object, path, defaultValue) {
  const value = get(object, path)
  return typeof value !== 'undefined' ? value : defaultValue
}
