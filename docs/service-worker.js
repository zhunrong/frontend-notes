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
    "revision": "30c0a6f1168c0c677454401665e67753"
  },
  {
    "url": "advanced/index.html",
    "revision": "8f8e62322dbdd8c14891382901139cc7"
  },
  {
    "url": "algorithm/index.html",
    "revision": "bcf9718c0a61ed496a4cb1ff1f9d851c"
  },
  {
    "url": "assets/css/0.styles.d6701970.css",
    "revision": "f2633de57c5e37569972094303735033"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.253c55b2.js",
    "revision": "afe40c2e70ccf0cf6d1174637d5d6999"
  },
  {
    "url": "assets/js/11.af4b0073.js",
    "revision": "134728e118afa93d1b11ebd3a7c66310"
  },
  {
    "url": "assets/js/12.847d291a.js",
    "revision": "25a95da20925a4cdcc7d085de4e7f9a2"
  },
  {
    "url": "assets/js/13.a94e6ad9.js",
    "revision": "5b9fb48549f1d93340cc49f94e0b3071"
  },
  {
    "url": "assets/js/14.c4fa5d6a.js",
    "revision": "8c04a64102822bc4363aa56dc73c02e7"
  },
  {
    "url": "assets/js/15.9da54cbd.js",
    "revision": "33cdb05bb0a0aa6be1712afdbc0550b1"
  },
  {
    "url": "assets/js/16.2228f5f2.js",
    "revision": "45e7d419309dda54780e45bee4e6098d"
  },
  {
    "url": "assets/js/17.152f3593.js",
    "revision": "fd5a44c81e48dd4542d2c31d73d3b14f"
  },
  {
    "url": "assets/js/18.ba5375e7.js",
    "revision": "22b94c6d20fcc3a725d4507a8e1b35fd"
  },
  {
    "url": "assets/js/19.a5ecfd61.js",
    "revision": "fa803f5bf2a97991ae878e6328d587ae"
  },
  {
    "url": "assets/js/2.2f2cb61d.js",
    "revision": "8e66c79c0e4a6c5ef4e252f497c3657f"
  },
  {
    "url": "assets/js/20.0ce8b368.js",
    "revision": "569353277b146640b281df43f8eb18dc"
  },
  {
    "url": "assets/js/21.e98ea068.js",
    "revision": "cce4951d1f716a7a4e56148041641d1c"
  },
  {
    "url": "assets/js/22.b207a005.js",
    "revision": "cd384c7f368fabb9282aa98e99f4d430"
  },
  {
    "url": "assets/js/23.bc2910e1.js",
    "revision": "28d9f234decb2aa781b55dca3678e29f"
  },
  {
    "url": "assets/js/24.be47da53.js",
    "revision": "23afa9fabbe91a6b8481919dce73c2a8"
  },
  {
    "url": "assets/js/25.644081ba.js",
    "revision": "13e66e57f0a24705129ad37b8dec3860"
  },
  {
    "url": "assets/js/26.2cfdcd68.js",
    "revision": "b41d805af75a031a69120a1342105f4d"
  },
  {
    "url": "assets/js/27.b318ff97.js",
    "revision": "447b08e791f10747828b2afee1eee999"
  },
  {
    "url": "assets/js/28.4612913f.js",
    "revision": "085f6b89e255009ffa058ccba10f3f9b"
  },
  {
    "url": "assets/js/29.cf1c6d52.js",
    "revision": "355dc5009f05bee1c8a3767a08b302ff"
  },
  {
    "url": "assets/js/3.583be172.js",
    "revision": "cbc52b2b368623797f35464ff97b1cb2"
  },
  {
    "url": "assets/js/30.12283e9e.js",
    "revision": "e2dda6a4a4ed832ae2a2e2fe976d3051"
  },
  {
    "url": "assets/js/31.6fc37a33.js",
    "revision": "ed5d851f7c181ee7f6dd3bdc9894154b"
  },
  {
    "url": "assets/js/32.7575f631.js",
    "revision": "d2c7dbfc6e1594364dab8938141e47cf"
  },
  {
    "url": "assets/js/4.93047757.js",
    "revision": "fac6095f20b686c271d6a7f6d9cb6a0e"
  },
  {
    "url": "assets/js/5.f803dcc5.js",
    "revision": "ee5fe4923ad27c6cf1d4d6a5500f92a4"
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
    "url": "assets/js/9.4efc5b80.js",
    "revision": "1b2b0a645d0c5512b567d79c944f95de"
  },
  {
    "url": "assets/js/app.83810d99.js",
    "revision": "51f7932db39a261a7ad390fdf7accb58"
  },
  {
    "url": "browser/index.html",
    "revision": "3f6716dec5c124b3fd8790db6cdd960a"
  },
  {
    "url": "browser/ServiceWorker.html",
    "revision": "030ee3f65e0a3dd9b5c4792938f06e20"
  },
  {
    "url": "css/index.html",
    "revision": "ec1b4a8055a0eb35613eca47b8cd9dad"
  },
  {
    "url": "frame/index.html",
    "revision": "7b2e65d02a2073031c7db8a11505891b"
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
    "revision": "54355bb7b7340b263c2ec567e9f55c16"
  },
  {
    "url": "javascript/call&apply&bind.html",
    "revision": "9796905288504add3c5cc462b03882d4"
  },
  {
    "url": "javascript/index.html",
    "revision": "18cfefa70fd8f537a741cb43ad411725"
  },
  {
    "url": "javascript/promise.html",
    "revision": "dd26c856d0f589cf886e11a97f97872d"
  },
  {
    "url": "javascript/prototype.html",
    "revision": "c9f3b851de3e781818516647525a1590"
  },
  {
    "url": "javascript/this.html",
    "revision": "313a1224a2ae2b3d47addc130269ba7a"
  },
  {
    "url": "javascript/事件循环.html",
    "revision": "e59e405b3e23362276420e7eed2f4b37"
  },
  {
    "url": "javascript/函数式编程.html",
    "revision": "624041e9275bb3343c98cb80199368cd"
  },
  {
    "url": "javascript/执行上下文.html",
    "revision": "64e1860094a206670a26121fb1266873"
  },
  {
    "url": "javascript/深浅拷贝.html",
    "revision": "f20649224051f2c4aedcbbe69df770a0"
  },
  {
    "url": "javascript/词法作用域.html",
    "revision": "383201b43e19824b87ae2aab12af657d"
  },
  {
    "url": "javascript/闭包.html",
    "revision": "1bf1cc9cfc6ae3816612e9d3c80ff43e"
  },
  {
    "url": "logo.jpg",
    "revision": "4b318964cb50b45d2cac5c5d9366496f"
  },
  {
    "url": "network/index.html",
    "revision": "68a4396fd3e08e158a535fc4c3d01f3b"
  },
  {
    "url": "node/index.html",
    "revision": "aebfcfd21303fb5a58f893604331cfc1"
  },
  {
    "url": "performance/index.html",
    "revision": "7cd2151b1dfade742acd0f085ee52f93"
  },
  {
    "url": "project/index.html",
    "revision": "4c0f20c9efcc05ad0cf7c759ddd929fd"
  },
  {
    "url": "security/index.html",
    "revision": "2837a50e913a916cc63cdf9f8b9bb254"
  },
  {
    "url": "typescript/index.html",
    "revision": "783a7757f46a89fc94d137ab7548a3ae"
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
