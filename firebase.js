import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
 apiKey: "AIzaSyBhKcswVxtGiLA_FgMKPndTpkZ3ZPucs0E",
 authDomain: "pantry-tracker-24a27.firebaseapp.com",
 projectId: "pantry-tracker-24a27",
 storageBucket: "pantry-tracker-24a27.appspot.com",
 messagingSenderId: "639261982698",
 appId: "1:639261982698:web:c71f4f2c9c42a8fcfa3c93"
 };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };