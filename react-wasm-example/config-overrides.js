const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

module.exports = {
    webpack: function (config) {

        config.resolve.plugins = config.resolve.plugins.filter(plugin => !(plugin instanceof ModuleScopePlugin));

        config.module.rules.push({
            test: /\.rs$/,
            use: [{
                loader: 'wasm-loader'
            }, {
                loader: 'rust-native-wasm-loader',
                options: {
                    release: true,
                }
            }]
        })

        return config;
    }
}