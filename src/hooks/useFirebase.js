import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();

const useFirebase = () => {
      const [user, setUser] = useState({});
      const googleprovider = new GoogleAuthProvider();
      const auth = getAuth();
      const signInGoogle = () => {
            return signInWithPopup(auth, googleprovider)
                  
      }

      const logout = () => {
            signOut(auth)
                  .then(() => {
                        setUser({})
                  })
      }

      useEffect(() => {
            onAuthStateChanged(auth, (user) => {
                  if (user) {
                        setUser(user)
                  }
            });
      }, [])

      return {
            user,
            signInGoogle,
            logout
      }
}

export default useFirebase;