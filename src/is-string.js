import getType from './get-type'

export default function isString (value) {
  return getType(value) === 'string'
}
