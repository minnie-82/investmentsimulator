import React from "react";
import { NavLink } from "react-router-dom";
import logImage from "../images/login.gif";

const Login = () => {
  return (
    <div>
      <section>
        <div className="signup">
          <div className="container mt-5">
            <div className="signup-content">
              <div className="reg-img">
                <img src={logImage} alt="regImage" />
              </div>
              <div className="signup-form">
                <h2 className="form-title">LOG IN</h2>
                <form className="register-form" id="register-form">
                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="zmdi zmdi-email material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      autoComplete="off"
                      placeholder="Your Email"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">
                      <i className="zmdi zmdi-lock material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="password"
                      id="password"
                      autoComplete="off"
                      placeholder="Password"
                    />
                  </div>

                  <div className="form-group form-button">
                    <button
                      type="submit"
                      className="form-submit"
                      name="register"
                      id="register"
                    >
                      Log In
                    </button>
                  </div>
                  <NavLink className="navigate" to="/signup">
                    Create an account
                  </NavLink>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
