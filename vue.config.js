//vue.config.js
const TransformPages = require('uni-read-pages')
const tfPages = new TransformPages({
	includes: ['path','meta']         
})
const resolve = dir => require('path').join(__dirname, dir)
module.exports = {
    configureWebpack: {
        plugins: [
            new tfPages.webpack.DefinePlugin({
                ROUTES: JSON.stringify(tfPages.routes)
            })
        ]
    }
}