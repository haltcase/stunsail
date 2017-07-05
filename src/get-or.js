import get from './get'

export default function getOr (object, path, defaultValue) {
  let value = get(object, path)
  return typeof value !== 'undefined' ? value : defaultValue
}
