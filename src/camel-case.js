import {
  WORD_SEPARATOR_REGEX as separators
} from "./constants"

export default function camelCase (string) {
  const words = string.split(separators)
  const { length } = words
  const result = new Array(length)

  let i = -1
  while (i++ < length) {
    const word = words[i]
    if (!word) continue

    let [char] = word
    char = i ? char.toUpperCase() : char.toLowerCase()
    result[i] = char + word.slice(1)
  }

  return result.join("")
}
