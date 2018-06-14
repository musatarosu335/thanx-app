import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import ENV from '../env.json';
import store from './store';

import App from './components/App';

// Firebase setting
const config = {
  apiKey: ENV.FIREBASE_API_KEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PRJ_ID,
  storageBucket: ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
};
firebase.initializeApp(config);
// Enables the use of Timestamps for timestamp fields in DocumentSnapshots.
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestore.settings(settings);

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
