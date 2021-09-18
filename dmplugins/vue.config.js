module.exports = {
    lintOnSave: false,
    configureWebpack: {
        devServer: {
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            disableHostCheck: true,
            sockPort: 8080,
            sockHost: 'localhost',
            https: false,
            port: 8080,
        },
        externals: ['vue', 'vue-router', /^@zuri\/.+/],
    },
    filenameHashing: false,
};
