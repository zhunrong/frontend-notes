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
    "revision": "da128faf04858b2ea8e14529b9ddcac3"
  },
  {
    "url": "advanced/index.html",
    "revision": "fa33dd949c70895a4c6dc4364c962eba"
  },
  {
    "url": "algorithm/index.html",
    "revision": "abed94444fa315513710e70bee3037a3"
  },
  {
    "url": "assets/css/0.styles.b070197c.css",
    "revision": "5d879c0c46b204c9f3671385172d1af8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.40fb480d.js",
    "revision": "4c9b2c3b15be4bd6275422022e636e5b"
  },
  {
    "url": "assets/js/11.e8d1b3f7.js",
    "revision": "670ee7d1a0c20e331c99b59bd0adfa58"
  },
  {
    "url": "assets/js/12.e7dd3279.js",
    "revision": "b25b55dd333c8800bd105d7dfc8d30f7"
  },
  {
    "url": "assets/js/13.50fe36dc.js",
    "revision": "6d0a09e780fa749dda20a2fbe7f65cd1"
  },
  {
    "url": "assets/js/14.599714c7.js",
    "revision": "76a3bacc548ff3211b764942c28a6f69"
  },
  {
    "url": "assets/js/15.3c723b2f.js",
    "revision": "e6825284b874cc347a3a8b9d6096ab1d"
  },
  {
    "url": "assets/js/16.6a95be55.js",
    "revision": "dc73cbf673799dee6440ff4a97062fe2"
  },
  {
    "url": "assets/js/17.75616d0b.js",
    "revision": "b3e58db84ad28361a8fb25f04067da45"
  },
  {
    "url": "assets/js/18.1663c2a2.js",
    "revision": "90516ac9c5006a9fb2ccd122ee1872dd"
  },
  {
    "url": "assets/js/19.deb6eba7.js",
    "revision": "df8d6ab84c0e28431c300795a7ca4fd2"
  },
  {
    "url": "assets/js/2.3a2be5ef.js",
    "revision": "6d62cb67a0efafabf2f611e62f9a9ccc"
  },
  {
    "url": "assets/js/20.04dcf709.js",
    "revision": "8e15cfcfa0b17fec5e8b7abd40376ddd"
  },
  {
    "url": "assets/js/21.67de2533.js",
    "revision": "7cab84241b7219f19969b7a04ab9fe05"
  },
  {
    "url": "assets/js/22.d41561ec.js",
    "revision": "bc08350dd4f1ae2381563cab0783cf8f"
  },
  {
    "url": "assets/js/23.1a621639.js",
    "revision": "0c1f6233148c5a7f6a0dfd88fa06a176"
  },
  {
    "url": "assets/js/24.20970c33.js",
    "revision": "5ba672c1fe057a392d96eea903c4018a"
  },
  {
    "url": "assets/js/25.642c6c7e.js",
    "revision": "6c7d29ce5acc4d283a54047fcc34fc76"
  },
  {
    "url": "assets/js/26.2c78c3af.js",
    "revision": "c80c639dc2996cfbceca7dc2ba0cb99b"
  },
  {
    "url": "assets/js/27.4346fc45.js",
    "revision": "73c333a745a154a6decbd7af34c85f34"
  },
  {
    "url": "assets/js/28.45eae6dd.js",
    "revision": "f28cf8d04cb244fb40bd7ce1e8558287"
  },
  {
    "url": "assets/js/29.69680b72.js",
    "revision": "d911521c18587353d078a3ea1df3a76f"
  },
  {
    "url": "assets/js/3.22db767b.js",
    "revision": "f85f161da7ebfbcda64b788e6d35f0c1"
  },
  {
    "url": "assets/js/30.28a12472.js",
    "revision": "e46f5c6f2e6e95a35c15a85a36bc0d84"
  },
  {
    "url": "assets/js/31.db4f1bf6.js",
    "revision": "56282c1e4960c7ef7274c781c3c2e148"
  },
  {
    "url": "assets/js/32.5b0a1058.js",
    "revision": "55241eef44d9b08e471189986f4a8d25"
  },
  {
    "url": "assets/js/33.54f10f84.js",
    "revision": "20581a965859e80caae2e38152c3454e"
  },
  {
    "url": "assets/js/34.0cf8e4b9.js",
    "revision": "7c83ac7da58d59ba41f4d4c925ab00ab"
  },
  {
    "url": "assets/js/35.5a8dc4e1.js",
    "revision": "a11af93d84a623477fb5c737b681a853"
  },
  {
    "url": "assets/js/36.4091d06b.js",
    "revision": "a18fb9763a6135b0dfceef49264d427e"
  },
  {
    "url": "assets/js/37.e8537f41.js",
    "revision": "8d34c1d9e026f5bb080e37c3bd6f6e33"
  },
  {
    "url": "assets/js/38.3a332fc7.js",
    "revision": "933aa317e4774cf01ea7d4fd80783429"
  },
  {
    "url": "assets/js/39.885e7913.js",
    "revision": "7f389440e973709fb18780c905c54958"
  },
  {
    "url": "assets/js/4.5936c4c4.js",
    "revision": "d82dff99f9db93a1b32912ae88042c03"
  },
  {
    "url": "assets/js/40.dc1e682c.js",
    "revision": "fec91bc62a49098a2185fe1c1c7e6f2b"
  },
  {
    "url": "assets/js/41.f7bbec3a.js",
    "revision": "e1faada2b765aac9a8943fefe198a23c"
  },
  {
    "url": "assets/js/5.33850136.js",
    "revision": "610b0cf2ab13af404c1b719d776f4120"
  },
  {
    "url": "assets/js/6.51684ca2.js",
    "revision": "4bc44c4f1ffecbd4b4cdefdef9d3d8b1"
  },
  {
    "url": "assets/js/7.4efd9018.js",
    "revision": "a0572ed0bdd13c300b79c1717b8decd5"
  },
  {
    "url": "assets/js/8.fc42a4c2.js",
    "revision": "e1da33ec79051f29b342347fdf02e50c"
  },
  {
    "url": "assets/js/9.39059156.js",
    "revision": "368d343202447de742647698013e5459"
  },
  {
    "url": "assets/js/app.70366b76.js",
    "revision": "e2919ffe07cc2e42342bb9a4288de38b"
  },
  {
    "url": "browser/index.html",
    "revision": "0690c3c82b881467ffbf806c9086a83b"
  },
  {
    "url": "browser/ServiceWorker.html",
    "revision": "2e0a48a7126e1143289abab994079268"
  },
  {
    "url": "css/index.html",
    "revision": "d5736830875401579a1f24a220208932"
  },
  {
    "url": "frame/index.html",
    "revision": "b0f7ef238189d83fd81dab10c4648ce8"
  },
  {
    "url": "frame/React 实战技巧.html",
    "revision": "7e2e40330b07a96febd4489c3048bcb9"
  },
  {
    "url": "images/cookie-after.jpg",
    "revision": "f5690ca38dedf6ec06d9c632be3847ac"
  },
  {
    "url": "images/cookie-before.jpg",
    "revision": "2248bf4c5e00eb341309a052831d92ef"
  },
  {
    "url": "images/http-request.jpg",
    "revision": "2a87bdc034f6a635ff9a8d437f427c36"
  },
  {
    "url": "images/http-response.jpg",
    "revision": "74ec278f38ca039ee67cca073303e8f0"
  },
  {
    "url": "images/http.jpg",
    "revision": "47385643b1ac99e52df99a695a272808"
  },
  {
    "url": "images/https.jpg",
    "revision": "dfc37c7f4f23c4a147a260bcf715bf1b"
  },
  {
    "url": "images/ip-format.jpg",
    "revision": "36a3d3433401f58e346704102b507ce0"
  },
  {
    "url": "images/ip-head.jpg",
    "revision": "78ef4cb550f9308af88f3c63f7ae8ba6"
  },
  {
    "url": "images/keep-alive.jpg",
    "revision": "68e1f37b155b8d7a54dc7ac1445ec7a7"
  },
  {
    "url": "images/max-head.jpg",
    "revision": "a4feffda52d4f468ade828b583f3e9e0"
  },
  {
    "url": "images/mtu-mss.jpg",
    "revision": "2d7547f89190ac8374510db624fff179"
  },
  {
    "url": "images/net-packet.jpg",
    "revision": "456957b93976c2cdce1ac9402a211b60"
  },
  {
    "url": "images/network.jpg",
    "revision": "fc1089bb849c926c70a9314722101594"
  },
  {
    "url": "images/pipelining.jpg",
    "revision": "c9ff057ab9e8e461994cb14777b26cb0"
  },
  {
    "url": "images/socket.jpg",
    "revision": "807a92e1d209fb21ba2dd7ae266ac8c7"
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
    "url": "images/tcp-ack.jpg",
    "revision": "1c8c1a5190a0635e0e2fb80b18732640"
  },
  {
    "url": "images/tcp-close.jpg",
    "revision": "bbd4152a8aece503d29ad78b47bfae93"
  },
  {
    "url": "images/tcp-head.jpg",
    "revision": "8813b7fdcc09401df57e35c23649ea69"
  },
  {
    "url": "images/tcp-ip-layer.jpg",
    "revision": "fed27c1e0088e5e2bb8c98b817ff50cf"
  },
  {
    "url": "images/tcp-ip.jpg",
    "revision": "7057edb065324cc191c88a66002ffa46"
  },
  {
    "url": "images/tcp-slide-window.jpg",
    "revision": "86048baa886666766ccc05412c0d237e"
  },
  {
    "url": "images/udp-head.jpg",
    "revision": "d066cad3e85afdbc4e53a3180efaaec1"
  },
  {
    "url": "images/virtual-host.jpg",
    "revision": "0f1a84fd02fb2e898d9c5579d8cc1489"
  },
  {
    "url": "index.html",
    "revision": "fe154ca23822199dc844b9ee24ffe2d0"
  },
  {
    "url": "javascript/call&apply&bind.html",
    "revision": "0b9987f097096f19f5a2538d9aebaf5d"
  },
  {
    "url": "javascript/index.html",
    "revision": "cbafc6ce68a0da96de08a6ef5ad14d28"
  },
  {
    "url": "javascript/promise.html",
    "revision": "334839d8ac48574ef4a15b12948f1b69"
  },
  {
    "url": "javascript/prototype.html",
    "revision": "d69387dcf09eb47fcd96d28cb862ecc0"
  },
  {
    "url": "javascript/this.html",
    "revision": "d2006494f1798d45ac015b9e69ccbd87"
  },
  {
    "url": "javascript/事件循环.html",
    "revision": "695f2df11c36d07120f1c3c42b57c73c"
  },
  {
    "url": "javascript/函数式编程.html",
    "revision": "8c9da3c490c785cdf0d57a4b0e3a9abc"
  },
  {
    "url": "javascript/执行上下文.html",
    "revision": "17b21170a623dcee4afeefbf5ef25b58"
  },
  {
    "url": "javascript/深浅拷贝.html",
    "revision": "08c0878fb66c0a9f9a9d29804d68b951"
  },
  {
    "url": "javascript/词法作用域.html",
    "revision": "701356219cd721d74c03726ddaa92cb5"
  },
  {
    "url": "javascript/闭包.html",
    "revision": "1f8e520db972cf721df09085981aabc0"
  },
  {
    "url": "logo.jpg",
    "revision": "4b318964cb50b45d2cac5c5d9366496f"
  },
  {
    "url": "network/basics.html",
    "revision": "68a0f844ce9a87072584c2019c1ae5b6"
  },
  {
    "url": "network/http-cache.html",
    "revision": "c7c2a40525033c9bb4d8a7be1b726dfd"
  },
  {
    "url": "network/http.html",
    "revision": "f3941f0b0746820349e219fd7949836a"
  },
  {
    "url": "network/index.html",
    "revision": "3a74dad47cc6ca7eff109f8c93508df6"
  },
  {
    "url": "node/index.html",
    "revision": "cbf7ee294e875d58da27a4d0508c1682"
  },
  {
    "url": "performance/index.html",
    "revision": "4e970340305feebc5c8b1b2e6848da2a"
  },
  {
    "url": "project/babel.html",
    "revision": "558eeb96f14357071049107ef9ab0985"
  },
  {
    "url": "project/index.html",
    "revision": "808912c15355e62544033b5430c403b6"
  },
  {
    "url": "project/webpack.html",
    "revision": "dcfc3045961bf79f8da085afaf8cc517"
  },
  {
    "url": "security/index.html",
    "revision": "0e5871e5c6ae943fd3598fc21f9765cd"
  },
  {
    "url": "typescript/advance.html",
    "revision": "05f86d0d909911a2ed9c11778f77bf0a"
  },
  {
    "url": "typescript/index.html",
    "revision": "a909be5dfd1ba696c1dfc0d96715dca2"
  },
  {
    "url": "typescript/utility-types.html",
    "revision": "52438519cb19dbbc8a4c1821f0c85000"
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
