import * as Firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyD8p3sWlX_ef2-yrEGwnzv4ekPlqQawhqQ",
    authDomain: "kira-freelance-app.firebaseapp.com",
    projectId: "kira-freelance-app",
    storageBucket: "kira-freelance-app.appspot.com",
    messagingSenderId: "734137959084",
    appId: "1:734137959084:web:cb0f308db3947ca6d09509"
};
// Initialize Firebase
!Firebase.apps.length ? Firebase.initializeApp(firebaseConfig) : Firebase.app();

export default Firebase;
