# Babel

Babel 是一个 JavaScript 编译器，主要用于将采用 ECMAScript 2015+ 语法编写的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。

## 概念

### 插件

Babel 构建在插件之上，代码的解析、转换等功能都是通过调用一系列的插件来实现。

### 预设

预设就是一组插件的集合，主要是为了简化 Babel 的配置，实现快速使用的目的。

目前 Babel 的官方预设主要有：

1. **@babel/preset-env**

> 该预设可以很智能的将最近的 JavaScript 代码转换成适用于目标环境的代码。

2. **@babel/preset-react**

> 用于 React 项目开发，转换 JSX 语法。

3. **@babel/preset-typescript**

> 用于 TypeScript 项目中。

4. **@babel/preset-flow**

> 用于 Flow 项目中。

### 配置

使用 Babel 时可以配置大量的参数，一般建议将这些配置写入专门的配置文件中。比如：

babel.config.js

```js
module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: ["@babel/plugin-transform-runtime"],
};
```

> 注意：Babel 转换代码时会优先调用插件然后是预设，插件的调用顺序是与插件的配置顺序相同的，而**预设**的调用顺序则与预设的配置顺序**相反**。

## 用法

### 安装

```shell
npm i -D @babel/core @babel/cli @babel/preset-env
```

> @babel/cli 是 Babel 的命令行工具，如果不需要可以不安装。

### 编写配置

创建 babel.config.js，根据使用场景添加配置：

```js
module.exports = {
  presets: ["@babel/preset-env"],
};
```

### polyfill

@babel/preset-env 默认只会转换 JavaScript 的语法，但是如果源码中使用到了一些新特性或方法，比如：**Promise**、**WeakMap**、**Array.prototype.includes**，则需要进行 polyfill。

为此，需要在源码开头进行导入：

```js
import "core-js/stable";
import "regenerator-runtime/runtime";
```

> 但是这种方式会将所有 polyfill 都导入源码，直接影响转换后输出文件的体积，因此后面会提到更好的解决方式。

## @babel/preset-env
