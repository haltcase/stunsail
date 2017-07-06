export default function isIterable (value) {
  return (
    value != null &&
    typeof value[Symbol.iterator] === 'function'
  )
}
