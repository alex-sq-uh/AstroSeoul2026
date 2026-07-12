/* Service worker de AstroSeoul2026 — cachea la app para uso sin conexión.
   Sube CACHE_VERSION cuando cambies index.html para forzar la actualización. */
var CACHE = "astroseoul-v7";
var ASSETS = [
  "./",
  "./index.html",
  "./og.jpg",
  "./manifest.webmanifest",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", function(e){
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(ASSETS); }).catch(function(){}));
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){ if(k !== CACHE) return caches.delete(k); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function(e){
  var req = e.request;
  if(req.method !== "GET") return;
  var url = new URL(req.url);
  /* Solo gestionamos lo que es del propio sitio; el resto (Maps, tiendas,
     API de cambio) va directo a la red. */
  if(url.origin !== self.location.origin) return;

  if(req.mode === "navigate"){
    /* Páginas: red primero, y si no hay conexión, servimos la copia cacheada. */
    e.respondWith(
      fetch(req).then(function(res){
        var copy = res.clone();
        caches.open(CACHE).then(function(c){ c.put(req, copy); });
        return res;
      }).catch(function(){ return caches.match(req).then(function(m){ return m || caches.match("./index.html"); }); })
    );
    return;
  }
  /* Recursos: cache primero, con respaldo de red. */
  e.respondWith(
    caches.match(req).then(function(m){
      return m || fetch(req).then(function(res){
        var copy = res.clone();
        caches.open(CACHE).then(function(c){ c.put(req, copy); });
        return res;
      });
    }).catch(function(){})
  );
});
