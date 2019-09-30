import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "orange" };
  return (
    <nav className="navbar navbar-expand-lg bg-dark ">
      <button className="navbar-toggler" type="button" data-toggle="collapse">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-md-center"
        id="navbarsExample08"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeStyle={activeStyle}
              exact
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeStyle={activeStyle}
              to="/clients"
            >
              Clients
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <NavLink className="nav-link" activeStyle={activeStyle} to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
