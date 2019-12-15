/* eslint-disable */
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: 'AIzaSyC1eMI4ek5ta6zGGRje6NPOnHdtwc-b3nQ',
  authDomain: 'partyplanner-c76a2.firebaseapp.com',
  databaseURL: 'https://partyplanner-c76a2.firebaseio.com',
  projectId: 'partyplanner-c76a2',
  storageBucket: 'partyplanner-c76a2.appspot.com',
  messagingSenderId: '115558485597',
  appId: '1:115558485597:web:6a85b1da3500e426a307b4'
});

firebase.messaging();

// workbox.skipWaiting();
// workbox.clientsClaim();

// workbox.routing.registerRoute(
//   /static\/.*\.(?:png|jpg|jpeg|svg)$/,
//   new workbox.strategies.CacheFirst({
//     cacheName: 'images',
//     plugins: [
//       new workbox.expiration.Plugin({
//         maxEntries: 60,
//         maxAgeSeconds: 30 * 24 * 60 * 60 // 30 Days
//       })
//     ]
//   })
// );

// workbox.precaching.precacheAndRoute(self.__precacheManifest);
