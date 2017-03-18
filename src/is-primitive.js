export default value => {
  return !value || (
    typeof value !== 'object' &&
    typeof value !== 'function'
  )
}
