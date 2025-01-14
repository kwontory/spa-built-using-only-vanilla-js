# PLAYGROUND
**자유로운 소통을 위한 공간 PLAYGROUND**   

**Vanilla JS로 구현한 SPA 프로젝트입니다.**   

## 👨‍🔧 Stacks

### Environment
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=flat-square&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=flat-square&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white)             

### Config
![yarn](https://img.shields.io/badge/yarn-2C8EBB?style=flat-square&logo=yarn&logoColor=white)        

### Development
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=Javascript&logoColor=white)


## 시작 가이드
### Installation
``` bash
git clone https://github.com/kwontory/spa-built-using-only-vanilla-js.git
yarn install
yarn dev
```

## 주요 기능
- **Component 단위 개발**
- **Routing 처리**

## Architecture

### Directory

``` bash
.
├── index.html               # HTML entry file
└── src
    ├── App.js
    ├── index.js             # JS entry file
    ├── components           # components
    ├── core                 # core
    │   └── Component.js
    ├── pages                # pages
    │   ├── users/
    │   ├── boards/
    │   ├── 404.js
    │   ├── Signin.js
    │   ├── Signup.js
    │   └── index.js
    ├── router               # router
    │   ├── Router.js
    │   ├── useParams.js
    │   └── index.js
    ├── utils                # utils
    └── public

```

## References
https://junilhwang.github.io/TIL/Javascript/Design/Vanilla-JS-Component/