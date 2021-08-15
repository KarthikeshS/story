import * as firebase from 'firebase'
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyCxl0VW3mjK5HgLwTqQZmacUC1_mBGgjpc",
    authDomain: "wily-app-803b9.firebaseapp.com",
    projectId: "wily-app-803b9",
    storageBucket: "wily-app-803b9.appspot.com",
    messagingSenderId: "785662531353",
    appId: "1:785662531353:web:c27478c4ef1e693f9d5788"
  };
  firebase.initializeApp(firebaseConfig)
  export default firebase.firestore()