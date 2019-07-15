const path = require('path')

// 这个配置文件其实就是一个JS文件，通过 Node 中的模块操作，向外暴露了一个配置对象
module.exports = {
    //提供 mode 配置选项，告知webpack使用相应模式的内置优化
    mode: 'development',
    // 入口，表示要使用webpack打包哪个文件
    entry: path.join(__dirname, './src/main.js'),
    // 输出文件相关的配置
    output:{ 
        path: path.join(__dirname, './dist'), //指定输出目录
        filename: 'bundle.js' // 指定输出的文件的名称
    }
}