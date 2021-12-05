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
    "revision": "89a0de2d5b71cd8b9c81651256a96e4c"
  },
  {
    "url": "advanced/index.html",
    "revision": "fdd31e795264edf03a80bf8f7ba037ff"
  },
  {
    "url": "algorithm/index.html",
    "revision": "fc833330540c841b6c6582541f468e97"
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
    "url": "assets/js/13.93d25daf.js",
    "revision": "c5b685c746560b1782152057572d45f5"
  },
  {
    "url": "assets/js/14.bdf1cdfb.js",
    "revision": "954b8e98d6b7bad20e569cea632837da"
  },
  {
    "url": "assets/js/15.b666144e.js",
    "revision": "3717c458f609619a31a500d8afe8c1be"
  },
  {
    "url": "assets/js/16.6a95be55.js",
    "revision": "dc73cbf673799dee6440ff4a97062fe2"
  },
  {
    "url": "assets/js/17.7d9dce32.js",
    "revision": "4e0481ad869a623458a31d1cc932f78d"
  },
  {
    "url": "assets/js/18.08b081ea.js",
    "revision": "3c89fd94a2918bb7ad86e99a4111c655"
  },
  {
    "url": "assets/js/19.deb6eba7.js",
    "revision": "df8d6ab84c0e28431c300795a7ca4fd2"
  },
  {
    "url": "assets/js/2.3a2be5ef.js",
    "revision": "6d62cb67a0efafabf2f611e62f9a9ccc"
  },
  {
    "url": "assets/js/20.a97c8939.js",
    "revision": "5d2907870f1cca0d077719dec18b33f9"
  },
  {
    "url": "assets/js/21.d9435ffa.js",
    "revision": "882aa44a4564c9336c3f50817611716a"
  },
  {
    "url": "assets/js/22.d41561ec.js",
    "revision": "bc08350dd4f1ae2381563cab0783cf8f"
  },
  {
    "url": "assets/js/23.9f6984bc.js",
    "revision": "cb0d3167c8ab38ace4faa820f0e65736"
  },
  {
    "url": "assets/js/24.20970c33.js",
    "revision": "5ba672c1fe057a392d96eea903c4018a"
  },
  {
    "url": "assets/js/25.fe946786.js",
    "revision": "765daaa8c7a2a70b3c85a72702bfaeaa"
  },
  {
    "url": "assets/js/26.c2a48529.js",
    "revision": "e13c8e9aea3a35b6098b7aa9bebbdde4"
  },
  {
    "url": "assets/js/27.af47dc56.js",
    "revision": "4fa34a3a65fcd513aa8cf0e7e8564ae7"
  },
  {
    "url": "assets/js/28.b3939b4c.js",
    "revision": "f476ab682b18ed2acf66e2e3c1fcdead"
  },
  {
    "url": "assets/js/29.332a1785.js",
    "revision": "4c98db8de58d6b775dcfab0b0a8f309b"
  },
  {
    "url": "assets/js/3.22db767b.js",
    "revision": "f85f161da7ebfbcda64b788e6d35f0c1"
  },
  {
    "url": "assets/js/30.f51dc6c7.js",
    "revision": "5afa2bf882ad2f8d958cd6909dde28d7"
  },
  {
    "url": "assets/js/31.e03525c2.js",
    "revision": "0474e328a2bb09a77565366ce61ba29f"
  },
  {
    "url": "assets/js/32.18a3a393.js",
    "revision": "beb96ad52d42db8fafd50be8fef235f1"
  },
  {
    "url": "assets/js/33.0b87f05a.js",
    "revision": "b457acead8507b605847e252d9edcabb"
  },
  {
    "url": "assets/js/34.0cf8e4b9.js",
    "revision": "7c83ac7da58d59ba41f4d4c925ab00ab"
  },
  {
    "url": "assets/js/35.f36c603a.js",
    "revision": "1e59ca02c90dc4c8df6df86bacaa1448"
  },
  {
    "url": "assets/js/36.a3fa12d9.js",
    "revision": "856389037c0842d7215e487142f3a771"
  },
  {
    "url": "assets/js/37.d11052f5.js",
    "revision": "8293d15fd5a689d1fb105143a3c22043"
  },
  {
    "url": "assets/js/38.3a332fc7.js",
    "revision": "933aa317e4774cf01ea7d4fd80783429"
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
    "url": "assets/js/app.8d849bfa.js",
    "revision": "b056d4cad5d2d7764b12708282fe6bf3"
  },
  {
    "url": "browser/index.html",
    "revision": "bc8c51732ca5e49271d18bf201f47f9e"
  },
  {
    "url": "browser/ServiceWorker.html",
    "revision": "16274bf092ca00db2edec71fdd4e86ce"
  },
  {
    "url": "css/index.html",
    "revision": "b15b6fe12e602ddf2c5a468de231a3cc"
  },
  {
    "url": "frame/index.html",
    "revision": "00ce86e7e90a4c7b956749a76958907c"
  },
  {
    "url": "frame/React 实战技巧.html",
    "revision": "113788a886c6f4e289d3ae20f8a17dca"
  },
  {
    "url": "images/mtu-mss.jpg",
    "revision": "2d7547f89190ac8374510db624fff179"
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
    "url": "index.html",
    "revision": "1c5e3f65fa8928727fa36bad6395566b"
  },
  {
    "url": "javascript/call&apply&bind.html",
    "revision": "0e22d803bd98ef3d406a9010c8159c15"
  },
  {
    "url": "javascript/index.html",
    "revision": "244ced254fe426eed1cdafc8732c9497"
  },
  {
    "url": "javascript/promise.html",
    "revision": "7d8d0c86226c87fe4f45bd01636d61ce"
  },
  {
    "url": "javascript/prototype.html",
    "revision": "bc208b5db1689d19d14b3d8b011b90e5"
  },
  {
    "url": "javascript/this.html",
    "revision": "22ad390d006f42f14dd8161b843f82af"
  },
  {
    "url": "javascript/事件循环.html",
    "revision": "bc97062c5bca822181133a7ad29fb265"
  },
  {
    "url": "javascript/函数式编程.html",
    "revision": "8612c9c1aacb2610f60c4bba84a26233"
  },
  {
    "url": "javascript/执行上下文.html",
    "revision": "e78595136adc745e3eddb5c4cd67163f"
  },
  {
    "url": "javascript/深浅拷贝.html",
    "revision": "eba44d84cc85584b5e46bfee8eb3a500"
  },
  {
    "url": "javascript/词法作用域.html",
    "revision": "a3e62bf12c0938e0e96a1c43c8282945"
  },
  {
    "url": "javascript/闭包.html",
    "revision": "785464ff100ccce0ed935fa459f4bc04"
  },
  {
    "url": "logo.jpg",
    "revision": "4b318964cb50b45d2cac5c5d9366496f"
  },
  {
    "url": "network/basics.html",
    "revision": "916d74bbaf8d53814b5c0a06094d1114"
  },
  {
    "url": "network/http-cache.html",
    "revision": "1f305d791ac48a274c3441c521c0cfcc"
  },
  {
    "url": "network/http.html",
    "revision": "852cc81d78396a52bcf992f2ca621297"
  },
  {
    "url": "network/index.html",
    "revision": "3a7c5f69405bd1ea751ce221071189eb"
  },
  {
    "url": "node/index.html",
    "revision": "ff816ab769f29c51cfaf17242b51d5ee"
  },
  {
    "url": "performance/index.html",
    "revision": "6ed2ba2c16504dd82807913161aafc4a"
  },
  {
    "url": "project/babel.html",
    "revision": "06a7d46b12786761fc8a24f1a2ab0ac6"
  },
  {
    "url": "project/index.html",
    "revision": "5e286bc0fa4d060a700c752cc83cddd6"
  },
  {
    "url": "project/webpack.html",
    "revision": "0b74a6a57a5ff6561dbb40e1633b434f"
  },
  {
    "url": "security/index.html",
    "revision": "a14389b6dfdf9421521d0741f84f7402"
  },
  {
    "url": "typescript/advance.html",
    "revision": "c2a7c2003129b390d1ae2892c4c9dc40"
  },
  {
    "url": "typescript/index.html",
    "revision": "6bdf5a424ee86b8662a5e10cd6da5f82"
  },
  {
    "url": "typescript/utility-types.html",
    "revision": "e6a9c6cc2bd3502726c39f17fbaa9a20"
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
