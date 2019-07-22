

//使用http-proxy-middleware 代理解决跨域

module.exports = {
  devServer: {
    proxy: {
      '/1api': { //商品
        target: 'http://10.25.193.205:9999', //源地址
        // ws: true, //是否代理websockets
        changeOrigin: true, //允许跨域
        pathRewrite: {
          '^/1api': ''
        }
      },
      '/2api': { //商品类别
        target: 'http://10.25.193.165:9999', //源地址
        // ws: true, //是否代理websockets
        changeOrigin: true, //允许跨域
        pathRewrite: {
          '^/2api': ''
        }
      },
      '/3api': { //商品描述
        target: 'http://10.25.193.118:9998', //源地址
        changeOrigin: true, //允许跨域
        // ws: true, //是否代理websockets
        pathRewrite: {
          '^/3api': ''
        }
      },
      '/4api': { //用户管理  qinzi
        target: 'http://10.25.193.146:9999', //源地址
        // ws: true, //是否代理websockets
        changeOrigin: true, //允许跨域
        pathRewrite: {
          '^/4api': ''
        }
      },
      '/5api': { //订单管理   feifei
        target: 'http://10.25.193.190:9999', //源地址
        // ws: true, //是否代理websockets
        changeOrigin: true, //允许跨域
        pathRewrite: {
          '^/5api': ''
        }
      },
      
      // http://10.25.193.148:9999
    }
  }
}

