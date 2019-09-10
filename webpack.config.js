const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: "cheap-module-inline-source-map",
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
    },
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            { test: /\.tsx?$/, enforce: "pre", loader: "tslint-loader" },
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.s[ac]ss$/i, use: [ 'style-loader', 'css-loader', 'sass-loader' ] },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ]
};
