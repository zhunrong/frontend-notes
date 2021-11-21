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
    "revision": "d953be38afa9301e1611ce61015cd641"
  },
  {
    "url": "advanced/index.html",
    "revision": "405684d5f9607b0a448997555085dbcb"
  },
  {
    "url": "algorithm/index.html",
    "revision": "4c4f14235ed9591a3f42f3739b5a528b"
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
    "url": "assets/js/11.9f3bad83.js",
    "revision": "320a73aac55b349d5de8f85b0e32455a"
  },
  {
    "url": "assets/js/12.2e7bdd3d.js",
    "revision": "ccc7de9e743a35380dbdcd58f11da534"
  },
  {
    "url": "assets/js/13.28c7338a.js",
    "revision": "a2cccc38d4bb6f30d877fdf8b2850cec"
  },
  {
    "url": "assets/js/14.d6666d1f.js",
    "revision": "996306dfc82fee7071d3c34f2bb0dbe5"
  },
  {
    "url": "assets/js/15.e37e7d9c.js",
    "revision": "d7584e45977d490812357c8799512a85"
  },
  {
    "url": "assets/js/16.cd2a8c4b.js",
    "revision": "ae1902e1f597112fb25a86b8a8d38ad1"
  },
  {
    "url": "assets/js/17.0afe91c2.js",
    "revision": "18156732878ad1c2cea831c8792ea1da"
  },
  {
    "url": "assets/js/18.c2f51b81.js",
    "revision": "40409af3f833e012d82a0162c6b2f9fc"
  },
  {
    "url": "assets/js/19.0f6b6523.js",
    "revision": "99e6b9d5a69a756bc3166dc503475ee1"
  },
  {
    "url": "assets/js/2.e95bb25f.js",
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
    "url": "assets/js/23.ab0f0a27.js",
    "revision": "3f9235805917b480d1e5865703e14f7c"
  },
  {
    "url": "assets/js/24.9d193d61.js",
    "revision": "3b6b8fb29da55cab83022afbb0d2a661"
  },
  {
    "url": "assets/js/25.81da395f.js",
    "revision": "891d0385fcda87bc1fbc7ccc7227ff26"
  },
  {
    "url": "assets/js/26.4d4208ed.js",
    "revision": "c06fb37d10978d5c6614e330d2eb9f2b"
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
    "url": "assets/js/31.4707d72b.js",
    "revision": "000b7ca4cfacd498f9ed9f3a4abc44db"
  },
  {
    "url": "assets/js/32.dfa6d592.js",
    "revision": "48193d0c7e90ec2fff48f47006a35799"
  },
  {
    "url": "assets/js/33.c6f469e3.js",
    "revision": "ff2b40f3ee1294883a47d9c42c03bc72"
  },
  {
    "url": "assets/js/34.6503946a.js",
    "revision": "eb39394095613b19c4d6d1f13dd1420e"
  },
  {
    "url": "assets/js/4.d041fb76.js",
    "revision": "8d5545e078ec822aa9038d29611a05ca"
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
    "url": "assets/js/app.252230d6.js",
    "revision": "14addbd88476a09d09db3956aa1c7aaf"
  },
  {
    "url": "browser/index.html",
    "revision": "9122be58c3760e0b6059635c5d0364e7"
  },
  {
    "url": "browser/ServiceWorker.html",
    "revision": "138acc1232ee0d9804d887b5c365808c"
  },
  {
    "url": "css/index.html",
    "revision": "510c2ae3e3412b53a65ab4fa0a0e2fc1"
  },
  {
    "url": "frame/index.html",
    "revision": "bdbc70532f8aa07eb197aab03dfc64bf"
  },
  {
    "url": "frame/React 实战技巧.html",
    "revision": "e1711551edbf7176ab28b79a8dc6bc78"
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
    "revision": "52c34ec562bfd391c01e8c645fc50eb6"
  },
  {
    "url": "javascript/call&apply&bind.html",
    "revision": "2e0f573770a761c76ffd7f41fb384cbe"
  },
  {
    "url": "javascript/index.html",
    "revision": "d44162baa2e12988ab918a55a4e8af82"
  },
  {
    "url": "javascript/promise.html",
    "revision": "8c3d2a2b8332d017a575cd95e2dae43f"
  },
  {
    "url": "javascript/prototype.html",
    "revision": "a56638094b23db64205acb7ca6279d1c"
  },
  {
    "url": "javascript/this.html",
    "revision": "07255bc3386d35783b5ef38d50c1d7f1"
  },
  {
    "url": "javascript/事件循环.html",
    "revision": "0f3b7c0a70109861b81f7a2057570149"
  },
  {
    "url": "javascript/函数式编程.html",
    "revision": "4140f90dfc14d6023c286ff487d7fadb"
  },
  {
    "url": "javascript/执行上下文.html",
    "revision": "4b5eda21ff81fd2e93c11d3d796e90c8"
  },
  {
    "url": "javascript/深浅拷贝.html",
    "revision": "fd1e3ca53e6eb6fb27b1a1c038049c46"
  },
  {
    "url": "javascript/词法作用域.html",
    "revision": "ca97f402e08cfefef1bce351e5d4acfc"
  },
  {
    "url": "javascript/闭包.html",
    "revision": "7ae95f6ffb4a4bce0a7b9233aa6cc5e3"
  },
  {
    "url": "logo.jpg",
    "revision": "4b318964cb50b45d2cac5c5d9366496f"
  },
  {
    "url": "network/index.html",
    "revision": "73ec49ef9c7430aa21ffbc35cb504cb0"
  },
  {
    "url": "node/index.html",
    "revision": "f1d968590762e57b1bb0345a52908e03"
  },
  {
    "url": "performance/index.html",
    "revision": "efaeea756d520564b7f6c0865774e264"
  },
  {
    "url": "project/index.html",
    "revision": "eb920d958d6e1bdc2cb261c2396d5f7f"
  },
  {
    "url": "project/webpack.html",
    "revision": "e5f55edeb887e980584bd57feb01408c"
  },
  {
    "url": "security/index.html",
    "revision": "bb85bdd54c9141f29c7a53ef3ed4fd77"
  },
  {
    "url": "typescript/index.html",
    "revision": "08f5e2803005f0f9406c2321b15756d7"
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
