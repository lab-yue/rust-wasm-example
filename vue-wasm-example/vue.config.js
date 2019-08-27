const path = require('path')
const wasmExtensionRegExp = /\.wasm$/;

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      extensions: [
        '.wasm'
      ]
    },
    module: {
      rules: [{
        test: wasmExtensionRegExp,
        include: path.resolve(__dirname, '../generated'),
        use: [{ loader: require.resolve('wasm-loader'), options: {} }]
      }]
    }
  }
}