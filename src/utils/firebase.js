import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAvDriXYC7mGwKj4QmYIIo5yIMhQtjAmR8",
  authDomain: "portfolio-contact-37e8f.firebaseapp.com",
  projectId: "portfolio-contact-37e8f",
  storageBucket: "portfolio-contact-37e8f.firebasestorage.app",
  messagingSenderId: "1004342771460",
  appId: "1:1004342771460:web:9672060b09a719cf465a51",
  measurementId: "G-EEH6LH409H"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)