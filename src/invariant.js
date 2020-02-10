export default function invariant (condition, message = "Invariant Violation") {
  if (!condition) {
    const error = new Error(message)
    error.name = "InvariantError"
    error.framesToPop = 1
    throw error
  } else {
    return condition
  }
}
