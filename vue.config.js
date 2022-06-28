const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    proxy: {
        '/api': {
            target: 'http://iwenwiki.com:3000/',
            changeOrigin: true,
            pathRewrite: {
                "^/api": ""
            }
        }
    }
},
  transpileDependencies: true,
  lintOnSave: false,
})


