import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiXTTE-oEt5SnQr691BmdA-zloJdhATTk",
  authDomain: "jorgeecommerce-3cddd.firebaseapp.com",
  projectId: "jorgeecommerce-3cddd",
  storageBucket: "jorgeecommerce-3cddd.appspot.com",
  messagingSenderId: "475756286832",
  appId: "1:475756286832:web:463bf8f5d9b3fa497fb5b5",
  measurementId: "G-PXR064TCP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)