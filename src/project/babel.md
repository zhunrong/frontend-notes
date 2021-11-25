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

重要参数：

1. targets

> 定义需要兼容的代码运行环境，比如浏览的型号、版本。也可以通过 **.browserslistrc** 指定。

2. modules

> "amd" | "umd" | "systemjs" | "commonjs" | "cjs" | "auto" | false， 默认 "auto"。
>
> 表示要转换成哪种模块语法，如果是 false ，表示保留 ESM 模块语法。如果要利用 webpack 的 Tree Shaking ，应该设置为 false 或 "auto"。最好设置为 "auto" ，这样 babel 可以自动判断。

3. useBuiltIns

> "usage" | "entry" | false, 默认 false。配置 @babel/preset-env 如何处理 polyfill 。
>
> false 。需要手动引入 polyfill 。
>
> "usage" 。根据源码中使用到的特性自动添加对应 polyfill 。
>
> "entry" 。需要手动在入口文件引入 polyfill ，但是 babel 最终会根据目标环境按需引入。

4. corejs

> 指定 core-js 的版本。

## @babel/plugin-transform-runtime

直接 polyfill 的话，会污染全局环境，比如 **includes** 方法被挂载到 **Array.prototype** 上。

另外，一些帮助函数会被注入到各个需要的文件中，得不到复用，比如：

源码：

```js
class Person {}
```

编译后：

```js
"use strict";

// 这个帮助函数的代码直接被注入各个文件中，得不到复用
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Person = function Person() {
  _classCallCheck(this, Person);
};
```

使用该插件处理后：

```js
"use strict";

// 通过导入的形式进行复用
var _classCallCheck2 = require("@babel/runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Person = function Person() {
  (0, _classCallCheck3.default)(this, Person);
};
```

安装：

```shell
npm install --save-dev @babel/plugin-transform-runtime
```

```shell
npm install --save @babel/runtime-corejs3
```

配置：

```js
module.exports = {
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        corejs: 3,
      },
    ],
  ],
};
```

## 参考

1. [@babel/preset-env](https://www.babeljs.cn/docs/babel-preset-env)
2. [@babel/plugin-transform-runtime](https://www.babeljs.cn/docs/babel-plugin-transform-runtime)
