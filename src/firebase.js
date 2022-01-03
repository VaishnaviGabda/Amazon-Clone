
import firebase  from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyA68jzkoPe1aC7LnIQXzaBMbeAfA0gJa-U",
  authDomain: "challenge-a3c51.firebaseapp.com",
  projectId: "challenge-a3c51",
  storageBucket: "challenge-a3c51.appspot.com",
  messagingSenderId: "236410534612",
  appId: "1:236410534612:web:ed2b8a93d920f1376e9941",
  measurementId: "G-LG05G5Z0ZP"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db ,auth };