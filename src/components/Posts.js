import React, { useState, useEffect } from "react";
import "./Posts.css";
import Post from "./Post";

const Posts = () => {
  const [users, setUsers] = useState([
    {
      username: "johndoe",
      profilePic: "https://randomuser.me/api/portraits/med/men/75.jpg",
      imageUrl:
        "https://images.unsplash.com/photo-1650839322343-532cd49f1127?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
      likesCount: 134,
      caption: "Beautiful Day!",
    },
    {
      username: "malikdoe",
      profilePic: "https://randomuser.me/api/portraits/med/men/35.jpg",
      imageUrl:
        "https://images.unsplash.com/photo-1650830907181-b62870405217?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
      likesCount: 334,
      caption: "Prettinessss!",
    },
  ]);

  return (
    <div className="posts">
      {users.map((user, index) => (
        <Post key={index} userData={user} />
      ))}
    </div>
  );
};

export default Posts;
