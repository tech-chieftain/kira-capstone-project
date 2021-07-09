import * as Firebase from "firebase";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "API_KEY",
//   authDomain: "AUTH-DOMAIN",
//   databaseURL: "DATABASE_URL",
//   projectId: "PROJECT_ID",
//   storageBucket: "STORAGE_BUCKET",
//   messagingSenderId: "MESSAGING_SENDER_ID",
//   appId: "APP_ID",
//   measurementId: "MEASUREMENT_ID",
// };
var firebaseConfig = {
  apiKey: "AIzaSyD8p3sWlX_ef2-yrEGwnzv4ekPlqQawhqQ",
  authDomain: "kira-freelance-app.firebaseapp.com",
  projectId: "kira-freelance-app",
  storageBucket: "kira-freelance-app.appspot.com",
  messagingSenderId: "734137959084",
  appId: "1:734137959084:web:87a775570291e8ecd09509"
};

// Initialize Firebase
Firebase.initializeApp(firebaseConfig);

export default Firebase;
