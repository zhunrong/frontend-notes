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
    "revision": "64e113e95a3e1a77c5a6deaedfc2fc26"
  },
  {
    "url": "advanced/index.html",
    "revision": "1edb22dae7be497738d391aec480f13a"
  },
  {
    "url": "algorithm/index.html",
    "revision": "2c4610c7ca53b7ee7456cf2b08fa9bc5"
  },
  {
    "url": "assets/css/0.styles.23a50fce.css",
    "revision": "82b5dd0b841294d98f08343af9287ed5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d61f9bb6.js",
    "revision": "8848d703d93c8cd3e5b3e06a793ab209"
  },
  {
    "url": "assets/js/11.6823b723.js",
    "revision": "7dab376f8bc2102a7754c2efcfce0b1d"
  },
  {
    "url": "assets/js/12.7c74ac54.js",
    "revision": "2e5560c313685dc8a2f432b6b3ffc5eb"
  },
  {
    "url": "assets/js/13.3fc63725.js",
    "revision": "8497b087b73162801920c396210b3df8"
  },
  {
    "url": "assets/js/14.306d2239.js",
    "revision": "e6a58993584b75c014ae432c5352666a"
  },
  {
    "url": "assets/js/15.12daa6dd.js",
    "revision": "ab41c1e61eb134a361f5ff6b4bb41f38"
  },
  {
    "url": "assets/js/16.e3ca0542.js",
    "revision": "f5f7324454a6cda7703b5b8a00b2c8fb"
  },
  {
    "url": "assets/js/17.5d2d6159.js",
    "revision": "17e22fc9b92f6213870791bd4e436dea"
  },
  {
    "url": "assets/js/18.aedc669e.js",
    "revision": "10a1f3a143ebf3d61021021a5e1d357c"
  },
  {
    "url": "assets/js/19.4f73b576.js",
    "revision": "def024a86896bac5c168894ff19092a9"
  },
  {
    "url": "assets/js/2.ef01d5d6.js",
    "revision": "415413411c07e26f0702dad081987173"
  },
  {
    "url": "assets/js/20.0b5dec95.js",
    "revision": "a674f2e4c048cc3845640619e4143c31"
  },
  {
    "url": "assets/js/21.60c988ae.js",
    "revision": "29d04b9f94af301b3d95f83a86b12643"
  },
  {
    "url": "assets/js/22.93e3522f.js",
    "revision": "45216dfead4c772164acd1fac3ae4771"
  },
  {
    "url": "assets/js/23.55b0fec2.js",
    "revision": "7559f3710edc6aad18de81a4d1086cfb"
  },
  {
    "url": "assets/js/24.7352cb66.js",
    "revision": "59ae8584d5b462a3a1d4ce2fc7b93bd1"
  },
  {
    "url": "assets/js/25.d64472a6.js",
    "revision": "4852cbb5bab523fdcfc224baa81550fe"
  },
  {
    "url": "assets/js/26.3d53da46.js",
    "revision": "e2acee29cc8fb8faa20abda25453b525"
  },
  {
    "url": "assets/js/27.f7ae7cf7.js",
    "revision": "91c96a982ad63d79a988d0f85b87c417"
  },
  {
    "url": "assets/js/28.b88ccfa2.js",
    "revision": "de1d61998e9daf134196e2bae36fe5f7"
  },
  {
    "url": "assets/js/29.33855885.js",
    "revision": "9f634418b5cb32c21032e19e99eaebc9"
  },
  {
    "url": "assets/js/3.7cfb19be.js",
    "revision": "087675d2f3c178e49ae247c9729b9a09"
  },
  {
    "url": "assets/js/30.a74efb55.js",
    "revision": "9c3034c7d8a73f6c825573148686a5b7"
  },
  {
    "url": "assets/js/31.b03083ea.js",
    "revision": "26902d9712b17d2a4a8c1416da9603c5"
  },
  {
    "url": "assets/js/32.8b44c559.js",
    "revision": "a17d5d88d180a91ac3dfc43e3686c6d5"
  },
  {
    "url": "assets/js/33.1a070cab.js",
    "revision": "a8cb0043fafc020695b1e16ccb03357a"
  },
  {
    "url": "assets/js/34.6ed4eae3.js",
    "revision": "d270ef0130b561b04d74117475afc182"
  },
  {
    "url": "assets/js/35.f80e3f31.js",
    "revision": "babd18579f574cbaeb061fd0f783b67b"
  },
  {
    "url": "assets/js/36.c7b63e5e.js",
    "revision": "402489e503a5940a9b2fe031e0e5b85a"
  },
  {
    "url": "assets/js/37.62b23e77.js",
    "revision": "fb6966468e9ac8e7d9221e3d72eabe72"
  },
  {
    "url": "assets/js/38.1a464df1.js",
    "revision": "a606e3866e6d721e6758f9090bbe15ea"
  },
  {
    "url": "assets/js/39.95c5d1d9.js",
    "revision": "21e2a43b7280ca1995aba426df86a12a"
  },
  {
    "url": "assets/js/4.cd00349e.js",
    "revision": "13533920ff67fde465cb489101680091"
  },
  {
    "url": "assets/js/40.b82b5feb.js",
    "revision": "2bce99b6d229b333b7ff0099726eabe2"
  },
  {
    "url": "assets/js/41.d52e6918.js",
    "revision": "cd7176ae7a9bacb8318b30d16f9ef79a"
  },
  {
    "url": "assets/js/42.26c0b7d3.js",
    "revision": "670d3269dd1eddfaacdf8d7a6a77a65e"
  },
  {
    "url": "assets/js/5.bb71e0f7.js",
    "revision": "52e37a72ce868b81abc53e120845402c"
  },
  {
    "url": "assets/js/6.1215cfe2.js",
    "revision": "58839a30f0c894f9cb375e156ac856bc"
  },
  {
    "url": "assets/js/7.1994cef1.js",
    "revision": "8fd9198051528b3787aada3776039046"
  },
  {
    "url": "assets/js/8.9df58c39.js",
    "revision": "f6f79ec04287d05efa520ee6d790a980"
  },
  {
    "url": "assets/js/9.e2ae67d5.js",
    "revision": "59e86838da05a6a264855270a9e2f7f8"
  },
  {
    "url": "assets/js/app.c157e436.js",
    "revision": "96d01c6b22041082d44785f553ca2d10"
  },
  {
    "url": "browser/index.html",
    "revision": "abff0a8b4bcb6c9b83c20cdab3886825"
  },
  {
    "url": "browser/ServiceWorker.html",
    "revision": "7cddf9b67778c5e1611d6b179f56049f"
  },
  {
    "url": "css/index.html",
    "revision": "f1a6bcf37f3fd777d7875294a61c62b7"
  },
  {
    "url": "frame/index.html",
    "revision": "f560615bb13577093923e9233f03efe4"
  },
  {
    "url": "frame/React 实战技巧.html",
    "revision": "7ea8c6cc92f1f47838f87c8b2942a68d"
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
    "revision": "c0ea40dda45ddb3810a6ab5f78c8f6f8"
  },
  {
    "url": "javascript/call&apply&bind.html",
    "revision": "0c931f829a6bebfc387fd49d305f2a7a"
  },
  {
    "url": "javascript/index.html",
    "revision": "3976da4e3167704141fdd933599294ae"
  },
  {
    "url": "javascript/promise.html",
    "revision": "eacbbd8dc3a5e941523bf32194c3b298"
  },
  {
    "url": "javascript/prototype.html",
    "revision": "e7009e29b9205d6559bd509921ae2708"
  },
  {
    "url": "javascript/this.html",
    "revision": "14e61fb92d05ca1ebc3030aa5f6f886e"
  },
  {
    "url": "javascript/事件循环.html",
    "revision": "6903a93061ee6b255fae249f31616971"
  },
  {
    "url": "javascript/函数式编程.html",
    "revision": "904b1f40fb72ffff03d89d7e53b5d936"
  },
  {
    "url": "javascript/执行上下文.html",
    "revision": "c6d87eed884c2bd8e128491cc12b35cf"
  },
  {
    "url": "javascript/深浅拷贝.html",
    "revision": "e3a9392f49a57298871e86dc3565b42b"
  },
  {
    "url": "javascript/词法作用域.html",
    "revision": "38a1d3df60d6fa5310bbe62360bf37db"
  },
  {
    "url": "javascript/闭包.html",
    "revision": "a3945b2aaf0bd7ac159b02ffb61d6d21"
  },
  {
    "url": "logo.jpg",
    "revision": "4b318964cb50b45d2cac5c5d9366496f"
  },
  {
    "url": "network/basics.html",
    "revision": "e3aec5bbcd83edf75e04fb3902c524cb"
  },
  {
    "url": "network/http-cache.html",
    "revision": "ee567242d3e5e26b923c64c78c7af656"
  },
  {
    "url": "network/http.html",
    "revision": "d00e107189fd9fffd0827cbcd3f3a7a6"
  },
  {
    "url": "network/index.html",
    "revision": "7c4387a44261e7c7ef6df42a87643e8b"
  },
  {
    "url": "node/index.html",
    "revision": "fbea78a87a15c20bdf1f19f2d1fa89ec"
  },
  {
    "url": "performance/index.html",
    "revision": "64587b911ccf01a70c3470a5b8624fc7"
  },
  {
    "url": "project/babel.html",
    "revision": "05ae2d8be26ff72fc05d06e202ddebc0"
  },
  {
    "url": "project/index.html",
    "revision": "6a927f3ad6c8c1a8b0d5b64fd6757fa9"
  },
  {
    "url": "project/webpack.html",
    "revision": "3a0723dbcfc2554ddaa598cd62c4eb7e"
  },
  {
    "url": "security/index.html",
    "revision": "a25f77935726aff0ca271ee7313194db"
  },
  {
    "url": "typescript/advance.html",
    "revision": "c968a7f720aed66be24124be378ccfcf"
  },
  {
    "url": "typescript/index.html",
    "revision": "cf7a1ccf92b9f57d91bab3a281db0b41"
  },
  {
    "url": "typescript/utility-types.html",
    "revision": "450f7084e11576173fabf9bae8fda21b"
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
