// Service worker mínimo — existe só para o Chrome/Edge no PC oferecerem
// a opção de instalar o InfraDoc como app (criar ícone do sistema).
// Não guarda nada em cache, não força controle imediato da página
// (sem skipWaiting/clients.claim) e não interfere no carregamento.
// No celular este arquivo nunca é registrado — ver o <script> no <head>.
self.addEventListener('install', () => {});
self.addEventListener('activate', () => {});
self.addEventListener('fetch', () => {});
