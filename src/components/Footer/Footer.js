import React from "react";
import logo from "../../images/logo2.png";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="row align-items-center">
        <div className="col-md-7 text-md-start text-center">
          <img src={logo} alt="" className="w-md-25 w-50" />
        </div>
        <div className="col-md-5 text-md-start text-center">
          <h1 className="text-danger">
            Connect :{" "}
            <span className="mx-2">
              <i className="fab fa-facebook"></i>
            </span>
            <span className="mx-2">
              {" "}
              <i className="fab fa-youtube"></i>
            </span>
            <span className="mx-2">
              {" "}
              <i className="fab fa-twitter"></i>
            </span>{" "}
          </h1>
        </div>
        <h3 className="text-center">
          All rights reserved &copy; by{" "}
          <span className="text-danger">Red onion</span>
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
