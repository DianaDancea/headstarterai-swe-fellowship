// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCap8z4uv_z06y_6V1Py4-NAgibTQYyKEg",
  authDomain: "inventory-management-app-hs.firebaseapp.com",
  projectId: "inventory-management-app-hs",
  storageBucket: "inventory-management-app-hs.appspot.com",
  messagingSenderId: "370347772035",
  appId: "1:370347772035:web:cb09816a1d0602e0d933b6",
  measurementId: "G-ZJXVY767MK",
  storageBucket: "inventory-management-app-hs.appspot.com"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore and export it
const firestore = getFirestore(app);
export { firestore };
