import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Header = () => {
  return (
    <div className="header__container">
      <div className="header">
        <h2>Instagram</h2>
        <div className="header__searchbox-container">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
        <div className="header__navlinks-container">
          <Link to="/">
            <HomeOutlinedIcon fontSize="large" />
          </Link>
          <Link to="/messages">
            <InboxOutlinedIcon fontSize="large" />
          </Link>
          <Link to="/addpost">
            <AddBoxOutlinedIcon fontSize="large" />
          </Link>
          <Link to="/explore">
            <ExploreOutlinedIcon fontSize="large" />
          </Link>
          <Link to="notifications">
            <FavoriteBorderOutlinedIcon fontSize="large" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
