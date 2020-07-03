import get from "./get.js"

export default function getOr (object, path, defaultValue) {
  const value = get(object, path)
  return typeof value !== "undefined" ? value : defaultValue
}
