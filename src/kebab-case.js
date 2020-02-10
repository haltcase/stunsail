import {
  WORD_SEPARATOR_REGEX as separators,
  UPPERCASE_CHARACTER_REGEX as uppers
} from "./constants"

export default function kebabCase (string) {
  return string
    .replace(uppers, match => " " + (match.toLowerCase() || match))
    .trim()
    .split(separators)
    .join("-")
}
