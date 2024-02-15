import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";


    const firebaseConfig = {
      apiKey: "AIzaSyA6V-pRE7uHO9VKBNU0H3sUaWOhix6sQVE",
      authDomain: "first-vue-project-32a4a.firebaseapp.com",
      databaseURL: "https://first-vue-project-32a4a-default-rtdb.firebaseio.com",
      projectId: "first-vue-project-32a4a",
      storageBucket: "first-vue-project-32a4a.appspot.com",
      messagingSenderId: "429235692290",
      appId: "1:429235692290:web:5b744979666bccc659981b"
  };


export default firebase.initializeApp(firebaseConfig);
