import React from "react";
import { useNavigate } from "react-router-dom";

import "./Profile.css";
import { UserAuth } from "../context/AuthContext";

const Profile = () => {
  const { logout } = UserAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <>
      <div className="profile__container">
        <div className="profile__topSection">
          <img
            src="https://randomuser.me/api/portraits/med/men/75.jpg"
            alt=""
          />
          <div className="profile__topSection-right">
            <div className="username__container">
              <h2>username</h2>
              <button onClick={handleLogout}>Logout</button>
            </div>
            <div className="counts__container">
              <p className="posts__count">21 posts</p>
              <p className="followers__count">214 followers</p>
              <p className="following__count">200 following</p>
            </div>
            <div className="name">
              <p>name</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
