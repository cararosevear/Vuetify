import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyDKNM--kAfiZJl_5aLKVWodHrzoiMKvsPo',
  authDomain: 'vuejs-68dc1.firebaseapp.com',
  databaseURL: 'https://vuejs-68dc1.firebaseio.com',
  projectId: 'vuejs-68dc1',
  storageBucket: 'vuejs-68dc1.appspot.com',
  messagingSenderId: '196667424354'
}
firebase.initializeApp(config)

export default {
  database: firebase.database()
}
