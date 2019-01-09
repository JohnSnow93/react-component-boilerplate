const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const devConfig = {
  entry: './demo/index.js',
  mode: 'development',
  output: {
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, '../demo')
  },
  devServer: {
    contentBase: path.join(__dirname, '../demo'),
    compress: true,
    port: 9000,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        exclude: '/node_modules/',
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'less-loader' // compiles Less to CSS
        }]
      },
    ]
  },
}

module.exports = merge(devConfig, baseConfig);
