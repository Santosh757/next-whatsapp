import firebase from "firebase";

const firebaseConfig = {
  apiKey: "Your firebase apiKey",
  authDomain: "next-whatsapp-7cde1.firebaseapp.com",
  projectId: "next-whatsapp-7cde1",
  storageBucket: "next-whatsapp-7cde1.appspot.com",
  messagingSenderId: "527355768768",
  appId: "1:527355768768:web:ce45d52844026195136225",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };

