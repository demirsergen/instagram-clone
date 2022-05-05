import React, { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import "./AddPost.css";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

const AddPost = () => {
  const { uploadPhoto } = UserAuth();
  const [file, setFile] = useState(null);

  const handleUpload = async (e) => {
    e.preventDefault();
    const fileToUpload = file;
    try {
      await uploadPhoto(fileToUpload);
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <>
      <div className="addPost__container">
        <div className="addPost__title-container">
          <h2>Create new post</h2>
        </div>
        <div className="addPost__button-container">
          <AddBoxOutlinedIcon fontSize="large" className="icon" />
          <input
            type="file"
            id="file_to_upload"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button className="upload__button" onClick={handleUpload}>
            Upload
          </button>
        </div>
      </div>
    </>
  );
};

export default AddPost;
