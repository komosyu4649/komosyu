if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let t={};const n=e=>a(e,r),o={module:{uri:r},exports:t,require:n};s[r]=Promise.all(i.map((e=>o[e]||n(e)))).then((e=>(c(...e),t)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts("fallback-SU0tSjk2tb2ecMQlOrynj.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/SU0tSjk2tb2ecMQlOrynj/_buildManifest.js",revision:"26753932dc7ac066f0f8d8aed1ae305b"},{url:"/_next/static/SU0tSjk2tb2ecMQlOrynj/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/SU0tSjk2tb2ecMQlOrynj/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/213-9c0e92793b057dae.js",revision:"9c0e92793b057dae"},{url:"/_next/static/chunks/390-6a1d3c5cb2a4238b.js",revision:"6a1d3c5cb2a4238b"},{url:"/_next/static/chunks/61-0b3cf1fb2953d612.js",revision:"0b3cf1fb2953d612"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"91d7f78b5b4003c8"},{url:"/_next/static/chunks/main-a3406a5be3e50d3f.js",revision:"a3406a5be3e50d3f"},{url:"/_next/static/chunks/pages/404-af0fe707c5bcf407.js",revision:"af0fe707c5bcf407"},{url:"/_next/static/chunks/pages/_app-97ca34ec89eb38c2.js",revision:"97ca34ec89eb38c2"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"2280fa386d040b66"},{url:"/_next/static/chunks/pages/_offline-9b012dbe49698668.js",revision:"9b012dbe49698668"},{url:"/_next/static/chunks/pages/about-85f0eba293e46e8f.js",revision:"85f0eba293e46e8f"},{url:"/_next/static/chunks/pages/index-cff2552d60c040a2.js",revision:"cff2552d60c040a2"},{url:"/_next/static/chunks/pages/posts/%5Bslug%5D-9742a87055fe7894.js",revision:"9742a87055fe7894"},{url:"/_next/static/chunks/pages/posts/category/%5Bslug%5D-f9db3732874c1a4a.js",revision:"f9db3732874c1a4a"},{url:"/_next/static/chunks/pages/search-6b9d692ae5a7f391.js",revision:"6b9d692ae5a7f391"},{url:"/_next/static/chunks/pages/works-c2ff50ab0435888a.js",revision:"c2ff50ab0435888a"},{url:"/_next/static/chunks/pages/works/detail/%5Bslug%5D-0dc6b37c3a0eee00.js",revision:"0dc6b37c3a0eee00"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-69bfa6990bb9e155.js",revision:"69bfa6990bb9e155"},{url:"/_next/static/css/3501aa16dbec78b4.css",revision:"3501aa16dbec78b4"},{url:"/_next/static/css/668072ac776a0fa9.css",revision:"668072ac776a0fa9"},{url:"/_next/static/css/6cdc9de0669c99d7.css",revision:"6cdc9de0669c99d7"},{url:"/_next/static/css/85c9b64ec07a3660.css",revision:"85c9b64ec07a3660"},{url:"/_next/static/css/9bf71fa949e39fa2.css",revision:"9bf71fa949e39fa2"},{url:"/_next/static/css/b9f982151130a4ee.css",revision:"b9f982151130a4ee"},{url:"/_next/static/css/c222f51623e46798.css",revision:"c222f51623e46798"},{url:"/_next/static/css/c34814de19cd76a4.css",revision:"c34814de19cd76a4"},{url:"/_next/static/css/fbf668f6275de09d.css",revision:"fbf668f6275de09d"},{url:"/_offline",revision:"SU0tSjk2tb2ecMQlOrynj"},{url:"/asset/img/about/garelly_01.jpg",revision:"49ac3c3905f2cd38aea45037ca1a4869"},{url:"/asset/img/about/garelly_02.jpg",revision:"667be74bf8c3f7e92feff6619f899661"},{url:"/asset/img/about/garelly_03.jpg",revision:"7eede1d5ef8657f71272b09e20079ca5"},{url:"/asset/img/about/garelly_04.jpg",revision:"480cbcc6aa9e310530028cde367db4b2"},{url:"/asset/img/common/komosyu.jpg",revision:"f68b77efbe873f9e40514f8bdaa53598"},{url:"/asset/img/post/14_1.jpg",revision:"211b7335eb06361bc3a10b973256db08"},{url:"/asset/img/post/14_10.jpg",revision:"58a581a1e278bf11ab53b351de6ef22e"},{url:"/asset/img/post/14_11.jpg",revision:"124ffa56f6617f8e8951de90f6290228"},{url:"/asset/img/post/14_12.jpg",revision:"49a80e9368aa26abd183368ea647bc62"},{url:"/asset/img/post/14_13.jpg",revision:"ead97c6553431d43dbd43111b9329217"},{url:"/asset/img/post/14_14.jpg",revision:"cc678a1349afa78d046c925581e7e67d"},{url:"/asset/img/post/14_15.jpg",revision:"099b56fae121e6b2d881a38399bf7aa4"},{url:"/asset/img/post/14_2.jpg",revision:"e466640a578e2f784e83ac5093c0e97f"},{url:"/asset/img/post/14_3.jpg",revision:"3643a0d0c790570aac84f84af3d266a1"},{url:"/asset/img/post/14_4.jpg",revision:"b7657c997ec6cb4342d982365782d3ab"},{url:"/asset/img/post/14_5.jpg",revision:"d9f241b0f80cfdc5efcc32a7dd593071"},{url:"/asset/img/post/14_6.jpg",revision:"3c2af4757261ee74993911c305d08bd6"},{url:"/asset/img/post/14_7.jpg",revision:"a04695322ebecfa3b286fdfb54cdcd8f"},{url:"/asset/img/post/14_8.jpg",revision:"e33294e0536a4da50608550dc5bc893e"},{url:"/asset/img/post/14_9.jpg",revision:"066aa42b69d9d4a4255c3c8e829d042d"},{url:"/asset/img/post/15_1.jpg",revision:"b1b7c1f71eb8d9c04a7c6ee7b5005b8a"},{url:"/asset/img/post/5_1.jpg",revision:"b0b32f5c2a3c5ab51adcae6bfbd659f3"},{url:"/asset/img/post/6_1.jpg",revision:"a4cc98bc63d020b68c6c444c6ab7456c"},{url:"/asset/img/post/6_2.jpg",revision:"ef4b1bfbbcdab7cb4528618e6b5977b5"},{url:"/asset/img/works/detail/hasslu.jpg",revision:"f6380cd435d63fe3032657134a93f3f2"},{url:"/asset/img/works/detail/komosyu.jpg",revision:"1cdcd72cf77947ee9d0bca37d405ac91"},{url:"/asset/img/works/detail/ryoshirotsuji.jpg",revision:"0017d1a8e90c346d0fa4eddb7137eb65"},{url:"/asset/img/works/detail/wanion.jpg",revision:"6b9e9d9d615d079af29839f65f8637a4"},{url:"/favicon.ico",revision:"9d850938b715406c12c50ef2bf3126e8"},{url:"/favicon.svg",revision:"714ed52da7e53eb72ce874aa246f78bf"},{url:"/icons/android-chrome-192x192.png",revision:"e1123eadfcaaa661fc2b5d21b278814d"},{url:"/icons/android-chrome-384x384.png",revision:"4cbf5a63db55a4909771b1103ebcc480"},{url:"/icons/icon-512x512.png",revision:"a661663d6c75ba99ff156a5e9f907bec"},{url:"/manifest.json",revision:"a359fa0c8986548b8f868e2630769aa2"},{url:"/ogp.jpg",revision:"ee3e34f00734dc08567c8166a196fccd"},{url:"/robots.txt",revision:"258604a80667f027b9d1fe70bc612528"},{url:"/sitemap-0.xml",revision:"b8e32857109756e0aeaaf87768d29c70"},{url:"/sitemap.xml",revision:"3af547ddbf135ed4d4360617bcb13936"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
