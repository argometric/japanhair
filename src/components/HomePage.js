import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="jumbotron">
      <h1>Homepage</h1>
      <p>Lorem ipsum</p>
      <Link to="about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
};

export default HomePage;
