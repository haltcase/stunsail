export default function isThenable (value) {
  return (
    typeof value === "object" &&
    typeof value.then === "function"
  )
}
