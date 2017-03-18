import curry from './curry'
import getType from './get-type'

export default curry(function isType (type, value) {
  let assertionType = getType(type)

  if (assertionType !== 'string') {
    type = assertionType
  }

  return getType(value) === type.toLowerCase()
})
