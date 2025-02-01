import React, { useState } from "react";
import "../Style/Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for form submission (e.g., API call)
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="card-space">
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Login
        </button>
        <div className="extra-links">
          <a href="#forgot-password" className="forgot-link">Forgot Password?</a>
          <a href="#register" className="register-link">Create an Account</a>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;