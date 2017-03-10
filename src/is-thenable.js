export default value => {
  return typeof value === 'object' &&
    typeof value.then === 'function'
}
