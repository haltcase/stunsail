export default function isArrayLike (value) {
  if (!value) return false
  if (Array.isArray(value) || typeof value === "string") return true

  const { length } = value

  return (
    (typeof value === "object" || typeof length === "number") &&
    (length === 0 || (length > 0 && (length - 1) in value))
  )
}
