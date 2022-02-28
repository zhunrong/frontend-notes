# webpack

本质上，webpack 是一个 JavaScript 程序的静态资源打包工具。从应用程序的入口文件开始，webpack 会递归地解析文件的依赖并构建一个依赖图，最后将所有依赖的模块打包、输出为一个或多个 bundles。

## 概念

### 1. 入口（entry）

> 应用程序的入口文件路径，告诉 webpack 应该从哪些文件开始构建依赖图。

### 2. 输出（output）

> 所有的静态资源被打包后需要输出的位置。

### 3. 加载器（loader）

> webpack 本身只能识别 JavaScript 和 JSON 文件，其它类型的资源需要相应的 loader 来解析、转换为有效的模块。

### 4. 插件（plugin）

> 插件为 webpack 提供了更多额外的能力。插件通过监听 webpack 运行期间不同生命周期事件，来执行各种操作。

### 5. 模块（module）

> 在 webpack 中，一个文件就是一个模块。

webpack 原生支持的模块类型如下：

1. ESM
2. CommonJS
3. AMD
4. Assets —— 一般是图片、字体之类的资源型文件
5. WebAssembly

在各种 loader 的支持下，webpack 还可以支持更多需要预处理的模块类型。

### 6. 块（chunk）

> 在 webpack 中，一个 chunk 是由若干个模块组件成的。

可以分为 2 种 chunk：

1. initial chunk。初始 chunk 是指以入口文件为起点并包含所依赖的一系列模块的文件块。
2. non-initial chunk。非初始 chunk 是可以延迟加载的文件块，可以通过动态导入创建，也可以通过 splitChunks 创建。

### 7. 资源（asset）

> asset 是指 webpack 打包输出的文件。

## 指南

### 代码分离

通过代码分离，可以将一个大的 bundle 分离为多个较小的 bundle，然后按需或延迟加载，以提升应用的首次加载速度。

代码分离实现方式有如下 3 种：

1. 配置多个入口

```js
module.exports = {
  entry: {
    a: "./src/a.js",
    b: "./src/b.js",
  },
};
```

如果 **a.js** 和 **b.js** 都依赖 **c.js**，上述配置下输出的 2 个 bundle 都会包含 **c.js** 的代码。除此之外，2 个 bundle 都包含了相同的 webpack runtime 代码，要解决这些问题，可以参考如下配置：

```js
module.exports = {
  entry: {
    a: {
      import: "./src/a.js",
      dependOn: "c",
    },
    b: {
      import: "./src/b.js",
      dependOn: "c",
    },
    c: "./src/c.js",
  },
  optimization: {
    runtimeChunk: "single", // 将 webpack runtime 提取为单独文件
  },
};
```

2. splitChunks 提取公共依赖

方式 1 需要手动配置入口，很难维护，所以更推荐配置 **optimization.splitChunks** 来提取公共代码。

```js
module.exports = {
  optimization: {
    splitChunks: {
      cacheGroups: {
        shared: {
          chunks: "all", // 默认是 'async'，表示只会提取异步 chunk；另一个值是 'initial'，表示非异步 chunk
          minSize: 0, // 提取 chunk 的最小体积（以 bytes 为单位）
          minChunks: 2, // 提取 chunk 的最少被共享数
          name: "shared", // chunk 的名字
        },
      },
    },
  },
};
```

3. 动态导入

通过 **import()** 或 **require.ensure()** 动态导入的模块也会被单独分离。

```js
// 1. import()
import("./a.js").then((mod) => console.log(mod));

// 2. require.ensure()
require.ensure([], () => {
  const mod = require("./a.js");
});
```

### 资源缓存

浏览器从服务器获取前端代码是一个比较耗时的过程，其速度也是衡量前端性能的重要指标，十分影响用户的使用体验，因此浏览器都有一个缓存资源的优化机制，对于已经请求过的资源一般可以从缓存中获取，不必再次从服务器加载。为了有效的利用缓存机制，前端代码的构建需要做到：1. 内容有更新的 bundle 文件名也需要更新，这样浏览器就会加载新的 bundle；2. 内容无更新的 bundle 文件名应该不变，这样浏览器可以从缓存中获取。

从 webpack 配置的角度来说，具体可以这么做：

1. 配置输出文件名

```js
module.exports = {
  output: {
    filename: "[name].[contenthash].js", // 影响同步 chunk 名，基于内容添加 hash 值
    chunkFilename: "[name].[contenthash]", // 影响异步 chunk 名
  },
};
```

> 关于 **hash**、**chunkhash**、**contenthash** 的区别
>
> 1. **hash**。基于一次完整的编译（compilation）生成的 hash 值，只要一个文件内容有更改，所有 chunk 的 hash 都统一更新。
>
> 2. **chunkhash**。假设在 index.js 中导入 index.css 文件，并通过 mini-css-extract-plugin 插件提取 css，在配置 chunkhash 的情况下，输出的 index.js 和 index.css bundle 会带有相同 hash 值，这个值是由 index.js 与 index.css 组成的整个 chunk 的内容生成的，之后无论是 index.js 还是 index.css 内容改变，都会导致输出的 bundle hash 值改变。
>
> 3. **contenthash**。依然考虑上面那种场景，并配置 contenthash，此时输出的 index.js 和 index.css bundle 会带有不同的 hash 值，并且这些 hash 值是根据各自的文件内容生成的，不会互相影响。
>
> 总的来说，**contenthash** 会具有更稳定的 hash 值，更利于精确的缓存控制。

2. 提取第三方包到单独的 bundle 中

一般来说，项目中使用的第三方包是不需要经常更新的，最好能提取到单独的 bundle 中，这样业务代码更新后，依然能够利用缓存。

```js
module.exports = {
  optimization: {
    splitChunks: {
      cacheGroups: {
        // 定义一个提取第三方模块的缓存组
        vendors: {
          chunks: "all",
          test: /node_modules/, // 配置来自 node_modules 的模块
          name: "vendors", // chunk 的名字
          reuseExistingChunk: true,
        },
      },
    },
  },
};
```

3. 采用稳定的模块 ID 方案

在输出的 bundle 中除了模块本身的内容，还包含 webpack 为模块分配的唯一标识符（ID），有时候，即使模块内容没有变化但是 ID 变了，也会导致输出的 bundle 变化，为了避免这种情况，应该采用更加稳定的 ID 方案。

```js
module.exports = {
  optimization: {
    moduleIds: "deterministic", // 用模块 hash 转换成数字作为 ID
    // 或
    moduleIds: "named", // 表示根据模块名字（路径）作为 ID
  },
};
```

### 构建性能

1. 缩小 loader 的作用范围
2. 减少解析范围，如：resolve.modules resolve.extensions 等
3. dll
4. 选择体积更小的库
5. 多线程
6. 开启构建缓存
7. devtool 也会影响构建速度，选择合适的 devtool

### 模块热替换（HMR）

模块热替换是一项能够极大提升开发效率的技术，它允许在运行时更新所有类型的模块，而无需刷新整个页面。

从 webpack-dev-server v4.0.0 开始，热模块替换是默认开启的，不需要做额外的配置，只需要在代码中监听模块更新：

```js
import _ from "lodash";
import printMe from "./print.js";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");
  btn.innerHTML = "Click me and check the console!";
  btn.onclick = printMe;
  element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.appendChild(btn);
  return element;
}

document.body.appendChild(component());
let element = component(); // 存储 element，以在 print.js 修改时重新渲染
document.body.appendChild(element);

if (module.hot) {
  // 监听 print.js 的热更新
  module.hot.accept("./print.js", function() {
    document.body.removeChild(element); // 删除原有的 element
    element = component(); // 重新渲染 "component"，以便更新 click 事件处理函数
    document.body.appendChild(element);
  });
}
```

### Tree Shaking

Tree Shaking 是一种在 JavaScript 构建阶段移除代码中未被实际使用到的代码的技术。这项技术依赖于 ESM 模块语法（import / export）的静态结构特性。在 commonjs 模块语法中，导入导出允许写在条件语句中，因此只能在运行时判断模块是否被真正导入导出，而在 ESM 模块语法中，导入导出只能写在最外层，因此可以在构建阶段基于静态分析，去掉无用的代码。

在 webpack 中启用 Tree Shaking 需要保证：

1. 代码中使用 ESM 模块语法
2. 避免 ESM 模块语法被转译成 commonjs 模块语法
3. 开启 production 模式

### 资源模块

webpack 5 之前常采用 **raw-loader**、**url-loader**、**file-loader** 来加载图片、字体、文本等其它类型资源。现在，webpack 5 内置了资源模块来代替这些 loader 。

1. **asset/resource**

> 替代 **file-loader**，发送一个单独的文件并导出 URL 。

2. **asset/inline**

> 替代 **url-loader**，导出一个资源的 data URI。

3. **asset/source**

> 替代 **raw-loader**，出资源的原本。

4. **asset**

> 替代 **url-loader**，根据配置的资源体积限制，在导出一个 data URI 和发送一个单独的文件之间自动选择。

## 参考

1. [概念](https://webpack.docschina.org/concepts/)
2. [指南](https://webpack.docschina.org/guides/)
3. [代码分离](https://webpack.docschina.org/guides/code-splitting/)
4. [缓存](https://webpack.docschina.org/guides/caching/)
5. [构建性能](https://webpack.docschina.org/guides/build-performance/)
6. [模块热替换](https://webpack.docschina.org/guides/hot-module-replacement/)
7. [Tree Shaking](https://webpack.docschina.org/guides/tree-shaking/)
8. [资源模块](https://webpack.docschina.org/guides/asset-modules/)
