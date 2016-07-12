const webpack = require('webpack')
const path = require('path')
const autoprefixer = require('autoprefixer')
const extractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const glob = require('glob')

const config = {
  devtool: 'source-map',
  entry: {
    'js/main': path.resolve(__dirname, 'src/scripts/index.js')
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
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
        loaders: ['es3ify', 'babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.jade$/,
        loader: 'jade',
        query: {
          pretty: true
        }
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
    new extractTextPlugin('[name].css'),
    // new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({ "global.GENTLY": false })
  ]
}

glob.sync(__dirname + '/src/styles/**/index.styl', {}).forEach(filePath => {
  const file_name = path.parse(filePath).dir.split('/').splice(-1);

  Object.assign(config.entry, {
    [file_name]: filePath
  });
})

glob.sync(__dirname + '/src/templates/**/index.jade', {}).forEach(filePath => {
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
