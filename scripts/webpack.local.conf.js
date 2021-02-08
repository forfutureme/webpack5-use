/**
 * @Author: huweijian
 * @Date: 2021-02-07 13:53:36
 * @Desc: webpack本地开发配置
 */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {joinPath} = require('./utils')

module.exports = {
  mode: 'development',
  entry: joinPath('./src/index.js'),
  output: {
    filename: 'main.js',
    path: joinPath('dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: require('../package.json').description,
      inject: true,
      filename: 'index.html',
      template: joinPath('/index.html')
    })
  ],
  devServer: {
    port: 3234,
    historyApiFallback: true,
    contentBase: joinPath('dist'),
    hot: true
  }
}