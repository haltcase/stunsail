export default (condition, message) => {
  if (!condition) {
    let error = new Error(message || 'Invariant Violation')
    error.name = 'InvariantError'
    error.framesToPop = 1
    throw error
  } else {
    return condition
  }
}
