const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        'index': './src/scripts/index.js', 
        'list': './src/scripts/list.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'scripts/[name].js'
    }
};
