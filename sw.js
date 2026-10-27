const CACHE='move-8087634840';
const FILES=["./", "app.js", "icon-180.png", "icon-192.png", "icon-512.png", "img.js", "index.html", "manifest.webmanifest", "styles.css"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil((async()=>{for(const k of await caches.keys()) if(k!==CACHE) await caches.delete(k); await self.clients.claim();})());});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return; e.respondWith((async()=>{const c=await caches.open(CACHE); const hit=await c.match(e.request,{ignoreSearch:true}); if(hit)return hit; try{return await fetch(e.request);}catch(err){return (await c.match('./'))||Response.error();}})());});
