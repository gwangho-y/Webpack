js module 

math.js -> app.js 임포트

npm run build

index.html 실행 시 빌드 된 main.bundle.js를 불러온다


### 바벨??
https://babeljs.io/
자바스크립트의 문법을 최대한 많은 브라우저에서 호환하게 해주는 컴파일러**


### 소스맵 보기
개발자 도구에서 페이지를 구성하는 파일들이 어떻게 연관되어 있는지 볼 수 있게 해주는 옵션 

    webpack.config.js 에서 아래 프로퍼티를 추가한다.

    devtool: 'source-map'