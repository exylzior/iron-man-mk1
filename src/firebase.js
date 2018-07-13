import firebase from 'firebase/app';
import 'firebase/firestore'
const config = {
    apiKey: "AIzaSyD7nYoZvAmgTB7SdlNdNi_NSFoBmAXipOI",
    authDomain: "iron-man-mk1.firebaseapp.com",
    databaseURL: "https://iron-man-mk1.firebaseio.com",
    projectId: "iron-man-mk1",
    storageBucket: "iron-man-mk1.appspot.com",
    messagingSenderId: "648181484772"
  };
 
  const init = firebase.initializeApp(config);
  const database = init.firestore();
  const settings = { timestampsInSnapshots:true}
  database.settings(settings);
  

  // export default firebase;
  export default database;