import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-light shadow p-3 mb-5"
      style={{ height: "80px", backgroundColor: "#ff4d4d" }}
    >
      <div class="container-fluid">
        <Link class="navbar-brand fs-1" to="/">
          Gameroom
        </Link>
        {/* <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> */}
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav">
            <a class="nav-link active me-4" aria-current="page" href="#">
              Home
            </a>
            <a class="nav-link" href="#">
              Features
            </a>
            <Link class="nav-link me-4 fs-4" to="/login">
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
