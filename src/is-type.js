import getType from './get-type'

export default function isType (value, type) {
  let assertionType = getType(type)

  if (assertionType !== 'string') {
    type = assertionType
  }

  return getType(value) === type.toLowerCase()
}
