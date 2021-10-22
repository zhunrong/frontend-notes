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
    "revision": "ccbf9ed28563329873e25f042c6da269"
  },
  {
    "url": "advanced/index.html",
    "revision": "a482f6a64ce24ecb7c663ec306b85a84"
  },
  {
    "url": "algorithm/index.html",
    "revision": "c8aea5f67206cae5802dd6f059fbd92e"
  },
  {
    "url": "assets/css/0.styles.2ab3db1f.css",
    "revision": "2482bdebdf8d5e48e54a11fc50d1337a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c5a9a8ee.js",
    "revision": "0da04a4f6e878eea6ce2f6f1c0e13ac0"
  },
  {
    "url": "assets/js/11.ef3ce4dd.js",
    "revision": "961e4ee9f607176f2996fdc9497ac99e"
  },
  {
    "url": "assets/js/12.f519c44e.js",
    "revision": "81b73159cdd170fda6145cd34d34f84a"
  },
  {
    "url": "assets/js/13.bb7bdefe.js",
    "revision": "749b9270870e929bd58f14bafc20e273"
  },
  {
    "url": "assets/js/14.c0f93ca6.js",
    "revision": "12a04f380a34d9a1dfea577df47482a6"
  },
  {
    "url": "assets/js/15.8881d06b.js",
    "revision": "285ca543ad1f0568235f04f83155479d"
  },
  {
    "url": "assets/js/16.2e9c59c1.js",
    "revision": "f22492595cd5f84a33e20ef5517dba08"
  },
  {
    "url": "assets/js/17.0e58aad1.js",
    "revision": "8b1072e6f073beffebd59fafdacd3994"
  },
  {
    "url": "assets/js/18.b12bf6ee.js",
    "revision": "76d92838e6ddc69760eb9ea753775334"
  },
  {
    "url": "assets/js/19.335a9588.js",
    "revision": "060d91dd3af587658a9553eea725b637"
  },
  {
    "url": "assets/js/2.9588af27.js",
    "revision": "71170c9e60b1f8a6b6160c90b5414114"
  },
  {
    "url": "assets/js/20.477b5991.js",
    "revision": "1a3088ddca836a50d703b036818755e5"
  },
  {
    "url": "assets/js/21.a7716f5e.js",
    "revision": "230562f61baa5ac2e8a4f3a4ad0225c1"
  },
  {
    "url": "assets/js/22.0190605f.js",
    "revision": "3fac8a5e063451900350196dd5faa595"
  },
  {
    "url": "assets/js/23.130d4232.js",
    "revision": "ec46ac7170026d718e4fad086b747b23"
  },
  {
    "url": "assets/js/24.27a2e7b1.js",
    "revision": "f301cb57c01217e93d40322203b3c1a7"
  },
  {
    "url": "assets/js/25.d8f92e9f.js",
    "revision": "ceb209803b1497250bf3605420ccfd32"
  },
  {
    "url": "assets/js/26.1d4dab88.js",
    "revision": "0b43be6297c739c9fa83b1b4dd6e4e72"
  },
  {
    "url": "assets/js/27.f9446c53.js",
    "revision": "9acd57350129a7b35597c53ecc30f3e9"
  },
  {
    "url": "assets/js/28.5da047d6.js",
    "revision": "9d09d97099d8bf6d15baa196eff3afdb"
  },
  {
    "url": "assets/js/29.c7e4b420.js",
    "revision": "57109a7717b6a787b4264d71e35bf9be"
  },
  {
    "url": "assets/js/3.76aa156e.js",
    "revision": "17a23649a496eb45306868828058d91a"
  },
  {
    "url": "assets/js/30.5d2918d8.js",
    "revision": "9f10590b5add285815e041d10bbbfc26"
  },
  {
    "url": "assets/js/31.531491ea.js",
    "revision": "3400fe7ddde566e891c964806449a283"
  },
  {
    "url": "assets/js/32.c1102041.js",
    "revision": "bdfe2ca0d9fab15aede2f49a97f8adfe"
  },
  {
    "url": "assets/js/4.851bf8c4.js",
    "revision": "7dad41270129a88dc1d3ddb27f5c0a83"
  },
  {
    "url": "assets/js/5.63051bfe.js",
    "revision": "02c6bce8587b048a062a4dd305b0286d"
  },
  {
    "url": "assets/js/6.7dd3e1f3.js",
    "revision": "58a1f18214072d3ad96aea0b75b0ba43"
  },
  {
    "url": "assets/js/7.cbb91b65.js",
    "revision": "eab3f5a4910b3d7be1abd8629365aaff"
  },
  {
    "url": "assets/js/8.1c7878b7.js",
    "revision": "25695f06a503104c223bc075403be059"
  },
  {
    "url": "assets/js/9.79fbd26f.js",
    "revision": "1df9c19be6f0ce56aed935e2c8110e9a"
  },
  {
    "url": "assets/js/app.218b4d80.js",
    "revision": "d287b517d381697e27687595bb170b1e"
  },
  {
    "url": "browser/index.html",
    "revision": "35943c5b56875bbed55b848359b2e719"
  },
  {
    "url": "browser/ServiceWorker.html",
    "revision": "8a81e419049fa1c236c9374c03ce6a8c"
  },
  {
    "url": "css/01.html",
    "revision": "244045fb61395d8ef12908a8efeea234"
  },
  {
    "url": "css/index.html",
    "revision": "3b70f637a3b886f966c4e773f481fd9e"
  },
  {
    "url": "frame/index.html",
    "revision": "77085240c085155d2fbace0e25c08737"
  },
  {
    "url": "index.html",
    "revision": "09813db2d91c53c3578aded9d1b6100c"
  },
  {
    "url": "javascript/call&apply&bind.html",
    "revision": "9599a2b15cd01143d39c5a2ad5086c83"
  },
  {
    "url": "javascript/index.html",
    "revision": "0d23d1b6e94ee6bfac20f390419c9487"
  },
  {
    "url": "javascript/promise.html",
    "revision": "ca13084d54e94631626a32daa5ac8550"
  },
  {
    "url": "javascript/prototype.html",
    "revision": "5bf836c3a80af4768584359f2e5526a1"
  },
  {
    "url": "javascript/this.html",
    "revision": "b6116ad4439b228fa5a0dc24e6db6668"
  },
  {
    "url": "javascript/事件循环.html",
    "revision": "613104789bc123fd4766a0a342edd996"
  },
  {
    "url": "javascript/函数式编程.html",
    "revision": "bfed674f425761e93bc2fc8ca113476b"
  },
  {
    "url": "javascript/执行上下文.html",
    "revision": "6cb66e933bf7569b56b57c32268f552e"
  },
  {
    "url": "javascript/深浅拷贝.html",
    "revision": "ccfaa03ac7747b7d29cef2a47de3855c"
  },
  {
    "url": "javascript/词法作用域.html",
    "revision": "0e1f736c2ee7ee73a110ae17c6531f71"
  },
  {
    "url": "javascript/闭包.html",
    "revision": "78950d669dc70cd99586770535d6256b"
  },
  {
    "url": "logo.jpg",
    "revision": "4b318964cb50b45d2cac5c5d9366496f"
  },
  {
    "url": "network/index.html",
    "revision": "6c3acbdcec62e37364303a5b0ea02c76"
  },
  {
    "url": "node/index.html",
    "revision": "c332df986f89030f1dbb42754310bb72"
  },
  {
    "url": "performance/index.html",
    "revision": "e7dd99b42d5e2a5f7d56f042aab0d035"
  },
  {
    "url": "project/index.html",
    "revision": "50dc2b98196164b5e5bfdc07e7850af2"
  },
  {
    "url": "security/index.html",
    "revision": "fc43f39b7898e438d306737b01cb5ef5"
  },
  {
    "url": "typescript/index.html",
    "revision": "ec05bc1000c5cb6ab134a0d8c3ce37cf"
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
