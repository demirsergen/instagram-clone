import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import { UserAuth } from "../context/AuthContext";

const Profile = () => {
  const { logout, user } = UserAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    if (user === null) {
      navigate("/");
    }
  }, []);
  return (
    <>
      {user && (
        <div className="profile__container">
          <div className="profile__topSection">
            <img
              src="https://randomuser.me/api/portraits/med/men/75.jpg"
              alt=""
            />
            <div className="profile__topSection-right">
              <div className="username__container">
                <h3>Email: {user.email}</h3>
                <button onClick={handleLogout}>Logout</button>
              </div>
              <div className="counts__container">
                <p className="posts__count">{user.userPosts} posts</p>
                <p className="followers__count">
                  {user.userFollowers} followers
                </p>
                <p className="following__count">
                  {user.userFollowing} following
                </p>
              </div>
              <div className="name">
                <p>name</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
