const CACHE_NAME = 'scalpel-v1';
const assets = ['./', './index.html', './manifest.json'];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(assets);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.url).catch(() => caches.match(event.request))
    );
});
