import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBDjPdHrwrIWtK_SuPqTYmzxDO2SAZerDU",
  authDomain: "adarsh-portfolio-10a06.firebaseapp.com",
  projectId: "adarsh-portfolio-10a06",
  storageBucket: "adarsh-portfolio-10a06.appspot.com",
  messagingSenderId: "478728821809",
  appId: "1:478728821809:web:b6f550577132835d184910",
  measurementId: "G-DFHBT2WTMS"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore()