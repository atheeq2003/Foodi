// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// console.log(import.meta.env.VITE_SOME_KEY)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjqmM2kY4y1gUh0X6kHkqaUDHyNN6_Gr4",
  authDomain: "foodi-client-804ae.firebaseapp.com",
  projectId: "foodi-client-804ae",
  storageBucket: "foodi-client-804ae.appspot.com",
  messagingSenderId: "81836557741",
  appId: "1:81836557741:web:7a3e41385d198dc2ea0d24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;