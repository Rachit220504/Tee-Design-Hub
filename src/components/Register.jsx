import React from "react";

function Register(props) {
  return (
    <div className="registerPage">
      <div>
        <h2 className="registerHeading">Register</h2>
        <form className="registerForm">
          <div>
            <label>Username</label>
            <input type="text" id="username" name="username" placeholder="Enter your username" required />
          </div>
          <div>
            <label>Email</label>
            <input type="text" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div>
            <label>Password</label>
            <input type="password" id="password" name="password" placeholder="Enter password" required />
          </div>
          <div>
            <label>Confirm Password</label>
            <input type="password" id="ConfirmPassword" name="confirmPassword" placeholder="Confirm your password" required />
          </div>
          <div>
            <button className="registerButton" type="submit">Register</button>
          </div>
        </form>
        <p className="exception">
          Already have an account?{" "}
          <button onClick={props.onLogin}>Login here</button>
        </p>
        <button className="closeButton" onClick={props.onClose}>
          &times;
        </button>
      </div>
    </div>
  );
}

export default Register;
