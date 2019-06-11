const webpack = require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer')
const extractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const glob = require('glob')
const WebpackClean = require('webpack-clean');

const DEVELOPMENT = 'development';
const PRODUCTION = 'production';
const isDevelopment = process.env.NODE_ENV === DEVELOPMENT;

const config = {
    devtool: isDevelopment && 'eval',
    devServer: {
        stats: 'errors-only',
        port: 8080
    },
    stats: {
        children: false
    },

    entry: {
        'js/main': ['babel-polyfill', path.resolve(__dirname, 'src/scripts/index.js')],
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
        pathinfo: isDevelopment
    },
    resolve: {
        extensions: ['', '.js', '.styl']
    },
    module: {
        loaders: [
            {
                test: /\.styl$/,
                loader: extractTextPlugin.extract('style', 'css!postcss!stylus')
            },
            {
                test: /\.(png|jpg|gif|ttf|svg|woff)$/,
                loader: 'url?limit=1000000'
            },
            {
                test: /\.js$/,
                loader: 'babel',
                include: path.join(__dirname, 'src'),
                exclude: /node_modules/
            },
            {
                test: /\.pug$/,
                loader: 'pug',
                query: {
                    pretty: true
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    postcss: [
        autoprefixer({
            browsers: ['last 2 versions']
        })
    ],
    node: {
        __dirname: true
    },
    plugins: [
        new WebpackClean(['build/css/*.js']),
        new webpack.NoErrorsPlugin(),
        new extractTextPlugin('[name].css', {
            allChunks: true
        }),
        new webpack.optimize.UglifyJsPlugin({
            minimize: !isDevelopment,
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'global.GENTLY': false,
            'process.env': {
                'NODE_ENV': JSON.stringify(isDevelopment ? DEVELOPMENT : PRODUCTION)
            }
        }),
    ]
}

glob.sync(__dirname + '/src/styles/**/index.styl', {}).forEach(filePath => {
    const file_name = path.parse(filePath).dir.split('/').splice(-1);

    Object.assign(config.entry, {
        [file_name]: filePath
    });
})

glob.sync(__dirname + '/src/templates/**/index.pug', {}).forEach(filePath => {
    const JS_CHUNK = 'js/main';
    const file_name = path.parse(filePath).dir.split('/').splice(-1)[0];
    const assets = Object.keys(config.entry)

    const needed_assets = assets.filter(asset => asset === file_name)
    const chunks = [...needed_assets, JS_CHUNK]

    config.plugins.push(new HtmlWebpackPlugin({
        template: filePath,
        filename: `${file_name}.html`,
        chunks
    }));
})

module.exports = config;
