import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  return (
    <>
      <div className="signup__outerDiv">
        <div className="signup__container">
          <h3>Instagram</h3>
          <p>Sign up to see photos and videos from your friends.</p>
          <div class="line_or_line">
            <div class="line"></div>
            <div>OR</div>
            <div class="line"></div>
          </div>
          <div className="inputs__container">
            <input
              type="text"
              name="email"
              id="signup__email"
              placeholder="Email"
            />
            <input
              type="text"
              name="fullname"
              id="signup__fullname"
              placeholder="Full Name"
            />
            <input
              type="text"
              name="username"
              id="signup__username"
              placeholder="Username"
            />
            <input
              type="password"
              name="password"
              id="signup__password"
              placeholder="Password"
            />
            <button className="signup__button">Sign up</button>
          </div>
        </div>
        <div className="signin__link-container">
          <span>Have an account?</span>
          <Link to="/login" className="signin__link">
            Sign In
          </Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
