const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: './test.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                {
                    loader: 'style-loader'
                },
                MiniCssExtractPlugin.loader,
                {
                    loader: path.resolve(__dirname, 'src/index.js'),
                    options: {
                        baseSize: 20
                    }
                },
                {
                    loader: 'css-loader'
                }
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
            allChunks: true
        })
    ]
};
