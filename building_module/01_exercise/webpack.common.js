var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

var path = require('path');
var basePath = __dirname;

module.exports = {
    context: path.join(basePath, 'src'),
    resolve: {
        extensions: ['.js', '.ts'],
    },
    entry: {
        app: './index.ts',
        appStyles: ['./sass/main.scss'],
    },
    output: {
        filename: '[name].[chunkhash].js',
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    name: 'vendor',
                    test: /vendor$/,
                    enforce: true,
                },
            },
        },
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                        },
                    },
                ],
            },

            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpg)$/,
                exclude: /node_modules/,
                loader: 'url-loader?limit=5000',
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            hash: true,
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new ForkTsCheckerWebpackPlugin({
            tsconfig: '../tsconfig.json',
            async: false,
        }),
        new CleanWebpackPlugin(),
    ],
};
