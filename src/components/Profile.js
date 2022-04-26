import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile__container">
      <div className="profile__topSection">
        <img src="https://randomuser.me/api/portraits/med/men/75.jpg" alt="" />
        <div className="profile__topSection-right">
          <div className="username__container">
            <h2>username</h2>
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
  );
};

export default Profile;
