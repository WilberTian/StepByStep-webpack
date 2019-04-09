const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        publicPath: __dirname + "/dist/",
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        chunkFilename: '[name].chunk.js'
    }
};
