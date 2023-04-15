import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import Logo from "../images/logo-no-bg.png";
const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src={Logo} alt="LOGO" />
            {/* <span>SIMSTOCKS</span> */}
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Portfolio
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Transaction
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Learn
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Register
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
