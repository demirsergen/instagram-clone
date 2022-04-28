import "./App.css";
// import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Messages from "./components/Messages";
import AddPost from "./components/AddPost";
import Home from "./components/Home";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/messages" element={<Messages />}></Route>
          <Route path="/addpost" element={<AddPost />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
