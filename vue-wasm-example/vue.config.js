module.exports = {
  lintOnSave: false,
  configureWebpack: {
    module: {
      rules: [{
        test: /\.rs$/,
        use: [{
          loader: 'wasm-loader'
        }, {
          loader: 'rust-native-wasm-loader',
          options: {
            release: true,
          }
        }]
      }]
    }
  }
}
