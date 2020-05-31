class Plugin {
  apply (compiler) {
    compiler.hooks.emit.tapAsync('Plugin02', function (compilation, callback) {
      compilation.chunks.forEach(chunk => {
        console.log(chunk.id, chunk.name)
        for(const module of chunk.modulesIterable) {
          // console.log(Object.keys(module))
          // console.log(module.dependencies)
          module.dependencies.forEach(function (dependency) {
            // console.log(Object.keys(dependency))
            console.log(dependency.name)
          });
        }

        chunk.files.forEach(function (filename) {
          console.log(`-------> ${filename}`)
          // let source = compilation.assets[filename].source();
        });
      })

      callback()
    })
  }
}

module.exports = Plugin