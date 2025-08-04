// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env.API_KEY,
	authDomain: "swiggy-c9eda.firebaseapp.com",
	projectId: "swiggy-c9eda",
	storageBucket: "swiggy-c9eda.firebasestorage.app",
	messagingSenderId: "571518974299",
	appId: process.env.APP_ID,
	measurementId: "G-W7T1ZFZV2W",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;