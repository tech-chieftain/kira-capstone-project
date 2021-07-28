import * as Firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyADigYReEaAkwaTOMUT3n-0DdHxgThzk94",
  authDomain: "kira-freelancer-app.firebaseapp.com",
  projectId: "kira-freelancer-app",
  storageBucket: "kira-freelancer-app.appspot.com",
  messagingSenderId: "599866219282",
  appId: "1:599866219282:web:1b5f10c7d88ddc4736f1cb"
};
// Initialize Firebase
!Firebase.apps.length ? Firebase.initializeApp(firebaseConfig) : Firebase.app();

export default Firebase;
