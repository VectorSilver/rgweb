module.exports = {
    devServer: {
      proxy: {
          '/api': { //qinzi
            target: 'http://10.25.193.146:9999', //源地址
            changeOrigin: true, //允许跨域
            ws: true, //是否代理websockets
            pathRewrite: {
                '^/api': ''
          }
        }
      }
    }
  }