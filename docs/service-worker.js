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
    "revision": "09d2aa7017ab51805bd2dbd321f49bb5"
  },
  {
    "url": "advanced/index.html",
    "revision": "b922af478cde6589b2db5bf3f8daad7a"
  },
  {
    "url": "algorithm/index.html",
    "revision": "3531659bab2157df10c4c653c53126a4"
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
    "url": "assets/js/10.07208e3c.js",
    "revision": "dcdf25d5d434e976cd2ddbc39d3771be"
  },
  {
    "url": "assets/js/11.2295e105.js",
    "revision": "5ef49b2fb5fee983f33bf45de9b5778e"
  },
  {
    "url": "assets/js/12.88e70a27.js",
    "revision": "a71a5248ed037a7c3750ca3bb230d635"
  },
  {
    "url": "assets/js/13.a94e6ad9.js",
    "revision": "5b9fb48549f1d93340cc49f94e0b3071"
  },
  {
    "url": "assets/js/14.f30d69c4.js",
    "revision": "666e3283b55132fa7daeeeb82cbad2ed"
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
    "url": "assets/js/17.07ce46bd.js",
    "revision": "b864c8dae1379e4c67f0eba9542d8b5a"
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
    "url": "assets/js/21.403e4d23.js",
    "revision": "4fd44567058474f9f209e4d82ed1b446"
  },
  {
    "url": "assets/js/22.de828116.js",
    "revision": "7db85f0a161636a711fb4cc3f4b5b01d"
  },
  {
    "url": "assets/js/23.68283ae0.js",
    "revision": "4112162f7acbb44ab652f050451f094d"
  },
  {
    "url": "assets/js/24.8a5cfd8e.js",
    "revision": "766d5a749ed338e53e19e2f839fa84a4"
  },
  {
    "url": "assets/js/25.4f0337a1.js",
    "revision": "465d6dd2752fcd3e528ddef32c38bfaa"
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
    "url": "assets/js/28.2e115154.js",
    "revision": "2ab57a96e50686640e1037f67b054deb"
  },
  {
    "url": "assets/js/29.a3f89054.js",
    "revision": "ea49f8ff3b2743febc47a43f6296d98a"
  },
  {
    "url": "assets/js/3.9bbab2a0.js",
    "revision": "721303208817d4442064e68bee324e73"
  },
  {
    "url": "assets/js/30.813aaa62.js",
    "revision": "5e779607b05570f4f6ad316eb93c86dc"
  },
  {
    "url": "assets/js/31.d5db9ad6.js",
    "revision": "4748ea172e48817b60b864ee23922791"
  },
  {
    "url": "assets/js/32.9a0417a0.js",
    "revision": "98f80f6179074a583aedaa07f8396662"
  },
  {
    "url": "assets/js/33.59fcbcb3.js",
    "revision": "c835e65ffed263c142fb51c6ad30a9d6"
  },
  {
    "url": "assets/js/34.8e42a8d2.js",
    "revision": "4a5671a839bf3cc21b25f8cf29a48bd7"
  },
  {
    "url": "assets/js/35.acb6e1b1.js",
    "revision": "540984623bcad4c9179f3c824cfe6f40"
  },
  {
    "url": "assets/js/36.6c9ceb7b.js",
    "revision": "9a42fddc1912703ef549779487bebbb9"
  },
  {
    "url": "assets/js/37.83e8389a.js",
    "revision": "ac7c7dc1ee490fd4bbc61ac613f54d61"
  },
  {
    "url": "assets/js/4.56105f37.js",
    "revision": "09c4358f277ee837c0f0d6dabdd46a89"
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
    "url": "assets/js/9.c8c99db3.js",
    "revision": "7a4fac973c29f1b2446f78770d6b573c"
  },
  {
    "url": "assets/js/app.86b5d29c.js",
    "revision": "30b776c0312651e48d7ce752ac4c53ae"
  },
  {
    "url": "browser/index.html",
    "revision": "3603ce9f6b9611a2019783d1732ea9d5"
  },
  {
    "url": "browser/ServiceWorker.html",
    "revision": "65a99f35cec4a491f2e99d73bf84c42f"
  },
  {
    "url": "css/index.html",
    "revision": "76b6ab455b40c31453836d3cab3456a7"
  },
  {
    "url": "frame/index.html",
    "revision": "6f0e8a9350fe98419c144c137655d04e"
  },
  {
    "url": "frame/React 实战技巧.html",
    "revision": "deb7ba3e0b11edcec217e21c20ade9eb"
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
    "revision": "81b0ac4da708647dc265222d58793a13"
  },
  {
    "url": "javascript/call&apply&bind.html",
    "revision": "972aa587a736e9a07eeb9de8223bb06f"
  },
  {
    "url": "javascript/index.html",
    "revision": "f57a0650e000fec585e8d81ee460f342"
  },
  {
    "url": "javascript/promise.html",
    "revision": "89df84b22392be41f1fbcf4496ad54cc"
  },
  {
    "url": "javascript/prototype.html",
    "revision": "3655616ab14d7d298a82dc0b23b1efc4"
  },
  {
    "url": "javascript/this.html",
    "revision": "89946422411efa1140f56ca448883f0e"
  },
  {
    "url": "javascript/事件循环.html",
    "revision": "fff1cc9e71129d72e69bee342fab6a10"
  },
  {
    "url": "javascript/函数式编程.html",
    "revision": "54eca693eb55ea00f421751f8eb112e9"
  },
  {
    "url": "javascript/执行上下文.html",
    "revision": "cdec81cb39b6cd38d67d215c201dc871"
  },
  {
    "url": "javascript/深浅拷贝.html",
    "revision": "c127226c765a55146f22b99e46d108eb"
  },
  {
    "url": "javascript/词法作用域.html",
    "revision": "d35fbfcb25094cc344bbe6fa28ea715a"
  },
  {
    "url": "javascript/闭包.html",
    "revision": "78a51c598bab2740d011f67861074006"
  },
  {
    "url": "logo.jpg",
    "revision": "4b318964cb50b45d2cac5c5d9366496f"
  },
  {
    "url": "network/http-cache.html",
    "revision": "d8e5a306561b71a58c2073960bf14eaa"
  },
  {
    "url": "network/index.html",
    "revision": "377a6ee7a80450b0673a7768f846f786"
  },
  {
    "url": "node/index.html",
    "revision": "949c67a5c72f1098306e05247b8f4972"
  },
  {
    "url": "performance/index.html",
    "revision": "07e229966d5ec661cffe1961939e0092"
  },
  {
    "url": "project/babel.html",
    "revision": "380f3e3ba6902d95f9f62cbee81292d4"
  },
  {
    "url": "project/index.html",
    "revision": "9e629f16ee3198800a7ece04db8bb20c"
  },
  {
    "url": "project/webpack.html",
    "revision": "7e095266f1a7e921a4caba2c94d7dde5"
  },
  {
    "url": "security/index.html",
    "revision": "e5c104ef9fe1742b5a59336087827f60"
  },
  {
    "url": "typescript/index.html",
    "revision": "74cc68c21ef67798b99d7f2465d564d7"
  },
  {
    "url": "typescript/utility-types.html",
    "revision": "cb06fc6898cd7d728b38b47a60fa7115"
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
