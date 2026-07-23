const CACHE="sweat-and-stats-v2-4-0-2-2";
const ASSETS=["./","./index.html","./manifest.json","./cova-flex.png","./cova-point.png","./cova-wave.png","./patch-2.4.0.2.1.css","./patch-2.4.0.2.1.js","./patch-2.4.0.2.2.css","./patch-2.4.0.2.2.js","./firestore.rules"];
self.addEventListener("install",event=>{self.skipWaiting();event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)))});
self.addEventListener("activate",event=>{event.waitUntil(Promise.all([self.clients.claim(),caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key))))]))});
self.addEventListener("fetch",event=>{if(event.request.method!=="GET")return;event.respondWith(fetch(event.request).then(response=>{const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy));return response}).catch(()=>caches.match(event.request).then(cached=>cached||caches.match("./index.html"))))});
