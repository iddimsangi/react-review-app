import React from "react";
import "./Register.scss";
const Register = () => {
  return (
    <div className="Register">
      <form action="#">
        <h1>Register Form</h1>
        <div className="formcontainer">
          <hr />
          <div className="container">
            <label for="uname">
              <strong>Username</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
            />
            <label for="psw">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />
          </div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
