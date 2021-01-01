import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDBNHpoQn_TbMfyZfEfrAu_Ot5KRLchhqs",
  authDomain: "gram-6d28b.firebaseapp.com",
  databaseURL: "https://gram-6d28b.firebaseio.com",
  projectId: "gram-6d28b",
  storageBucket: "gram-6d28b.appspot.com",
  messagingSenderId: "371543863055",
  appId: "1:371543863055:web:d8936ffda3e57bc7f4d87a",
  measurementId: "G-WYPV1N556N"
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
 
export {db,auth,storage};