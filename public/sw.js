if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const t=e=>a(e,n),o={module:{uri:n},exports:r,require:t};s[n]=Promise.all(c.map((e=>o[e]||t(e)))).then((e=>(i(...e),r)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts("fallback-uE9X0b8pa9x8owyXzs845.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/213-9c0e92793b057dae.js",revision:"9c0e92793b057dae"},{url:"/_next/static/chunks/390-25b38ca835ecc6d9.js",revision:"25b38ca835ecc6d9"},{url:"/_next/static/chunks/61-0b3cf1fb2953d612.js",revision:"0b3cf1fb2953d612"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"91d7f78b5b4003c8"},{url:"/_next/static/chunks/main-a3406a5be3e50d3f.js",revision:"a3406a5be3e50d3f"},{url:"/_next/static/chunks/pages/404-af0fe707c5bcf407.js",revision:"af0fe707c5bcf407"},{url:"/_next/static/chunks/pages/_app-97ca34ec89eb38c2.js",revision:"97ca34ec89eb38c2"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"2280fa386d040b66"},{url:"/_next/static/chunks/pages/_offline-9b012dbe49698668.js",revision:"9b012dbe49698668"},{url:"/_next/static/chunks/pages/about-e948c7b7e5152579.js",revision:"e948c7b7e5152579"},{url:"/_next/static/chunks/pages/index-cff2552d60c040a2.js",revision:"cff2552d60c040a2"},{url:"/_next/static/chunks/pages/posts/%5Bslug%5D-4b5896896941a413.js",revision:"4b5896896941a413"},{url:"/_next/static/chunks/pages/posts/category/%5Bslug%5D-f9db3732874c1a4a.js",revision:"f9db3732874c1a4a"},{url:"/_next/static/chunks/pages/search-6b9d692ae5a7f391.js",revision:"6b9d692ae5a7f391"},{url:"/_next/static/chunks/pages/works-e8525374723fdf01.js",revision:"e8525374723fdf01"},{url:"/_next/static/chunks/pages/works/detail/%5Bslug%5D-29226c23990d627b.js",revision:"29226c23990d627b"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-69bfa6990bb9e155.js",revision:"69bfa6990bb9e155"},{url:"/_next/static/css/39dcafabbbd3643e.css",revision:"39dcafabbbd3643e"},{url:"/_next/static/css/480b1e05806275fb.css",revision:"480b1e05806275fb"},{url:"/_next/static/css/5fd81eca4d70ed11.css",revision:"5fd81eca4d70ed11"},{url:"/_next/static/css/668072ac776a0fa9.css",revision:"668072ac776a0fa9"},{url:"/_next/static/css/6cdc9de0669c99d7.css",revision:"6cdc9de0669c99d7"},{url:"/_next/static/css/9bf71fa949e39fa2.css",revision:"9bf71fa949e39fa2"},{url:"/_next/static/css/b9f982151130a4ee.css",revision:"b9f982151130a4ee"},{url:"/_next/static/css/c34814de19cd76a4.css",revision:"c34814de19cd76a4"},{url:"/_next/static/css/fbf668f6275de09d.css",revision:"fbf668f6275de09d"},{url:"/_next/static/uE9X0b8pa9x8owyXzs845/_buildManifest.js",revision:"7aa9d15b88768ee51c7ba48e03ded83b"},{url:"/_next/static/uE9X0b8pa9x8owyXzs845/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/uE9X0b8pa9x8owyXzs845/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_offline",revision:"uE9X0b8pa9x8owyXzs845"},{url:"/asset/img/about/garelly_01.jpg",revision:"49ac3c3905f2cd38aea45037ca1a4869"},{url:"/asset/img/about/garelly_02.jpg",revision:"667be74bf8c3f7e92feff6619f899661"},{url:"/asset/img/about/garelly_03.jpg",revision:"7eede1d5ef8657f71272b09e20079ca5"},{url:"/asset/img/about/garelly_04.jpg",revision:"480cbcc6aa9e310530028cde367db4b2"},{url:"/asset/img/common/komosyu.jpg",revision:"f68b77efbe873f9e40514f8bdaa53598"},{url:"/asset/img/post/5_1.jpg",revision:"b0b32f5c2a3c5ab51adcae6bfbd659f3"},{url:"/asset/img/post/6_1.jpg",revision:"a4cc98bc63d020b68c6c444c6ab7456c"},{url:"/asset/img/post/6_2.jpg",revision:"ef4b1bfbbcdab7cb4528618e6b5977b5"},{url:"/asset/img/works/detail/hasslu.jpg",revision:"f6380cd435d63fe3032657134a93f3f2"},{url:"/asset/img/works/detail/komosyu.jpg",revision:"1cdcd72cf77947ee9d0bca37d405ac91"},{url:"/asset/img/works/detail/ryoshirotsuji.jpg",revision:"0017d1a8e90c346d0fa4eddb7137eb65"},{url:"/asset/img/works/detail/wanion.jpg",revision:"6b9e9d9d615d079af29839f65f8637a4"},{url:"/favicon.ico",revision:"9d850938b715406c12c50ef2bf3126e8"},{url:"/favicon.svg",revision:"714ed52da7e53eb72ce874aa246f78bf"},{url:"/icons/android-chrome-192x192.png",revision:"e1123eadfcaaa661fc2b5d21b278814d"},{url:"/icons/android-chrome-384x384.png",revision:"4cbf5a63db55a4909771b1103ebcc480"},{url:"/icons/icon-512x512.png",revision:"a661663d6c75ba99ff156a5e9f907bec"},{url:"/manifest.json",revision:"a359fa0c8986548b8f868e2630769aa2"},{url:"/ogp.jpg",revision:"ee3e34f00734dc08567c8166a196fccd"},{url:"/robots.txt",revision:"258604a80667f027b9d1fe70bc612528"},{url:"/sitemap-0.xml",revision:"708aedd9595949f00d8017053c8ce73b"},{url:"/sitemap.xml",revision:"1f5b5fd307cb0e23b12c5ee51ec08ee5"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
