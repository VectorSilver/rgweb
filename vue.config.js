//使用http-proxy-middleware 代理解决跨域

module.exports = {
  devServer: {
    proxy: {
      // '/api': {
      //   target: 'http://10.25.193.177:9999', //源地址
      //   changeOrigin: true, //允许跨域
      //   ws: true, //是否代理websockets
      //   pathRewrite: {
      //     '^/api': ''
      //   }
      '/api': { //奕桦
        target: 'http://10.25.193.205:9999', //源地址
        changeOrigin: true, //允许跨域
        ws: true, //是否代理websockets
        pathRewrite: {
          '^/api': ''
        }
      },
      // '/api': { //商品描述-家琪
      //   target: 'http://10.25.193.118:9998', //源地址
      //   changeOrigin: true, //允许跨域
      //   ws: true, //是否代理websockets
      //   pathRewrite: {
      //     '^/api': ''
      //   }
      // }
    }
  }
}
