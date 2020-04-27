const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

module.exports = {
    // context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        app: ['./src/js/app.js']
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './docs/js'),
        publicPath: './docs'
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
        }
    },
    devServer: {
        port: 4200,
        contentBase: './dist',
        overlay: true
    },
    devtool: isDev ? 'eval-cheap-source-map' : undefined,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env',
                            {
                                debug: isDev ? true : undefined,
                                corejs: 3,
                                useBuiltIns: 'usage'
                            }]
                        ]
                    }
                }
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, './src/img'),
                to: path.resolve(__dirname, './docs/img')
            },
            {
                from: path.resolve(__dirname, './src/css'),
                to: path.resolve(__dirname, './docs/css')
            },
            {
                from: path.resolve(__dirname, './src/index.html'),
                to: path.resolve(__dirname, './docs/index.html')
            },
            {
                from: path.resolve(__dirname, './src/fonts'),
                to: path.resolve(__dirname, './docs/fonts')
            }
        ]),
    ]
};
