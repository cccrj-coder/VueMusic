const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    proxy: {
        '/api': {
            target: 'http://tingapi.ting.baidu.com',
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


