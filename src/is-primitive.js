export default function isPrimitive (value) {
  return !value || (
    typeof value !== 'object' &&
    typeof value !== 'function'
  )
}
