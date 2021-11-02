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
    "revision": "5d3a4415ccd768bb85a1c6102922f701"
  },
  {
    "url": "advanced/index.html",
    "revision": "a3a319f601e6a5faea99f7a30e132442"
  },
  {
    "url": "algorithm/index.html",
    "revision": "91e68597b6cfb3386ad1fbe296a4c4f9"
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
    "url": "assets/js/10.f0986b42.js",
    "revision": "0ccc8f2650a2c98c00841258b078f639"
  },
  {
    "url": "assets/js/11.a8ce9af8.js",
    "revision": "e7e37008080a7e8bc97e33d874a5252a"
  },
  {
    "url": "assets/js/12.847d291a.js",
    "revision": "25a95da20925a4cdcc7d085de4e7f9a2"
  },
  {
    "url": "assets/js/13.9936c7d5.js",
    "revision": "b9a6ef16d4e7b7bd56a47f7a49ad41a5"
  },
  {
    "url": "assets/js/14.d44a4b4b.js",
    "revision": "5b6500b163ea7fcf3b74ebad4b8a8c06"
  },
  {
    "url": "assets/js/15.333ff3b8.js",
    "revision": "77b014e807bb1af395108f8cdff4769c"
  },
  {
    "url": "assets/js/16.8c57b288.js",
    "revision": "ac8a0747d52681084fd30ae387026458"
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
    "url": "assets/js/20.fda0228f.js",
    "revision": "8da2a12feba361b1543dbfa929f2db77"
  },
  {
    "url": "assets/js/21.0d3c64da.js",
    "revision": "87423c86f6b9718847b038a363592931"
  },
  {
    "url": "assets/js/22.de828116.js",
    "revision": "7db85f0a161636a711fb4cc3f4b5b01d"
  },
  {
    "url": "assets/js/23.561032bf.js",
    "revision": "cab02221415f333d43064065f8126fce"
  },
  {
    "url": "assets/js/24.836cefff.js",
    "revision": "d5e382477be509692cfacc513920fb8e"
  },
  {
    "url": "assets/js/25.a6a40c31.js",
    "revision": "3c4a0230667808a820a04f3f3364b616"
  },
  {
    "url": "assets/js/26.f8637584.js",
    "revision": "1e7a6d4c14817c91bb45d278c5f9eb96"
  },
  {
    "url": "assets/js/27.a394a6ff.js",
    "revision": "c9e752ca857452a931a03ed14c5f1d62"
  },
  {
    "url": "assets/js/28.8a3b9cb8.js",
    "revision": "9828133a8fec2d0cc9360d0a5a2f2ca5"
  },
  {
    "url": "assets/js/29.bc68f907.js",
    "revision": "2ba77c9055c9289ffb700d5fbfcc658c"
  },
  {
    "url": "assets/js/3.9bbab2a0.js",
    "revision": "721303208817d4442064e68bee324e73"
  },
  {
    "url": "assets/js/30.e281d2d5.js",
    "revision": "5244d3c21903e3fc4601a25d9a387d3c"
  },
  {
    "url": "assets/js/31.92729d7c.js",
    "revision": "617ecbe8814b026ffb31028ff05a4947"
  },
  {
    "url": "assets/js/32.7e819f04.js",
    "revision": "2884087486b88f1b6e8fe6b9397a0f21"
  },
  {
    "url": "assets/js/33.e7960f82.js",
    "revision": "dd8d67af316804c207b68c66f90d3c84"
  },
  {
    "url": "assets/js/4.e7a5b321.js",
    "revision": "711c155fe347e70bc0fee01afdf927be"
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
    "url": "assets/js/8.777e16f0.js",
    "revision": "fce763ed9d88ce078082761b8a85824a"
  },
  {
    "url": "assets/js/9.2622f99f.js",
    "revision": "2a94e67c3da11934073fddd09a18e606"
  },
  {
    "url": "assets/js/app.acf73683.js",
    "revision": "79b4159fd8c0e61e4eccb220fe48cef9"
  },
  {
    "url": "browser/index.html",
    "revision": "4fbd96b12eab23bfc3e6f016ceb3e0cc"
  },
  {
    "url": "browser/ServiceWorker.html",
    "revision": "9c508e25a4f7550fa4653c0dd418ef7b"
  },
  {
    "url": "css/index.html",
    "revision": "c598f4f3c411d6f08b052eafc4f7d6a5"
  },
  {
    "url": "frame/index.html",
    "revision": "c4267d8090394cf2ba76641fd517a016"
  },
  {
    "url": "frame/React 实战技巧.html",
    "revision": "b908b783a69feef5536b1c210334ef6e"
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
    "revision": "fc055efd8355f0b0a4cfe08e09c0b502"
  },
  {
    "url": "javascript/call&apply&bind.html",
    "revision": "089a20fb75a4ea5954e9aeefa5ebbe4a"
  },
  {
    "url": "javascript/index.html",
    "revision": "860c55fee1b7d2da59f7e116e03ac98d"
  },
  {
    "url": "javascript/promise.html",
    "revision": "af2d3e22a86ede5bff8790aa73dd0538"
  },
  {
    "url": "javascript/prototype.html",
    "revision": "b191cf73a6fad2988c1bb09f367a4183"
  },
  {
    "url": "javascript/this.html",
    "revision": "1a61fa675716d4446a7c0717922166c4"
  },
  {
    "url": "javascript/事件循环.html",
    "revision": "6d82c4f0fabcab7e59ee61e02a631e76"
  },
  {
    "url": "javascript/函数式编程.html",
    "revision": "1d57bd746b691ca8c68593f9e2e0cab1"
  },
  {
    "url": "javascript/执行上下文.html",
    "revision": "97180e69e96afcc12d17e00e75e02573"
  },
  {
    "url": "javascript/深浅拷贝.html",
    "revision": "697f48a079a80e6a814e0a8b03997b5e"
  },
  {
    "url": "javascript/词法作用域.html",
    "revision": "bf0efedebce2d23e5e9f78d84e1e9bed"
  },
  {
    "url": "javascript/闭包.html",
    "revision": "ac6c2568992001d6394de69a94a3d6fe"
  },
  {
    "url": "logo.jpg",
    "revision": "4b318964cb50b45d2cac5c5d9366496f"
  },
  {
    "url": "network/index.html",
    "revision": "6d664e49a9481b3627ea83932735bcd9"
  },
  {
    "url": "node/index.html",
    "revision": "6d3d01e22e5cea1413e471949b8c3168"
  },
  {
    "url": "performance/index.html",
    "revision": "a70aa90ce6bc3c8dcf157cebd82a55a9"
  },
  {
    "url": "project/index.html",
    "revision": "6770444ee5b41d6c5e4d20ae51f15fba"
  },
  {
    "url": "security/index.html",
    "revision": "2fb865c8af54c00cc760b56276af8be9"
  },
  {
    "url": "typescript/index.html",
    "revision": "da6d6489a596eb1e31c3ec80fe263074"
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
