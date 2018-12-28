const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const devConfig = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js', // 输出文件
    libraryTarget: 'umd', // 采用通用模块定义
    library: 'react-component-boilerplate', // 库名称
    libraryExport: 'default', // 兼容 ES6(ES2015) 的模块系统、CommonJS 和 AMD 模块规范
  },
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom"
    }
  }
}

module.exports = merge(devConfig, baseConfig);
