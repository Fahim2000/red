import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();
const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const logInUsingGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const signUpWithEmailAndPassword = (email, password, name) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        console.log(1);
        updateProfile(auth.currentUser, {
          displayName: name,
        });
        window.location.reload();
        // setRender(true);

        console.log(2);
      })

      .catch((error) => {
        console.log(error.message);
      });
  };
  const emailAndPasswordSignIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  // const setDisplayName = (name) => {
  //   updateProfile(auth.currentUser, {
  //     displayName: name,
  //   })
  //     .then(() => {
  //       // Profile updated!
  //       // ...
  //       // console.log(user.displayName, user.email);
  //     })
  //     .catch((error) => {
  //       // An error occurred
  //       // ...
  //     });
  // };
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("fgfdg");
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
        // ...
        setUser({});
      }
    });
  }, [auth]);

  return {
    logInUsingGoogle,
    signUpWithEmailAndPassword,

    emailAndPasswordSignIn,
    logOut,
    user,
    setUser,
  };
};
export default useFirebase;
