!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/style/",n(n.s=3)}([function(e,t,n){"use strict";try{self["workbox:precaching:5.1.3"]&&_()}catch(e){}},function(e,t,n){"use strict";try{self["workbox:core:5.1.3"]&&_()}catch(e){}},function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=2},function(e,t,n){"use strict";n.r(t);n(0);n(1);const s={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},r=e=>[s.prefix,e,s.suffix].filter(e=>e&&e.length>0).join("-"),a=e=>e||r(s.precache),c=(e,...t)=>{let n=e;return t.length>0&&(n+=" :: "+JSON.stringify(t)),n};class o extends Error{constructor(e,t){super(c(e,t)),this.name=e,this.details=t}}const i=new Set;const l=(e,t)=>e.filter(e=>t in e),h=async({request:e,mode:t,plugins:n=[]})=>{const s=l(n,"cacheKeyWillBeUsed");let r=e;for(const e of s)r=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:r}),"string"==typeof r&&(r=new Request(r));return r},u=async({cacheName:e,request:t,event:n,matchOptions:s,plugins:r=[]})=>{const a=await self.caches.open(e),c=await h({plugins:r,request:t,mode:"read"});let o=await a.match(c,s);for(const t of r)if("cachedResponseWillBeUsed"in t){const r=t.cachedResponseWillBeUsed;o=await r.call(t,{cacheName:e,event:n,matchOptions:s,cachedResponse:o,request:c})}return o},f=async({cacheName:e,request:t,response:n,event:s,plugins:r=[],matchOptions:a})=>{const c=await h({plugins:r,request:t,mode:"write"});if(!n)throw new o("cache-put-with-no-response",{url:(f=c.url,new URL(String(f),location.href).href.replace(new RegExp("^"+location.origin),""))});var f;const d=await(async({request:e,response:t,event:n,plugins:s=[]})=>{let r=t,a=!1;for(const t of s)if("cacheWillUpdate"in t){a=!0;const s=t.cacheWillUpdate;if(r=await s.call(t,{request:e,response:r,event:n}),!r)break}return a||(r=r&&200===r.status?r:void 0),r||null})({event:s,plugins:r,response:n,request:c});if(!d)return void 0;const p=await self.caches.open(e),y=l(r,"cacheDidUpdate"),w=y.length>0?await u({cacheName:e,matchOptions:a,request:c}):null;try{await p.put(c,d)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of i)await e()}(),e}for(const t of y)await t.cacheDidUpdate.call(t,{cacheName:e,event:s,oldResponse:w,newResponse:d,request:c})},d=async({request:e,fetchOptions:t,event:n,plugins:s=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const r=l(s,"fetchDidFail"),a=r.length>0?e.clone():null;try{for(const t of s)if("requestWillFetch"in t){const s=t.requestWillFetch,r=e.clone();e=await s.call(t,{request:r,event:n})}}catch(e){throw new o("plugin-error-request-will-fetch",{thrownError:e})}const c=e.clone();try{let r;r="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of s)"fetchDidSucceed"in e&&(r=await e.fetchDidSucceed.call(e,{event:n,request:c,response:r}));return r}catch(e){0;for(const t of r)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:a.clone(),request:c.clone()});throw e}};let p;async function y(e,t){const n=e.clone(),s={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=t?t(s):s,a=function(){if(void 0===p){const e=new Response("");if("body"in e)try{new Response(e.body),p=!0}catch(e){p=!1}p=!1}return p}()?n.body:await n.blob();return new Response(a,r)}function w(e){if(!e)throw new o("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:n}=e;if(!n)throw new o("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const s=new URL(n,location.href),r=new URL(n,location.href);return s.searchParams.set("__WB_REVISION__",t),{cacheKey:s.href,url:r.href}}class g{constructor(e){this._cacheName=a(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const n of e){"string"==typeof n?t.push(n):n&&void 0===n.revision&&t.push(n.url);const{cacheKey:e,url:s}=w(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(s)&&this._urlsToCacheKeys.get(s)!==e)throw new o("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(s),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new o("add-to-cache-list-conflicting-integrities",{url:s});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(s,e),this._urlsToCacheModes.set(s,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const n=[],s=[],r=await self.caches.open(this._cacheName),a=await r.keys(),c=new Set(a.map(e=>e.url));for(const[e,t]of this._urlsToCacheKeys)c.has(t)?s.push(e):n.push({cacheKey:t,url:e});const o=n.map(({cacheKey:n,url:s})=>{const r=this._cacheKeysToIntegrities.get(n),a=this._urlsToCacheModes.get(s);return this._addURLToCache({cacheKey:n,cacheMode:a,event:e,integrity:r,plugins:t,url:s})});await Promise.all(o);return{updatedURLs:n.map(e=>e.url),notUpdatedURLs:s}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),n=new Set(this._urlsToCacheKeys.values()),s=[];for(const r of t)n.has(r.url)||(await e.delete(r),s.push(r.url));return{deletedURLs:s}}async _addURLToCache({cacheKey:e,url:t,cacheMode:n,event:s,plugins:r,integrity:a}){const c=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});let i,l=await d({event:s,plugins:r,request:c});for(const e of r||[])"cacheWillUpdate"in e&&(i=e);if(!(i?await i.cacheWillUpdate({event:s,request:c,response:l}):l.status<400))throw new o("bad-precaching-response",{url:t,status:l.status});l.redirected&&(l=await y(l)),await f({event:s,plugins:r,response:l,request:e===t?c:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n){return(await self.caches.open(this._cacheName)).match(n)}}createHandler(e=!0){return async({request:t})=>{try{const e=await this.matchPrecache(t);if(e)return e;throw new o("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(n){if(e)return fetch(t);throw n}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new o("non-precached-url",{url:e});const n=this.createHandler(t),s=new Request(e);return()=>n({request:s})}}(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"f9b8985d363c15087674f251cac44890","url":"01a85c17.2dc3507c.js"},{"revision":"0f20c77b2b87ef51115ed7f912da7346","url":"1107bc6d.0ee75190.js"},{"revision":"fcca1facc54d07429b72dea78afe4812","url":"17896441.25b33a4c.js"},{"revision":"22c63acc19ee645991f478b0ecb4d3c8","url":"19958b68.7653a163.js"},{"revision":"cfbe9cfce4eac5833a5bb91a92d81c30","url":"1be78505.b8ffb199.js"},{"revision":"af6e4025618ce611df5040149f64151b","url":"21.ce871fbc.js"},{"revision":"8e07e24c10f32c52eaf2490ee083925e","url":"22.3ccdd189.js"},{"revision":"ce1c919a22ee4e00fa05410aced96ef2","url":"23.9490600e.js"},{"revision":"8bcd195300eaff07f495d2463358ad18","url":"24.44fa0f72.js"},{"revision":"c275fb3a6f88eb7962912a8df2584848","url":"25.697231f8.js"},{"revision":"7c6f8bb91a468678b5b17c152fc5eb2b","url":"26.ccee51a6.js"},{"revision":"d8bd1a0de12e9bbfc84068704477a604","url":"27.d2503350.js"},{"revision":"250bb268ab5e29886080c16c4407b27e","url":"28.d47bccd1.js"},{"revision":"dfb73c3617cb8a87b8a6ea6608b70a35","url":"29.99fd1d14.js"},{"revision":"6e81196397f7c38baa4d596af9a1fdc1","url":"30.4e6cc944.js"},{"revision":"3ef307245149c94b45a7ffb58d77ec57","url":"3570154c.bcbe10b5.js"},{"revision":"98b5179aa84ab910330bc3cf9f1d6960","url":"404.html"},{"revision":"b72a5629103aaabc546b87104b4f85e8","url":"4186ebd0.66b0c7dc.js"},{"revision":"2589da4c0a50d3f6a87ab7550ef60c6d","url":"5095e272.ded7cd44.js"},{"revision":"d5de9b285773c7aa011ed985086c77c4","url":"5191dec3.a7fbae89.js"},{"revision":"f9a14ae30a9078dc6efd71ae26fca7a8","url":"555e3275.56b036ae.js"},{"revision":"4fa3d343e86a259794c3ab96c9489c43","url":"8a961ab0.bca0a04c.js"},{"revision":"039a1f5aa5971fe98b0969172891270a","url":"8d192aaa.3c270f80.js"},{"revision":"55cb12177b8ef02c20af1346cd15ba78","url":"a09c2993.124b93b6.js"},{"revision":"f044c33ca72a1b8878399490559c32fe","url":"algolia.12a6eb6e.css"},{"revision":"473185fbd5a574844f1fb00122412ad9","url":"algolia.8fb1d2f9.js"},{"revision":"56f27bea5510db810324944f47703227","url":"algolia.e20e3549.js"},{"revision":"ed7241b68dc135419b0c625fbb0b91cb","url":"blog/hello-world/index.html"},{"revision":"3fe44cf9fa6aa703bd16aaaab679ffc4","url":"blog/index.html"},{"revision":"54e331bc0fdd3ec604380fcfde177e2f","url":"blog/tags/guidelines/index.html"},{"revision":"5445a7ceaf49b1e1ebf5c8094fd8e3a8","url":"blog/tags/index.html"},{"revision":"6b24fc298d8a4b76783b68055d3ff4a2","url":"blog/tags/style/index.html"},{"revision":"6235c889fa2324321e4e38fdea24cb50","url":"c1510a3a.3a215cb2.js"},{"revision":"5ce609576ba26b703551c2dae3eee704","url":"c4f5d8e4.f6701ceb.js"},{"revision":"5d585be439e4b7b9f6137c75cdd29cb2","url":"common.6590a787.js"},{"revision":"cbf46a8a870bdd8f522692c3c1586522","url":"d610846f.39ec09bd.js"},{"revision":"8d37911e335fa9a1daeef3a01a6a18d7","url":"docs/css-sass/index.html"},{"revision":"41177034fafa99e494578bfa3aa2d9d3","url":"docs/index.html"},{"revision":"1497109ecf1584ac115e7f7893346c94","url":"docs/javascript/index.html"},{"revision":"ed3bf7412d020a2883a42177c88f31d9","url":"docs/react/index.html"},{"revision":"2d8e7082207d133116fa528898cddf23","url":"docs/typescript/index.html"},{"revision":"ca942c6ea98adf8bc9a8ef5d5ab4b6a3","url":"index.html"},{"revision":"cbe73bab378b0eeaf091cf2434603bd7","url":"main.67a59983.css"},{"revision":"b6d73cf335acc40af2c0f799ceaf429b","url":"main.c8bfe00d.js"},{"revision":"8c22bd44c5300d175a430861c6d0a943","url":"manifest.json"},{"revision":"be6d26600b76f5abbca0b882a1aedf69","url":"runtime~main.5cb91cd9.js"},{"revision":"825ec4a2d33bd4fa5030a825ace3c3d7","url":"styles.4047781b.css"},{"revision":"bb70d97dbe5a9849be382b73c032f87c","url":"styles.c2954d24.js"},{"revision":"9e0d3d423f29f546b94484e055322df4","url":"img/android-chrome-192x192.png"},{"revision":"c08e5fbe4500cf0c73e481840b7d661b","url":"img/android-chrome-512x512.png"},{"revision":"f70e691f71a86359e45869920d99dbca","url":"img/apple-touch-icon.png"},{"revision":"fa414a3c0feb1c4f1b454473440a42a3","url":"img/favicon-16x16.png"},{"revision":"ead76ffe91828bd4783af333cc952e6d","url":"img/favicon-32x32.png"},{"revision":"f35b1adf72cd5ee68585c82a9486eafd","url":"img/favicon.ico"},{"revision":"0f754365df37fdde2036c8fb72356ae9","url":"img/logo.svg"},{"revision":"2b3c360a43341e93285108d4d119b496","url":"img/seagull-dark.svg"},{"revision":"9aeb61582be39ed50221f8283da2819a","url":"img/seagull-light.svg"},{"revision":"8d04d316f4d1777793ee773fcbf16cea","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"3d3d63efa464a74e2befd1569465ed21","url":"img/undraw_docusaurus_react.svg"},{"revision":"932b535fc71feb29877bc4b9d708b1d0","url":"img/undraw_docusaurus_tree.svg"}],n=new g;e.offlineMode&&n.addToCacheList(t),await async function(e){void 0}(),self.addEventListener("install",e=>{e.waitUntil(n.install())}),self.addEventListener("activate",e=>{e.waitUntil(n.activate())}),self.addEventListener("fetch",async t=>{if(e.offlineMode){const s=t.request.url,r=function(e){const t=[],n=new URL(e,self.location.href);return n.origin!==self.location.origin||(n.search="",n.hash="",t.push(n.href),n.pathname.endsWith("/")?t.push(n.href+"index.html"):t.push(n.href+"/index.html")),t}(s);for(let a=0;a<r.length;a+=1){const c=r[a],o=n.getCacheKeyForURL(c);if(o){e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:s,possibleURL:c,possibleURLs:r,cacheKey:o}),t.respondWith(caches.match(o));break}}}}),self.addEventListener("message",async e=>{"SKIP_WAITING"===(e.data&&e.data.type)&&self.skipWaiting()})})()}]);