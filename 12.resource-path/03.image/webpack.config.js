const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: {
        'index': './src/scripts/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'scripts/[name].js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: '../'
                    }
                },
                {
                    loader: 'css-loader'
                }
            ]
        }, {
            test: /\.(png|jpeg|gif)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        useRelativePath: true,
                        outputPath: 'images/',
                        name: '[name].[ext]'
                    }
                }
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles/[name].css",
            chunkFilename: "[id].css",
            allChunks: true
        })
    ]
};
