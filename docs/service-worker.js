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
    "revision": "d8f7718258c6f833805133561d6d515d"
  },
  {
    "url": "advanced/index.html",
    "revision": "2f45ecf6f28f91181bbb1821486090d8"
  },
  {
    "url": "algorithm/index.html",
    "revision": "9d304462c59a9b4bd1f05620c1db81e5"
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
    "url": "assets/js/12.88e70a27.js",
    "revision": "a71a5248ed037a7c3750ca3bb230d635"
  },
  {
    "url": "assets/js/13.4df75683.js",
    "revision": "30eeea1c8fd2d3b9172cd1d62c92f48a"
  },
  {
    "url": "assets/js/14.ce04919a.js",
    "revision": "27e379899b27fa64df9a07d7d34d36de"
  },
  {
    "url": "assets/js/15.80396e44.js",
    "revision": "a009899ded883199e12dccff613edc04"
  },
  {
    "url": "assets/js/16.cd2a8c4b.js",
    "revision": "ae1902e1f597112fb25a86b8a8d38ad1"
  },
  {
    "url": "assets/js/17.329ed9c8.js",
    "revision": "5905110816040411a937e0d77a3b2e67"
  },
  {
    "url": "assets/js/18.eae793d2.js",
    "revision": "9de3c56a2f16b0e0488570f5fddaddae"
  },
  {
    "url": "assets/js/19.b61701e4.js",
    "revision": "3320e7a50da55ea3e42a310bb075f138"
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
    "url": "assets/js/21.7a87d24b.js",
    "revision": "c13e6c115fed6f92aa5566cbaf6b86b3"
  },
  {
    "url": "assets/js/22.100b34f9.js",
    "revision": "55906c59efb927e5bbe4a8c942b71c50"
  },
  {
    "url": "assets/js/23.68283ae0.js",
    "revision": "4112162f7acbb44ab652f050451f094d"
  },
  {
    "url": "assets/js/24.4a807ef5.js",
    "revision": "f8ea07591289de0e73174060c53e295a"
  },
  {
    "url": "assets/js/25.21d94615.js",
    "revision": "d7384c9384cd3a1f5026a865bff392e3"
  },
  {
    "url": "assets/js/26.9739a87d.js",
    "revision": "ed4de9f9ce1848c0ebe8279908511253"
  },
  {
    "url": "assets/js/27.5d4480a5.js",
    "revision": "7c6460aca837f67c0977fab8c4ecee5e"
  },
  {
    "url": "assets/js/28.a25baadc.js",
    "revision": "8ae4b8941d6f4cb399fae3364df8ba9b"
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
    "url": "assets/js/30.07267ef6.js",
    "revision": "58cfcfae854bfa38d4cafec4b8daa822"
  },
  {
    "url": "assets/js/31.e371f2d6.js",
    "revision": "142cf9c1af3acb558ba42a0913369fca"
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
    "url": "assets/js/app.85e51a2f.js",
    "revision": "268963732667d17e478e858d819da2b1"
  },
  {
    "url": "browser/index.html",
    "revision": "0beceae32f9f4b37375373c0bd4c38f0"
  },
  {
    "url": "browser/ServiceWorker.html",
    "revision": "715bfb3fe32bbc6d00ab29b5f8a6f2c0"
  },
  {
    "url": "css/index.html",
    "revision": "05d87b71d3ce0c5030225d14b309058b"
  },
  {
    "url": "frame/index.html",
    "revision": "1becae6f8c0022534809dd2840a3c791"
  },
  {
    "url": "frame/React 实战技巧.html",
    "revision": "bd7f60ebfa2615095ad245f6a14e8a69"
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
    "revision": "b49ad7a1d6f7649db121c2f739c32273"
  },
  {
    "url": "javascript/call&apply&bind.html",
    "revision": "7d828f407aa96d1652a92f5b0be33c46"
  },
  {
    "url": "javascript/index.html",
    "revision": "6779051aac3cc2c56ffb497f0aacaaec"
  },
  {
    "url": "javascript/promise.html",
    "revision": "7838527063bae93aaaaf25d57516e5f4"
  },
  {
    "url": "javascript/prototype.html",
    "revision": "9e73ed910dd3c8784474e0d523112c23"
  },
  {
    "url": "javascript/this.html",
    "revision": "d0dac5d82ddb3e69229c1f91de8a8c86"
  },
  {
    "url": "javascript/事件循环.html",
    "revision": "14714c91925c562aeb2b91f39b121073"
  },
  {
    "url": "javascript/函数式编程.html",
    "revision": "ac50dd7ab415fffb003752b444ee1ce5"
  },
  {
    "url": "javascript/执行上下文.html",
    "revision": "039e70915865bd8980345c7aa925d68e"
  },
  {
    "url": "javascript/深浅拷贝.html",
    "revision": "e6587e50290a62090a75fe2263031f81"
  },
  {
    "url": "javascript/词法作用域.html",
    "revision": "6afadf21eec55f75b6cc89b54a0c5edc"
  },
  {
    "url": "javascript/闭包.html",
    "revision": "c0435289c70cc2ab00984ab6181a9169"
  },
  {
    "url": "logo.jpg",
    "revision": "4b318964cb50b45d2cac5c5d9366496f"
  },
  {
    "url": "network/index.html",
    "revision": "658bf15f25af7702f82bfc36530a32d4"
  },
  {
    "url": "node/index.html",
    "revision": "90df792d3f491165492d20f751753254"
  },
  {
    "url": "performance/index.html",
    "revision": "f977b5b528a1b8c9cd28d2f281bb254e"
  },
  {
    "url": "project/index.html",
    "revision": "6c46d98293171cd6d1e7db0771606c4f"
  },
  {
    "url": "security/index.html",
    "revision": "7b4165134ed1fdf071e081fe617a7278"
  },
  {
    "url": "typescript/index.html",
    "revision": "4a192712b94caf341c04aebd3a5d9b71"
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
