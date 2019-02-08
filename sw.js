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

importScripts("workbox-v3.6.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-cfdb1e99316333a36b8d.js"
  },
  {
    "url": "app-81426d799bfa5e36a8dc.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-112d9d28403b387fbfe3.js"
  },
  {
    "url": "index.html",
    "revision": "397b71c482da012dcf3f50d289d5a5ee"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "d2727204fa0639b4be7fb1fcd17298e2"
  },
  {
    "url": "0.09f28b79d70afdbe25ce.css"
  },
  {
    "url": "component---src-pages-index-js-78509787aaf2bf44a0bd.js"
  },
  {
    "url": "1-a9b23d1071238c1862cc.js"
  },
  {
    "url": "8-581701f39ac0a59798fc.js"
  },
  {
    "url": "0-d91fd67f8e6efc633636.js"
  },
  {
    "url": "static/d/173/path---index-6a9-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "component---src-pages-404-js-58f3eaababfc33842a62.js"
  },
  {
    "url": "static/d/436/path---404-html-516-62a-AHYvoXmrQviRzbW8udmobajJQY.json",
    "revision": "1a16d987fda6fade1f59092e3ee7deb3"
  },
  {
    "url": "static/d/515/path---offline-plugin-app-shell-fallback-a-30-c5a-AHYvoXmrQviRzbW8udmobajJQY.json",
    "revision": "1a16d987fda6fade1f59092e3ee7deb3"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "9fc69b4ed954404d88ebc01585fc283a"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});