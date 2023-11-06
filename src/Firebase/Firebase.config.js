// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.AUTH_apiKey,
  authDomain: import.meta.env.AUTH_authDomain,
  projectId: import.meta.env.AUTH_projectId,
  storageBucket: import.meta.env.AUTH_storageBucket,
  messagingSenderId: import.meta.env.AUTH_messagingSenderId,
  appId: import.meta.env.AUTH_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app