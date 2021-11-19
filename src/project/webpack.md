# webpack

本质上，webpack 是一个 JavaScript 程序的静态资源打包工具。从应用程序的入口文件开始，webpack 会递归地解析文件的依赖并构建一个依赖图，最后将所有依赖的模块打包、输出为一个或多个 bundles。

## 概念 [](https://webpack.docschina.org/concepts/)

### 1. 入口（entry）

> 应用程序的入口文件路径，告诉 webpack 应该从哪些文件开始构建依赖图。

### 2. 输出（output）

> 所有的静态资源被打包后需要输出的位置。

### 3. 加载器（loader）

> webpack 本身只能识别 JavaScript 和 JSON 文件，其它类型的资源需要相应的 loader 来解析、转换为有效的模块。

### 4. 插件（plugin）

> 插件为 webpack 提供了更多额外的能力。插件通过监听 webpack 运行期间不同生命周期事件，来执行各种操作。

## 指南 [](https://webpack.docschina.org/guides/)

### 代码分离 [](https://webpack.docschina.org/guides/code-splitting/)

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

### 利用资源缓存 [](https://webpack.docschina.org/guides/caching/)

1. 配置输出文件名
2. 提取第三方包到单独的 bundle 中
3. 注意模块 id 的生成方案，如果模块内容没变但是 id 变了，也会导致打包后 bundle 不一样

### 构建性能 [](https://webpack.docschina.org/guides/build-performance/)

1. 缩小 loader 的作用范围
2. 减少解析范围，如：resolve.modules resolve.extensions 等
3. dll
4. 选择体积更小的库
5. 多线程
6. 开启构建缓存
7. devtool 也会影响构建速度，选择合适的 devtool

### 模块热替换（HMR） [](https://webpack.docschina.org/guides/hot-module-replacement/)

### Tree Shaking [](https://webpack.docschina.org/guides/tree-shaking/)

1. 使用 esm 模块语法
2. 避免 esm 模块语法被转译成 commonjs
3. 开启 production 模式

### 资源模块 [](https://webpack.docschina.org/guides/asset-modules/)

1. asset/resource
2. asset/inline
3. asset/source
4. asset
