// TODO: Create Firebase Auth Functions

import { signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";


export const loginUser = (email: string, password: string) => {

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("User logged in:", user.email);
                // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log("Error Message:", errorMessage);
        });
}

// Create Register Functionality &  Register Functionality
export const registerUser = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    try {
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        createdAt: new Date(),
      });
      console.log("User added to Firestore:", user.email);
    } catch (firestoreError) {
      console.error("Firestore write error:", firestoreError);
    }

    return user;
  } catch (error) {
    console.error("Registration error:", (error as Error).message);
    throw error;
  }
};



export const logoutUser = () => {
    signOut(auth)
        .then(() => {
            console.log("User logged out successfully");
        })
}

export const getUserInfo = () => {
    const user = auth.currentUser;
    if (user) {
        return user;
    } else {
        return null;
    }
}