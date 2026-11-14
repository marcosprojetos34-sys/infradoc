// Service worker mínimo — existe só para o Chrome/Edge no PC oferecerem
// a opção de instalar o InfraDoc como app (criar atalho). Não guarda
// nada em cache nem interfere no carregamento das páginas.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
