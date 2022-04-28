import React from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

const Header = () => {
  const { user } = UserAuth();

  return (
    user && (
      <div className="header__container">
        <div className="header">
          <h2>Instagram</h2>
          <div className="header__searchbox-container">
            <SearchIcon />
            <input type="text" placeholder="Search" />
          </div>
          <div className="header__navlinks-container">
            <Link to="/home">
              <HomeOutlinedIcon fontSize="large" className="icon" />
            </Link>
            <Link to="/messages">
              <InboxOutlinedIcon fontSize="large" className="icon" />
            </Link>
            <Link to="/addpost">
              <AddBoxOutlinedIcon fontSize="large" className="icon" />
            </Link>
            <Link to="/profile">
              <img
                src="https://randomuser.me/api/portraits/med/men/75.jpg"
                alt="avatar"
                className="avatar"
              />
            </Link>
          </div>
        </div>
      </div>
    )
  );
};

export default Header;
