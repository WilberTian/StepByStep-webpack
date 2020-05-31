class BasicPlugin {
  constructor (options) {
  }

  apply (compiler) {
    compiler.hooks.emit.tap('compilation',function (compilation) {
      console.log('-------> compilation from BasicPlugin')
    })
  }
}

module.exports = BasicPlugin
