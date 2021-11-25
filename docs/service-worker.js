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
    "revision": "7f35bc7aaf55093d4794228bd664af5b"
  },
  {
    "url": "advanced/index.html",
    "revision": "2af9c866703e85af63f02f65ea3df5db"
  },
  {
    "url": "algorithm/index.html",
    "revision": "64b74e1da4152e1dcd7216a7f2406bd9"
  },
  {
    "url": "assets/css/0.styles.e198cae7.css",
    "revision": "43dce7c0d4a0fab1ca6a0c9e13c745f3"
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
    "url": "assets/js/11.fa066dd0.js",
    "revision": "4b7795c61f0f6ac6f2344bbf012e3f82"
  },
  {
    "url": "assets/js/12.9c2c27f4.js",
    "revision": "b3afc95df2367637e8eb69af16da27be"
  },
  {
    "url": "assets/js/13.4df75683.js",
    "revision": "30eeea1c8fd2d3b9172cd1d62c92f48a"
  },
  {
    "url": "assets/js/14.c4fa5d6a.js",
    "revision": "8c04a64102822bc4363aa56dc73c02e7"
  },
  {
    "url": "assets/js/15.4b536277.js",
    "revision": "ec37d5ebc3def8bc0a5b10186f16d6b1"
  },
  {
    "url": "assets/js/16.8c57b288.js",
    "revision": "ac8a0747d52681084fd30ae387026458"
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
    "url": "assets/js/2.2f2cb61d.js",
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
    "url": "assets/js/30.f451dc1e.js",
    "revision": "9bbe3d499ff3563267cfae2f7740e510"
  },
  {
    "url": "assets/js/31.5769bc78.js",
    "revision": "748aa1cef670bbbb63dc189f297fe533"
  },
  {
    "url": "assets/js/32.7858e062.js",
    "revision": "91bc5dbe4f09308f8557046bcf7142af"
  },
  {
    "url": "assets/js/33.281a623a.js",
    "revision": "84f766195ce758e28de0f053add8eb72"
  },
  {
    "url": "assets/js/34.7dfb9f48.js",
    "revision": "2441ca3b1bc271ea364f8c0bed02cc0f"
  },
  {
    "url": "assets/js/35.a5564777.js",
    "revision": "30bb32feac08ddaf9e4a7e36269ea498"
  },
  {
    "url": "assets/js/4.da8f7e86.js",
    "revision": "a163385219d45ef5a01ea50239788bfb"
  },
  {
    "url": "assets/js/5.1df3c27e.js",
    "revision": "a8262855305d751a9333631d9b1251f5"
  },
  {
    "url": "assets/js/6.8d43d558.js",
    "revision": "3c3d450cd62c5731770c4859e4bb3196"
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
    "url": "assets/js/app.ee1ce04b.js",
    "revision": "59d9472441ad81011aab56a481474b31"
  },
  {
    "url": "browser/index.html",
    "revision": "8df08900b21f1ac9b63486d955961444"
  },
  {
    "url": "browser/ServiceWorker.html",
    "revision": "9d231d5a252abf187cbceaa295542995"
  },
  {
    "url": "css/index.html",
    "revision": "f9a6848aa8c540bee4ba237f93093b98"
  },
  {
    "url": "frame/index.html",
    "revision": "d58b61d55399b64ad78794bdea3906de"
  },
  {
    "url": "frame/React 实战技巧.html",
    "revision": "8a297649c7dceeba0f89535dca4a2721"
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
    "revision": "5276f81c4192caeddfd69aa2ff0dce79"
  },
  {
    "url": "javascript/call&apply&bind.html",
    "revision": "8235a97e8b49e1ad2ec3082f7eea3e54"
  },
  {
    "url": "javascript/index.html",
    "revision": "725bbd2a63e678da9e97958d89071a1e"
  },
  {
    "url": "javascript/promise.html",
    "revision": "a9a730db7ea414ccb2c376cd15997472"
  },
  {
    "url": "javascript/prototype.html",
    "revision": "f113e53e23c888784044caace34f7376"
  },
  {
    "url": "javascript/this.html",
    "revision": "37340e70b72b3613900cb89c173dc72d"
  },
  {
    "url": "javascript/事件循环.html",
    "revision": "8ae0c61377fa0d9540be1510e41af656"
  },
  {
    "url": "javascript/函数式编程.html",
    "revision": "4c7bccb7671a1178328e8c86ce160b48"
  },
  {
    "url": "javascript/执行上下文.html",
    "revision": "01d9930cad48411f869b29aed2a8cc67"
  },
  {
    "url": "javascript/深浅拷贝.html",
    "revision": "c7150726b641cb77c1ef95098fd8305d"
  },
  {
    "url": "javascript/词法作用域.html",
    "revision": "d72b55901921584550b7b0476110589e"
  },
  {
    "url": "javascript/闭包.html",
    "revision": "ff7ae66e1f1e552992052da016471f56"
  },
  {
    "url": "logo.jpg",
    "revision": "4b318964cb50b45d2cac5c5d9366496f"
  },
  {
    "url": "network/index.html",
    "revision": "c4e77fd41e6eb73a33e05ef0c95b194b"
  },
  {
    "url": "node/index.html",
    "revision": "6de936e8620ea622440a9b854bc6408a"
  },
  {
    "url": "performance/index.html",
    "revision": "11a0bd8c9fca9458ac8fa2d19406c3b1"
  },
  {
    "url": "project/babel.html",
    "revision": "da26bf41dc7b9c47a127c0d73c9f7839"
  },
  {
    "url": "project/index.html",
    "revision": "5dfeffa1cf48a146b0e21084ee596d7f"
  },
  {
    "url": "project/webpack.html",
    "revision": "efe3e6f354cd5a3ea3e8b3cb8f2edd77"
  },
  {
    "url": "security/index.html",
    "revision": "2a9a76f39b451e1e07e2bec998462f71"
  },
  {
    "url": "typescript/index.html",
    "revision": "9f05a423057f0370ea4c85e9cfd96c1d"
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
