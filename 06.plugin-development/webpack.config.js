const path = require('path')
const BasicPlugin = require('./01.basic-plugin')
const Plugin02 = require('./02.plugin')
const Plugin03 = require('./03.plugin')

module.exports = {
  mode: 'development',
  entry: {
    entryAdd: './src/entry-add.js',
    entrySum: './src/entry-sum.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2,
          minSize: 0,
        },
      },
    },
  },
  plugins: [
    // new BasicPlugin(),
    // new Plugin02(),
    new Plugin03(),
  ],
}
