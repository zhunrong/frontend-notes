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
    "revision": "653f60dfbd38b6e06193565546597b1f"
  },
  {
    "url": "advanced/index.html",
    "revision": "7ad423208df5ac715c35ed6ad01094ed"
  },
  {
    "url": "algorithm/index.html",
    "revision": "47ea0e0f89fe774caca845104e93a113"
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
    "url": "assets/js/13.a57bbed8.js",
    "revision": "580cb7dcf425fab8c5213a9405fe4fba"
  },
  {
    "url": "assets/js/14.f30d69c4.js",
    "revision": "666e3283b55132fa7daeeeb82cbad2ed"
  },
  {
    "url": "assets/js/15.83d3a917.js",
    "revision": "47467849345f83df66590ae1e0cbb3f4"
  },
  {
    "url": "assets/js/16.42f5b8e2.js",
    "revision": "ff2e02678fe8b8cf82fdae19aec7fdc9"
  },
  {
    "url": "assets/js/17.c39483d0.js",
    "revision": "de4abc3ac68ef615be1ba684eac348a5"
  },
  {
    "url": "assets/js/18.fc49070a.js",
    "revision": "27e78ee8299a3a8663349426f580402f"
  },
  {
    "url": "assets/js/19.b0a9ee7e.js",
    "revision": "db7794e27baaa5b4800a33ab7098cbaa"
  },
  {
    "url": "assets/js/2.2f2cb61d.js",
    "revision": "8e66c79c0e4a6c5ef4e252f497c3657f"
  },
  {
    "url": "assets/js/20.39306663.js",
    "revision": "f6903688e49ae36e9df0e86326aa0e13"
  },
  {
    "url": "assets/js/21.e98ea068.js",
    "revision": "cce4951d1f716a7a4e56148041641d1c"
  },
  {
    "url": "assets/js/22.6c7ee60e.js",
    "revision": "46be0f6dff5d07fe69edaace488d8db2"
  },
  {
    "url": "assets/js/23.98b4407d.js",
    "revision": "e4c824ea46a8d9bf07d3595ec98aa6f5"
  },
  {
    "url": "assets/js/24.3746e839.js",
    "revision": "b4c3bf794b4bd24d21e814a302c2d3cf"
  },
  {
    "url": "assets/js/25.0828f0d7.js",
    "revision": "ad579c99e49a0a9d584d1602485caef6"
  },
  {
    "url": "assets/js/26.2cfdcd68.js",
    "revision": "b41d805af75a031a69120a1342105f4d"
  },
  {
    "url": "assets/js/27.2eae3c83.js",
    "revision": "f013efe7d79581caaba16ee08ee5fd7a"
  },
  {
    "url": "assets/js/28.e5242f99.js",
    "revision": "0e69720ae01d53947cc7bd283bfc9d8b"
  },
  {
    "url": "assets/js/29.8f73494c.js",
    "revision": "18de11b27f05d63b3cbed27e51e993f1"
  },
  {
    "url": "assets/js/3.583be172.js",
    "revision": "cbc52b2b368623797f35464ff97b1cb2"
  },
  {
    "url": "assets/js/30.7beccb54.js",
    "revision": "5efcac16d381a57d9314d74b47edcd18"
  },
  {
    "url": "assets/js/31.041b8c59.js",
    "revision": "93b297a8097bdad78ab92c903839fdea"
  },
  {
    "url": "assets/js/32.7575f631.js",
    "revision": "d2c7dbfc6e1594364dab8938141e47cf"
  },
  {
    "url": "assets/js/4.8e44c5d0.js",
    "revision": "bf65f63eca85ff1fe0a9ae53ac25f702"
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
    "url": "assets/js/8.a6a3ef36.js",
    "revision": "94d48488517d53736232dc23e02b3aea"
  },
  {
    "url": "assets/js/9.9eeec5ac.js",
    "revision": "95e488243b0ae572816a7ee432864d2b"
  },
  {
    "url": "assets/js/app.96af9c35.js",
    "revision": "42f17c5adbebfc25543c9d0fc8c1628e"
  },
  {
    "url": "browser/index.html",
    "revision": "1c429dc41be534881616111f621a4882"
  },
  {
    "url": "browser/ServiceWorker.html",
    "revision": "778859be99e10d5a3bd50f5d9ad9f65b"
  },
  {
    "url": "css/index.html",
    "revision": "31934b408b52ec7b95d131404d01f1a8"
  },
  {
    "url": "frame/index.html",
    "revision": "8ad5f4f8ddf82f9888e98c341e769c70"
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
    "revision": "6fd63654f623799d129a51555ec53238"
  },
  {
    "url": "javascript/call&apply&bind.html",
    "revision": "34663c693d5d42f6bce8d278c53e8bef"
  },
  {
    "url": "javascript/index.html",
    "revision": "20b36c4ea740f2ccbdaf9d98ad9a3b82"
  },
  {
    "url": "javascript/promise.html",
    "revision": "aa2c667a2a4809702bcba68f8b26c73a"
  },
  {
    "url": "javascript/prototype.html",
    "revision": "6e3130e983820f8a25209da4399218a9"
  },
  {
    "url": "javascript/this.html",
    "revision": "d0737e1d59e1f9bc8371b3e148b0af50"
  },
  {
    "url": "javascript/事件循环.html",
    "revision": "ccae5cafa7fd9c9852a74b5c2cda2206"
  },
  {
    "url": "javascript/函数式编程.html",
    "revision": "77f5a60231bde7439af91ccad64e2019"
  },
  {
    "url": "javascript/执行上下文.html",
    "revision": "a8c8877f56d6c836483253b3302d26f9"
  },
  {
    "url": "javascript/深浅拷贝.html",
    "revision": "90f176fdd82f3b5b7ceb550c28cc4a66"
  },
  {
    "url": "javascript/词法作用域.html",
    "revision": "f2ebbf875ca067d361215bdbb53de835"
  },
  {
    "url": "javascript/闭包.html",
    "revision": "5889432e0f98494c65e35285e8c7ffc1"
  },
  {
    "url": "logo.jpg",
    "revision": "4b318964cb50b45d2cac5c5d9366496f"
  },
  {
    "url": "network/index.html",
    "revision": "4fa35646ff1883e79b27385de936eba5"
  },
  {
    "url": "node/index.html",
    "revision": "770c64c1cf79748eeec9ce28dd55bae8"
  },
  {
    "url": "performance/index.html",
    "revision": "76e06fbe39903762abae86976d0d4041"
  },
  {
    "url": "project/index.html",
    "revision": "93bd72c9007dd9123977fa69450fffc6"
  },
  {
    "url": "security/index.html",
    "revision": "43eed8c3a3c5e330f005c92777f14a19"
  },
  {
    "url": "typescript/index.html",
    "revision": "32e602b8e013051fa02a2d8dc898d366"
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
