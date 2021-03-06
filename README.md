# Romens React脚手架
[![Version](https://img.shields.io/badge/version-0.2.0-orange.svg)](#)
[![create-react-app](https://img.shields.io/badge/create--react--app-v1.0.13-brightgreen.svg)](https://github.com/facebookincubator/create-react-app/releases/tag/v1.0.13)
[![eslint-config-airbnb](https://img.shields.io/badge/eslint--config--airbnb-v15.1.0-red.svg)](https://github.com/airbnb/javascript/releases/tag/eslint-config-airbnb-v15.1.0)
[![ant-design](https://img.shields.io/badge/ant--design-v2.13.0-blue.svg)]()

此脚手架基于[Create-react-app](https://raw.githubusercontent.com/facebookincubator/create-react-app)创建

原始文档请参阅[Create-react-app-README](./README.create-react-app.md)


## 特性

- 集合[antd](https://ant.design/index-cn)组件库并支持自定义`less`变量和按需加载
- 支持`sass`文件编译
- 支持`eslint-airbnb`校验规则
- 支持`lodash`按需加载


## 本地开发

推荐：

```shell
$ git clone http://KevinLee-Romens@git.cd.romens.cn/romens-cn/boilerplate.git
$ yarn
$ yarn start
```

或

```shell
$ git clone http://KevinLee-Romens@git.cd.romens.cn/romens-cn/boilerplate.git
$ npm install
$ npm start
```

打开浏览器访问 http://localhost:3000 。


## 编译

推荐：

```shell
$ yarn build
```

或

```shell
$ npm run build
```

## 配置说明

### 自定义`antd`样式

所有配置内容都在`config/antdVars.js`文件中

更多信息请参阅 [default.less](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less)


### 浏览器版本兼容

本项目中所有涉及到通过 [browser-list](https://github.com/ai/browserslist) 来兼容浏览器版本的配置统一放置在 [package.json](./package.json) 中

```JSON
{
  ...,

  "browserslist": [
    ">1%",
    "last 4 versions",
    "Firefox ESR",
    "not ie < 9"
  ]
 }
```

### `babel`配置

本项目中所有涉及到`babel`的公共配置都在`.babelrc`文件中

更多信息请参阅 [babelrc](https://babeljs.io/docs/usage/babelrc/)

### `IDE`配置

默认IDE配置存储在`.editorconfig`文件中

## `eslint`配置

本项目中所有涉及到`eslint`的规则编写和覆盖都在`.eslintrc.js`文件中，忽略规则存储在`.eslintignore`文件中


## 规范

请参阅[这里](./SPECIFICATION.md)


## 工作流

请参阅[这里](./WORKFLOW.md)

## 更新日志

请参阅[这里](./CHANGELOG.md)