
// 方便使用
const path = require('path')
const CracoLessPlugin =require('craco-less')

const resolve = pathname => path.resolve(__dirname,pathname)

module.exports ={
    // less 的配置
    plugins:[
        {
            plugin:CracoLessPlugin
        }
    ],

    // +方法二--操作webpack --难实现
    // 方法一--craco.config配置
    // webpack的配置
    webpack:{
        alias:{
            "@":resolve("src"),
            "components":resolve("src/components"),
            "utils":resolve("src/utils")
        }
    }
}