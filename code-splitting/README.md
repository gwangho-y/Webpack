## Loader

* 로드들이 필요 하면 https://webpack.js.org/loaders/ 보자

로더란 웹팩이 웹어플리케이션을 해석할 때 JS 파일이 아닌 웹 자원(HTML, CSS, image, font)들을 변환할 수 있도록 도와주는 속성.
plugin과 다른 점은 loader는 파일을 해석하고 변환하는 과정에 관여한다.

module -> rules 에 css를 js 파일에 번들링 가능하게 해주는 로더들을 추가 할 수 있다.
아래 로더들을 추가한 상태에서 번들링을 하고, html 파일을 실행하면 bundle.js에서 css 파일을 성공적으로 import 시킬 수 있다.


    // webpack.config.js
    module.exports = {
        mode: 'production',
        // mode: 'none',
        entry: './index.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[chunkhash].js'
        },
        module: {
            rules: [{
                // css라는 확장자를 가진 모든 파일에 대해 아래 로더들을 적용하겠다
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }]
        }
    };

<br>    

    // index.js
    import  './base.css'

<br>  

    // bundle.js 안에 css파일의 내용이 묶였다.
    ___CSS_LOADER_EXPORT___.push([module.id, `p {
        color: blue;
    }`, ""]);
    


## Plugin
웹팩의 기본적인 동작에 추가적인 기능을 제공하는 속성</br>
로더는 파일을 해석하고 변환하는 과정에 관여하지만, 플러그인은 결과물의 형태를 바꾸는 역할을 한다.</br>
위 예제에서 로더는 `css-loader`와 `style-loader`를 사용해 
`index.js`와 `main.css`를 계층적으로 묶어 한 파일이 되게 했지만 `MiniCssExtractPlugin` 를 사용하면
별도의 `main.css` 파일을 만들어주며, html 파일에서 css를 link로 불러올 수 있게 된다. </br>

예를들어 `css-loader`만 적용해서 빌드하면 `bundle.js` 안에는 아래 코드로 css 파일이 청크로 들어가 있다.

    ___CSS_LOADER_EXPORT___.push([module.id, `p {
        color: blue;
    }`, ""]);

추가로 `MiniCssExtractPlugin` 플러그인을 적용하면 위 코드를 파일로 뽑아서 `main.css`로 분리해준다.</br>
즉, 플러그인은 결과물인 `bundle.js` 같은 청크 결과물의 형태를 바꾸는 역할을 한다.

다시 한번 설명하면, Loader는 js,html,css 같은 자원을 해석하고 묶어주고 변환해주지만, 
Plugin은 웹팩 빌드 시 만들어지는 결과물을 별도의 파일로 분리하는 등의 형태를 바꾸는 역할을 할 수 있다. 

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