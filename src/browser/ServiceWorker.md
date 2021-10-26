# Service Worker

Service Worker 是构建 PWA（Progressive Web Apps，渐进式 Web 应用程序）中重要的一环。通过这项技术可以在后台拦截页面的网络请求、缓存静态资源、实现离线访问等，在合理利用的前提下可以有效提升网页的用户体验。

## 特点

1. Service Worker 是由一个网页创建并且运行在浏览器的后台线程之上，不会阻塞 JavaScript 主线程。
2. 由于运行在一个特殊的执行上下文环境中，Service Worker 无法访问其关联网页的 DOM。
3. 只能在开启 HTTPS 的网站上生效（在开发阶段可以通过 localhost 调试）。
4. Service Worker 环境中的异步 API 全部基于 Promise 实现。

## 生命周期

在讨论 Service Worker 的生命周期之前，首先需要说明如何在网页中创建它？

```js
window.addEventListener("load", async () => {
  // 检查是否支持 serviceWorker，这也是符合渐进增强策略的
  if (serviceWorker in navigator) {
    try {
      // 注册 Service Worker
      const registration = await navigator.serviceWorker.register(
        "/service-worker.js" // 提供脚本文件的地址
      );
      console.log("注册成功", registration);
    } catch (error) {
      console.log("注册失败", error);
    }
  }
});
```

在页面主代码逻辑中添加以上代码就可以注册 Service Worker 了。

Service Worker 生命周期中会经历如下几个阶段：

1. 下载

> 在页面中执行 Service Worker 注册方法后，开始根据地址下载脚本文件。

2. 安装

> 脚本下载完毕后开始执行，首先进入安装阶段，在这个阶段一般可以用来缓存一些静态资源。安装完成之后，进入等待激活阶段。

3. 激活

> 如果页面是首次注册 Service Worker，那么状态由等待激活立刻变为已激活。如果页面不是首次注册 Service Worker，那么需要等待之前的 Service Worker 失效，然后状态由等待激活变为已激活。在激活期间一般可以用来清除旧的缓存，激活之后 Service Worker 开始受理一些功能性的事件。

4. 失效

> 如果页面注册了新的 Service Worker 并且所有页面都关闭了，那么旧的 Service Worker 就会失效。

更为详细的生命周期介绍可以参考下面这张图。

![生命周期](/frontend-notes/images/sw-lifecycle.png)

## 事件

在 Service Worker 中支持的所有事件如下图所示，其中3个功能性事件要在已激活状态下才会触发。

![事件](/frontend-notes/images/sw-events.png)

本文重点说明以下几个事件：

1. install

> 触发该事件时表示 Service Worker 正在安装，可以调用 **event.waitUntil()** 完成一些异步操作，比如缓存静态资源，然后安装完成。

2. activate

> 触发该事件时表示 Service Worker 正在激活，可以调用 **event.waitUntil()** 完成一些异步操作，比如清除旧的缓存，然后激活完成。

3. fetch

> Service Worker 处于已激活状态时可以监听到页面的 fetch 事件，所有的网络请求都会触发该事件，可以在该事件的处理函数中决定使用缓存或者向服务器请求。

## 示例

下面是一段 Service Worker 脚本示例代码：

```js
// 需要缓存的资源路径
const cacheList = [
  "/logo.png",
  "/",
  "/js/app.js",
  "/js/chunk-vendors.js",
  "/favicon.ico",
];
// 当前缓存版本
const version = "v9";

self.addEventListener("install", (event) => {
  // 等待安装完成，直到所有指定资源被缓存
  event.waitUntil(
    // 创建新的缓存
    caches.open(version).then((cache) => {
      // 缓存指定的资源
      return cache.addAll(cacheList);
    })
  );
});

self.addEventListener("activate", (event) => {
  // 等待激活完成，直到所有旧缓存被删除
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          // 删除其他版本的缓存
          if (key !== version) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (event) => {
  // 响应请求
  event.respondWith(
    // 匹配缓存
    caches.match(event.request).then((response) => {
      // 如果有缓存就直接返回，否则转向服务器请求
      return response || fetch(event.request);
    })
  );
});
```

## 注意事项

1. Service Worker 是可以缓存任何请求的，但是一般我们只需要缓存静态资源，如果把后端接口也缓存下来了，很可能就出问题了。
2. Service Worker 脚本文件本身不会被缓存，浏览每次都会去加载新的，有任何变化都会被认为是新的 Service Worker，并开始新的生命周期。
3. 如果用 Service Worker 缓存了页面的代码，那么代码更新后去访问页面，新的代码不会立刻生效，因为此时新的 Service Worker 还未生效，仍在使用旧的缓存，此时需要关闭页面重新打开才会激活新的 Service Worker。
4. 只要缓存的资源有更新，一定要更新 Service Worker 脚本，清理旧的缓存。