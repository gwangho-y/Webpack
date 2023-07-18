node -v

npm init

npm init -y

npm install jquery

npm i gulp

npm uninstall gulp

npm i gulp --global

npm install vue --save-D



### npm의 장점 
- 라이브러리를 cdn으로 일일이 하나씩 관리하지 않고, package.json에서 일관관리 할 수 있다.
아래와 같은 코드를 html 파일에 넣어서 하나씩 관리한다면 관리하기가 불편하다.
예를들어 제이쿼리 라이브러리와 제이쿼리 ui 라이브러리가 서로 의존적인 관계에 있고, 서로 버전이 바뀔 때마다 html 파일을 하나씩 수정해야 한다면
이는 매우 귀찮은 작업이 될 것이다. 하지만 package.json에서 일괄 관리하면 새버전을 인스톨하면 되기 때문에 편리하다. 

        <script
                src="https://code.jquery.com/jquery-3.7.0.js"
                integrity="sha256-JlqSTELeR4TLqP0OG9dxM7yDPqX1ox/HfgiSLBj8+kM="
                crossorigin="anonymous"></script>
        <script src="https://jquery-ui.com/date-picker-v2.js"></script>


- 또한 cdn을 일일히 검색해서 맞는 uri를 넣어줘야하는 불편함이 없어진다.

    



### npm 지역설치
해당 프로젝트의 <code>node_modules</code> 아래 설치된다.

#### 옵션
-  npm install 라이브러리명 -dev

      package.json의 dependencies가 아닌 devDependencies에 추가된다


### dependencies와 devDependencies의 차이
dependencies: 애플리케이션의 로직, 화면구현과 직접적 관련있는 라이브러리를 모아 놓는 곳 <br>
ex) 제이쿼리, 뷰, 리액트

devDependencies: 개발을 할 때 도움을 주는 개발 보조 라이브러리들을 모아놓는 곳.<br>
ex)웹팩, 자바스크립트 압축, sass

배포용 라이브러리와 개발용 라이브러리를 나눠놓기 위해 사용한다

### npm 전역설치
시스템 레벨 경로에 설치된다.
  %USERPROFILE%\AppData\Roaming\npm



## 웹팩이란?
모듈 번들러

## 모듈과 모듈번들링
모듈 : 특정 기능을 갖는 작은 코드 단위

모듈번들링 : 어플리케이션을 구성하는 몇십, 몇백개의 자원들을 하나의 파일로 병합, 압축하는 동작을 말한다.

빌드, 번들링, 변환 모두 같은 의미
