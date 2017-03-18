export default value => {
  return (
    value != null &&
    typeof value[Symbol.iterator] === 'function'
  )
}
