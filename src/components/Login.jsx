import React from "react";

function Login(props) {
  return (
    <div className="loginPage">
      <div>
        <h2 className="loginHeading">Login</h2>
        
        <form className="loginForm">
          <div>
            <label>Email</label>
            <input type="text" id="email" name="email" placeholder="Enter email" required />
          </div>
          <div>
            <label>Password</label>
            <input type="password" id="password" name="password" placeholder="Enter password" required />
          </div>
          <div>
            <button className="loginButton" type="submit">Login</button>
          </div>
        </form>
        <p className="exception">
          Don't have a registered account?{" "}
          <button onClick={props.onRegister}>Register here</button>
        </p>
        <button className="closeButton" onClick={props.onClose}>
          &times;
        </button>
      </div>
    </div>
  );
}


export default Login;
