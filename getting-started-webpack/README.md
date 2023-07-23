npm init -y

npm i webpack webpack-cli --save-dev

npm i lodash

npm run build


## 웹팩이란?
모듈 번들러



### 모듈과 모듈번들링
모듈 : 특정 기능을 갖는 작은 코드 단위

모듈번들링 : 어플리케이션을 구성하는 몇십, 몇백개의 자원들을 하나의 파일로 병합, 압축하는 동작을 말한다.

빌드, 번들링, 변환 모두 같은 의미

### 웹팩의 장점
cdn으로 이루어진 페이지를 불러오는 것보다 리퀘스트 요청 수가 적기 때문에 속도가 빠르다.

### 웹팩의 등장배경
1. 파일 단위의 자바스크립트 코듈 관리의 필요성
       
        // app.js
        var num = 10;
        function getNum() {
            console.log(num);
        }

        // main.js
        var num = 20;
        function getNum() {
            console.log(num);
        }

        <script src="./app.js"></script>
        <script src="./main.js"></script>
        <script>
          getNum(); // 20
        </script>
getNum을 호출하면 결과는 20이 된다. app.js에서 불러 왔던 변수 num이 main.js를 호출하면서 덮어씌워지기가 된 것이다.
개발 시에 변수명이 중복되는 경우가 발생하는데 웹팩을 사용하면 파일 단위로 변수를 관리할 수 있다. 
        
2. 웹 개발 작업 자동화 도구
- 프런트에서 개발 시 코드 저장하고 브라우저 새로고침을 눌러야지 변경사항을 볼 수 있었고,
- html, css, js 압축
- 이미지압축
- css 전처리기 변환
위 기능들을 Grunt와 Gulp 같은 것들을 사용했는데 지금은 웹팩이 다 한다.

3. 웹 애플리케이션의 빠른 로딩 속도와 높은 성능
- 브라우저에서 서버로 요청하는 파일 수가 줄어든다.
- 레이지로딩 : 초기 페이지 로딩 속도를 높이기 위해 필요한 자원들은 나중에 요청
- 웹팩은 기본적으로 필요한 자원은 미리 로딩하는게 아니라 그 때 그 때 요청하자는 철학을 갖고 있음

### 웹팩으로 해결하려는 문제(등장 배경과 유사)
- 자바스크립트 변수 유효 범위
- 브라우저별 HTTP 요청 숫자의 제약
  - 에어bnb 같은 경우 파일이 3천개를 넘어간다고 한다. 
  - 크롬은 한번에 6개를 연결 가능한데 3천개면 6개씩 나눠서 로딩해야하기 때문에 느려져서 튜닝이 필요했던듯하다
  
- 사용하지 않는 코드의 관리
- Dynamic Loading & Lazy Loading 미지원
  - 웹팩의 코드스플리팅 기능을 사용해서 원하는 타이밍에 모듈 로딩이 가능하다

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