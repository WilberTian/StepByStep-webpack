const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'cheap-source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    optimization: {
        usedExports: true
    }
};
