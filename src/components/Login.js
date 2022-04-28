import "./Login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { signIn, signInWithGoogle } = UserAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate("/profile");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <>
      <div className="login__outerDiv">
        <div className="login__container">
          <h3>Instagram</h3>
          <form className="inputs__container" onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="login__button" onClick={handleLogin}>
              Log In
            </button>
          </form>
          <div className="line_or_line">
            <div className="line"></div>
            <div>OR</div>
            <div className="line"></div>
          </div>
          <button
            onClick={signInWithGoogle}
            className="signin__withGoogleButton"
          >
            Log in with Google
          </button>
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
