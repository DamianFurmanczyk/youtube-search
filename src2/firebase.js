import firebase from "firebase";

var config = {
  apiKey: "AIzaSyAN31JTXEaab3cC3WPEewuKrZase8KFf1M",
  authDomain: "yt-mighty-search.firebaseapp.com",
  databaseURL: "https://yt-mighty-search.firebaseio.com",
  projectId: "yt-mighty-search",
  storageBucket: "yt-mighty-search.appspot.com",
  messagingSenderId: "1010916146078"
};
firebase.initializeApp(config);

export default firebase;

export const db = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
