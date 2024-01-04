import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAdVO4pr-Gvcp0G4-reIKAIpWO21MbF2BU",
    authDomain: "react-78532.firebaseapp.com",
    projectId: "react-78532",
    storageBucket: "react-78532.appspot.com",
    messagingSenderId: "840897425688",
    appId: "1:840897425688:web:daade164cadd8e8ca1ee6d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);  