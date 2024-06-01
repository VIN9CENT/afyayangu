import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth,signOut} from "firebase/auth"
import { getDatabase } from 'firebase/database';
const FirebaseConfig = {
  apiKey: "AIzaSyDN_nSrWSlim3bsIzF6aP1ZPeb9WEGFcZQ",
  authDomain: "afya-yangu-clone-9186d.firebaseapp.com",
  databaseURL: "https://afya-yangu-clone-9186d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "afya-yangu-clone-9186d",
  storageBucket: "afya-yangu-clone-9186d.appspot.com",
  messagingSenderId: "328627299303",
  appId: "1:328627299303:web:5c196e7b6b90616d565342",
  measurementId: "G-02NVP99KRN"
};

// Initialize Firebase
  const app = initializeApp(FirebaseConfig);
  const analytics = getAnalytics(app);
  const  auth =getAuth(app);
  const AuthProvider = new GoogleAuthProvider();
  const database = getDatabase(app);

  const user = auth.currentUser
  const isUser = user == null ? false : true

  export {auth,AuthProvider, database,user,isUser,signOut};