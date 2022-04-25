import React from "react";
import "./Post.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

const Post = ({ userData }) => {
  return (
    <div className="post__container">
      <div className="post__header">
        <img src={userData.profilePic} alt="profile-pic" />
        <span>
          <strong>{userData.username}</strong>
        </span>
      </div>
      <div className="image__container">
        <img src={userData.imageUrl} alt="" />
      </div>
      <div className="buttons__container">
        <button>
          <FavoriteBorderOutlinedIcon />
        </button>
        <button>
          <ChatBubbleOutlineOutlinedIcon />
        </button>
      </div>
      <div className="post__info">
        <span className="post__info-likes">{userData.likesCount} likes</span>
        <div className="post__info-username-caption-container">
          <span className="post__info-username">
            <strong>{userData.username}</strong>
          </span>
          <span className="post__info-caption">{userData.caption}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
