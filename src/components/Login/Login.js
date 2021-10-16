import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo2.png";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logInUsingGoogle, emailAndPasswordSignIn } = useAuth();
  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  const handleGoogleLogIn = (e) => {
    e.preventDefault();
    logInUsingGoogle();
  };
  const handleLogIn = (e) => {
    e.preventDefault();
    emailAndPasswordSignIn(email, password);
  };

  return (
    <div className="d-flex justify-content-center align-items-center log-in">
      <main>
        <div>
          <img src={logo} alt="" className=" w-75" />
        </div>
        <div className="fahim d-flex justify-content-center align-items-center">
          <form className="my-3">
            <h1 className="text-success mb-3">Log In</h1>
            <input
              type="email"
              name=""
              onBlur={handleEmail}
              id=""
              placeholder="your email"
              size="30"
              required
              className="form-control"
            />
            <br /> <br />
            <input
              type="password"
              name=""
              id=""
              onBlur={handlePassword}
              placeholder="your password"
              size="30"
              required
              className="form-control"
            />
            <br />
            <br />
            <button
              type="submit"
              className="btn btn-success"
              onClick={handleLogIn}
            >
              Login
            </button>
            <div>-------------------------------or-----------------------</div>
            <button className="btn btn-success" onClick={handleGoogleLogIn}>
              <i className="fab fa-google"></i> Login with google
            </button>
            <p>
              Don't have an account ?{" "}
              <Link to="/register">Register for an account</Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
