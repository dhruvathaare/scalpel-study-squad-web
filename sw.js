self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
    // This allows the app to load normally while satisfying Chrome's PWA rules
    event.respondWith(fetch(event.request));
});
