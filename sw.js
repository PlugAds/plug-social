// Necessário para o Chrome oferecer "Instalar app". Não guarda nada em cache: a plataforma sempre carrega a versão atual.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
