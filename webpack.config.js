const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssWebpackPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, "./admin-page/src/index.js"),
    output: {
        path: path.resolve(__dirname, "../JSChatBack-end/public/admin"),
        filename: "index.js"
    },
    optimization: {
        minimize: false,
    },
    module: {
        rules: [
            {test: /\.html$/, use: "html-loader"},
            {test: /\.less$/, use: [CssWebpackPlugin.loader, "css-loader", "less-loader"]},
            {test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: './images',
                        },
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./admin-page/src/index.html"),
            filename: "index.html"
        }),
        new CssWebpackPlugin({
            filename: "style.css"
        })
    ]
}