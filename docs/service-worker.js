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
    "revision": "f24312d6bed40cf662c35f33402e24ad"
  },
  {
    "url": "advanced/index.html",
    "revision": "804d01049527ac76655f2098b43dc2ce"
  },
  {
    "url": "algorithm/index.html",
    "revision": "38fb8c7c8e703d6864c4eb3d2b961c4f"
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
    "url": "assets/js/10.3f6102c4.js",
    "revision": "e7e2da13e372722cb1cca3ae628ce358"
  },
  {
    "url": "assets/js/11.fa066dd0.js",
    "revision": "4b7795c61f0f6ac6f2344bbf012e3f82"
  },
  {
    "url": "assets/js/12.40c79a4a.js",
    "revision": "ed972b7a1cd6423914e039b1e0a1d1c9"
  },
  {
    "url": "assets/js/13.67d823a8.js",
    "revision": "982f7f138858594f514651103616a66f"
  },
  {
    "url": "assets/js/14.a526e537.js",
    "revision": "1f181ad86f4b030be3651b2a7d8d7ab1"
  },
  {
    "url": "assets/js/15.13309d1f.js",
    "revision": "0fb14634e4c79f5f79f3153f69c9d8e7"
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
    "url": "assets/js/22.362a84c1.js",
    "revision": "e73dc768f06d53f44e326e60abe1e854"
  },
  {
    "url": "assets/js/23.ab0f0a27.js",
    "revision": "3f9235805917b480d1e5865703e14f7c"
  },
  {
    "url": "assets/js/24.4a807ef5.js",
    "revision": "f8ea07591289de0e73174060c53e295a"
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
    "url": "assets/js/29.fffbb22f.js",
    "revision": "f9c90ac57e88d6c74f38a4cf89b67874"
  },
  {
    "url": "assets/js/3.9bbab2a0.js",
    "revision": "721303208817d4442064e68bee324e73"
  },
  {
    "url": "assets/js/30.07267ef6.js",
    "revision": "58cfcfae854bfa38d4cafec4b8daa822"
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
    "url": "assets/js/9.4efc5b80.js",
    "revision": "1b2b0a645d0c5512b567d79c944f95de"
  },
  {
    "url": "assets/js/app.1fa20be1.js",
    "revision": "3e3e9e6953a988767b87befbfa59cab1"
  },
  {
    "url": "browser/index.html",
    "revision": "231a93e0f7798f971024d4ad364ce690"
  },
  {
    "url": "browser/ServiceWorker.html",
    "revision": "18b822bb0957c223ec5b5425facf7ee1"
  },
  {
    "url": "css/01.html",
    "revision": "428a9a49782a1cd1ad0595c66df6130e"
  },
  {
    "url": "css/index.html",
    "revision": "5995286f049aedf7871e49a500f01bb4"
  },
  {
    "url": "frame/index.html",
    "revision": "977e424b19912b27d134285a67e229a5"
  },
  {
    "url": "index.html",
    "revision": "0b1a181abffc0f7d227911e77c000d7e"
  },
  {
    "url": "javascript/call&apply&bind.html",
    "revision": "0b9d12c463bda083bf89484ae4ce6999"
  },
  {
    "url": "javascript/index.html",
    "revision": "99cc2f36cb563d3a01a65f1df5442a7a"
  },
  {
    "url": "javascript/promise.html",
    "revision": "a786cc78ccc930fcf9b7a040ce47a6fd"
  },
  {
    "url": "javascript/prototype.html",
    "revision": "3bafd6985c23acbab4a546373f514a66"
  },
  {
    "url": "javascript/this.html",
    "revision": "fac11497cf617f64e311e209e131c86d"
  },
  {
    "url": "javascript/事件循环.html",
    "revision": "5eadcdb6b4c6a3509289efd85b5ddd39"
  },
  {
    "url": "javascript/函数式编程.html",
    "revision": "6e23c172bd0cd5034c0076d8c528867d"
  },
  {
    "url": "javascript/执行上下文.html",
    "revision": "466788808cd6f99b1aa06e338a840593"
  },
  {
    "url": "javascript/深浅拷贝.html",
    "revision": "b22ee65753a6dcc4f759482260a21ae0"
  },
  {
    "url": "javascript/词法作用域.html",
    "revision": "e707c550f4fcc576ba310e9026ce479b"
  },
  {
    "url": "javascript/闭包.html",
    "revision": "8e76dcf925fd77390f7599c92204e9b2"
  },
  {
    "url": "logo.jpg",
    "revision": "4b318964cb50b45d2cac5c5d9366496f"
  },
  {
    "url": "network/index.html",
    "revision": "e6d45fbe9d30782212b9ab3e346c4e95"
  },
  {
    "url": "node/index.html",
    "revision": "0940edbaac6750a57b25bef9fc4e6776"
  },
  {
    "url": "performance/index.html",
    "revision": "c02f51badded250d6d225b28cb293ab4"
  },
  {
    "url": "project/index.html",
    "revision": "ae5c92b4c69d36e6f1782612b7b5fd77"
  },
  {
    "url": "security/index.html",
    "revision": "830b86d3335c4b543cdb9f9c2cb2b9fc"
  },
  {
    "url": "typescript/index.html",
    "revision": "3c16d0bbe1b6452abd8bfda7bfb37f12"
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
