// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVwQsyO8ine95xZp7ngkR2RkIcNwmC13o",
  authDomain: "jalsa-registration.firebaseapp.com",
  projectId: "jalsa-registration",
  storageBucket: "jalsa-registration.appspot.com",
  messagingSenderId: "179191723309",
  appId: "1:179191723309:web:560c6f6f1935b79a4acfa4",
  measurementId: "G-L4GZ8J7JHW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
