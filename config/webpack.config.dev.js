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
  plugins: [
    // new HtmlWebpackPlugin(HtmlWebpackPluginConfig)
  ]
}

module.exports = merge(devConfig, baseConfig);
