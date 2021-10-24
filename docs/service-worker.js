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
    "revision": "f88cae364564f465f462dfc4985cd454"
  },
  {
    "url": "advanced/index.html",
    "revision": "840f5fe2585a3a12d69f0febd9400410"
  },
  {
    "url": "algorithm/index.html",
    "revision": "fe99936ca60c9715e7727673240baea6"
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
    "url": "assets/js/11.ee5b23b3.js",
    "revision": "b16613364a33f3864c371e9c650696d1"
  },
  {
    "url": "assets/js/12.b19b8b8c.js",
    "revision": "180ad2eac0b45ea28803e440c0240c3e"
  },
  {
    "url": "assets/js/13.c54d788d.js",
    "revision": "68c8be202d7bcb4e1b94251d9dfa6469"
  },
  {
    "url": "assets/js/14.dc960945.js",
    "revision": "e86d46a7ce5e8c1caf898df494aec4a0"
  },
  {
    "url": "assets/js/15.2f18cea9.js",
    "revision": "17b19bc5a8a35e7b091fd52c6966c846"
  },
  {
    "url": "assets/js/16.21f302a5.js",
    "revision": "b99163b547eff1759d738562e9e669b5"
  },
  {
    "url": "assets/js/17.e64e6c9c.js",
    "revision": "2fcec89486aecf2e35b4ff220809eb08"
  },
  {
    "url": "assets/js/18.3e62edd2.js",
    "revision": "b8499ff894f12d1213b71c855b5949ba"
  },
  {
    "url": "assets/js/19.709338d1.js",
    "revision": "7a8d639d82ecf25f847c2d88d8999c8c"
  },
  {
    "url": "assets/js/2.e95bb25f.js",
    "revision": "8e66c79c0e4a6c5ef4e252f497c3657f"
  },
  {
    "url": "assets/js/20.fda0228f.js",
    "revision": "8da2a12feba361b1543dbfa929f2db77"
  },
  {
    "url": "assets/js/21.b483d8b5.js",
    "revision": "dda1002ca718fdb6aefbdbc0c101c1b9"
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
    "url": "assets/js/25.81da395f.js",
    "revision": "891d0385fcda87bc1fbc7ccc7227ff26"
  },
  {
    "url": "assets/js/26.d7be1d69.js",
    "revision": "c070d3cd68dc17bf1ce6317f7f6ead33"
  },
  {
    "url": "assets/js/27.0cafa974.js",
    "revision": "e7ab90556e47f8b8b828d0bf465ec2de"
  },
  {
    "url": "assets/js/28.fabf241f.js",
    "revision": "d9c57dd9d7da2ae6822d824f144f250d"
  },
  {
    "url": "assets/js/29.0c995ee1.js",
    "revision": "b00921b00724283b8ed7d08bf4072292"
  },
  {
    "url": "assets/js/3.9bbab2a0.js",
    "revision": "721303208817d4442064e68bee324e73"
  },
  {
    "url": "assets/js/30.b1875194.js",
    "revision": "043da9bc89b6cd0f5982e2678b3a86d0"
  },
  {
    "url": "assets/js/31.37628682.js",
    "revision": "84eba1a97a1668626bb60322598e9d1f"
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
    "url": "assets/js/9.d194205a.js",
    "revision": "fbea55ac73ca65dc71397d9327685131"
  },
  {
    "url": "assets/js/app.2c4c73a3.js",
    "revision": "56801c563ec6345a244665feaa7772ce"
  },
  {
    "url": "browser/index.html",
    "revision": "45cc5158e579e8029205be54913e13ac"
  },
  {
    "url": "browser/ServiceWorker.html",
    "revision": "e506eecee7cbfb182ad89532d696dbd1"
  },
  {
    "url": "css/01.html",
    "revision": "d8728e40f40aaa389e132bd3fc540d59"
  },
  {
    "url": "css/index.html",
    "revision": "4b1a9f37ee3bcc77f3f25d385b344707"
  },
  {
    "url": "frame/index.html",
    "revision": "4b3ece57db1fabae29349e879cf215de"
  },
  {
    "url": "index.html",
    "revision": "53aee5c53f7545533ea733c5c26a9385"
  },
  {
    "url": "javascript/call&apply&bind.html",
    "revision": "e6d2fda0f06b65c5fbb6432a53eed986"
  },
  {
    "url": "javascript/index.html",
    "revision": "4171e1546c9baed28d6732ec1ce9e495"
  },
  {
    "url": "javascript/promise.html",
    "revision": "9dece22cde0e5ca79c89e9bd7b3ef051"
  },
  {
    "url": "javascript/prototype.html",
    "revision": "c747ea57b7115ed532fd5f7862709147"
  },
  {
    "url": "javascript/this.html",
    "revision": "a0fd2300d3698984aa618f4785dc541d"
  },
  {
    "url": "javascript/事件循环.html",
    "revision": "5f6ecbf8ec4b2d447b23dd0a4edb9204"
  },
  {
    "url": "javascript/函数式编程.html",
    "revision": "913bfc08c7ba4bfa0f2abb6f071a8fd5"
  },
  {
    "url": "javascript/执行上下文.html",
    "revision": "90ff5cf08e0ace991c62d868363d6ca0"
  },
  {
    "url": "javascript/深浅拷贝.html",
    "revision": "b0b15d414bbe34bd7ac97240de2cc6af"
  },
  {
    "url": "javascript/词法作用域.html",
    "revision": "8576bb319b15319a98c0bd4ce2c5b983"
  },
  {
    "url": "javascript/闭包.html",
    "revision": "c5e24f8ba646d2b1b51a766211054f70"
  },
  {
    "url": "logo.jpg",
    "revision": "4b318964cb50b45d2cac5c5d9366496f"
  },
  {
    "url": "network/index.html",
    "revision": "49e13aac76bd37982b43e6d98eb175d9"
  },
  {
    "url": "node/index.html",
    "revision": "307f8966e1565e25a5189c5fd089b752"
  },
  {
    "url": "performance/index.html",
    "revision": "1d4090e5d5ac80921be146d69680ece6"
  },
  {
    "url": "project/index.html",
    "revision": "c220a7656e4e4284b8516aaed6cb70d5"
  },
  {
    "url": "security/index.html",
    "revision": "5bcf29f2f35cc20f986651e99ecfbfb0"
  },
  {
    "url": "typescript/index.html",
    "revision": "af149985db27a4e8947a1e164ec64444"
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
