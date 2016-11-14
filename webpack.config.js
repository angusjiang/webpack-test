var webpack = require('webpack');
//添加分类css插件
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var hotModuleReplacementPlugin = require("webpack/lib/HotModuleReplacementPlugin");
module.exports = {
    entry: {
        home: "./js/home",
        detail: "./js/detail"
    },
    output: {
        path: "assets",                   //打包输出目录
        publicPath: "/static/build/",     //webpack-dev-server访问的路径
        filename: "[name].js",            //输出文件名
        chunkFilename: "bundle-[id].js"   //输出chunk文件名
    },
    watch: true,

    watchOptions: {
      poll: true
    },
    resolve: {
        //modulesDirectories: ['.']
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader:  ExtractTextPlugin.extract("style-loader", "css-loader")
            },
        ]
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    }
}
