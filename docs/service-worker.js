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
    "revision": "137e27fdb82900d309e18dbcbbfccef6"
  },
  {
    "url": "advanced/index.html",
    "revision": "20d7c60788e4c3e312691e0f0a459a64"
  },
  {
    "url": "algorithm/index.html",
    "revision": "4ef8e445dc49382e3bf217cbd5aec685"
  },
  {
    "url": "algorithm/sorting.html",
    "revision": "09cf4cf5518439a5510cd33473bdfba9"
  },
  {
    "url": "algorithm/数据结构.html",
    "revision": "734f2d854d237f350d5b5ff95c79f71e"
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
    "url": "assets/js/10.ddebbfaf.js",
    "revision": "e8b0f01a9073d4bcc8b18e62bd173262"
  },
  {
    "url": "assets/js/11.924bad08.js",
    "revision": "253e9338ffebb8e2b10671bc3fa37d3c"
  },
  {
    "url": "assets/js/12.83359ab0.js",
    "revision": "2001c911ae2401de8aac656a3cce3cf1"
  },
  {
    "url": "assets/js/13.dadb7805.js",
    "revision": "40cd1cada2383b1b1c64f59d454cca86"
  },
  {
    "url": "assets/js/14.483d3ef3.js",
    "revision": "11329e10439912de414e15757a0dff5c"
  },
  {
    "url": "assets/js/15.74de6baf.js",
    "revision": "884b8f76cb1bb95f83a3f1e5bbd05c45"
  },
  {
    "url": "assets/js/16.1c3cc3d9.js",
    "revision": "da477e9bf72816e8e025cf4ac7200ef7"
  },
  {
    "url": "assets/js/17.a53f1707.js",
    "revision": "300a2b203c5de2dc70c9dd89f7b372f7"
  },
  {
    "url": "assets/js/18.73785226.js",
    "revision": "4c862e2802a3c40d8a8230b07b8f6c2d"
  },
  {
    "url": "assets/js/19.88872489.js",
    "revision": "39abcb8578312c8eb2ac773c00b7e03e"
  },
  {
    "url": "assets/js/2.ef01d5d6.js",
    "revision": "415413411c07e26f0702dad081987173"
  },
  {
    "url": "assets/js/20.7de4249e.js",
    "revision": "13422dfff8c53308f51b120af7bdf24a"
  },
  {
    "url": "assets/js/21.edbf3f1e.js",
    "revision": "77db836f432588776716836a34c323f4"
  },
  {
    "url": "assets/js/22.f771b51f.js",
    "revision": "33016d42dd3dfdc25d9ff1a32f0ca8af"
  },
  {
    "url": "assets/js/23.eb11dc6d.js",
    "revision": "7fd4d1f12491d594b712048313b64dea"
  },
  {
    "url": "assets/js/24.5d82d826.js",
    "revision": "da49a305acb465ef3591b35d2ab02e36"
  },
  {
    "url": "assets/js/25.d555bf5e.js",
    "revision": "8556ea110ec73c112561c6daeed44989"
  },
  {
    "url": "assets/js/26.3f0bf204.js",
    "revision": "439c290516c015c8c70c42a8b7f69931"
  },
  {
    "url": "assets/js/27.a4dc2fb1.js",
    "revision": "a327f552a97416e8705a0edc2ec69e69"
  },
  {
    "url": "assets/js/28.ab8108ac.js",
    "revision": "59687a425405fe25967add963a7c2c32"
  },
  {
    "url": "assets/js/29.b060f8b5.js",
    "revision": "587f73757add18fa73d36d4537a41155"
  },
  {
    "url": "assets/js/3.7cfb19be.js",
    "revision": "087675d2f3c178e49ae247c9729b9a09"
  },
  {
    "url": "assets/js/30.2bb7907c.js",
    "revision": "f1a9702d941b963c61be9939118241fc"
  },
  {
    "url": "assets/js/31.d08b0ded.js",
    "revision": "4f1d3c692ba086da200bad7fc3556ab9"
  },
  {
    "url": "assets/js/32.6a627a59.js",
    "revision": "96fa2f8e439fea2e27b65388ddf06a5f"
  },
  {
    "url": "assets/js/33.fe12e757.js",
    "revision": "b98deafb4ba5eadb33143fc5d9a1ee38"
  },
  {
    "url": "assets/js/34.b4b1f706.js",
    "revision": "afa76acadf56696b63580bb0c36ac387"
  },
  {
    "url": "assets/js/35.5f8759ae.js",
    "revision": "4c4fb622ea06e3efb78361419c6ae24f"
  },
  {
    "url": "assets/js/36.8ed2c7be.js",
    "revision": "5d0e7eb28a46191dfb70d1a92861fb4d"
  },
  {
    "url": "assets/js/37.df7f6b4c.js",
    "revision": "c8a3b1d37a9a42ad263cc75ee9b35dc0"
  },
  {
    "url": "assets/js/38.127458ac.js",
    "revision": "5fa83815448445fbf3579d1af48ce9a1"
  },
  {
    "url": "assets/js/39.40da611c.js",
    "revision": "b26df0805ba6f773a1384967e39c3aa1"
  },
  {
    "url": "assets/js/4.58bcecdc.js",
    "revision": "902fb2ae299cfc1a6399f4479c65b079"
  },
  {
    "url": "assets/js/40.0b048f1d.js",
    "revision": "6bc39d45694bda44d94fcd75ba39bf3a"
  },
  {
    "url": "assets/js/41.46043a89.js",
    "revision": "887256f0bc0503e8f13112b0f6b4f9e0"
  },
  {
    "url": "assets/js/42.3f0451f6.js",
    "revision": "3b424335e7656fbf9db4be5a1cf7a74d"
  },
  {
    "url": "assets/js/43.8a281189.js",
    "revision": "78139108d5437814192ff709eaeb81ef"
  },
  {
    "url": "assets/js/44.18af8661.js",
    "revision": "9674c116fad222fe0d1610effe2b27ea"
  },
  {
    "url": "assets/js/45.8f2dd377.js",
    "revision": "d10f838ce5fde3477c53db78d59f4ebe"
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
    "url": "assets/js/app.814f50f7.js",
    "revision": "e84678b11d3bc3231c7bb7060af67640"
  },
  {
    "url": "browser/index.html",
    "revision": "88768b1e37e65f242077a79bff5bade5"
  },
  {
    "url": "browser/ServiceWorker.html",
    "revision": "9c049bf7f892190ff52aab805e4c8ac5"
  },
  {
    "url": "css/index.html",
    "revision": "35eb275fc65f58d3a5e22e2841836142"
  },
  {
    "url": "frame/index.html",
    "revision": "51ca980377930382e4e57da66087a892"
  },
  {
    "url": "frame/React 实战技巧.html",
    "revision": "f0fa5e2856792782dfbe4eb90b3d2c7a"
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
    "revision": "af1b987b5102372e57dfb444643ec608"
  },
  {
    "url": "javascript/call&apply&bind.html",
    "revision": "833b3fdfe89a9194d529842f1286da99"
  },
  {
    "url": "javascript/index.html",
    "revision": "2ae2073473f5b73b1e444dcd6b45c912"
  },
  {
    "url": "javascript/promise.html",
    "revision": "ee555c56e15ee3ccc2e843abfa2f9a85"
  },
  {
    "url": "javascript/prototype.html",
    "revision": "4d855ba3fe0505f99fbe5615d81fbfff"
  },
  {
    "url": "javascript/this.html",
    "revision": "ae978fae04c295fd58fff5349e38915c"
  },
  {
    "url": "javascript/事件循环.html",
    "revision": "641e4322a435648af561f7105a6c275c"
  },
  {
    "url": "javascript/函数式编程.html",
    "revision": "27b3c9732ec303d290cf94ae539f2941"
  },
  {
    "url": "javascript/执行上下文.html",
    "revision": "7f7cbb275d33f6d2016e6c261e6ef5a4"
  },
  {
    "url": "javascript/深浅拷贝.html",
    "revision": "56642040b176b4c1383f4012ab31f941"
  },
  {
    "url": "javascript/词法作用域.html",
    "revision": "3760ac5b3c865cbe77e07d418d1b6ce6"
  },
  {
    "url": "javascript/闭包.html",
    "revision": "f31ec2dc600774b9b0c4aaa2f6a3f067"
  },
  {
    "url": "logo.jpg",
    "revision": "4b318964cb50b45d2cac5c5d9366496f"
  },
  {
    "url": "network/basics.html",
    "revision": "20646eb60b968580ddecfd3a0834ecb1"
  },
  {
    "url": "network/http-cache.html",
    "revision": "f9f105b49c8224cfd681a94bb5568143"
  },
  {
    "url": "network/http.html",
    "revision": "50bbc4e12dc0acac2824eecbd16940d6"
  },
  {
    "url": "network/index.html",
    "revision": "b83ecc39ad89e04635323eb986b21cfb"
  },
  {
    "url": "node/index.html",
    "revision": "6da3220b63150c84274996f896450dfc"
  },
  {
    "url": "performance/index.html",
    "revision": "7383b89e0584bc28e87861ff10dad24c"
  },
  {
    "url": "project/babel.html",
    "revision": "6f96e30ff00e9f5d8910da55bd09e15b"
  },
  {
    "url": "project/index.html",
    "revision": "f5ffd39373e006acf3d3158722f4e8b3"
  },
  {
    "url": "project/webpack.html",
    "revision": "f818b2a82a34d0400af99e58ed7f41f8"
  },
  {
    "url": "security/index.html",
    "revision": "69ffadb808c9f7168438a0e047ca70ea"
  },
  {
    "url": "typescript/advance.html",
    "revision": "31f58991d7ebc37ba8f6c1b52a334bd6"
  },
  {
    "url": "typescript/decorator.html",
    "revision": "dda947b96142ce10d13eabd9519fb68a"
  },
  {
    "url": "typescript/index.html",
    "revision": "b665ab8e2657ca6be9ad8b340323f9c2"
  },
  {
    "url": "typescript/utility-types.html",
    "revision": "4b12209a5dab45066d6fbad6610f79eb"
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
