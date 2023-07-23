var path = require('path')
var webpack = require('webpack')

module.exports = {
    mode: 'production',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                // 바벨로 컴파일 하지 않을 것들을 제외시켜준다.
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    // 모듈을 해석하는 방식을 변경 가능 https://webpack.kr/configuration/resolve/
    resolve: {
        // import나 require를 사용할 때 특정 별칭을 사용할 수 있다.
        alias: {
            // js 파일에서 import 쓰고싶은이름 from 'vue' 를 쓰면  vue/dist/vue.esm.js 경로를 읽어 올 수 있다.
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json']
    },
    devServer: {
        historyApiFallback: true,
        // 웹팩 번들 정보 메세지를 억제. 오류경고는 계속 표시된다.
        noInfo: true,
        overlay: true // 컴파일러 오류 또는 경고가 있는 경우 브라우저에 전체화면 오버레이를 표시한다.
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}

// 아래 코드는  mode: 'production' 한거랑 같다

// if (process.env.NODE_ENV === 'production') {
//   module.exports.devtool = '#source-map'
//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     new webpack.DefinePlugin({
//       'process.env': {
//         NODE_ENV: '"production"'
//       }
//     }),
//     new webpack.optimize.UglifyJsPlugin({
//       sourceMap: true,
//       compress: {
//         warnings: false
//       }
//     }),
//     new webpack.LoaderOptionsPlugin({
//       minimize: true
//     })
//   ])
// }