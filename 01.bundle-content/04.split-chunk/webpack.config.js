const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        'entryAdd': './src/entry-add.js',
        'entrySum': './src/entry-sum.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'commons',
                    chunks: 'all',
                    minChunks: 2,
                    minSize: 0
                }
            }
        }
    }
};
