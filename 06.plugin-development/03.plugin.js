class Plugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync('Plugin03', (compilation, callbakck) => {
      const manifest = {}
      for (const name of Object.keys(compilation.assets)) {
        manifest[name] = compilation.assets[name].size()
      }

      compilation.assets['manifest.json'] = {
        source() {
          return JSON.stringify(manifest)
        },
        size() {
          return this.source().length
        },
      }

      callbakck()
    })
  }
}

module.exports = Plugin
