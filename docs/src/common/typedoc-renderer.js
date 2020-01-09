import { camelize, md } from './utils'

export const getName = node =>
  camelize(node.sources[0].fileName.replace('.d.ts', ''))

export const getTag = (node, tagName) => {
  if (!node.comment || !node.comment.tags) return {}
  return node.comment.tags.find(it => it.tag === tagName) || {}
}

export const getTags = (node, tagName) => {
  if (!node.comment || !node.comment.tags) return []
  return node.comment.tags.filter(it => it.tag === tagName) || []
}

export const getDescription = node => {
  return md.processSync(getTag(node, 'description').text).toString()
}

export const getSignature = (node, name) => {
  const { parameters = [] } = node.signatures[0]

  return `
    ${name}(${parameters.map(p => (p.flags.isRest ? '...' : '') + p.name).join(', ')})
  `.trim()
}

export const getReturns = node => {
  if (!node.comment || !node.comment.returns) return
  return md.processSync(node.comment.returns).toString()
}

export const getParams = node => {
  return md.processSync(getTag(node, 'parameters').text).toString()
}

export const getTypedSignature = ({ parameters = [], typeParameter = [], type }, name) => {
  const types = typeParameter.map(t => t.name).join(', ')
  const params = parameters.map(p =>
    `${p.flags.isRest ? '...' : ''}${p.name}: ${stringifyType(p.type)}`
  ).join(', ')
  const returns = stringifyType(type)

  const returnToken = name === '' ? ' => ' : ': '
  const typeParams = types === '' ? '' : ' <' + types + '>'

  return `
    ${name}${typeParams} (${params})${returnToken}${returns}
  `.trim()
}

export const stringifyType = node => {
  const { type, kindString, name, typeArguments = [], types = [] } = node

  switch (type) {
    case 'array': {
      const elementType = node.elementType.type
      return elementType === 'intrinsic' || elementType === 'typeParameter'
        ? `${stringifyType(node.elementType)}[]`
        : `(${stringifyType(node.elementType)})[]`
    }
    case 'union':
      return types.map(t => stringifyType(t)).join(' | ')
    case 'intersection':
      return types.map(t => stringifyType(t)).join(' & ')
    case 'predicate':
      return `${name} is ${stringifyType(node.targetType)}`
    case 'reflection':
      return node.declaration.signatures.map(t => stringifyType(t)).join(' | ')
    case 'tuple':
      return `[${node.elements.map(t => stringifyType(t)).join(', ')}]`
    case 'indexedAccess':
      return `${stringifyType(node.objectType)}[${stringifyType(node.indexType)}]`
    case 'typeOperator':
      return `${node.operator} ${stringifyType(node.target)}`
    case 'conditional': {
      const condition = `${stringifyType(node.checkType)} extends ${stringifyType(node.extendsType)}`
      return `${condition} ? ${stringifyType(node.trueType)} : ${stringifyType(node.falseType)}`
    }
  }

  if (kindString === 'Call signature') {
    return getTypedSignature(node, '')
  }

  let result = name

  if (typeArguments && typeArguments.length) {
    result += `<${typeArguments.map(t => stringifyType(t)).join(', ')}>`
  }

  return result
}
