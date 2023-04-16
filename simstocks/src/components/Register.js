import React from "react";
import { useState } from "react";
import "../App.css";
import regImage from "../images/type-no-bg.gif";
import { NavLink, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });
  let name, value;
  const handleOnChange = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (event) => {
    event.preventDefault();

    const { name, email, phone, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
        cpassword,
      }),
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      window.alert("Invalid registration");
      console.log("Invalid registration");
    } else {
      window.alert("Registration Successfull");
      console.log("Registration Successfull");
      navigate("/signin");
    }
  };
  return (
    <div>
      <section>
        <div className="signup">
          <div className="container mt-5">
            <div className="signup-content">
              <div className="signup-form">
                <h2 className="form-title">REGISTRATION</h2>
                <form
                  method="POST"
                  className="register-form"
                  id="register-form"
                >
                  <div className="form-group">
                    <label htmlFor="name">
                      <i className="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="off"
                      placeholder="Your Name"
                      value={user.name}
                      onChange={handleOnChange}
                    />
                  </div>
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
                      value={user.email}
                      onChange={handleOnChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">
                      <i className="zmdi zmdi-phone-in-talk material-icons-name"></i>
                    </label>
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      autoComplete="off"
                      placeholder="Contact Number"
                      value={user.phone}
                      onChange={handleOnChange}
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
                      value={user.password}
                      onChange={handleOnChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cpassword">
                      <i className="zmdi zmdi-lock material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="cpassword"
                      id="cpasord"
                      autoComplete="off"
                      placeholder="Confirm Password"
                      value={user.cpassword}
                      onChange={handleOnChange}
                    />
                  </div>
                  <div className="form-group form-button">
                    <button
                      type="submit"
                      className="form-submit"
                      name="register"
                      id="register"
                      onClick={postData}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div className="reg-img">
                <img src={regImage} alt="regImage" />
                <NavLink className="navigate" to="/signin">
                  Already exixting User ?
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
