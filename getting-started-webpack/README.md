npm init -y

npm i webpack webpack-cli --save-dev

npm i lodash

npm run build


## 웹팩이란?
모듈 번들러

## 모듈과 모듈번들링
모듈 : 특정 기능을 갖는 작은 코드 단위

모듈번들링 : 어플리케이션을 구성하는 몇십, 몇백개의 자원들을 하나의 파일로 병합, 압축하는 동작을 말한다.

빌드, 번들링, 변환 모두 같은 의미

### 웹팩의 장점
cdn으로 이루어진 페이지를 불러오는 것보다 리퀘스트 요청 수가 적기 때문에 속도가 빠르다.

### 웹팩의 주요 4가지 속성
- Entry
  
    최초 진입점이자 자바스크립트 파일 경로
              
        // webpack.config.js
        module.exports = {
            entry: './src/index.js'

            // 진입점은 여러곳이 될 수 있다.
            // 진입점이 여러 곳 일 때는 SPA가 아닌 멀티페이지 어플리케이션에 적합하다.
            entry: {
              login: './src/LoginView.js',
              main: './src/MainView.js'
            }
        }
- Output
    
    웹팩을 돌리고 난 결과물의 파일 경로를 의미한다.  
    <code>filename</code>은 반드시 지정해줘야하고, 결과물 저장될 path 속성도 같이 넣어준다.
        
        output: {
          path: path.resolve(__dirname, 'build'),
          filename: 'main.bundle.js'
        }
- Loader

    웹팩이 웹 어플리케이션을 해설할 때 js 파일이 아닌 웹 자원들(html, css, images, font)을 변환할 수 있도록 도와주는 속성.
    </br>엔트리 아웃풋과 다르게 <code>module</code> 이라는 이름을 사용한다.

        // webpack.config.js
            module.exports = {
               module: {
                 rules: []
               }
            } 
  - 자세한 내용은 code-splitting 레포지토리에서 설명
- plugin


### 웹팩 설정 파일


    package.json

    "scripts": {
        "build": "webpack --mode-none --entry=src/index.js --output=public"
    },

웹팩 빌드 시에서 가지고 갈 설정 값들을 일일이 적으면 코드가 길어지니기 때문에 따로 설정 파일을 분리해서 사용할 수 있다.


    webpack.config.js

    const path = require('path')
    module.exports = {
        mode: 'none',
        entry: './srv/index.js',
        output: {
            filename: 'main.js',
            // resolve는 몬자열 경로를 합쳐주는 기능한다
            path: path.resolve(__dirname, 'dist')
        }
    }

### 바벨??
https://babeljs.io/
자바스크립트의 문법을 최대한 많은 브라우저에서 호환하게 해주는 컴파일러**