const { resolve } = require('path')

const { Application } = require('typedoc')

const resolveInputs = (context, paths = []) =>
  paths.map(path => resolve(context.siteDir, path))

module.exports = (context, options) => {
  return {
    name: 'typedoc-provider',

    getPathsToWatch () {
      return resolveInputs(context, options.paths)
    },

    async loadContent () {
      const app = new Application({
        mode: 'file',
        includeDeclarations: true,
        exclude: '**/node_modules/**',
        excludeExternals: true,
        excludeNonExported: true,
        excludePrivate: true,
        excludeProtected: true,
        readme: 'none'
      })

      const inputs = resolveInputs(context, options.paths)
      const files = app.expandInputFiles(inputs)
      const project = app.convert(files)

      if (!project) {
        throw new Error('typedoc-provider encountered errors')
      }

      const data = app.serializer.projectToObject(project)
      return JSON.stringify(data, null, 2)
    },

    async contentLoaded ({ content, actions }) {
      await actions.createData('types.json', content)
    }
  }
}
