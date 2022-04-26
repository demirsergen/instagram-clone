import "./Login.css";
import { Link } from "react-router-dom";

import React from "react";

const Login = () => {
  return (
    <>
      <div className="login__outerDiv">
        <div className="login__container">
          <h3>Instagram</h3>
          <div className="inputs__container">
            <input
              type="text"
              name="username"
              id="login__username"
              placeholder="username"
            />
            <input
              type="password"
              name="password"
              id="login__password"
              placeholder="password"
            />
            <button className="login__button">Log In</button>
          </div>
          <div class="line_or_line">
            <div class="line"></div>
            <div>OR</div>
            <div class="line"></div>
          </div>
        </div>
        <div className="signup__link-container">
          <span>Don't have an account?</span>
          <Link to="/signup" className="signup__link">
            Sign up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
