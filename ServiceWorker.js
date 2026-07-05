const CACHE_NAME = 'adam-portfolio';
const ASSETS_TO_CACHE = [
  '/BesbesAdam/',
  '/BesbesAdam/index.html',
]

// Perform install steps 
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Cache and return requests 
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.requests).then((response) => {
      // Cache hit - return response 
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
