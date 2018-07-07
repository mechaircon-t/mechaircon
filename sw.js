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
    "revision": "59ff815a7cc019e0bbdd23c54268d05e"
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
    "url": "build/app/9wlm2pni.es5.js",
    "revision": "33f72d1b0a50de6252faa9128b24f2a9"
  },
  {
    "url": "build/app/9wlm2pni.js",
    "revision": "d8578cbbf76cbc7d3ec1c0881000cd21"
  },
  {
    "url": "build/app/app.eeqcbigw.js",
    "revision": "04dfbd38f3ff4f9444deda54681fef41"
  },
  {
    "url": "build/app/app.iqjpnrrj.js",
    "revision": "12eed75e3519e4955ea666c2f7f0ef7b"
  },
  {
    "url": "build/app/b093f1ns.es5.js",
    "revision": "41b149e6c34fb8afb306dfca69f47afc"
  },
  {
    "url": "build/app/b093f1ns.js",
    "revision": "935824f3f4c7be9b611c8052665d5932"
  },
  {
    "url": "build/app/bznsljo9.es5.js",
    "revision": "79076e47162cea900ffc745c479c385a"
  },
  {
    "url": "build/app/bznsljo9.js",
    "revision": "dce0fda828ce08db119d0eb387a02a3d"
  },
  {
    "url": "build/app/itjwmxun.es5.js",
    "revision": "7eb7045dcbf95de8e3180508ed5f7d68"
  },
  {
    "url": "build/app/itjwmxun.js",
    "revision": "5f33080e3c6e5f407fb67ab39b9cf979"
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
    "url": "index.html",
    "revision": "a1bcb2f085824c8f0f97c759ce85b055"
  },
  {
    "url": "manifest.json",
    "revision": "50b40cec1685e1d42a0b4f11e96df98c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
