import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();

  const createUser = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      async (user) => {
        await addDoc(collection(db, "users"), {
          userId: user.user.uid,
          userEmail: user.user.email,
          userPosts: 0,
          userFollowing: 0,
          userFollowers: 0,
        });
        console.log(user);
      }
    );
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider);
  };

  const uploadPhoto = (fileName) => {
    const photosRef = ref(storage, `images/${fileName.name}`);
    uploadBytes(photosRef, fileName).then((snapshot) => {
      alert("Upload successful!");
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider
      value={{
        createUser,
        signIn,
        logout,
        signInWithGoogle,
        uploadPhoto,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
