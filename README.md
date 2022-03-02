# blind clone page (client or server)

<br/>

## 목차

1. [환경 구성](#환경-구성)
2. [구현 기능](#구현-기능)

<br/>

## 환경 구성

- Frontend
  - NuxtJs
  - vue
  - scss
  - moment

<br/>

- Backend
  - express
  - MongoDB (Mongoose)
  - AWS S3 (image upload)
  - cors

<br/>

## 목적

- Vue2 프레임워크 및 NuxtJs 프레임워크 기능 구현 및 숙달
- Client와 Server 와의 연계를 통한 학습
- CRUD 구현 연습
- axois 데이터 통신 구현
- Aws 간단한 사용법 숙지
- SSR or SPA 개념 숙지

<br/>

## 문제사항

- DB ERD 설계 필요
- 풀스택 프로젝트이기때문에 완벽한 클론보다, 하나하나의 기능 위주로 진행함. (전체적인 기능이 완벽하지않음)

<br/>

## 구현 기능

- GNB (Global Navigation Bar) 구현
  ![GNB](https://user-images.githubusercontent.com/30334829/156401836-c6befb6f-d488-4e44-9a77-d3899b7ed979.gif)

  ```
  블라인드 웹페이지 GNB처럼 구성하여 진행하였습니다.
  ```

<br/>

- 회원가입, 로그인, 글쓰기 Modal Browser 구현
  ![creatuser](https://user-images.githubusercontent.com/30334829/156402245-2c74af51-2d38-4a40-8343-3eba4e3cab35.gif)

  ```

  블라인드 모바일에서 OTP 연계와는 다르게 로컬 로그인을 추가하였습니다.

  ```

<br/>

- OTP 모달창
  ![image](https://user-images.githubusercontent.com/30334829/156403368-119ce460-04a7-4401-b0c7-60c8f9c76098.png)

  ```
    OTP 연계 모달창과, 남은시간을 표시한다. '블라인드에 처음이신가요' 클릭시 로그인 모달로 바뀐다.
  ```

<br/>

- Jwt 사용자 인증 (서버와의 연계)

<br/>

- 개별 게시글 페이지 구현 (한 화면페이지 안에 개별 게시글을 볼수있다.)

  ![image](https://user-images.githubusercontent.com/30334829/156405801-f4e3620e-78a5-4a72-bad9-b24ee3f73bec.png)

<br/>

- 게시글 페이지 구현 (내부)
  ![image](https://user-images.githubusercontent.com/30334829/156406805-7ab28061-8b56-412f-8c0f-292c607ae22b.png)

<br/>

- 댓글 및 대댓글 구현

  ![comment](https://user-images.githubusercontent.com/30334829/156407919-80f7ad84-f11e-4c3d-874d-be5dabe8dfc6.gif)

<br/>

- [참고] 패스트캠퍼스 블라인드 클론 강의중 몇개의 기능 추가하여 진행
