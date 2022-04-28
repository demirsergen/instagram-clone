import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6krT9bDn3ZNSczImqPnytQMDpqAes35o",
  authDomain: "instagram-clone-46781.firebaseapp.com",
  projectId: "instagram-clone-46781",
  storageBucket: "instagram-clone-46781.appspot.com",
  messagingSenderId: "608650574497",
  appId: "1:608650574497:web:55c3bd319127b36d140ee0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
