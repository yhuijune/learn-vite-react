# Vite

> 此仓库用于学习 Vite(version:^2.0.1)

Keyword:Vite,React,TypeScript

## Introduction

Next Generation Frontend Tooling(下一代前端开发与构建工具)

- Instant Server Start(极速的服务启动)

  On demand file serving over native ESM, no bundling required!(使用原生 ESM 文件，无需打包!)

- Lightning Fast HMR(轻量快速的热重载)

  Hot Module Replacement (HMR) that stays fast regardless of app size.(无论应用程序大小如何，都始终极快的模块热重载。)

- Rich Features(丰富的功能)

  Out-of-the-box support for TypeScript, JSX, CSS and more.(对 TypeScript、JSX、CSS 等支持开箱即用。)

- Optimized Build(优化的构建)

  Pre-configured Rollup build with multi-page and library mode support.(可选 “多页应用” 或 “库” 模式的预配置 Rollup 构建。)

- Universal Plugins(通用的插件)

  Rollup-superset plugin interface shared between dev and build.(在开发和构建之间共享 Rollup-superset 插件接口。)

- 完全类型化的 API(灵活的 API 和完整 TypeScript 类型)

  Flexible programmatic APIs with full TypeScript typing.(灵活的 API 和完整 TypeScript 类型。)

## Scaffolding Your First Vite Project

With NPM :

```bash
$ npm init @vitejs/app
```

With Yarn :

```bash
$ yarn create @vitejs/app
```

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a Vite + Vue + TypeScript project, run:

```bash
# npm 6.x
npm init @vitejs/app my-vue-app --template vue-ts

# npm 7+, extra double-dash is needed:
npm init @vitejs/app my-vue-app -- --template vue-ts
```

## Command Line Interface

In a project where Vite is installed, you can use the vite binary in your npm scripts, or run it directly with `npx vite`. Here is the default npm scripts in a scaffolded Vite project:

```js
{
  "scripts": {
    "dev": "vite", // start dev server
    "build": "vite build", // build for production
    "serve": "vite preview" // locally preview production build
  }
}
```

## Link

[Vite](https://vitejs.dev/)

[Vite 中文](https://cn.vitejs.dev/)

[Vite2.0 正式发布，凭什么吊打 webpack ？](https://juejin.cn/post/6931618997251080200#heading-0)

[Vite 原理浅析](https://juejin.cn/post/6844904146915573773#heading-13)

[vite 尝鲜](https://juejin.cn/post/6919104746867556365#heading-2)

[彻底弄懂强缓存与协商缓存](https://www.jianshu.com/p/9c95db596df5)
