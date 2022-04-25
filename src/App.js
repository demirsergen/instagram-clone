import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Messages from "./components/Messages";
import AddPost from "./components/AddPost";
import Explore from "./components/Explore";
import Notifications from "./components/Notifications";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="messages" element={<Messages />}></Route>
        <Route path="addpost" element={<AddPost />}></Route>
        <Route path="explore" element={<Explore />}></Route>
        <Route path="notifications" element={<Notifications />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
