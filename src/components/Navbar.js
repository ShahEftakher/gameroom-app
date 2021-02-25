import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light shadow p-3 mb-5"
      style={{ height: "80px", backgroundColor: "#ff4d4d" }}
    >
      <div className="container-fluid">
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse justify-content-start">
          <Link className="navbar-brand fs-1" to="/">
            Gameroom
          </Link>
          <Link className="nav-link active me-4" aria-current="page" href="#">
            Home
          </Link>
          <Link className="nav-link" href="#">
            Features
          </Link>
        </div>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            <Link className="nav-link me-4 fs-4" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
