/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f454f194aa1f8a71da44318fe4462696"
  },
  {
    "url": "advanced/index.html",
    "revision": "a09274b9fc068f391d665706d19fb7d0"
  },
  {
    "url": "algorithm/index.html",
    "revision": "063fd6f21eb852a587e6836e072e411e"
  },
  {
    "url": "assets/css/0.styles.ba955196.css",
    "revision": "642c47d071da06ba91d9f08fc9a40bb1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6fb308b3.js",
    "revision": "49c01bb0c1ada538b5e075b1f9433c8b"
  },
  {
    "url": "assets/js/11.fa066dd0.js",
    "revision": "4b7795c61f0f6ac6f2344bbf012e3f82"
  },
  {
    "url": "assets/js/12.88e70a27.js",
    "revision": "a71a5248ed037a7c3750ca3bb230d635"
  },
  {
    "url": "assets/js/13.4df75683.js",
    "revision": "30eeea1c8fd2d3b9172cd1d62c92f48a"
  },
  {
    "url": "assets/js/14.d44a4b4b.js",
    "revision": "5b6500b163ea7fcf3b74ebad4b8a8c06"
  },
  {
    "url": "assets/js/15.e37e7d9c.js",
    "revision": "d7584e45977d490812357c8799512a85"
  },
  {
    "url": "assets/js/16.e528484f.js",
    "revision": "9f240e7ebdd60c55906b29a44b7525ea"
  },
  {
    "url": "assets/js/17.ed925b20.js",
    "revision": "5bba21bab3b021b9a2110c896bcc7028"
  },
  {
    "url": "assets/js/18.c2f51b81.js",
    "revision": "40409af3f833e012d82a0162c6b2f9fc"
  },
  {
    "url": "assets/js/19.709338d1.js",
    "revision": "7a8d639d82ecf25f847c2d88d8999c8c"
  },
  {
    "url": "assets/js/2.2f2cb61d.js",
    "revision": "8e66c79c0e4a6c5ef4e252f497c3657f"
  },
  {
    "url": "assets/js/20.9c5e02b9.js",
    "revision": "a76e9fcedb3a406c541c8a042d6cc38e"
  },
  {
    "url": "assets/js/21.6610136f.js",
    "revision": "5cbe3000e487e5f18df9816c11bbd9ee"
  },
  {
    "url": "assets/js/22.f75063f6.js",
    "revision": "00c907aaf46a6490fadf6d0eb7df37f1"
  },
  {
    "url": "assets/js/23.68283ae0.js",
    "revision": "4112162f7acbb44ab652f050451f094d"
  },
  {
    "url": "assets/js/24.836cefff.js",
    "revision": "d5e382477be509692cfacc513920fb8e"
  },
  {
    "url": "assets/js/25.21d94615.js",
    "revision": "d7384c9384cd3a1f5026a865bff392e3"
  },
  {
    "url": "assets/js/26.c2e827e9.js",
    "revision": "d4e5fe44717b1e73c88889b6379a0260"
  },
  {
    "url": "assets/js/27.7ada7bf3.js",
    "revision": "d0926bdab7bc7177cf62122a8b14b89b"
  },
  {
    "url": "assets/js/28.2ccecdfe.js",
    "revision": "17ad14e1a00a9bcd27a3a468ac4fa20d"
  },
  {
    "url": "assets/js/29.a3f89054.js",
    "revision": "ea49f8ff3b2743febc47a43f6296d98a"
  },
  {
    "url": "assets/js/3.9bbab2a0.js",
    "revision": "721303208817d4442064e68bee324e73"
  },
  {
    "url": "assets/js/30.813aaa62.js",
    "revision": "5e779607b05570f4f6ad316eb93c86dc"
  },
  {
    "url": "assets/js/31.45c450fb.js",
    "revision": "890d72d6f6a46520fcf1c05ad84123f8"
  },
  {
    "url": "assets/js/32.9a0417a0.js",
    "revision": "98f80f6179074a583aedaa07f8396662"
  },
  {
    "url": "assets/js/33.83548f0e.js",
    "revision": "54322019bcab516e2d144c81f9c59de6"
  },
  {
    "url": "assets/js/34.5ef461d3.js",
    "revision": "fe3249e86740302f68ae213f3c77c916"
  },
  {
    "url": "assets/js/35.ae0590e3.js",
    "revision": "2ed9f3dd7504543ec2ca14efb357523d"
  },
  {
    "url": "assets/js/36.205f3eb4.js",
    "revision": "b2ce0ba5c78c4c5dbb179c62138f7083"
  },
  {
    "url": "assets/js/4.b4fbcf4d.js",
    "revision": "76802bb9bb504980bd86222613fa74c2"
  },
  {
    "url": "assets/js/5.0720a12b.js",
    "revision": "0230cc1c60f37e3d5047caa5bbc60ab4"
  },
  {
    "url": "assets/js/6.26f5c643.js",
    "revision": "cb8dc24bdd2accf20dc7db4f4443970c"
  },
  {
    "url": "assets/js/7.79dcc9e6.js",
    "revision": "483c05498f9a34b585fed61e303e896f"
  },
  {
    "url": "assets/js/8.c1f5ced8.js",
    "revision": "8d145ce0023078946365303f6b2db69a"
  },
  {
    "url": "assets/js/9.c8c99db3.js",
    "revision": "7a4fac973c29f1b2446f78770d6b573c"
  },
  {
    "url": "assets/js/app.81282009.js",
    "revision": "661a8c4d32eaa02b1b09dafe77f1d49a"
  },
  {
    "url": "browser/index.html",
    "revision": "4f8b29ff65a9b55480c27e2be4815b8a"
  },
  {
    "url": "browser/ServiceWorker.html",
    "revision": "6a4453fb75411db0cc59b2a1eed8589a"
  },
  {
    "url": "css/index.html",
    "revision": "e204d991bb5a190034eff3b0aede19da"
  },
  {
    "url": "frame/index.html",
    "revision": "2559f3e5ca84c76efb04688662604bdb"
  },
  {
    "url": "frame/React 实战技巧.html",
    "revision": "1e5e38d8f557ed0c411ed0cb13cafd21"
  },
  {
    "url": "images/sw-events.png",
    "revision": "44c6fed44e5629fe65d28a1638b64288"
  },
  {
    "url": "images/sw-lifecycle.png",
    "revision": "b3291a35422f3f68ab952440d2ef5ced"
  },
  {
    "url": "index.html",
    "revision": "93acd27ea9cd2b7c67cf43ee788fdb32"
  },
  {
    "url": "javascript/call&apply&bind.html",
    "revision": "7a9b7e89638ca227c500bbe79e75abc0"
  },
  {
    "url": "javascript/index.html",
    "revision": "264cffbd2281ce48a84930ce21c20b3b"
  },
  {
    "url": "javascript/promise.html",
    "revision": "af321a0211ba4e520bfaf6285ed6d309"
  },
  {
    "url": "javascript/prototype.html",
    "revision": "f83050bf07582f068d766e885aa0739f"
  },
  {
    "url": "javascript/this.html",
    "revision": "6afda24138063e46c7ad5f92799339bd"
  },
  {
    "url": "javascript/事件循环.html",
    "revision": "09b5445edd2d1741a92282aaba9607a2"
  },
  {
    "url": "javascript/函数式编程.html",
    "revision": "2ec0123d2c6a88f1b9129a1d881c8a48"
  },
  {
    "url": "javascript/执行上下文.html",
    "revision": "9cea30c4777f1deee27d832bc416dfd3"
  },
  {
    "url": "javascript/深浅拷贝.html",
    "revision": "7d55a086d0dcae8ba98d79adff0e7fe6"
  },
  {
    "url": "javascript/词法作用域.html",
    "revision": "1fc2e89f3a70859b3d89eda4007259ee"
  },
  {
    "url": "javascript/闭包.html",
    "revision": "5b3ed880542ef3c63ba0ae234f92c7e0"
  },
  {
    "url": "logo.jpg",
    "revision": "4b318964cb50b45d2cac5c5d9366496f"
  },
  {
    "url": "network/http-cache.html",
    "revision": "f2d5bc2aea359a4810af0eab3fed701e"
  },
  {
    "url": "network/index.html",
    "revision": "fae00539cfc0f9d5dfb71202f0ec5389"
  },
  {
    "url": "node/index.html",
    "revision": "98f9b3614c0670e31f6e3c0024ccf6b7"
  },
  {
    "url": "performance/index.html",
    "revision": "4b29e1ae240f6004613d5a529af99099"
  },
  {
    "url": "project/babel.html",
    "revision": "0eda17906447d287be208ed349505af0"
  },
  {
    "url": "project/index.html",
    "revision": "a6bd76cdb624fb54147b7b68db13ed9a"
  },
  {
    "url": "project/webpack.html",
    "revision": "98dcf7013015aa3263003c9154e024cb"
  },
  {
    "url": "security/index.html",
    "revision": "ab61cc85218266682ddef8c188184c73"
  },
  {
    "url": "typescript/index.html",
    "revision": "6736b015feb59b8c06cc06e5a36ed7fe"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
