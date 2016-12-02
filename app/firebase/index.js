import firebase from 'firebase';

try {
  // Use try / catch block to ensure that DB only initializes once2
  var config = {
    apiKey: "AIzaSyARnm279I_T8TFfaIhDshf-DPI64pQCu4g",
    authDomain: "react-redux-todo-c30af.firebaseapp.com",
    databaseURL: "https://react-redux-todo-c30af.firebaseio.com",
    storageBucket: "react-redux-todo-c30af.appspot.com",
    messagingSenderId: "1060477495480"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
// by exporting the root firebase library
export default firebase;
