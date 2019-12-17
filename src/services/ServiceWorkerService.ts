export default function registerServiceWorker(): Promise<
  ServiceWorkerRegistration
> {
  return new Promise((resolve, reject) => {
    const isSwAvailable = 'serviceWorker' in navigator;
    if (!isSwAvailable) reject('sw not supported');
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(resolve)
      .catch(reject);
  });
}
