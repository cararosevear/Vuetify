import firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyCXNUuMMIIUQWQoN7uLFaxrjg0E0w0lorE',
  authDomain: 'projectvuejs.firebaseapp.com',
  databaseURL: 'https://projectvuejs.firebaseio.com',
  projectId: 'projectvuejs',
  storageBucket: 'projectvuejs.appspot.com',
  messagingSenderId: '236372578048'
}
firebase.initializeApp(config)

export default {
  database: firebase.database()
}
