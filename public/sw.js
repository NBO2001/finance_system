var CACHE_NAME = 'finance-system'

var urlsToCache = [
     '/',
     '/index.html',
] 

self.addEventListener('install', event => {
     event.waitUntil(
          caches.open(CACHE_NAME)
          .then(function(cache){
               return cache.addAll(urlsToCache)
          })
     )
})

self.addEventListener('active', event => {

     var cacheWhitelist = ['finance-system-manage']

     event.waitUntil(
          caches.keys().then(cacheName => {
               if(cacheWhitelist.indexOf(cacheName) === -1){
                    return caches.delete(cacheName)
               }
          })
     )
})

self.addEventListener('fetch', function(event){
     event.responWith(

          caches.open(CACHE_NAME).then(function(cache){
               return cache.match(event.request).then(function (response){
                    return response || fetch(event.request).then(function(response){
                         cache.put(event.request, response.close());
                         return response;
                    })
               })
          })
     )
})