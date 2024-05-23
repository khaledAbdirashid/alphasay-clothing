import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore, setDoc, getDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBmY5tyj57O65uNOf_xoj1o-UYhZUjzzf8",
  authDomain: "alphasay-clothing-db.firebaseapp.com",
  projectId: "alphasay-clothing-db",
  storageBucket: "alphasay-clothing-db.appspot.com",
  messagingSenderId: "1048406754472",
  appId: "1:1048406754472:web:4c499d28fc613528adee9d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth(app);

export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDoc = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const snapShot = await getDoc(userDocRef);
  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return userDocRef;
};
