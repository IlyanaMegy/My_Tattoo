import "firebase/auth";
import firebase from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC908V0mld28eYz0APwSft8rS1DMXjWTuA",
  authDomain: "my-tattoo-1f09c.firebaseapp.com",
  projectId: "my-tattoo-1f09c",
  storageBucket: "my-tattoo-1f09c.appspot.com",
  messagingSenderId: "178069571500",
  appId: "1:178069571500:web:6f2b94e3cae72396d75c09"
};


// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}


// Initialize Firebase Authentication and get a reference to the service
const auth = firebase.auth();
export { auth };

