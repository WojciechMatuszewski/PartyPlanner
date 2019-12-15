import firebase from 'firebase/app';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyC1eMI4ek5ta6zGGRje6NPOnHdtwc-b3nQ',
  authDomain: 'partyplanner-c76a2.firebaseapp.com',
  databaseURL: 'https://partyplanner-c76a2.firebaseio.com',
  projectId: 'partyplanner-c76a2',
  storageBucket: 'partyplanner-c76a2.appspot.com',
  messagingSenderId: '115558485597',
  appId: '1:115558485597:web:6a85b1da3500e426a307b4'
};

let firebaseInstance: firebase.app.App;
let swInitialized = false;

function init() {
  if (firebaseInstance || firebase.apps.length != 0) return;
  firebaseInstance = firebase.initializeApp(firebaseConfig);
}

function initWithSw(registration: ServiceWorkerRegistration) {
  if (swInitialized) return;
  init();
  firebaseInstance.messaging().useServiceWorker(registration);
  swInitialized = true;
}

function requestNotificationsPermissions() {
  if (!firebaseInstance) throw Error('not initialized');
  return firebaseInstance.messaging().getToken();
}

function get() {
  return firebaseInstance;
}

export default {
  get,
  init: initWithSw,
  requestNotificationsPermissions
};
