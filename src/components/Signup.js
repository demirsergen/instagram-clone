import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { createUser, signInWithGoogle, user } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(email, password);
      navigate("/profile");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <>
      {!user && (
        <div className="signup__outerDiv">
          <div className="signup__container">
            <h3>Instagram</h3>
            <p>Sign up to see photos and videos from your friends.</p>
            <button
              onClick={signInWithGoogle}
              className="signin__withGoogleButton"
            >
              Log in with Google
            </button>
            <div className="line_or_line">
              <div className="line"></div>
              <div>OR</div>
              <div className="line"></div>
            </div>
            <form className="inputs__container" onSubmit={handleSubmit}>
              <input
                type="text"
                name="email"
                id="signup__email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                name="password"
                id="signup__password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="signup__button">Sign up</button>
            </form>
          </div>
          <div className="signin__link-container">
            <span>Have an account?</span>
            <Link to="/" className="signin__link">
              Sign In
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Signup;
