import React from "react";
import Food from "../Food/Food";
import Banner from "./Banner/Banner";
import "./Home.css";

const Home = () => {
  return (
    <div className="container my-5">
      <Banner></Banner>
      <Food></Food>
    </div>
  );
};

export default Home;
