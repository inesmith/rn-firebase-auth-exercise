// TODO: Create Firebase Auth Functions

import { signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../firebase"



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

// TODO: Create Register Functionality &  Register Functionality


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