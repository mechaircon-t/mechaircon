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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/icon/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "assets/icon/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "assets/img/du.png",
    "revision": "bc49b396cbee85e832b1e4cab9fcddb7"
  },
  {
    "url": "assets/img/gear.svg",
    "revision": "009b400eb8562adb57543f477c735f81"
  },
  {
    "url": "assets/img/oppo.png",
    "revision": "12fe0212e57267341ef499a9919277a4"
  },
  {
    "url": "assets/img/ramada.png",
    "revision": "489368c2830d0ec5bc96918a6282e270"
  },
  {
    "url": "build/app.css",
    "revision": "3c8a6c7a9fb229c6219ac79e6bb92c52"
  },
  {
    "url": "build/app.js",
    "revision": "9fa7b0f4a8ece7bfa9cc861a58e7b189"
  },
  {
    "url": "build/app/1slpqur3.es5.js",
    "revision": "f2167abe0fda0f65e8afaa5c5774422f"
  },
  {
    "url": "build/app/1slpqur3.js",
    "revision": "417d9415d06b05fa498c9255c3fd505c"
  },
  {
    "url": "build/app/47zdvgrt.es5.js",
    "revision": "67524ca06667076351da220efb0196e4"
  },
  {
    "url": "build/app/47zdvgrt.js",
    "revision": "ab3af4286ed617d19df167e94dca867f"
  },
  {
    "url": "build/app/9wlm2pni.es5.js",
    "revision": "33f72d1b0a50de6252faa9128b24f2a9"
  },
  {
    "url": "build/app/9wlm2pni.js",
    "revision": "d8578cbbf76cbc7d3ec1c0881000cd21"
  },
  {
    "url": "build/app/app.apmbfxfl.js",
    "revision": "2fdf3d17e15a7d6cf7c34e199fabe0bc"
  },
  {
    "url": "build/app/app.eeqcbigw.js",
    "revision": "04dfbd38f3ff4f9444deda54681fef41"
  },
  {
    "url": "build/app/d722qgo9.es5.js",
    "revision": "440ce4a9ec309ae7d6453a80ac32e99c"
  },
  {
    "url": "build/app/d722qgo9.js",
    "revision": "7aec172d0c7dac7c5df622d177464572"
  },
  {
    "url": "build/app/qpblak66.es5.js",
    "revision": "293e3b75d59d482d44a08d4f53c72ab3"
  },
  {
    "url": "build/app/qpblak66.js",
    "revision": "a9457cf35df13b6a81ce87a8837f4dfb"
  },
  {
    "url": "build/app/uhycq8qg.es5.js",
    "revision": "06cf36c13b1eacdfe612107ec66c545c"
  },
  {
    "url": "build/app/uhycq8qg.js",
    "revision": "d5a3c9cce75e0f989c4ad6065b64c2fd"
  },
  {
    "url": "index.html",
    "revision": "c7ab1158f06e6d899fcc39e6236fce39"
  },
  {
    "url": "manifest.json",
    "revision": "50b40cec1685e1d42a0b4f11e96df98c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
