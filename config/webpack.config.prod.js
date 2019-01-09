const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devConfig = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.js', // 输出文件
    libraryTarget: 'umd', // 采用通用模块定义, 注意webpack到4.0为止依然不提供输出es module的方法，所以输出的结果必须使用npm安装到node_modules里再用，不然会报错
    library: 'react-simple-component-boilerplate', // 库名称
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
  },
  // optimization: {
  //   minimizer: [
  //     new UglifyJsPlugin({
  //       cache: true,
  //       parallel: true,
  //       uglifyOptions: {
  //         compress: {
  //           warnings: false,
  //           drop_debugger: true,
  //           drop_console: false
  //         },
  //       }
  //     }),
  //     new OptimizeCSSAssetsPlugin({
  //       // 压缩css  与 ExtractTextPlugin 配合使用
  //       cssProcessor: require("cssnano"),
  //       cssProcessorOptions: { discardComments: { removeAll: true } }, // 移除所有注释
  //       canPrint: true // 是否向控制台打印消息
  //     })
  //   ],
  //   noEmitOnErrors: true,
  // },
  module: {
    rules: [{
      test: /\.(le|c)ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        { loader: "postcss-loader", options: { sourceMap: false } },
        {
          loader: "less-loader",
          options: {
            sourceMap: false
          }
        }
      ]
    }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].min.css"
    })
  ],
}

module.exports = merge(devConfig, baseConfig);
