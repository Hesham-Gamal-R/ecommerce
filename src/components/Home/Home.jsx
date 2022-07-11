import React from "react";
import Products from "../Products/Products";
import "./Home.css";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-white border-0">
        <img
          src="https://media.istockphoto.com/vectors/happy-family-with-shopping-big-discount-purchasing-of-goods-vector-id607298866?k=6&m=607298866&s=612x612&w=0&h=2rXsk6fkJbpd8kVria6vw5wBXtRk6d27cJN39Beig8w="
          className="card-img"
          alt="background"
        />
      </div>
      <div className="container d-flex flex-column justify-content-center">
        <h5 className="card-title-main display-3 fw-bolder fs-1 mb-0 ">
          NEW SEASON ARRIVALS
        </h5>
        <p className="card-text-main lead fs-2">CHECK OUT ALL THE TRENDS</p>
      </div>
      <Products />
    </div>
  );
};

export default Home;
