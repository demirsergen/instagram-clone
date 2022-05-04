import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { addDoc, collection, setDoc } from "firebase/firestore";

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // const usersCollectionRef = collection(db, "users");
  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(usersCollectionRef);
  //     console.log(data);
  //   };
  //   getUsers();
  // }, []);

  return (
    <UserContext.Provider
      value={{ createUser, signIn, logout, signInWithGoogle, user }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
