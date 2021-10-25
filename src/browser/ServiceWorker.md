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
2. 安装
3. 激活
4. 失效

![生命周期](/frontend-notes/images/sw-lifecycle.png)

## 事件

![事件](/frontend-notes/images/sw-events.png)