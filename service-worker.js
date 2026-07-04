// public/service-worker.js
const CACHE_NAME = 'nehaavashisht-cache-v1';
const urlsToCache = [
    "./",
  "./index.html",
  "./style.css",
  "./manifest.json",
  "./images/Porsche_911_GT3_RS_1.jpg",
  "./images/Porsche_911_GT3_RS_2.jpg",
  "./images/Porsche_911_GT3_RS_3.jpg",
  "./images/Porsche_911_GT3_RS_4.jpeg",
  "./images/Porsche_911_GT3_RS_5.jpg",
  "./images/Porsche_911_GT3_RS_6.jpg",
  "./images/Porsche_911_GT3_RS_7.jpg",
  "./images/Porsche_911_GT3_RS_8.jpg",
  "./images/Porsche_911_GT3_RS_9.jpg",
  "./images/Porsche_911_GT3_RS_10.jpg",
  "./images/Porsche_911_GT3_RS_11.jpg",
  "./images/Porsche_911_GT3_RS_12.jpg",
  "./images/Porsche_911_GT3_RS_FOR_MOBILE.png",
  "./images/bg.png"
];

// Install a service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Cache and return requests
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request)
          .then(response => {
            // Don't cache if it's not a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clone the response since it's a stream (can only be consumed once)
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then(cache => {
                // Add the request/response pair to the cache
                cache.put(event.request, responseToCache);
              });
              
            return response;
          });
      })
  );
});

// Update the service worker
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            // Delete outdated caches
            return caches.delete(cacheName);
          }
          return null;
        })
      );
    })
  );
});