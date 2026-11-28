// Handbuch offline: erst Netz (damit Aenderungen sofort ankommen), sonst Kopie.
const CACHE = 'lpr-handbuch-v20261128';
const DATEIEN = ['./', '../kurs-inhalt.js?v20261128'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(DATEIEN)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(k => k.startsWith('lpr-handbuch-') && k !== CACHE).map(k => caches.delete(k))
  )).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const eigen = url.origin === self.location.origin;
  const schrift = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (!eigen && !schrift) return;
  e.respondWith(
    fetch(req).then(res => {
      if (res.ok || res.type === 'opaque') {
        const kopie = res.clone();
        caches.open(CACHE).then(c => c.put(req, kopie));
      }
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: req.mode === 'navigate' }))
  );
});
