const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
    // mode: 'production', 'development',
    mode: 'none',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            // css라는 확장자를 가진 모든 파일에 대해 아래 로더들을 적용하겠다
            test: /\.css$/,
            // use: ['style-loader', 'css-loader']
            use: [
                { loader: MiniCssExtractPlugin.loader },
                "css-loader"
            ]
        }]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
};