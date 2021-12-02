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
    "revision": "1a447fa5d4dfdc7fbc9b0c28fc0e7d9e"
  },
  {
    "url": "advanced/index.html",
    "revision": "571e110cfe19e26a119b43e42d983a27"
  },
  {
    "url": "algorithm/index.html",
    "revision": "81d21cad28baa1774a6b96f1d53583fd"
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
    "url": "assets/js/11.9f3bad83.js",
    "revision": "320a73aac55b349d5de8f85b0e32455a"
  },
  {
    "url": "assets/js/12.88e70a27.js",
    "revision": "a71a5248ed037a7c3750ca3bb230d635"
  },
  {
    "url": "assets/js/13.ad62f1e3.js",
    "revision": "0d7fd08f20085659f2dc4f2535267083"
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
    "url": "assets/js/17.07ce46bd.js",
    "revision": "b864c8dae1379e4c67f0eba9542d8b5a"
  },
  {
    "url": "assets/js/18.dae2486c.js",
    "revision": "287e5386a8469f28e0de65fe5306b4b2"
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
    "url": "assets/js/20.05e0adcb.js",
    "revision": "0c4fbbbdfba1f13b430bd981b10ced6c"
  },
  {
    "url": "assets/js/21.03be015d.js",
    "revision": "bb7d8753520d58ed015714dd59bbdd93"
  },
  {
    "url": "assets/js/22.de828116.js",
    "revision": "7db85f0a161636a711fb4cc3f4b5b01d"
  },
  {
    "url": "assets/js/23.561032bf.js",
    "revision": "cab02221415f333d43064065f8126fce"
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
    "url": "assets/js/28.7c7f5c0d.js",
    "revision": "337e34879fab2472fcc9689e75fb23c2"
  },
  {
    "url": "assets/js/29.d20bfbcd.js",
    "revision": "ed9c7ba811af7e73925c0c0ef9f9c415"
  },
  {
    "url": "assets/js/3.9bbab2a0.js",
    "revision": "721303208817d4442064e68bee324e73"
  },
  {
    "url": "assets/js/30.e015f422.js",
    "revision": "632cbd802a01e9a71693a3076280a042"
  },
  {
    "url": "assets/js/31.11af41c7.js",
    "revision": "decb3af70ce9327b0289cfb1995979e9"
  },
  {
    "url": "assets/js/32.3d5e21cb.js",
    "revision": "e14e6d04eff1424ddc281c1721aab163"
  },
  {
    "url": "assets/js/33.0372a69d.js",
    "revision": "b76bc141586299155d4d90910f61833f"
  },
  {
    "url": "assets/js/34.f21893e0.js",
    "revision": "ce9d6ec42313ea6b40b4a67218f8cedb"
  },
  {
    "url": "assets/js/35.ae0590e3.js",
    "revision": "2ed9f3dd7504543ec2ca14efb357523d"
  },
  {
    "url": "assets/js/36.8507d0d1.js",
    "revision": "ba18c8d8e01190fb0ee911a5bddbcffe"
  },
  {
    "url": "assets/js/37.b5a597e8.js",
    "revision": "d7c78c61b8a519a33dea6d8b11f42b05"
  },
  {
    "url": "assets/js/38.0d9083a4.js",
    "revision": "261bc2e18c7c18e7590576cc3d720c82"
  },
  {
    "url": "assets/js/4.cc7663df.js",
    "revision": "bae51a850b009d21566d202759759e71"
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
    "url": "assets/js/app.2d3353b3.js",
    "revision": "ff86a63ae27d2c9d6c174f82932af7fb"
  },
  {
    "url": "browser/index.html",
    "revision": "0068435d47e4fe4f19ac973fe2546d8b"
  },
  {
    "url": "browser/ServiceWorker.html",
    "revision": "8b31632ef7150a7c6567726e65a04747"
  },
  {
    "url": "css/index.html",
    "revision": "fb066031ed1f6e67bb5baa862b049f54"
  },
  {
    "url": "frame/index.html",
    "revision": "7f63dd0687bcd411549cb11f431a922b"
  },
  {
    "url": "frame/React 实战技巧.html",
    "revision": "46a73638a0788ae01737f8e68ff43b51"
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
    "revision": "fa23ac3cf6afcb72a2b4078f73ef8fe9"
  },
  {
    "url": "javascript/call&apply&bind.html",
    "revision": "1ddf00191504249cd0f3b20c6be1f7ce"
  },
  {
    "url": "javascript/index.html",
    "revision": "466863e723351682ba6451a601a7137c"
  },
  {
    "url": "javascript/promise.html",
    "revision": "ec60dd8bc6e31ea5a5a89fda845ab33b"
  },
  {
    "url": "javascript/prototype.html",
    "revision": "1075fa23fe3cf3032de3c35f38d998a4"
  },
  {
    "url": "javascript/this.html",
    "revision": "efab7444603e7ede95f70d5799c806ef"
  },
  {
    "url": "javascript/事件循环.html",
    "revision": "3c3e2e6d3aa4cb670dcaa64cf6d01b27"
  },
  {
    "url": "javascript/函数式编程.html",
    "revision": "ca150808b34517fe8c327c82f5dd0d73"
  },
  {
    "url": "javascript/执行上下文.html",
    "revision": "63c009f19087655f5e1bc64a7ebd9db2"
  },
  {
    "url": "javascript/深浅拷贝.html",
    "revision": "4897b10cc9dcfd6b6750a1078518dbfb"
  },
  {
    "url": "javascript/词法作用域.html",
    "revision": "fdde9e62d0daca3838b145e091312373"
  },
  {
    "url": "javascript/闭包.html",
    "revision": "ff2c2ded68410c64871a1592a706e04f"
  },
  {
    "url": "logo.jpg",
    "revision": "4b318964cb50b45d2cac5c5d9366496f"
  },
  {
    "url": "network/http-cache.html",
    "revision": "dc44a190395bbb317845f2e44a84e475"
  },
  {
    "url": "network/index.html",
    "revision": "fc1a7451908c06f7bbcacf90b7c02c73"
  },
  {
    "url": "node/index.html",
    "revision": "b151a5aaba1f0f440d06b5aeec87d685"
  },
  {
    "url": "performance/index.html",
    "revision": "23f9c7e5b1673c99feeca0a54cda4f2d"
  },
  {
    "url": "project/babel.html",
    "revision": "75632637ae956e03e55c155736130ae8"
  },
  {
    "url": "project/index.html",
    "revision": "be9be041f009486da13d036950323b75"
  },
  {
    "url": "project/webpack.html",
    "revision": "39ac4e12d7ce3eecb9d4d6f450dc0445"
  },
  {
    "url": "security/index.html",
    "revision": "eebc88adc4e65fc98451118a6d5a3f9d"
  },
  {
    "url": "typescript/advance.html",
    "revision": "8b529114962741fcbf1b83221debcd00"
  },
  {
    "url": "typescript/index.html",
    "revision": "e2eed4cba1d2e64f825a6be8f4c22110"
  },
  {
    "url": "typescript/utility-types.html",
    "revision": "4ca5ef17e55c6fedfcfea6ba15e4848e"
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
