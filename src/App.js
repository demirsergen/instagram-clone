import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Messages from "./components/Messages";
import AddPost from "./components/AddPost";
import Explore from "./components/Explore";
import Notifications from "./components/Notifications";
import Posts from "./components/Posts";
import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="" element={<Posts />}></Route>
        <Route path="messages" element={<Messages />}></Route>
        <Route path="addpost" element={<AddPost />}></Route>
        <Route path="explore" element={<Explore />}></Route>
        <Route path="notifications" element={<Notifications />}></Route>
        <Route path="profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
