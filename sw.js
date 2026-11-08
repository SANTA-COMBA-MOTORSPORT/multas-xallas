// Service worker mínimo: permite instalar a app no móbil. Non garda datos en caché (sempre datos en directo).
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* deixa pasar todas as peticións á rede */ });
