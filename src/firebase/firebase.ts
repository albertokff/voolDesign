// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBjoMVcanOaQpowZzWArYrgYRo0pBzxUT4",
    authDomain: "manipulator-78161.firebaseapp.com",
    projectId: "manipulator-78161",
    storageBucket: "manipulator-78161.appspot.com",
    messagingSenderId: "186551780692",
    appId: "1:186551780692:web:f663c17057c53e189274c1",
    measurementId: "G-0K29E8PQCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Auth
const auth = getAuth(app);

export { app, db, auth };
