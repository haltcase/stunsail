import kebab from '../kebab-case'
import filter from '../filter'

let getNamespaces = filter(({ type }) => type === 'ImportSpecifier')

function makeImport (t, name, options) {
  let { useRequire, useModules } = options
  let file = kebab(name)
  let es = !useRequire && useModules ? 'es/' : ''
  let path = `stunsail/${es}${file}`

  if (useRequire) {
    return t.variableDeclaration('const', [
      t.variableDeclarator(
        t.identifier(name),
        t.callExpression(
          t.identifier('require'),
          [t.stringLiteral(path)]
        )
      )
    ])
  }

  return t.importDeclaration(
    [t.importDefaultSpecifier(t.identifier(name))],
    t.stringLiteral(path)
  )
}

export default function ({ types: t }) {
  return {
    visitor: {
      CallExpression (path, state) {
        if (
          !t.isIdentifier(path.node.callee, { name: 'require' }) ||
          !t.isStringLiteral(path.node.arguments[0], { value: 'stunsail' })
        ) return

        let parent = path.parentPath.parentPath
        let options = { useRequire: true, useModules: state.opts.useModules }

        let imports = []
        parent.node.declarations.forEach(declaration => {
          if (!t.isObjectPattern(declaration.id)) return

          declaration.id.properties.forEach(property => {
            imports.push(makeImport(t, property.key.name, options))
          })
        })

        if (imports.length) {
          parent.replaceWithMultiple(imports)
        }

        path.stop()
      },

      ImportDeclaration (path, state) {
        let { node: { source, specifiers } } = path
        if (source.value !== 'stunsail') return

        let imports = []
        let namespaces = getNamespaces(specifiers)

        namespaces.forEach(namespace => {
          let { imported, local } = namespace
          let name = imported.name || local.name
          imports.push(makeImport(t, name, state.opts))
        })

        if (imports.length > 0) {
          path.replaceWithMultiple(imports)
        }

        path.stop()
      }
    }
  }
}
