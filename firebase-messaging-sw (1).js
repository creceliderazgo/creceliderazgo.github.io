// firebase-messaging-sw.js
// Este archivo debe subirse en la RAÍZ del mismo sitio donde vive app.html
// (mismo nivel, no dentro de una carpeta), para que el navegador pueda
// usarlo como Service Worker de notificaciones en segundo plano.

importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

// IMPORTANTE: estos valores deben coincidir EXACTAMENTE con los que
// pusiste en app.html (FIREBASE_CONFIG). Cópialos de ahí.
firebase.initializeApp({
  apiKey: "AIzaSyA9KtmJv5cRmA_GKfUyGeyDser34k06auo",
  authDomain: "crece-liderazgo-app.firebaseapp.com",
  projectId: "crece-liderazgo-app",
  storageBucket: "crece-liderazgo-app.firebasestorage.app",
  messagingSenderId: "113309443769",
  appId: "1:113309443769:web:52d77a0e1531fa33e65d68"
});

const messaging = firebase.messaging();

// Firebase maneja automáticamente mostrar la notificación cuando la
// app está en segundo plano o cerrada — no se necesita código extra aquí
// salvo personalizar el ícono o el comportamiento al hacer click.

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(
    clients.matchAll({ type: 'window' }).then(function(clientList) {
      for (const client of clientList) {
        if ('focus' in client) return client.focus();
      }
      if (clients.openWindow) return clients.openWindow('/');
    })
  );
});
