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

## 웹팩 설정 파일


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

## mode