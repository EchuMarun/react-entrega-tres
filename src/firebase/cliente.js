import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyD5oZglRbat446GFQ7srMnB6WNWBdkPB7c",
    authDomain: "entregareact-791be.firebaseapp.com",
    projectId: "entregareact-791be",
    storageBucket: "entregareact-791be.appspot.com",
    messagingSenderId: "839955528469",
    appId: "1:839955528469:web:65effa7fb6cb31d980471c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);  