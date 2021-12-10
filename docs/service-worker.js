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
    "revision": "1fc67e136837efec1f70599b0c4e8e49"
  },
  {
    "url": "advanced/index.html",
    "revision": "4db2a0e6adc922dbb6f07b8fa64ae250"
  },
  {
    "url": "algorithm/index.html",
    "revision": "ead82ad76bfb067506e2c6ae2986b178"
  },
  {
    "url": "assets/css/0.styles.b070197c.css",
    "revision": "5d879c0c46b204c9f3671385172d1af8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.24e8fdb8.js",
    "revision": "f0fbd8052fbd777300ab301cf54830dc"
  },
  {
    "url": "assets/js/11.28093841.js",
    "revision": "bf5f9c6b6bb5007cb95b507bfce08aec"
  },
  {
    "url": "assets/js/12.cbf5eeeb.js",
    "revision": "be0dbbe575148170161c733271e95c39"
  },
  {
    "url": "assets/js/13.50fe36dc.js",
    "revision": "6d0a09e780fa749dda20a2fbe7f65cd1"
  },
  {
    "url": "assets/js/14.bdf1cdfb.js",
    "revision": "954b8e98d6b7bad20e569cea632837da"
  },
  {
    "url": "assets/js/15.df9ca9f8.js",
    "revision": "54e8c5c95ddba3c5f4a805392aa704f3"
  },
  {
    "url": "assets/js/16.6a95be55.js",
    "revision": "dc73cbf673799dee6440ff4a97062fe2"
  },
  {
    "url": "assets/js/17.75616d0b.js",
    "revision": "b3e58db84ad28361a8fb25f04067da45"
  },
  {
    "url": "assets/js/18.bd3e3bd8.js",
    "revision": "44e08019bb900d155c82d622d6d0d469"
  },
  {
    "url": "assets/js/19.8ffeec90.js",
    "revision": "3301f24a8e74743b8f1a0939aae6427c"
  },
  {
    "url": "assets/js/2.7815ca61.js",
    "revision": "6d62cb67a0efafabf2f611e62f9a9ccc"
  },
  {
    "url": "assets/js/20.04dcf709.js",
    "revision": "8e15cfcfa0b17fec5e8b7abd40376ddd"
  },
  {
    "url": "assets/js/21.a5f5fda6.js",
    "revision": "397d8fa8a43805dd044ba8aa5ef9ff03"
  },
  {
    "url": "assets/js/22.1b624d66.js",
    "revision": "662603032399a893ea280fd75b25b4c8"
  },
  {
    "url": "assets/js/23.cd3b87c2.js",
    "revision": "869a3ab9e2b8d0bf2903178a726d51ad"
  },
  {
    "url": "assets/js/24.e1232ff5.js",
    "revision": "2b863d95315f16bda9d80f603438d607"
  },
  {
    "url": "assets/js/25.adc2dafe.js",
    "revision": "0a942203dae9ea679b1bf8145ec4fee6"
  },
  {
    "url": "assets/js/26.2c78c3af.js",
    "revision": "c80c639dc2996cfbceca7dc2ba0cb99b"
  },
  {
    "url": "assets/js/27.db4080d2.js",
    "revision": "f2857f9d795ee6ba89236773ec88e2d0"
  },
  {
    "url": "assets/js/28.b3939b4c.js",
    "revision": "f476ab682b18ed2acf66e2e3c1fcdead"
  },
  {
    "url": "assets/js/29.0690f17d.js",
    "revision": "ef1b533c9240e491fe18977d43ca8535"
  },
  {
    "url": "assets/js/3.22db767b.js",
    "revision": "f85f161da7ebfbcda64b788e6d35f0c1"
  },
  {
    "url": "assets/js/30.28a12472.js",
    "revision": "e46f5c6f2e6e95a35c15a85a36bc0d84"
  },
  {
    "url": "assets/js/31.e03525c2.js",
    "revision": "0474e328a2bb09a77565366ce61ba29f"
  },
  {
    "url": "assets/js/32.5b0a1058.js",
    "revision": "55241eef44d9b08e471189986f4a8d25"
  },
  {
    "url": "assets/js/33.9d64e7c5.js",
    "revision": "f894f811ae21d04d4b37891d0e76684a"
  },
  {
    "url": "assets/js/34.9946f88e.js",
    "revision": "9d9ff405199331b4a1ef10294743f512"
  },
  {
    "url": "assets/js/35.f36c603a.js",
    "revision": "1e59ca02c90dc4c8df6df86bacaa1448"
  },
  {
    "url": "assets/js/36.d59529b6.js",
    "revision": "237f680ffbc7773e980bc42f819ddd06"
  },
  {
    "url": "assets/js/37.34f35ee8.js",
    "revision": "defb749a20685c77d17522d146dc8ac1"
  },
  {
    "url": "assets/js/38.72e2abd7.js",
    "revision": "da4293f7a69762d7aa46700aae49a727"
  },
  {
    "url": "assets/js/39.885e7913.js",
    "revision": "7f389440e973709fb18780c905c54958"
  },
  {
    "url": "assets/js/4.5936c4c4.js",
    "revision": "d82dff99f9db93a1b32912ae88042c03"
  },
  {
    "url": "assets/js/40.dc1e682c.js",
    "revision": "fec91bc62a49098a2185fe1c1c7e6f2b"
  },
  {
    "url": "assets/js/41.f7bbec3a.js",
    "revision": "e1faada2b765aac9a8943fefe198a23c"
  },
  {
    "url": "assets/js/5.33850136.js",
    "revision": "610b0cf2ab13af404c1b719d776f4120"
  },
  {
    "url": "assets/js/6.51684ca2.js",
    "revision": "4bc44c4f1ffecbd4b4cdefdef9d3d8b1"
  },
  {
    "url": "assets/js/7.4efd9018.js",
    "revision": "a0572ed0bdd13c300b79c1717b8decd5"
  },
  {
    "url": "assets/js/8.fc42a4c2.js",
    "revision": "e1da33ec79051f29b342347fdf02e50c"
  },
  {
    "url": "assets/js/9.39059156.js",
    "revision": "368d343202447de742647698013e5459"
  },
  {
    "url": "assets/js/app.9c66bee5.js",
    "revision": "851daec77f007d11328ef9eff178f6e2"
  },
  {
    "url": "browser/index.html",
    "revision": "d5b52de3789f59340b875ed14d41610c"
  },
  {
    "url": "browser/ServiceWorker.html",
    "revision": "cb8f974cdb51ff6c16927708ff17ab7f"
  },
  {
    "url": "css/index.html",
    "revision": "63cef8b008e17beceb7e57bd8d3c89a1"
  },
  {
    "url": "frame/index.html",
    "revision": "076564d8d14d33d068420a4f0be42c7d"
  },
  {
    "url": "frame/React 实战技巧.html",
    "revision": "7cd6a6651ca23fb7b2b0d103cd0dbaaf"
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
    "url": "index.html",
    "revision": "35f4c6856415eede195456b3e8da5d85"
  },
  {
    "url": "javascript/call&apply&bind.html",
    "revision": "1417283f6093ff248c582fd2366d871d"
  },
  {
    "url": "javascript/index.html",
    "revision": "9d380348abd043e08d189b7df6f4088f"
  },
  {
    "url": "javascript/promise.html",
    "revision": "b22faafe20d3fcfc8dfd8d31d1e964d3"
  },
  {
    "url": "javascript/prototype.html",
    "revision": "15c68dce66423e25a71ea769dd07a4ce"
  },
  {
    "url": "javascript/this.html",
    "revision": "8b6c8f2ff87b643341703819a8249f67"
  },
  {
    "url": "javascript/事件循环.html",
    "revision": "fcfaffcf77bcc60d973b23d97cd03818"
  },
  {
    "url": "javascript/函数式编程.html",
    "revision": "cdc3e8adc581394a75af6d832195ff77"
  },
  {
    "url": "javascript/执行上下文.html",
    "revision": "449c52b5f35e5db0181d9e175ec13434"
  },
  {
    "url": "javascript/深浅拷贝.html",
    "revision": "3693c52197282dd611869715973f901c"
  },
  {
    "url": "javascript/词法作用域.html",
    "revision": "136dfdbeae859b9863a711b163b4a4aa"
  },
  {
    "url": "javascript/闭包.html",
    "revision": "b329aa7d75e18f292e6d0c166ab3e516"
  },
  {
    "url": "logo.jpg",
    "revision": "4b318964cb50b45d2cac5c5d9366496f"
  },
  {
    "url": "network/basics.html",
    "revision": "f145a5423790cec3d4647892fed82ce9"
  },
  {
    "url": "network/http-cache.html",
    "revision": "9129a02e73d306671ecf45cdb80f8a39"
  },
  {
    "url": "network/http.html",
    "revision": "8462c6a446ab2dbbaa1967b2f5ffaf29"
  },
  {
    "url": "network/index.html",
    "revision": "4f0952c7482cdb482711e7d054bdd844"
  },
  {
    "url": "node/index.html",
    "revision": "af0befc4a9d17b6ebfbbc18fa9293806"
  },
  {
    "url": "performance/index.html",
    "revision": "72bfbab06c5de23d2dac928c741d1b53"
  },
  {
    "url": "project/babel.html",
    "revision": "0aaaf86a938c5603856f2ec400404501"
  },
  {
    "url": "project/index.html",
    "revision": "604bf32c3d446d1be29b3eace21670e0"
  },
  {
    "url": "project/webpack.html",
    "revision": "d12c972fdaff200a71f51eb21c0ecd26"
  },
  {
    "url": "security/index.html",
    "revision": "9c874337421229ef523890e49799ceb6"
  },
  {
    "url": "typescript/advance.html",
    "revision": "7de79f19ce4b034ff5ff268529f7c986"
  },
  {
    "url": "typescript/index.html",
    "revision": "88a81c386141e763f9b38c962655d9a2"
  },
  {
    "url": "typescript/utility-types.html",
    "revision": "086bbb791b16756cdd99521e7313e261"
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
