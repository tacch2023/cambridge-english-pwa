const CACHE='cambridge-pwa-v0.2.0';
const FILES=['./','./index.html','./style.css','./app.js','./data/01_question_bank.json','./manifest.webmanifest','./icon.svg','./icon-180.png','./icon-192.png','./icon-512.png','./docs/02_AI_protocol.md'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(a=>Promise.all(a.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request))) });
