import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import logo from "../../images/logo2.png";
import "./register.css";
const Register = () => {
  const { logInUsingGoogle, signUpWithEmailAndPassword } = useAuth();

  const handleGoogleLogIn = (e) => {
    e.preventDefault();
    logInUsingGoogle();
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signUpWithEmailAndPassword(email, password, name);
  };
  // handleSubmit.addEventListener("click", setNav(true));
  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };
  // const setUserName = () => {
  //   setDisplayName(name);
  // };
  console.log(name);
  return (
    <div className="d-flex justify-content-center align-items-center register">
      <main>
        <div>
          <img src={logo} alt="" className=" w-75" />
        </div>
        <div className="fahim d-flex justify-content-center align-items-center">
          <form className="my-3">
            <h1 className="text-success">Register your account</h1>
            <input
              type="text"
              placeholder="your name"
              onBlur={handleNameChange}
              required
              size="30"
              className="form-control"
            />
            <br />
            <br />
            <input
              type="email"
              name=""
              onBlur={handleEmailChange}
              id=""
              placeholder="your email"
              required
              size="30"
              className="form-control"
            />
            <br /> <br />
            <input
              type="password"
              name=""
              id=""
              onBlur={handlePasswordChange}
              placeholder="your password"
              required
              size="30"
              className="form-control"
            />
            <br />
            <br />
            <button
              className="btn btn-success"
              type="submit"
              onClick={handleSubmit}
            >
              Register
            </button>
            <div>-------------------------------or-----------------------</div>
            <button className="btn btn-success" onClick={handleGoogleLogIn}>
              <i className="fab fa-google"></i> Register with google
            </button>
            <p>
              Already have an acount ?<Link to="/login"> Login</Link>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Register;
